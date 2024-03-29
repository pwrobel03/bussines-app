import React from 'react'
import { arrowUp } from '../assets'
import styles from '../style'

const GetStarted = () => (
    <div className={`${styles.flexCenter} group flex w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] hover:p-[70px] cursor-pointer`}>
        <div className={`${styles.flexCenter} justify-start flex-start bg-primary w-[100%] h-[100%] rounded-full`}>
            <div>
                <p className='text-white font-poppins font-medium text-[18px]  leading-[23px]'>
                    Get
                    <img src={arrowUp} alt="Get started" className='float-right w-[23px] h-[23px object contain]' />
                </p>
                <p className='font-poppins font-medium text-[18px] text-white leading-[23px]'> Started</p>
            </div>
        </div>
    </div>
)


export default GetStarted
