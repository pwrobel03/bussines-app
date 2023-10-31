import React, { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <nav className="w-full flex py-[32px] justify-between items-center navbar">
            <img src={logo} alt="logo" className='w-[124px] h-[32px]' />
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}>
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>

            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img
                    src={toggle ? close : menu}
                    alt="menu button"
                    className='w-[28px] h-[28px] object-contain'
                    onClick={() => setToggle((prev) => !prev)} />

                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-primary absolute top-20 right-0 w-[100%] z-[6] sidebar`}>
                    <ul className="list-none flex justify-end items-center flex-1 flex-col">
                        {navLinks.map((nav, index) => (
                            <li
                                onClick={() => setToggle((prev) => !prev)}
                                key={nav.id}
                                className={`font-poppins font-normal py-4 hover:text-secondary cursor-pointer text-[18px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}>
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
