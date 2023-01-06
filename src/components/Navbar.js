import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Faltu <span>BLOGS</span></h1>
                </Link>
                <ul className="navbar-wrap">
                    <li><Link to="/">Blogs</Link></li>
                    <li><Link to="/utilities">Utilities</Link></li>
                    <li><Link to="/fun">Fun</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                </ul>
            </div>
        </header>
     );
}
 
export default Navbar;