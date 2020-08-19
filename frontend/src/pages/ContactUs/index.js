import React, { useEffect, useState } from "react";

import './styles.css';

import { RiArrowDownSLine, RiCloseLine } from 'react-icons/ri'
import { BsPersonFill, BsBriefcaseFill } from 'react-icons/bs'
import { AiFillMessage, AiFillFileText } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

import Cabecalho from '../../Tags/Cabecalho.js'
import Rodape from '../../Tags/Rodape.js'

import api from '../../services/api.js'


export default function ContactUs () {

    /* ESTADOS */

    /* Estados Faqs */

    const [faqs, setFaqs] = useState([]);
    const [questionNumber, setQuestionNumber] = useState(null);

    /* Estados Forms */

    const [inputs, updateInputs] = useState({
        'name' : '',
        'mail' : '',
        'motivation' : '',
        'entity' : '',
        'message' : ''
    });
    const [errors, updateErrors] = useState({
        'name' : '',
        'mail' : '',
        'motivation' : '',
        'message' : ''
    });
    const [isValid, setValid] = useState(false);
    const [btnClass, setBtnClass] = useState('static')

    /** INTEGRAÇÕES **/

    useEffect (() => {

        /** Integração Faqs **/

        api.get('/faq').then(response => {
            setFaqs(response.data);
        });
    }, [])

    useEffect (() => {

        /** Integração forms **/

        if (isValid) {

            const toBackend = {
                "contactName" : inputs.name,
                "mail" : inputs.mail,
                "motivation" : inputs.motivation,
                "entity" : inputs.entity,
                "message" : inputs.message,
            };
            api.post('/sendContact', toBackend);
    
            updateInputs({
                'name' : '',
                'mail' : '',
                'motivation' : '',
                'entity' : '',
                'message' : ''
            });

            setValid(false)
        };
    }, [isValid]);

    /*** FUNÇÕES ***/

    /*** Funções Faqs ***/

    function showAnswer(index) {
        setQuestionNumber(questionNumber === index ? null : index);
    }    

    /***  Funções Forms ***/

    function handleSubmit(e) {
        e.preventDefault()

        for (const key of Object.keys(errors)) {
            if (!inputs[key]) {
                errors[key] = 'Campo obrigatório'
            }
            else {
                errors[key] = ''
            }
        }

        if (inputs['mail'] && !/\S+@\S+\.\S+/.test(inputs['mail'])) {
            errors['mail'] = 'E-mail inválido'
        }

        updateErrors({...errors})

        for (const error of Object.values(errors)) {
            if (error) {
                animateBtn('failure')
                return
            }
        }

        setValid(true)
        animateBtn('success')
    }

    function animateBtn(outcome) {

        if (btnClass.includes('moving')) {
            return
        }
        
        if (outcome === 'success') {
            setBtnClass('moving round');   

            setTimeout(() => {
                setBtnClass('moving round loading')
            }, 125);
            setTimeout(() => {
                setBtnClass('moving success pulsate')
            }, 1500);
            setTimeout(() => {
                setBtnClass('static')
            }, 3300);
        }
        else {
            setBtnClass('moving round fail pulsate'); 

            setTimeout(() => {
                setBtnClass('static');
            }, 1500);
        }
    }

    const updateField = e => {
        updateInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    /************/
    /*          */
    /*  Página  */
    /*          */
    /************/

    return (
        <div class='container'> 
            <Cabecalho />

            <div class="faq">
                <span class="title">FAQs</span>
                {faqs.map(({question, answer}, index) => (
                    <div class='qtn_ans_ctr'>
                        <div class='question_ctr'>
                            <p class='question' onClick={() => showAnswer(index)}>{question}</p>
                            <button class="toggler" onClick={() => showAnswer(index)}>
                                {questionNumber === index ? <RiCloseLine class='toggler_icon' /> : <RiArrowDownSLine class='toggler_icon' />}
                            </button>
                        </div>
                        <p class={`answer ${questionNumber === index ? '' : 'hide'}`}>{answer}</p>
                    </div>
                ))}
            </div>

            <div class='forms'>    
                <span class='title'>Contato</span>
                <form>
                    <div class='field_ctr'>
                        <div class='icon_bkgd'>
                            <BsPersonFill class='icon' />
                        </div>
                        <input
                        name='name'
                        class={`field ${errors['name'] ? 'error' : ''}`}
                        value={inputs.name}
                        onChange={updateField}
                        placeholder='Nome *' />
                        {errors['name'] && <div class='txt_ctr'>
                            <p class='txt_error'>{errors['name']}</p>
                        </div>}
                    </div>
                    <div class='field_ctr'>
                        <div class='icon_bkgd'>
                            <MdEmail class='icon' />
                        </div>
                        <input
                        name='mail'
                        class={`field ${errors['mail'] ? 'error' : ''}`}
                        value={inputs.mail}
                        onChange={updateField}
                        placeholder='E-mail *' />
                        {errors['mail'] && <div class='txt_ctr'>
                            <p class='txt_error'>{errors['mail']}</p>
                        </div>}             
                    </div>
                    <div class='field_ctr'>
                        <div class='icon_bkgd'>
                            <AiFillMessage class='icon' />
                        </div>
                        <input
                        name='motivation'
                        class={`field ${errors['motivation'] ? 'error' : ''}`}
                        value={inputs.motivation}
                        onChange={updateField}
                        placeholder='Assunto *' />
                        {errors['motivation'] && <div class='txt_ctr'>
                            <p class='txt_error'>{errors['motivation']}</p>
                        </div>}
                    </div>
                    <div class='field_ctr'>
                        <div class='icon_bkgd'>
                            <BsBriefcaseFill class='icon' />
                        </div>
                        <input
                        name='entity'
                        class='field'
                        value={inputs.entity}
                        onChange={updateField}
                        placeholder='Grupo/Empresa' />
                    </div>
                    <div class='field_ctr'>
                        <div class='icon_bkgd'>
                            <AiFillFileText class='icon' />
                        </div>
                        <textarea
                        name='message'
                        class={`msg_field ${errors['message'] ? 'error' : ''}`}
                        value={inputs.message}
                        onChange={updateField}
                        placeholder='Escreva sua mensagem *' />                        
                        {errors['message'] && <div class='txt_ctr'>
                            <p class='txt_error'>{errors['message']}</p>
                        </div>}                       
                        <div class='submit_ctr'>
                            <button class={btnClass} onClick={handleSubmit} />
                        </div>
                    </div>
                </form>
            </div>

            <Rodape />
        </div>
    );
}