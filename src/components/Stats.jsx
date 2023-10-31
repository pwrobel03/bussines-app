import React from 'react'

import styles from '../style'
import { stats } from '../constants'

const Stats = () => {
    return (
        <section className='w-[100%] flex justify-evenly ss:flex-row items-center flex-wrap sm:my-16 my-6 flex-col'>
            {stats.map((stat) => (
                <div key={stat.id} className='flex ss:flex-row flex-col justify-center items-center m-3'>
                    <h1 className={`${styles.heading2} ss:text-right text-center`}>{stat.value}</h1>
                    <p className={`${styles.paragraph} text-white text-gradient text-center uppercase`}>{stat.title}</p>
                </div>
            ))
            }
        </section >
    )
}

export default Stats
