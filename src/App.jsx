import { useState } from 'react'
import { BrowserRouter as Router, 
         Route, 
         Routes,
         Link
      } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Header from './components/Header1';



function App() {
  return (
   <div className='min-h-screen bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%'>
   <div><Navbar /></div>
   <div>        <Header 
                   page2="home"
                   page3="art"
                    page4="music"/></div>
  <div>
    <Router>
   <Routes>
    <Route path="/echo/" element={<Home />}/>
   </Routes>
    </Router>
 </div>
    </div>
  );
}

export default App;
