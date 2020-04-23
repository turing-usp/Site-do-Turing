import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import logo from '../../assets/logo.png';
import './styles.css';
import {FiPlus} from 'react-icons/fi'
import Cabecalho from '../../Tags/Cabecalho.js'
import Rodape from '../../Tags/Rodape.js'

export default function Events () {
    return (

        <div class='container'>
            <Cabecalho />
            <h1>Nossos Eventos</h1>
            <p class='description'>
                Sasuke Uchiha (うちはサスケ, Uchiha Sasuke) é um dos últimos membros sobreviventes do clã Uchiha de Konohagakure, além de ser a reencarnação atual de Indra. Ele se tornou um shinobi para que pudesse algum dia ficar forte o suficiente para se vingar contra o seu irmão mais velho, Itachi, que tinha massacrado todo o seu clã. Inicialmente, um membro do Time Kakashi de Konoha...
            </p>
            <h1>Próximos Eventos</h1>
            <h1>Eventos Realizados</h1>
            <div class="wrapper">
                <button class='more_events_box'>
                    Mais Eventos
                </button>
            </div>
            <Rodape />
        </div>
    );
}