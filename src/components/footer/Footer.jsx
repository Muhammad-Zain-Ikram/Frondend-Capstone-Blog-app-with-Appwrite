import React from 'react'
import { Link } from 'react-router-dom'
import { Github, Twitter, Instagram, PenSquare } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const links = {
        Platform: [
            { name: 'Home',        to: '/' },
            { name: 'Write Blog',  to: '/create-post' },
            { name: 'Login',       to: '/login' },
            { name: 'Sign Up',     to: '/sign-up' },
        ],
        Company: [
            { name: 'About',       to: '/about' },
            { name: 'Privacy',     to: '/privacy' },
            { name: 'Terms',       to: '/terms' },
            { name: 'Contact',     to: '/contact' },
        ],
    }

    const socials = [
        { icon: <Github size={18} />,    href: 'https://github.com',    label: 'GitHub' },
        { icon: <Twitter size={18} />,   href: 'https://twitter.com',   label: 'Twitter' },
        { icon: <Instagram size={18} />, href: 'https://instagram.com', label: 'Instagram' },
    ]

    return (
        <footer className='border-t border-gray-100'>
            <div className='max-w-6xl mx-auto px-6 py-14'>

                {/* Top row */}
                <div className='flex flex-col md:flex-row gap-12 md:gap-8 justify-between'>

                    {/* Brand */}
                    <div className='space-y-4 max-w-xs'>
                        <div className='flex items-center gap-2'>
                            <div className='w-8 h-8 rounded-lg flex items-center justify-center' style={{ backgroundColor: '#00bf63' }}>
                                <PenSquare size={16} className='text-white' />
                            </div>
                            <span className='text-xl font-extrabold text-gray-900 tracking-tight'>
                                Zain<span style={{ color: '#00bf63' }}>Blog</span>
                            </span>
                        </div>
                        <p className='text-gray-400 text-sm leading-relaxed'>
                            A modern blogging platform built for creators who want to write, share, and inspire.
                        </p>

                        {/* Socials */}
                        <div className='flex items-center gap-3 pt-1'>
                            {socials.map(({ icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label={label}
                                    className='
                                        w-9 h-9 rounded-lg
                                        flex items-center justify-center
                                        text-gray-400 bg-gray-100
                                        hover:text-white hover:bg-[#00bf63]
                                        transition-all duration-200
                                    '
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className='flex gap-12 md:gap-20'>
                        {Object.entries(links).map(([section, items]) => (
                            <div key={section} className='space-y-4'>
                                <h4 className='text-xs font-bold uppercase tracking-widest text-gray-900'>
                                    {section}
                                </h4>
                                <ul className='space-y-3'>
                                    {items.map(({ name, to }) => (
                                        <li key={name}>
                                            <a
                                                href={to}
                                                className='text-sm text-gray-400 hover:text-[#00bf63] transition-colors duration-150'
                                            >
                                                {name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className='mt-12 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3'>
                    <p className='text-xs text-gray-400'>
                        © {currentYear} ZainBlog. All rights reserved.
                    </p>
                    <p className='text-xs text-gray-400'>
                        Made with <span style={{ color: '#00bf63' }}>♥</span> for writers everywhere
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer