import './App.css'
import { createContext,useState } from 'react'
import Count from './components/Count';
import Display from './components/Display';

export const store = createContext();
function App() {
 const [data,setData]=useState([
  {
    brandName:"Levis"
  },
  {
    brandName:"Trends"
  },
  {
    brandName:"Max"
  },
  {
    brandName:"Puma"
  }
  

 ]);

  return (
    <store.Provider value={[data,setData]}>
      <div>
       <Count />
       <Display />
      
    
      </div>
    </store.Provider>
  )
}

export default App
