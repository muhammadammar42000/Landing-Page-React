import React from 'react'
import Title from '../common/heading/Title'
import PriceCard from '../pricing/PriceCard'

export default function HPricing() {
    return (
        <>
            <section className='hprice padding'>
                <Title subtitle='OUR PRICING' title='Pricing & Packages' />
                <div className='price container grid'>
                    <PriceCard />
                </div>
            </section>
        </>
    )
}
