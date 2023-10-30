import React from 'react'

import styles from '../style'
import { stats } from '../constants'

const Stats = () => {
    return (
        <section className='w-[100%] flex justify-evenly sm:flex-row items-center flex-wrap sm:mb-20 mb-6 flex-col'>
            {stats.map((stat) => (
                <div key={stat.id} className='flex flex-row justify-center items-center m-3'>
                    <h1 className={`${styles.heading2} text-right`}>{stat.value}</h1>
                    <p className={`${styles.paragraph} text-white text-gradient uppercase`}>{stat.title}</p>
                </div>
            ))
            }
        </section >
    )
}

export default Stats
