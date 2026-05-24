import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import penguin from './images/pengu.jpg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='bg-sky-50'>Pyengu is fat penguin</div>
    <img src={penguin} />
    </>
  )
}

export default App
