import React from 'react'
import { useContext } from 'react'
import { store } from '../App'
const Count = () => {
    const [data,setData]=useContext(store)
  return (
    <div className='main border-2'>
        <div className='card text-lg text-black'>
            Count component
            <h3 className='title'>Count:{data.length}</h3>
        </div>
    </div>
  )
}

export default Count