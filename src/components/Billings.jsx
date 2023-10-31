import React from 'react'

import { apple, bill, google } from '../assets'
import styles from '../style'

const Billings = () => (
  <section id='product' className='flex flex-1 md:ml-6 md:flex-row flex-col-reverse justify-center sm:py-16 py-6'>
    <div className="flex flex-1 relative">
      <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
      <div className="absolute z-[4] w-[50%] h-[50%] right-20 top-20 white__gradient"></div>
      <div className="absolute z-[3] w-[80%] h-[30%] left-20 bottom-40 pink__gradient"></div>
      <div className="absolute z-[2] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
    </div>

    <div className="flex flex-1 flex-col">
      <h2 className={styles.heading2}>Easily control your billing & invoicing</h2>
      <p className={`${styles.paragraph} md:mr-10 mr-4`}>Proin vitae libero enim. Aenean tortor massa, imperdiet non tempor sed, interdum non lorem. Ut volutpat, elit vitae tincidunt pretium, massa ligula tempor ligula, in vestibulum orci nisl at sapien. Sed ullamcorper lacus vel sem iaculis, eu congue felis luctus.</p>
      <div className='flex gap-10 justify-start sm:my-16 my-4'>
        <img src={apple} alt="apple store" className='md:w-[40%] w-[30%] cursor-pointer' />
        <img src={google} alt="google play" className='md:w-[40%] w-[30%] cursor-pointer' />
      </div>
    </div>
  </section>
)

export default Billings