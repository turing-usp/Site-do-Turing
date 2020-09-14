import React, { useEffect, useState } from 'react';

import { RiArrowDownSLine, RiCloseLine } from 'react-icons/ri'
import { BsPersonFill, BsBriefcaseFill } from 'react-icons/bs'
import { AiFillMessage, AiFillFileText } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

import Cabecalho from '../../Tags/Cabecalho.js'
import Rodape from '../../Tags/Rodape.js'
import api from '../../services/api.js'
import './styles.css';


export default function ContactUs () {

    /***********/
    /* ESTADOS */
    /***********/

    /*** FAQ ***/

    const [faqs, setFaqs] = useState([]);
    const [questionNumber, setQuestionNumber] = useState(null);

    /*** Forms ***/

    const [inputs, updateInputs] = useState({
        'name' : '',
        'email' : '',
        'motivation' : '',
        'entity' : '',
        'message' : ''
    });
    const [errors, updateErrors] = useState({
        'name' : '',
        'email' : '',
        'motivation' : '',
        'message' : ''
    });
    const [isValid, setValid] = useState(false);
    const [btnClass, setBtnClass] = useState('form_btn_static')

    /***************/
    /* Integrações */
    /***************/

    /*** FAQ ***/

    useEffect (() => {
        api.get('/faq').then(response => {
            setFaqs(response.data);
        });
    }, [])

    /*** Forms ***/

    useEffect (() => {
        if (isValid) {

            const toBackend = {
                'contactName' : inputs.name,
                'email' : inputs.email,
                'motivation' : inputs.motivation,
                'entity' : inputs.entity,
                'message' : inputs.message,
            };
            api.post('/sendContact', toBackend);

            updateInputs({
                'name' : '',
                'email' : '',
                'motivation' : '',
                'entity' : '',
                'message' : ''
            });

            setValid(false)
        };
    }, [isValid]);

    /***********/
    /* Funções */
    /***********/

    /*** FAQ ***/

    function showAnswer(index) {
        setQuestionNumber(questionNumber === index ? null : index);
    }    

    /*** Forms ***/

    function handleSubmit(e) {
        e.preventDefault()

        for (const key of Object.keys(errors)) {
            if (!inputs[key]) {
                errors[key] = 'Campo obrigatório'
            } else {
                errors[key] = ''
            }
        }

        if (inputs['email'] && !/\S+@\S+\.\S+/.test(inputs['email'])) {
            errors['email'] = 'E-mail inválido'
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
        if (btnClass.includes('form_btn_moving')) {
            return
        }
        
        if (outcome === 'success') {
            setBtnClass('form_btn_moving form_btn_round');   

            setTimeout(() => {
                setBtnClass('form_btn_moving form_btn_round form_btn_loading')
            }, 125);
            setTimeout(() => {
                setBtnClass('form_btn_moving form_btn_success form_btn_pulsate')
            }, 1500);
            setTimeout(() => {
                setBtnClass('form_btn_static')
            }, 3300);
        } else {
            setBtnClass('form_btn_moving form_btn_round form_btn_fail form_btn_pulsate'); 

            setTimeout(() => {
                setBtnClass('form_btn_static');
            }, 1500);
        }
    }

    const updateField = e => {
        updateInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    /**********/
    /* Página */
    /**********/

    return (
        <div class='container'> 
            <Cabecalho />
            <div class='faq'>
                <span class='title'>FAQs</span>
                {faqs.map(({question, answer}, index) => (
                    <div class='qtn_ans_ctr'>
                        <div class='question_ctr'>
                            <p class='text question' onClick={() => showAnswer(index)}>{question}</p>
                            <button class='qtn_toggler' onClick={() => showAnswer(index)}>
                                {questionNumber === index ? <RiCloseLine class='qtn_toggler_icon' /> : <RiArrowDownSLine class='qtn_toggler_icon' />}
                            </button>
                        </div>
                        <p class={`text answear${questionNumber === index ? '' : '_hide'}`}>{answer}</p>
                    </div>
                ))}
            </div>
            <div class='forms'>    
                <span class='title'>Contato</span>
                <form>
                    <div class='form_field_ctr'>
                        <div class='form_icon_bkgd'>
                            <BsPersonFill class='form_icon' />
                        </div>
                        <input
                        name='name'
                        class={`text form_field ${errors['name'] ? 'form_field_error' : ''}`}
                        value={inputs.name}
                        onChange={updateField}
                        placeholder='Nome *' />
                        {errors['name'] && <div class='form_error_ctr'>
                            <p class='form_txt_error'>{errors['name']}</p>
                        </div>}
                    </div>
                    <div class='form_field_ctr'>
                        <div class='form_icon_bkgd'>
                            <MdEmail class='form_icon' />
                        </div>
                        <input
                        name='email'
                        class={`text form_field ${errors['email'] ? 'form_field_error' : ''}`}
                        value={inputs.email}
                        onChange={updateField}
                        placeholder='E-mail *' />
                        {errors['email'] && <div class='form_error_ctr'>
                            <p class='form_txt_error'>{errors['email']}</p>
                        </div>}             
                    </div>
                    <div class='form_field_ctr'>
                        <div class='form_icon_bkgd'>
                            <AiFillMessage class='form_icon' />
                        </div>
                        <input
                        name='motivation'
                        class={`text form_field ${errors['motivation'] ? 'form_field_error' : ''}`}
                        value={inputs.motivation}
                        onChange={updateField}
                        placeholder='Assunto *' />
                        {errors['motivation'] && <div class='form_error_ctr'>
                            <p class='form_txt_error'>{errors['motivation']}</p>
                        </div>}
                    </div>
                    <div class='form_field_ctr'>
                        <div class='form_icon_bkgd'>
                            <BsBriefcaseFill class='form_icon' />
                        </div>
                        <input
                        name='entity'
                        class='text form_field'
                        value={inputs.entity}
                        onChange={updateField}
                        placeholder='Grupo/Empresa' />
                    </div>
                    <div class='form_field_ctr'>
                        <div class='form_icon_bkgd'>
                            <AiFillFileText class='form_icon' />
                        </div>
                        <textarea
                        name='message'
                        class={`text form_msg_field ${errors['message'] ? 'form_field_error' : ''}`}
                        value={inputs.message}
                        onChange={updateField}
                        placeholder='Escreva sua mensagem *' />                        
                        {errors['message'] && <div class='form_error_ctr'>
                            <p class='form_txt_error'>{errors['message']}</p>
                        </div>}                       
                        <div class='form_btn_ctr'>
                            <button class={btnClass} onClick={handleSubmit} />
                        </div>
                    </div>
                </form>
            </div>
            <Rodape />
        </div>
    );
}