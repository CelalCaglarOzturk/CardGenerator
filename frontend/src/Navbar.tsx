import { Link} from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar p-5 flex items-center">
            <h1>Neoklas</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" >New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;