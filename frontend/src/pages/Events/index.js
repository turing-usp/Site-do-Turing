import React, { useEffect, useState } from "react";

import Cabecalho from '../../Tags/Cabecalho.js'
import Rodape from '../../Tags/Rodape.js'
import api from '../../services/api.js'
import './styles.css';


export default function Events () {

    /***********/
    /* Estados */
    /***********/

    const [nextEvents, setNextEvents] = useState([]);
    const [doneEvents, setDoneEvents] = useState([]);
    const [showAll, setShowAll] = useState(false);

    /***********/
    /* Funções */
    /***********/

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
        } else {
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

    /***********/
    /* Página */
    /***********/

    return (
        <div class='container'>
            <Cabecalho />
            <h1 class='title'>Nossos Eventos</h1>
            <div class='events_description'>
                <p class='text'>
                    O Grupo Turing realiza eventos sendo alguns exclusivos à comunidade 
                    uspiana e outros abertos ao público externo. Veja alguns de nossos 
                    próximos eventos e eventos que já realizamos.
                </p>
            </div>
            <h2 class='subtitle'>Próximos Eventos</h2>
            {nextEvents[0] ? (
                <div class='events_grid'>
                    {nextEvents.map(event => (
                        <a target='_blank' class='event event_size_limiter' href={event.link} key={event.eventId} rel='noopener noreferrer'>
                            <div class='event_img_ctr'>
                                <img class='event_img' src={event.img} alt='event_cover' />
                            </div>
                            <div class='event_name_ctr'>
                                <p class='text event_name'>{event.name}</p>
                            </div>
                        </a>                    
                    ))}
                </div>
            ) : (
                <p class='text'>Não há eventos sendo preparados no momento.</p>
            )}
            <h2 class='subtitle'>Eventos Realizados</h2>
            <div class='events_grid'>
                {limitEvents().map(event => (
                    <a target='_blank' class='event' href={event.link} key={event.eventId} rel='noopener noreferrer'>
                        <div class='event_img_ctr'>
                            <img class='event_img' src={event.img} alt='event_cover' />
                        </div>
                        <div class='event_name_ctr'>
                            <p class='text event_name'>{event.name}</p>
                        </div>
                    </a>
                ))}
            </div>
            <button class={`text btn_all_events ${showAll ? 'all_events_shown' : 'all_events_hidden'}`} onClick={handleClick} />
            <Rodape />
        </div>
    );
}