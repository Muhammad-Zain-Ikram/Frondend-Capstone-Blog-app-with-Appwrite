import React from 'react'
import logo from "../../public/logo.png"
import { PenSquare } from 'lucide-react'
const Logo = ({ width = 100 }) => {
  return (
    <div className='flex items-center gap-2'>
      <div className='w-8 h-8 rounded-lg flex items-center justify-center' style={{ backgroundColor: '#00bf63' }}>
        <PenSquare size={16} className='text-white' />
      </div>
      <span className='text-xl font-extrabold text-gray-900 tracking-tight'>
        Zain<span style={{ color: '#00bf63' }}>Blog</span>
      </span>
    </div>
  )
}

export default Logo