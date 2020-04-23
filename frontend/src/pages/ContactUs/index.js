import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import logo from '../../assets/logo.png';
import './styles.css';
import {FiPlus} from 'react-icons/fi'
import Cabecalho from '../../Tags/Cabecalho.js'
import Rodape from '../../Tags/Rodape.js'

export default function ContactUs () {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [grupo, setGrupo] = useState('')
    const [assunto, setAssunto] = useState('')
    const [mensagem, setMensagem] = useState('')

    function onSubmit(e) {
        e.preventDefault()

        const data = {
            nome,
            email,
            grupo,
            assunto,
            mensagem,
        };        

        console.log(data); /** Alterar depois */

        setNome('')
        setEmail('')
        setGrupo('')
        setAssunto('')
        setMensagem('')
    }

    const [numeroFaq, setNumero] = useState(2);

    var i;

    const [show1, setExpand1] = useState(false);
    const [show2, setExpand2] = useState(false);

    return (
        <div>
            <Cabecalho />    

            <form class='formulario'>
                <input
                    class='entrada'
                    value={nome}
                    onChange={e => setNome(e.target.value)} 
                    placeholder='Nome'
                />
                <br />
                <input
                    class = 'entrada'
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    placeholder='E-mail'
                />
                <br />
                <input
                    class = 'entrada'
                    value={grupo} 
                    onChange={e => setGrupo(e.target.value)} 
                    placeholder='Grupo/Empresa'
                />
                <br />
                <input
                    class='entrada'
                    value={assunto} 
                    onChange={e => setAssunto(e.target.value)} 
                    placeholder='Assunto'
                />
                <br />
                <textarea
                    class='mensagem'
                    value={mensagem} 
                    onChange={e => setMensagem(e.target.value)} 
                    placeholder='Escreva sua mensagem'
                />
                <button class='enviar' onClick={onSubmit}><span>Enviar</span></button>
            </form>

            <div class="faq_and_answer">
                <span class="title_faqs">FAQs</span>
                <div class= "faq_box">
                <span class= "question">O Sibuya está solteiro?</span>
                    <button class = "btnAnswer" onClick={()=>{setExpand1(!show1)}}>
                    <FiPlus size={30} color="#F2994A"/>
                    </button>
                </div>
                <div>
                    {
                        show1? <div class="answer"><h1>Sibuya está solteiro não, minha filha</h1></div> : null
                    }
                </div>
                <hr class="blue_line"/>
            </div>

            <div class="faq_and_answer">
                <div class= "faq_box">
                <span class= "question">Quanto custa essa escola?</span>
                    <button class = "btnAnswer" onClick={()=>{setExpand2(!show2)}}>
                    <FiPlus size={30} color="#F2994A"/>
                    </button>
                </div>
                <div>
                    {
                        show2? <div class="answer"><h1>2000 reais o segundo de aula</h1></div> : null
                    }
                </div>
                <hr class="blue_line"/>
            </div>
            <Rodape />
        </div>
    );
}