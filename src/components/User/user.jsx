import React from 'react'
import { useParams } from 'react-router-dom'



function User() {
    const {userid}=useParams();
  return (
    <div className='bg-slate-400 text-white text-3xl p-4 text-center'>Welcome user  {userid}</div>
  )
}

export default User
