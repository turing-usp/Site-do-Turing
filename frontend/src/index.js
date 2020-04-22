import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './Homepage'
import Cabecalho from './Cabecalho';
import Rodape from './Rodape';
import Faq from './Faq';

ReactDOM.render(<div>
    <Cabecalho />
    <Homepage />
    <Rodape />
    </div>, 
    document.getElementById('root')
    )

