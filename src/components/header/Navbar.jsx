import React, { useState } from 'react'
import { Container, Logo, PrimaryBtn } from "../index"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import authService from '../../services/auth'
import { logout } from '../../store/features/auth.slice'
import { LogOutIcon, PenSquare, Menu, X } from "lucide-react"

function Navbar() {
    const dispatch = useDispatch()
    // const navigate  = useNavigate()
    const authState = useSelector((state) => state.auth.status)
    const [menuOpen, setMenuOpen] = useState(false)

    const logoutHandler = () => {
        authService.logout().then(() => dispatch(logout()))
    }

    const navItems = [
        {
            name: "Home",
            slug: "/",
            active: true,
            // onclick: () => navigate("/"),
        },
        {
            name: "Sign Up",
            slug: "/sign-up",
            active: !authState,
            // onclick: () => navigate("/sign-up"),
        },
        {
            name: "Login",
            slug: "/login",
            active: !authState,
            // onclick: () => navigate("/login"),
        },
        {
            icon: <PenSquare size={15} />,
            name: "Create",
            slug: "/create-post",
            active: authState,
            // onclick: () => navigate("/create-post"),
        },
        {
            icon: <LogOutIcon size={15} />,
            name: "Logout",
            slug: "/",
            active: authState,
            onclick: logoutHandler,
        },
    ]

    const activeItems = navItems.filter((item) => item.active)

    return (
        <header className='py-3 shadow-md shadow-[#00bf63] relative'>
            <Container>
                <nav className='flex justify-between items-center'>

                    {/* Logo */}
                    <Logo />

                    {/* Desktop nav */}
                    <div className='hidden md:flex items-center gap-2'>
                        {activeItems.map((item) => (
                            <PrimaryBtn
                                key={item.name}
                                icon={item?.icon}
                                onClick={item.onclick}
                                size="sm"
                            >
                                {item.name}
                            </PrimaryBtn>
                        ))}
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className='md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors z-60'
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? null : <Menu size={22} />}
                    </button>
                </nav>
            </Container>

            {/* Mobile fullscreen nav */}
            <div
                className={`
                    fixed top-0 right-0 h-screen w-full z-50
                    flex flex-col bg-white
                    transition-transform duration-300 ease-in-out
                    ${menuOpen ? "translate-x-0" : "translate-x-full"}
                `}
            >
                {/* Menu header */}
                <div className='flex justify-between items-center px-6 py-4 shadow-md shadow-[#00bf63]'>
                    <Logo />
                    <button
                        onClick={() => setMenuOpen(false)}
                        className='p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors'
                        aria-label="Close menu"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Nav items */}
                <nav className='flex flex-col gap-3 px-6 py-6'>
                    {activeItems.map((item) => (
                        <PrimaryBtn
                            key={item.name}
                            icon={item?.icon}
                            onClick={() => {
                                item.onclick()
                                setMenuOpen(false)
                            }}
                            size="md"
                            className="w-full"
                        >
                            {item.name}
                        </PrimaryBtn>
                    ))}
                </nav>
            </div>
        </header>
    )
}

export default Navbar