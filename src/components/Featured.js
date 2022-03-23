import React from 'react'
import '../components/Featured.css'
import { Card } from './Card'



const Featured = () => {

    const array = [{id:'0'}, {id:'1'}, {id:'2'},{id:'3'}, {id:'4'}, {id:'5'}]
    return(
        <div className='featured'>
            <div className='container'>
                {/*Esquerda*/}
                <div className='left'>
                    <h2>Explore as principais criptomoedas como Bitcoin, Ethereum e Dogecoin</h2>
                    <p>Veja todos os ativos disponíveis: Criptomoedas e NFT's</p>
                    <button className='btn'>Veja mais moedas </button>
                </div>
                {/*Direita*/}
                
                <div className='right'>
                {array.map((item) => (
                    <Card key={item.id} id={item.id}/>
                ))}
                    
                
                </div>
            </div>

        </div>
    )
}

export default Featured