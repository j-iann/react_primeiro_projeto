import React from 'react';
import './Login.css';

export default function Login() {

    function mostrarMensagem() {
        alert('O nome do usuário e/ou senha está inválido.')
    };

    return(
        <div>
            <form className="form">
                <div className="usuario">
                    <input type="text" name="usuario" placeholder="Nome do Usuário"></input>
                </div>
                <div className="senha">
                    <input type="password" name="senha" placeholder="Senha"></input>
                </div>
                <button onClick={mostrarMensagem} className="botao">LOGIN</button>
                <p className="esqueceu">Esqueceu sua senha? <a href="">Clique Aqui</a></p>
            </form>
        </div>
    );
};