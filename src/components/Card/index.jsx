import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {FiArrowUpRight, FiArrowDown} from 'react-icons/fi'

export const Card = ({id}) => {

    const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=6&page=1&sparkline=false'

    useEffect(() =>{
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    },[])


    if(!data) return null 

  return (
    <div className='card'>
    <div className='top'>
        <img src={data[id].image} alt='' />
    </div>
    <div>
        <h5>{data[id].name}</h5>
        <p>R${data[id].current_price.toLocaleString(2)}</p>
    </div>

    {data[id].price_change_percentage_24h < 0 ? (
        <span className='red'>
            <FiArrowDown className='icon' />
            {data[id].price_change_percentage_24h.toFixed(2)}%
        </span>
    ) : (
            <span className='green'>
                <FiArrowUpRight className='icon' />
                {data[id].price_change_percentage_24h.toFixed(2)}%
            </span>
        )}
</div>
  )
}
