import React, { useEffect, useState } from "react";
import ReactDOM, { render } from 'react-dom';
import logo from '../../assets/logo.png';
import './styles.css';
import {FiPlus} from 'react-icons/fi'
import Cabecalho from '../../Tags/Cabecalho.js'
import Rodape from '../../Tags/Rodape.js'

import api from '../../services/api.js'

export default function Events () {
    const [eventosNaoRealizados, setEventosNaoRealizados] = useState([]);
    const [eventosRealizados, setEventosRealizados] = useState([]);
    const [showMoreEvents, setShowMoreEvent] = useState(false);
    const [showButton, setShowButton] = useState(true);


    useEffect(() => {
        api.get(`events?realizado=nao`).then(response => {
            setEventosNaoRealizados(response.data);
        });

        if(showMoreEvents){
            api.get(`events?realizado=sim`).then(response => {
                setEventosRealizados(response.data);
            });
        }

        else {
            api.get(`events?realizado=sim&limit=3`).then(response => {
                setEventosRealizados(response.data);
            });
        }

    }, [showMoreEvents]);


    async function handleMoreEvents() {
        setShowButton(false);
        setShowMoreEvent(true);
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
            <div class='ul_events'>
                {eventosNaoRealizados.map(event => (
                    <div class='li_events' key={ event.eventId }>
                        <a target='_blank' href={event.link}>
                            <img class='event-img' src={event.img}></img>
                        </a>
                    </div>
                ))}
            </div>
            { (eventosNaoRealizados[0] == null) && <p class='description'>Não há eventos sendo preparados no momento.</p>}
            <div class='subtitulos'>Eventos Realizados</div>
            <div class='ul_events'>
                {eventosRealizados.map(event => (
                    <div class='li_events' key={ event.eventId }>
                        <a target='_blank' href={event.link}>
                            <img class='event-img' src={event.img}></img>
                        </a>
                    </div>
                ))}
            </div>
            <div class="wrapper">
                {showButton && <button class='more_events_box' onClick={handleMoreEvents}>
                    Mais Eventos
                </button>}
            </div>
            <Rodape />
        </div>
    );
}