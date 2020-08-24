import React, { useEffect, useState } from "react";

import './styles.css';

import Cabecalho from '../../Tags/Cabecalho.js'
import Rodape from '../../Tags/Rodape.js'

import api from '../../services/api.js'

export default function Events () {

    const [nextEvents, setNextEvents] = useState([]);
    const [doneEvents, setDoneEvents] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        api.get(`events?realizado=nao`).then(response => {
            setNextEvents(response.data);
        });

        api.get(`events?realizado=sim`).then(response => {
            setDoneEvents(response.data);
        });
    }, []);  

    function limitEvents() {

        if (showAll) {
            return doneEvents
        }
        else {
            return doneEvents.slice(0,3)
        }
    }

    function handleClick() {

        const y = window.scrollY

        setShowAll(!showAll);
        setTimeout(() => {
            window.scrollTo(0, y)
        }, 1)
    }
    

    return (

        <div class='container'>
            <Cabecalho />
            <span class='titles'>Nossos Eventos</span>
            <p class='text'>
                O Grupo Turing realiza eventos sendo alguns exclusivos<br />
                à comunidade uspiana e outros abertos ao público externo.<br />
                Veja alguns de nossos próximos eventos e eventos que já realizamos.<br />
            </p>
            <span class='subtitle'>Próximos Eventos</span>            
            {nextEvents[0] ? (
                nextEvents.map(event => (
                    <div class='next_events'>
                        <a target='_blank' class='event' href={event.link} key={event.eventId} rel='noopener noreferrer'>
                            <div class='img_ctr'>
                                <img class='event_img next' src={event.img} />
                            </div>
                            <div class='name_ctr'>
                                <p class='event_name'>{event.name}</p>
                            </div>
                        </a>
                    </div>
                ))
            ) : (
                <p class='text'>Não há eventos sendo preparados no momento.</p>
            )}
            <span class='subtitle'>Eventos Realizados</span>
            <div class='done_events'>
                {limitEvents().map(event => (
                    <a target='_blank' class='event' href={event.link} key={event.eventId} rel='noopener noreferrer'>
                        <div class='img_ctr'>
                            <img class='event_img' src={event.img} />
                        </div>
                        <div class='name_ctr'>
                            <p class='event_name'>{event.name}</p>
                        </div>
                    </a>
                ))}
            </div>
            <div class='toggler_ctr'>
                <button class={`toggler ${showAll ? 'to_hide' : 'to_show'}`} onClick={handleClick} />
            </div>
            <Rodape />
        </div>
    );
}