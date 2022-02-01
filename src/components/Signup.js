import React from 'react'
import './Signup.css'
import Cripto from '../assets/trade.png'

const Signup = () => {
    return (
        <div className='signup'>
            <div className='container'>
                {/*Esquerda*/}
                <div className='left'>
                    <img src={Cripto} alt='' />
                </div>
                {/*Direita*/}
                <div className='right'>
                    <h2>Ganhe renda passiva com criptomoedas.</h2>
                    <p>Ganhe até 12% de recompensas anuais em mais de 30 ativos digitais. Basta manter seus ativos no aplicativo para ganhar recompensas automaticamente no final de cada mês, sem bloqueios e sem limites</p>
                    <div className='input-container'>
                    <input type='email' placeholder='Digite seu email' />
                    <button className='btn'>Saiba mais</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup