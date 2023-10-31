import React from 'react'
import { logo } from '../assets'
import styles from '../style'
import { footerLinks } from '../constants'
import { socialMedia } from '../constants'

const Footer = () => {
    return (
        <footer className='flex sm:py-16 py-6 flex-1 flex-col'>
            <div className='flex flex-1 gap-8 md:flex-row flex-col'>
                <div className='flex flex-col md:w-1/3 w-[100%]'>
                    <img src={logo} alt="Hoo Bank" className="w-[300px]" />
                    <p className={`${styles.paragraph} mt-4`}>
                        A new way to make the payments easy, reliable and secure.
                    </p>
                </div>
                <div className='flex md:my-0 my-8 sm:flex-row flex-col justify-between md:w-2/3 w-[100%]'>
                    {footerLinks.map(footerLink => (
                        <div key={footerLink.title} className="flex sm:mb-0 mb-6 flex-col sm:items-start items-center">
                            <h4 className='text-white text-[24px] leading-[32px] mb-2'>{footerLink.title}</h4>
                            <ul className='text-white sm:text-start text-center'>
                                {footerLink.links.map((link, index) => (
                                    <li key={index} className={`${styles.paragraph} hover:text-secondary cursor-pointer text-gray`}>
                                        <a href={link.link} target="_blank" className='text-neutral-500'>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-1 border-t-[2px] py-6 mt-6 flex sm:flex-row flex-col sm:items-end items-center'>
                <p className={styles.paragraph}>2023 HooBank. All Rights Reserved.</p>
                <div className='flex flex-1 flex-row gap-4 justify-end items-center sm:mt-0 mt-4'>
                    {socialMedia.map(social => (
                        <img className="w-[40px]" src={social.icon} alt={social.name} onClick={() => document.location.href = social.link} />
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
