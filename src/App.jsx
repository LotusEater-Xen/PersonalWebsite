import { useState } from 'react'
import { BrowserRouter as Router, 
         Route, 
         Routes,
         Link
      } from 'react-router-dom';
import {Home,Music,Art} from './pages/index.jsx';
import Navbar from './components/Navbar';
import Header from './components/Header1';



function App() {
  return (
   
   
   
 
    <Router >
      <div className='overflow-y-scroll bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%'>
      <div><Navbar /></div>
   <div>        <Header 
                   page2="home"
                   page3="art"
                    page4="music"/></div>
   <Routes>
    <Route path="/echo/" element={<Home />}/>
    <Route path="/echo/art" element={<Art />}/>
    <Route path="/echo/music" element={<Home />}/>
   </Routes>
   </div>
    </Router>

   
  );
}

export default App;
