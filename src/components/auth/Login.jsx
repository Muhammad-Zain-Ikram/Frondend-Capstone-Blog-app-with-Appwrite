import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import authService from '../../services/auth'
import { login as loginAction } from '../../store/features/auth.slice'
import { Input, PrimaryBtn } from "../index"
import { LockIcon, ArrowRight } from 'lucide-react'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    // const navigate = useNavigate()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const loginHandler = async (data) => {
        try {
            setError('')
            setLoading(true)
            const session = await authService.loginUser(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(loginAction(userData))
                // navigate("/")
            }
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        // <div className='min-h-screen bg-gradient-to-br from-gray-50 to-green-50/30 flex items-center justify-center p-4'>
            <div className='w-full max-w-md'>

                {/* Card */}
                <div className='bg-white rounded-3xl shadow-xl shadow-gray-200/80 py-8 px-4 md:px-4  border border-gray-100'>

                    {/* Header */}
                    <div className='mb-8'>
                        <div className='w-12 h-12 rounded-2xl bg-[#00bf63]/10 flex items-center justify-center mb-4'>
                            <LockIcon size={22} className='text-[#00bf63]' />
                        </div>
                        <h1
                            className='text-2xl font-bold text-gray-900 mb-1'
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                            Welcome back
                        </h1>
                        <p className='text-sm text-gray-500'>Sign in to your account to continue</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit(loginHandler)} className='flex flex-col gap-5'>
                        <Input
                            lable="Email"
                            placeholder="you@example.com"
                            type="email"
                            required
                            error={errors.email?.message}
                            {...register("email", {
                                required: "Email is required",
                                validate: {
                                    matchPattern: (value) =>
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Please enter a valid email address",
                                }
                            })}
                        />
                        <Input
                            lable="Password"
                            placeholder="Enter your password"
                            type="password"
                            required
                            error={errors.password?.message}
                            {...register("password", {
                                required: "Password is required"
                            })}
                        />

                        {/* Server error */}
                        {error && (
                            <div className='px-4 py-3 rounded-xl bg-red-50 border border-red-100 text-sm text-red-600'>
                                {error}
                            </div>
                        )}

                        {/* Forgot password */}
                        <div className='text-right -mt-2'>
                            <a href="#" className='text-xs text-[#00bf63] font-medium hover:underline'>
                                Forgot password?
                            </a>
                        </div>

                        <PrimaryBtn
                            icon={loading ? null : <LockIcon size={15} />}
                            type="submit"
                            size="lg"
                            disabled={loading}
                            className="w-full mt-1"
                        >
                            {loading ? "Signing in…" : "Login"}
                        </PrimaryBtn>
                    </form>

                    {/* Footer */}
                    <p className='text-center text-sm text-gray-500 mt-6'>
                        Don't have an account?{' '}
                        <a href="/sign-up" className='text-[#00bf63] font-semibold hover:underline'>
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        // </div>
    )
}

export default Login