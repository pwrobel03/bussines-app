import React from 'react'

const Button = ({ styles }) => {
    return (
        <button type="button" className={`py-4 px-10 bg-blue-gradient capitalize rounded-[1em] font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}>
            get started
        </button>
    )
}

export default Button
