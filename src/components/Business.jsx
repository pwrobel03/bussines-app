import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'

const Business = () => {
  return (
    <section id='features' className='flex md:flex-row flex-col sm:puy-16 py-6'>
      <div className='flex flex-1 flex-col justify-center items-center'>
        <h2>You do the business, we'll handle the money</h2>
      </div>
    </section>
  )
}

export default Business
