import React from 'react'
import { useContext } from 'react'
import { store } from '../App'
const B = () => {
    const [data,setData]=useContext(store)
  return (
    <div className=' text-lg'>Component B {data}</div>
  )
}

export default B