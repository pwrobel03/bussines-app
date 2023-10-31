import React from 'react'
import styles from '../style'
import Button from './Button'

const Cta = () => {
    return (
        <section id="cta" className='flex flex-1 gap-4 sm:flex-row flex-col bg-black-gradient rounded-[1em] ss:p-16 p-6'>
            <div className='flex flex-col w-2/3'>
                <h2 className={`${styles.heading2}`}>Let’s try our service now!</h2>
                <p className={`${styles.paragraph} max-w-[470px] sm:my-0 my-4`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <div className='flex flex-1'>
                <div className='flex flex-1 items-center sm:justify-center justify-start'>
                    <Button></Button>
                </div>
            </div>
        </section>
    )
}

export default Cta
