import React from 'react'

import styles from '../style'
import { feedback } from '../constants'
import { quotes } from '../assets'

const FeedbackCard = ({ props }) => {
    console.log(props);
    return (
        <div className="max-w-[420px] max-h-[940px] py-12 px-8 feedback-card rounded-[1em]">
            <img src={quotes} alt="quote" className='flex flex-1' />
            <p className={`${styles.paragraph} my-6`}>{props.content}</p>
            {props.id}
            {props.name}
            {props.title}
        </div>
    )
}

const Testimonials = () => {
    return (
        <div className='flex flex-1 flex-col sm:py-16 py-6 flex-col'>
            <div className="flex items-center flex-1 md:flex-row flex-col md:gap-8">
                <h2 className={`${styles.heading2} md:w-2/3`}>What people are saying about us</h2>
                <p className={`${styles.paragraph} md:w-1/3 md:mt-0 mt-5`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <div className="flex flex-wrap items-center justify-center md:flex-row flex-col sm:my-10 gap-10">
                {feedback.map(el => <FeedbackCard key={el.id} props={el}></FeedbackCard>)}
            </div>
        </div>
    )
}

export default Testimonials
