import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {

//let title= "Welcome To UnCardGen"
//let card= "The UnC Card Garden"

  return (
    <Router>
    <div className="App">
      <Navbar />
        <div className="Routing">
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
        <Route path="/create" element={<Create />} />
        </Routes>
      
     </div>
    </div>
    </Router>
  );
}

export default App;

