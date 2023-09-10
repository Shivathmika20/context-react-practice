import React from 'react'
import { useContext,useState } from 'react'
import { store } from '../App'
const Display = () => {
    const [data,setData]=useContext(store);
    const [name,setName]=useState('');

    const submitHandler=(e)=>{
        e.preventDefault();
        setData([...data,{brandName:name}])

    }
  return (
    <div className='main border-2'>
        <div className='card text-lg text-black'>
           {data.map((e)=> <h3>{e.brandName}</h3>)}
           <form action="" className="form" onSubmit={submitHandler}>
            <input className=' border-2' type="text" placeholder='Enter any Brand' onChange={(e)=>{setName(e.target.value)}} />
            <input className=' border-2' type="submit" value="Add" />
           </form>
        </div>
    </div>
  )
}

export default Display