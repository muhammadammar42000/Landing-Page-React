import React from 'react'
import './price.css'
import PriceCard from './PriceCard'
import Back from '../common/back/Back'
import Faq from './Faq'


export default function Price() {
    return (
        <>
            <Back title='Choose The Right Plan' />
            <section className='price padding'>
                <div className='container grid shadow'>
                    <PriceCard />
                </div>
            </section>
            <Faq />
        </>
    )
}
