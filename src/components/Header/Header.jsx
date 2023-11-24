import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Navbar</h1>
            <nav>
                <span>My Website</span>
                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/users">Users</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>

            
        </div>
    );
};

export default Header;