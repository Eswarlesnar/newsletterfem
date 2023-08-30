import {  useState } from 'react'
import './App.css'
import Success from './Success'
import NewsLetter from './NewsLetter'
// import { ReactComponent as Header} from "./assets/illustration-sign-up-mobile.svg"

function App() {
  const [input , setInput] = useState("") 
  const [subscribed , setSubscribed ] = useState(false)
  

  if(subscribed) {
    return <Success />
  }
  
  return (
    <> 
     <NewsLetter input= { input} setInput={setInput}   setSubscribed={setSubscribed}/>
    </>
  )
}

export default App
