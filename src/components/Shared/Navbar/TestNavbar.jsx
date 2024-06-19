import { Helmet } from "react-helmet-async";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
const TestNavbar = () => {
    return (
        <header className="header" id="header">
            <Helmet>
                <script src="./TestNavbar.js"></script>
            </Helmet>
            <nav className="nav container">
                {/* logo */}
                <a href="#" className="nav_logo">CrispyCrave</a>
                <div className="nav_menu" id="nav_menu">
                    <ul className="nav_list">
                        <li>
                            <a href="#home" className="nav_link active_link">Home</a>
                        </li>
                        <li>
                            <a href="#favorites" className="nav_link">Favorites</a>
                        </li>
                        <li>
                            <a href="#care" className="nav_link">Care</a>
                        </li>
                        <li>
                            <a href="#products" className="nav_link">Products</a>
                        </li>
                        <li>
                            <a href="#contact" className="nav_link">Contact</a>
                        </li>
                    </ul>
                    <div className="nav_close" id="nav_close">
                        <FaXmark />
                    </div>
                    <div className="nav_social">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="nav_social-link">
                            <FaFacebook />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="nav_social-link">
                            <FaInstagram />
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="nav_social-link">
                            <FaXTwitter />
                        </a>
                    </div>
                </div>
                <div className="nav_toggle" id="nav_toggle">
                    <FaBars />
                </div>
            </nav>
            <script src="./TestNavbar.js"></script>
        </header>
    );
};

export default TestNavbar;