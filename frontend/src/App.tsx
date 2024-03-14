import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create'
import HomePage from './HomePage'
import Navbar from './Navbar'
import Rules from './Rules';
import Contact from './Contact';
import Browse from './Browse';
import Register from './Register';
import Play from './Play';
function App() {
 

  return (
  <Router>
    <Navbar /> 
    <div className="App">
    <Routes>
       <Route path="/" element={<HomePage />} />
    </Routes>
    <Routes>
      <Route path='/play' element={<Play />}/>
    </Routes>
    <Routes>
        <Route path="/create" element={<Create />} />
    </Routes>
    <Routes>
      <Route path='/rules' element={<Rules />}/>
    </Routes>
    <Routes>
      <Route path='/contact' element={<Contact /> }/>
    </Routes>
    <Routes>
      <Route path='/browse' element={<Browse />}/>
    </Routes>
    <Routes>
      <Route path='/register' element={<Register />}/>
    </Routes>
 
    </div>
    </Router>
  )
    

}

export default App
