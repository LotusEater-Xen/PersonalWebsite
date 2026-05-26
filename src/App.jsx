import { useState } from 'react'
import { BrowserRouter as Router, 
         Route, 
         Routes,
         Link
      } from 'react-router-dom';
import Home from './pages/Home';



function App() {
  return (
    
    <Router>
   <Routes>
    <Route path="/echo" element={<Home />}/>
   </Routes>
    </Router>
    
  );
}

export default App;
