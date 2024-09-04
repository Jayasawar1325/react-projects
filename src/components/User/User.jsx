import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid}=useParams()
  return (
    <div className='bg-slate-600 w-full h-20 m-auto p-4 text-center text-3xl text-orange-600'>User:{userid}</div>
  )
}

export default User