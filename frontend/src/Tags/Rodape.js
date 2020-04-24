import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom"
import logo2 from '../assets/logo2.png';
import insta from '../assets/insta.png';
import fb from '../assets/fb.png';
import yt from '../assets/yt.png';
import medium from '../assets/medium_icon.png';
import github from '../assets/github_icon.png';
import location from '../assets/add_location_24px.svg'
import linkedin from '../assets/in.png';

function Rodape() {
    return (
        <div class= "rodape">
            <Link to='/'><img class = "rodape_logo2" src={logo2} alt="Grupo Turing" /></Link>
            <div class='rodape_social'>
                    <p class='rodape_social_box'>Siga-nos nas redes sociais</p>
                <br/>
                <a target='_blank'href='https://www.instagram.com/grupoturing.usp/'><img src={insta} class="link_rodape"/></a>
                <a target='_blank'href='https://pt-br.facebook.com/grupoturing.poliusp/'><img src={fb} class="link_rodape"/></a>
                <a target='_blank'href='https://www.youtube.com/channel/UCIZSLh8_ST5np3k60qWOiAA'><img src={yt} class="link_rodape"/></a>
                <a target='_blank'href='https://medium.com/turing-talks'><img src={medium} class="link_rodape"/></a>
                <a target='_blank'href='https://github.com/GrupoTuringCodes'><img src={github} class="link_rodape"/></a>
                <a target='_blank'href='https://www.linkedin.com/company/grupo-turing/?originalSubdomain=br'><img src={linkedin} class="link_rodape"/></a>
            </div>
            <div class='location'>
                <a target='_blank' class='location'href='https://goo.gl/maps/Cw8RH7vbBo6DiuZTA'><p><img src={location} />InovaUSP</p>
                <p class='location_text'>Av. Prof. Lúcio Martins Rodrigues, 370<br/>
                Butantã <br/>
                São Paulo - SP,<br />
                05508-020</p></a>
            </div>
        </div>
    );
}

export default Rodape;