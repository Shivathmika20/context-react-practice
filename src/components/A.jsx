import React from 'react'
import { useContext } from 'react';
import {store} from '../App'
const A = () => {
    const [data,setData]= useContext(store);
  return (
    <div className=' text-lg '>Component A
        {data}
    </div>
  )
}

export default A