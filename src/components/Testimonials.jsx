import React from 'react'

import styles from '../style'
import { feedback } from '../constants'
import { quotes } from '../assets'

const FeedbackCard = ({ props }) => {
    return (
        <div className="flex">
            <div className="flex flex-1 h-full flex-col md:max-w-[400px] max-w-[600px] py-12 px-8 feedback-card z-[5] rounded-[1em] ">
                <img src={quotes} alt="quote" className='flex w-[64px]' />
                <p className={`${styles.paragraph} my-6`}>{props.content}</p>
                <div className='flex flex-1 items-end flex-row'>
                    <div className='flex flex-1 gap-6 items-center '>
                        <img src={props.img} alt={props.name} srcset="" />
                        <div className='flex flex-col justify-center'>
                            <p className={styles.paragraph}>{props.name}</p>
                            <p className={styles.paragraph}>{props.title}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Testimonials = () => {
    return (
        <div className='flex sm:py-16 py-6 flex-col'>
            <div className="flex items-center flex-1 md:flex-row flex-col md:gap-8">
                <h2 className={`${styles.heading2} md:w-2/3`}>What people are saying about us</h2>
                <p className={`${styles.paragraph} md:w-1/3 md:my-0 my-5`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <div className="flex flex-wrap md:items-stretch items-center justify-center place-content-center md:flex-row flex-col relative sm:my-10 gap-10">
                {feedback.map(el => <FeedbackCard key={el.id} props={el}></FeedbackCard>)}
                <div className="absolute z-[3] w-[40%] h-[30%] -left-10 bottom-40 pink__gradient"></div>
                <div className="absolute z-[3] w-[20%] h-[50%] -right-10 bottom-40 blue__gradient"></div>
            </div>
        </div>
    )
}

export default Testimonials
