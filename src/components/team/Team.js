import React from 'react'
import Back from '../common/back/Back'
import TeamCard from './TeamCard'
import './team.css'

export default function Team() {
    return (
        <>
            <Back title='Team' />
            <section className='team paddding'>
                <div className='container grid'>
                    <TeamCard />
                </div>
            </section>
        </>
    )
}
