import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    lable,
    type = "text",
    className = "",
    error,
    ...props
}, ref) {
    const id = useId()

    return (
        <div className='w-full flex flex-col gap-1'>
            {lable && (
                <label
                    htmlFor={id}
                    className='text-sm font-semibold text-gray-700 tracking-wide'
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                    {lable}
                </label>
            )}
            <input
                type={type}
                id={id}
                ref={ref}
                className={`
                    w-full px-4 py-2.5 rounded-xl
                    border-2 border-gray-200
                    bg-gray-50
                    text-gray-800 text-sm
                    placeholder:text-gray-400
                    outline-none
                    transition-all duration-200
                    focus:border-[#00bf63] focus:bg-white focus:shadow-[0_0_0_3px_rgba(0,191,99,0.12)]
                    hover:border-gray-300
                    ${error ? 'border-red-400 focus:border-red-400 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.12)]' : ''}
                    ${className}
                `}
                {...props}
            />
            {error && (
                <p className='text-xs text-red-500 mt-0.5'>{error}</p>
            )}
        </div>
    )
})

export default Input