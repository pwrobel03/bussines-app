import React from 'react'
import { features } from '../constants'
import styles from '../style'
import Button from './Button'

const Business = () => {
  return (
    <section id='features' className='flex flex-1 md:flex-row flex-col sm:py-16 py-6'>
      <div className='flex flex-col justify-center items-start'>
        <h2 className={styles.heading2}>You do the business, <br className='sm:block hidden'></br>we'll handle the money</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button styles='my-10'></Button>
      </div>
      <div className='flex-1 flex flex-col md:ml-6 items-start'>
        {features.map((feature) => {
          return (
            <div key={feature.id} className='flex sm:my-4 feature-card py-4 justify-center items-center flex-row rounded-[20px]'>
              <div className='flex w-[80px] h-[80px] items-start object-contain bg-dimBlue rounded-full items-center justify-center mx-4'>
                <img src={feature.icon} alt={feature.title} />
              </div>
              <div className='flex flex-1 flex-col items-start justify-start'>
                <div className={`flex text-white text-[24px]`}>{feature.title}</div>
                <div className='flex flex-wrap text-slate-400 text-[16px]'>{feature.content}</div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Business
