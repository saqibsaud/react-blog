import { Link } from 'react-router-dom';
import Logo from './assets/images/logo.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">
                <img src={Logo} alt=""/>
            </Link>
            <h1>The Saqib Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </div>
    );
}
 
export default Navbar;
