import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import logo from '../../assets/logo.png';
import './styles.css';
import {FiPlus} from 'react-icons/fi'
import Cabecalho from '../../Tags/Cabecalho.js'
import Rodape from '../../Tags/Rodape.js'

import api from '../../services/api.js'

export default function Events () {
    const [eventosNaoRealizados, setEventosNaoRealizados] = useState([]);
    const [eventosRealizados, setEventosRealizados] = useState([]);

    useEffect(() => {
        api.get(`events?realizado=nao`).then(response => {
            setEventosNaoRealizados(response.data);
        });
        api.get(`events?realizado=sim`).then(response => {
            setEventosRealizados(response.data);
        });
    }, []);

    async function handleMoreEvents() {
    }

    return (

        <div class='container'>
            <Cabecalho />
            <div class='titulo_eventos'>Nossos Eventos</div>
            <p class='description'>
                O Grupo Turing realiza eventos sendo alguns exclusivos<br />
                à comunidade uspiana e outros abertos ao público externo.<br />
                Veja alguns de nossos próximos eventos e eventos que já realizamos.<br />
            </p>
            <div class='subtitulos'>Próximos Eventos</div>
            <ul class='ul_events'>
                {eventosNaoRealizados.map(event => (
                    <li class='li_events' key={ event.eventId }>
                        <a href={event.link}>
                            <img class='event-img' src={event.img}></img>
                        </a>
                    </li>
                ))}
            </ul>
            <div class='subtitulos'>Eventos Realizados</div>
            <ul class='ul_events'>
                {eventosRealizados.map(event => (
                    <li class='li_events' key={ event.eventId }>
                        <a href={event.link}>
                            <img class='event-img' src={event.img}></img>
                        </a>
                    </li>
                ))}
            </ul>
            <div class="wrapper">
                <button onClick={handleMoreEvents} class='more_events_box'>
                    Mais Eventos
                </button>
            </div>
            <Rodape />
        </div>
    );
}