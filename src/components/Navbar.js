import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Faltu <span>BLOGS</span></h1>
                </Link>
                <ul>
                    <li><Link to="/utilities">Utilities</Link></li>
                </ul>
            </div>
        </header>
     );
}
 
export default Navbar;