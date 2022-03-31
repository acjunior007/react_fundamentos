import ReactDOM from 'react-dom';
import React from 'react';

import './index.css';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

ReactDOM.render(
    <div>
        <Primeiro />
        <ComParametro 
            titulo="Situacao do aluno"
            aluno="Pedro"
            nota={9.0} />

        <ComParametro 
            titulo="Situacao do aluno"
            aluno="Maria"
            nota={6.5} />            

        <Fragmento />
    </div>, 
    document.getElementById("root")
);
