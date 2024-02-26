import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
function App() {

//let title= "Welcome To UnCardGen"
//let card= "The UnC Card Garden"

  return (
    <Router>
    <div className="App">
      <Navbar />
        <div className="content">
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
        <Route path="/create" element={<Create />} />
        </Routes>
        <Routes>
        <Route path="/blogs/:id" element={<BlogDetails />} />
        </Routes>
        <Routes>
        <Route path="/*" element={<NotFound />} />
        </Routes>
        
     </div>
    </div>
    </Router>
  );
}

export default App;

