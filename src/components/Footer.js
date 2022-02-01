import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return(
        <div className='footer'> 
            <div className='container'>
                <div className='col col-1 defi'>
                <h1>DeFi<span className='primary'>Tech</span></h1>
                </div>
                <div className='col'>
                    <h5>Suporte</h5>
                    <span className='bar'></span>
                      <a href='/'>Contato</a>
                      <a href='/'>Centro de Ajuda</a>
                      <a href='/'>Perguntas frequentes</a> 
                </div>
                <div className='col'>
                    <h5>Desenvolvedores</h5>
                    <span className='bar'></span>
                      <a href='/'>Cloud</a>
                      <a href='/'>API</a> 
                </div>
                <div className='col'>
                    <h5>Empresa</h5>
                    <span className='bar'></span>
                      <a href='/'>Sobre</a>
                      <a href='/'>Informações</a>
                      <a href='/'>Jurídico</a>
                      <a href='/'>Privacidade</a> 
                </div>
                <div className='col'>
                    <h5>Redes Sociais</h5>
                    <span className='bar'></span>
                      <a href='/'><FaFacebook className='icon'/></a>
                      <a href='/'><FaTwitter className='icon'/></a>
                      <a href='/'><FaLinkedin className='icon'/></a>
                      <a href='/'><FaGithub className='icon'/></a>
                </div>
            </div>
        </div>
    )
}

export default Footer