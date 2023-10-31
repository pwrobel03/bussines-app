import React from 'react'
import { clients } from '../constants'

const Clients = () => {
    return (
        <section id='clients' className='flex flex-1 flex-col justify-center flex-wrap md:flex-row flex-col sm:py-16 py-6'>
            <div className='flex flex-wrap justify-center items-center sm:gap-16 gap-12'>
                {clients.map(client => (
                    <img src={client.logo} className='md:w-[260px] w-[320px]'></img>
                ))}
            </div>
        </section>
    )
}

export default Clients
