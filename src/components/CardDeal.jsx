import React from 'react'
import styles from '../style'
import Button from './Button'
import { card } from "../assets"

const CardDeal = () => {
    return (
        <section id='deal' className='flex flex-1 md:flex-row flex-col sm:py-16 py-6'>
            <div className='flex flex-1 flex-col justify-center items-start'>
                <h2 className={styles.heading2}>Find a better card deal in few easy steps.</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
                <Button styles='my-10'></Button>
            </div>
            <div className='flex-1 flex flex-col md:ml-6 items-start'>
                <img src={card} alt="card" className='w-[100%] h-[100%]' />
            </div>
        </section>
    )
}

export default CardDeal
