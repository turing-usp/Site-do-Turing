import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import logo from '../../assets/logo.png';
import './styles.css';
import {FiPlus} from 'react-icons/fi'
import arvhab from "../../assets/arvore_de_habilidades.png";
import GitHub_B from '../../assets/GitHub_B.png'
import GitHub_O from '../../assets/GitHub_O.png'
import CV from '../../assets/CV.png'
import CV_hover from '../../assets/CV_hover.png'
import NLP from '../../assets/NLP.png'
import NLP_hover from '../../assets/NLP_hover.png'
import DS from '../../assets/DS.png'
import DS_hover from '../../assets/DS_hover.png'
import QT from '../../assets/QT.png'
import QT_hover from '../../assets/QT_hover.png'
import RL from '../../assets/RL.png'
import RL_hover from '../../assets/RL_hover.png'
import Cabecalho from '../../Tags/Cabecalho.js'
import Rodape from '../../Tags/Rodape.js'

import api from '../../services/api.js'

export default function LearnAI () {


    const [posts, setPosts] = useState([]);

    useEffect(() => {
        api.get('/listMediumPosts').then(response => {
            setPosts(response.data.items);
        });
    }, []);

    const [showDesc, setShowDesc] = useState(true)
    const [showCV, setShowCV] = useState(false)
    const [showNLP, setShowNLP] = useState(false)
    const [showDS, setShowDS] = useState(false)
    const [showQT, setShowQT] = useState(false)
    const [showRL, setShowRL] = useState(false)

    return (
        <div class='container'>
            <Cabecalho />
            
            <div class='areas_de_foco'>
                {showDesc && <span class="titulo_areas">Áreas de Foco</span>}
                {showCV && <span class="titulo_areas">Computer Vision</span>}
                {showNLP && <span class="titulo_areas">Natural Language Processing</span>}
                {showDS && <span class="titulo_areas">Datascience</span>}
                {showQT && <span class="titulo_areas">Quantitative Finance</span>}
                {showRL  && <span class="titulo_areas">Reinforcement Learning</span>}
                {showDesc && <div class='caixa_area'>
                    <div class='texto_area'>
                        O Naruto pode ser um pouco duro às vezes, talvez você não saiba disso, mas o Naruto também cresceu 
                        sem pai. Na verdade ele nunca conheceu nenhum de seus pais, e nunca teve nenhum amigo em nossa aldeia.
                        Mesmo assim eu nunca vi ele chorar, ficar zangado ou se dar por vencido, ele está sempre disposto a 
                        melhorar, ele quer ser respeitado, é o sonho dele e o Naruto daria a vida por isso sem hesitar.
                    </div>
                </div>}
                {showCV && <div class='caixa_area'>
                    <div class='texto_area'>
                        Sasuke Uchiha (うちはサスケ, Uchiha Sasuke) é um dos últimos membros sobreviventes do clã Uchiha 
                        de Konohagakure, além de ser a reencarnação atual de Indra. Ele se tornou um shinobi para que 
                        pudesse algum dia ficar forte o suficiente para se vingar contra o seu irmão mais velho, Itachi.
                    </div>
  
                    <a class='link' href='https://stackoverflow.com/admin.php' target="_blank">
                        <img class='github_icon' src={GitHub_O} />
                    </a>
                </div>}
                {showNLP && <div class='caixa_area'>
                    <div class='texto_area'>
                        Hinata Uzumaki (うずまきヒナタ, Uzumaki Hinata, batizada Hyūga (日向)) é a maior personagem de assistência 
                        da série. Ela é um membro dos clãs Hyūga e Uzumaki de Konohagakure. Tendo um temperamento humilde, a falta 
                        de auto-confiança de Hinata era refletida em suas habilidades.
                    </div>
                    <a class='link' href='https://stackoverflow.com/admin.php' target="_blank">
                        <img class='github_icon' src={GitHub_O} />
                    </a>
                </div>}
                {showDS && <div class='caixa_area'>
                    <div class='texto_area'>
                        Sakura Uchiha (うちはサクラ, Uchiha Sakura; batizada Haruno (春野) inicialmente) é uma kunoichi 
                        de nível jōnin do clã Uchiha, após se casar, de Konohagakure. Ela é designada como um membro 
                        do Time Kakashi, mas rapidamente encontra-se mal preparada para os deveres de um ninja. 
                    </div>
                    <a class='link' href='https://stackoverflow.com/admin.php' target="_blank">
                        <img class='github_icon' src={GitHub_O} />
                    </a>
                </div>}
                {showQT && <div class='caixa_area'>
                    <div class='texto_area'>
                        Orochimaru (大蛇丸, Orochimaru) é um dos Lendários Sannin, junto com Tsunade e Jiraiya, de Konohagakure. 
                        Com sua ambição de vida sendo aprender todos os segredos do mundo, Orochimaru buscou a imortalidade para 
                        que ele pudesse viver todas as vidas necessárias para realizar sua tarefa.
                    </div>
                    <a class='link' href='https://stackoverflow.com/admin.php' target="_blank">
                        <img class='github_icon' src={GitHub_B} />
                    </a>
                </div>}
                {showRL && <div class='caixa_area'>
                    <div class='texto_area'>
                        Tsunade (綱手, Tsunade) é uma dos Sannin Lendários de Konohagakure. Embora seja considerada a kunoichi mais 
                        poderosa do mundo e a maior ninja médica, Tsunade abandonou a vida de shinobi por muitos anos em busca 
                        de outros objetivos.
                    </div>
                    <a class='link' href='https://stackoverflow.com/admin.php' target="_blank">
                        <img class='github_icon' src={GitHub_B} />
                    </a>
                </div>}
                
                <div class='hexagonos_area'>
                    <div class='hexagonos_linha1'>                
                        <div class="hexagon">
                            <div class="hexagon-in1">
                                <div class="hexagon-in2">
                                    <img class='img_area' src={CV} />
                                    <img class='img_area_overlay' src={CV_hover} onClick={
                                        () => {
                                            setShowDesc(showCV)
                                            setShowCV(!showCV);
                                            setShowNLP(false);
                                            setShowDS(false);
                                            setShowQT(false);
                                            setShowRL(false);                                            
                                            }
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="hexagon">
                            <div class="hexagon-in1">
                                <div class="hexagon-in2">
                                    <img class='img_area' src={NLP} />
                                    <img class='img_area_overlay' src={NLP_hover} onClick={
                                        () => {
                                            setShowDesc(showNLP)
                                            setShowCV(false);
                                            setShowNLP(!showNLP);
                                            setShowDS(false);
                                            setShowQT(false);
                                            setShowRL(false);                                            
                                            }
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="hexagon">
                            <div class="hexagon-in1">
                                <div class="hexagon-in2">
                                    <img class='img_area' src={DS} />
                                    <img class='img_area_overlay' src={DS_hover} onClick={
                                        () => {
                                            setShowDesc(showDS)
                                            setShowCV(false);
                                            setShowNLP(false);
                                            setShowDS(!showDS);
                                            setShowQT(false);
                                            setShowRL(false);                                            
                                            }
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='hexagonos_linha2'>
                        <div class="hexagon">
                            <div class="hexagon-in1">
                                <div class="hexagon-in2">
                                    <img class='img_area' src={QT} />
                                    <img class='img_area_overlay' src={QT_hover} onClick={
                                        () => {
                                            setShowDesc(showQT)
                                            setShowCV(false);
                                            setShowNLP(false);
                                            setShowDS(false);
                                            setShowQT(!showQT);
                                            setShowRL(false);                                            
                                            }
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="hexagon">
                            <div class="hexagon-in1">
                                <div class="hexagon-in2">
                                    <img class='img_area' src={RL} />
                                    <img class='img_area_overlay' src={RL_hover} onClick={
                                        () => {
                                            setShowDesc(showRL)
                                            setShowCV(false);
                                            setShowNLP(false);
                                            setShowDS(false);
                                            setShowQT(false);
                                            setShowRL(!showRL);                                            
                                            }
                                        }
                                    />
                                </div>
                            </div>
                        </div>     
                    </div>
                </div>
            </div>

            <div class="arvore_de_habilidades">
                <span class="titulo_arvore">Árvore de Habilidades</span>
                <div class="arvhab">
                    <img class="arvhab-image" src={arvhab} alt="arvhab"></img>
                </div>
                    <div class="descricao_da_arvore">Quer aprender Data Science/IA e não sabe por onde começar?
                                    <br/> Dê uma olhada na Árvore de Habilidades do grupo Turing!
                                    <br/> Os itens clicáveis te levam a uma página no github onde você pode
                                    <br/> conferir um exemplo daquele conceito          
                    </div>
                <div class="coggle">
                    <iframe class="arvore_coggle" src="https://embed.coggle.it/diagram/XO2xElTTBjb9Mduz/709359e9f455d0aa8e1f1539d84693b3289686cd3efad7ecd94a441aa6bb488e" allowfullscreen></iframe>
                </div>
            </div>

            <div class="medium">
                    <span class="titulo_arvore">Artigos do Medium</span>
                    <ul class='medium_posts'>
                    {posts.map(post => (
                        <a class='post' href={post.guid} key={post.guid}>
                            <img class ='medium_pic' src={post.thumbnail} />
                            <div class='medium_title'>{post.title}</div>
                        </a>
                    ))}
                    </ul>
            </div>
            <Rodape />
        </div>
    );
}