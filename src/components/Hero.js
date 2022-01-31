import React from 'react'
import './Hero.css'
import Cripto from '../assets/hero-img.png'

const Hero = () => {
    return(
        <div className='hero'>
            <div className='container'>
                {/*Esquerda*/}
                <div className='left'>
                    <p>Compre e venda criptomoedas 24 horas por dia, 7 dias por semana.</p>
                    <h1>Invista em criptomoedas</h1>
                    <p>Compre, venda e armazene centenas de criptomoedas.</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Digite seu email'/>
                        <button className='btn'>Saber mais</button>
                    </div>
                </div>
                {/*Direita*/}

                <div className='right'>
                    <img src={Cripto} alt='' />
                </div>
            </div>

        </div>
    )
}

export default Hero