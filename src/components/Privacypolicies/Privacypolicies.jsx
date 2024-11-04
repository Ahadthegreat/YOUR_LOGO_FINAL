import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Privacypolicies() {
  return (
    <div className='h-[400px]'>
        <div className="pt-[25px] pl-[25px]">
            {/* MAIN BAKSA */}
        <h1 className='font-extrabold '>
            Our Privacy Policies
        </h1>
        <ul className='text-lg font-bold list-disc pt-[25px] pl-[25px] text-slate-500
        '>
            <li className='py-2'>Your data may be used to train and enhance our AI models, ensuring more
                 accurate results.</li>
            <li className='py-2'>We do not sell your information. We may share data with trusted partners
                 under confidentiality agreements. </li>
            <li className='py-2'>We implement security measures to protect your data, though no 
                transmission method is completely secure.</li>
            <li className='py-2'>We collect personal information and usage data to enhance your experience
                 and improve our services.
            </li >
        </ul>
        </div>
    </div>
  )
}

export default Privacypolicies