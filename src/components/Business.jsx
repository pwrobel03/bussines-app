import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'

const Business = () => {
  return (
    <section id='features' className='flex flex-1 md:flex-row flex-col sm:puy-16 py-6'>
      <div className='flex flex-col justify-center items-start'>
        <h2 className={styles.heading2}>You do the business, <br className='sm:block hidden'></br>we'll handle the money</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button styles='mt-10'></Button>
      </div>
      <div className='flex-1 flex flex-col'>
        {features.map((feature) => {
          return (
            <div key={feature.id} className='flex sm:my-6 py-1 justify-center items-center flex-row rounded-[20px] hover:bg-discount-gradient'>
              <div className='flex flex-1 w-[64px] h-[64px] items-start object-contain bg-dim-blue'>
                <img src={feature.icon} alt={feature.title} />
              </div>
              <div className='flex flex-col items-start justify-start'>
                <div className='flex'>{feature.title}</div>
                <div className='flex'>{feature.content}</div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Business
