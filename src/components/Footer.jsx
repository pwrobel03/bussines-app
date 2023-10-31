import React from 'react'
import { logo } from '../assets'
import styles from '../style'
import { footerLinks } from '../constants'

const Footer = () => {
    return (
        <footer className='flex sm:py-16 py-6 flex-1 flex-col'>
            <div className='flex flex-1 md:flex-row flex-col'>
                <div className='flex flex-1 flex-col'>
                    <img src={logo} alt="Hoo Bank" className="w-[300px]" />
                    <p className={styles.paragraph}>
                        A new way to make the payments easy, reliable and secure.
                    </p>
                </div>
                <div className='flex flex-1'>
                    {footerLinks.map(footerLink => (
                        <div key={footerLink.title} className="flex flex-1 flex-col">
                            <h4 className='text-white text-[20px] leading-[28px]'>{footerLink.title}</h4>
                            <ul className='text-white'>
                                {footerLink.links.map(link => (
                                    <li className='hover:text-secondary cursor-pointer'>{link.name}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div></div>
        </footer>
    )
}

export default Footer
