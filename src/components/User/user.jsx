import React from 'react'
import { useParams } from 'react-router-dom'



function user() {
    let {userid}=useParams();
  return (
    <div className='bg-slate-400 text-white text-3xl p-4'>user: {userid}</div>
  )
}

export default user