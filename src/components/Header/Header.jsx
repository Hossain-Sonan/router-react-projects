import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Navbar</h1>
            <nav>
                <span>My Website</span>
                <Link to="/">Home</Link>
                
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/users">Users</NavLink>
                
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>

            
        </div>
    );
};

export default Header;