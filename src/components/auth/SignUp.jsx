import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import authService from '../../services/auth'
import { login } from '../../store/features/auth.slice'
import { Input, PrimaryBtn } from "../index"
import { UserRoundKey } from 'lucide-react'

const Signup = () => {
  // const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const createAccount = async (data) => {
    try {
      setError('')
      setLoading(true)
      const user = await authService.createAccount(data)
      if (user) {
        const sessionUser = await authService.getCurrentUser()
        if (sessionUser) {
          dispatch(login(sessionUser))
          // navigate("/")
        }
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
      <div className='bg-white rounded-3xl shadow-xl shadow-gray-200/80 py-8 px-4 md:px-4 border border-gray-100'>

        {/* Header */}
        <div className='mb-8'>
          <div className='w-12 h-12 rounded-2xl bg-[#00bf63]/10 flex items-center justify-center mb-4'>
            <UserRoundKey size={22} className='text-[#00bf63]' />

          </div>
          <h1
            className='text-2xl font-bold text-gray-900 mb-1'
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Create account
          </h1>
          <p className='text-sm text-gray-500'>Join us — it only takes a minute</p>
        </div>
        <div className='w-12 h-1 rounded-full bg-[#00bf63]' />
        {/* Form */}
        <form onSubmit={handleSubmit(createAccount)} className='mt-4 flex flex-col gap-5'>
          <Input
            lable="Full Name"
            type="text"
            required
            placeholder="John Doe"
            error={errors.name?.message}
            {...register("name", {
              required: "Name is required"
            })}
          />
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
            placeholder="Create a strong password"
            type="password"
            required
            error={errors.password?.message}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters"
              }
            })}
          />

          {/* Server error */}
          {error && (
            <div className='px-4 py-3 rounded-xl bg-red-50 border border-red-100 text-sm text-red-600'>
              {error}
            </div>
          )}

          <PrimaryBtn
            icon={loading ? null : <UserRoundKey size={18} />}
            type="submit"
            size="lg"
            disabled={loading}
            className="w-full mt-1"
          >
            {loading ? "Creating account…" : "Sign Up"}
          </PrimaryBtn>
        </form>

        {/* Footer */}
        <p className='text-center text-sm text-gray-500 mt-6'>
          Already have an account?{' '}
          <a href="/login" className='text-[#00bf63] font-semibold hover:underline'>
            Login
          </a>
        </p>
      </div>
    </div>
    // </div>
  )
}

export default Signup