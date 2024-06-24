import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FaFacebook, FaInstagram, FaXTwitter, FaXmark, FaBars } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";

const TestNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.getElementById('header');
            if (window.scrollY >= 50) {
                header.classList.add('shadow-header');
            } else {
                header.classList.remove('shadow-header');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header" id="header">
            <Helmet>
                <script src="./TestNavbar.js"></script>
            </Helmet>
            <nav className="nav container">
                <a href="#" className="nav_logo">CrispyCrave</a>
                <div className={`nav_menu ${isMenuOpen ? 'show_menu' : ''}`} id="nav_menu">
                    <ul className="nav_list">
                        <li>
                            <Link to='/' className='nav_link' onClick={closeMenu}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className='nav_link' onClick={closeMenu}>
                                Rooms
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className='nav_link' onClick={closeMenu}>
                                Reviews
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className='nav_link' onClick={closeMenu}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className='nav_link' onClick={closeMenu}>
                                Dashboard
                            </Link>
                        </li>
                    </ul>
                    <div className="nav_close" id="nav_close" onClick={closeMenu}>
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
                <div className="nav_toggle" id="nav_toggle" onClick={toggleMenu}>
                    <FaBars />
                </div>
            </nav>
        </header>
    );
};

export default TestNavbar;
