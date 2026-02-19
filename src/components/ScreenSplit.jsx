import React from 'react'

const ScreenSplit = ({
    image,
    imageAlt = "",
    imageLeft = false,
    heading,
    subText,
    form,
    actions,
    badge,
    className = "",
}) => {

    const ImageSide = (
        <div className='flex items-center justify-center p-6 md:p-12 md:sticky md:top-0 md:h-screen'>
            {image && (
                <img
                    src={image}
                    alt={imageAlt}
                    className='w-full h-auto max-w-lg object-contain'
                />
            )}
        </div>
    )

    const ContentSide = (
        <div className='flex items-start md:items-center justify-center px-8 py-12 md:px-16 md:py-20 min-h-screen'>
            <div className='w-full max-w-lg space-y-6'>

                {badge && (
                    <span className='
                        inline-flex items-center gap-1.5
                        text-xs font-semibold tracking-widest uppercase
                        text-[#00bf63] bg-[#00bf63]/10
                        px-3 py-1.5 rounded-full
                    '>
                        {badge}
                    </span>
                )}

                {heading && (
                    <h1 className='text-4xl md:text-5xl font-extrabold text-gray-900 leading-[1.15] tracking-tight'>
                        {heading}
                    </h1>
                )}

                {subText && (
                    <p className='text-gray-500 text-lg leading-relaxed'>
                        {subText}
                    </p>
                )}

                {(heading || subText) && (form || actions) && (
                    <div className='w-12 h-1 rounded-full bg-[#00bf63]' />
                )}

                {form && <div className='w-full'>{form}</div>}

                {actions && (
                    <div className='flex flex-wrap items-center gap-3'>
                        {actions}
                    </div>
                )}

            </div>
        </div>
    )

    return (
        <div className={`w-full flex flex-col md:flex-row ${className}`}>
            {/* Image side */}
            <div className={`w-full md:flex-1 ${imageLeft ? 'md:order-first' : 'md:order-last'}`}>
                {ImageSide}
            </div>
            {/* Content side */}
            <div className={`w-full md:flex-1 ${imageLeft ? 'md:order-last' : 'md:order-first'}`}>
                {ContentSide}
            </div>
        </div>
    )
}

export default ScreenSplit