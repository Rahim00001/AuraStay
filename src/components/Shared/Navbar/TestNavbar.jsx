import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FaFacebook, FaInstagram, FaXTwitter, FaXmark, FaBars } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { AiOutlineMenu } from "react-icons/ai";
import { becomeHost } from "../../../api/auth";
import avatarImg from '../../../assets/images/placeholder.jpg'
import toast from "react-hot-toast";
import HostModal from "../../Modal/HostRequestModal";
import useRole from "../../../hooks/useRole";

const TestNavbar = () => {
    const { user, logOutUser } = useAuth();
    const [role] = useRole()
    const [isOpen, setIsOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const closeModal = () => {
        setIsModalOpen(false)
    }
    const modalHandler = async () => {
        try {
            const data = await becomeHost(user?.email)
            console.log(data)
            if (data.modifiedCount > 0) {
                toast.success('Success!, Please wait for admin confirmation.')
            } else {
                toast.success('Please!, Wait for admin approval 🛠')
            }
        } catch (err) {
            console.log(err)
        } finally {
            setIsModalOpen(false)
        }
    }

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
                <a href="#" className="nav_logo">AuraStay</a>
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
                        </li>
                    </ul>
                    <div className="nav_close" id="nav_close" onClick={closeMenu}>
                        <FaXmark />
                    </div>
                    <div className='relative nav_social'>
                        <div className='flex flex-row items-center gap-3'>
                            {/* Become A Host btn */}
                            <div className='hidden md:block'>
                                {(!user || !role || role === 'guest') && (
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        disabled={!user}
                                        className='disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition'
                                    >
                                        Host your home
                                    </button>
                                )}
                            </div>
                            {/* Dropdown btn */}
                            <div
                                onClick={() => setIsOpen(!isOpen)}
                                className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                            >
                                <AiOutlineMenu />
                                <div className='hidden md:block'>
                                    {/* Avatar */}
                                    <img
                                        className='rounded-full'
                                        referrerPolicy='no-referrer'
                                        src={user && user.photoURL ? user.photoURL : avatarImg}
                                        alt='profile'
                                        height='30'
                                        width='30'
                                    />
                                </div>
                            </div>
                        </div>
                        {isOpen && (
                            <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-blue-200 overflow-hidden right-0 top-12 text-sm'>
                                <div className='flex flex-col cursor-pointer'>
                                    <Link
                                        to='/'
                                        className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                    >
                                        Home
                                    </Link>
                                    {user ? <>
                                        <Link
                                            to='/dashboard'
                                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                        >
                                            Dashboard
                                        </Link>
                                        <div onClick={logOutUser} className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>
                                            Logout
                                        </div>
                                    </> :
                                        <>
                                            <Link
                                                to='/login'
                                                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                            >
                                                Login
                                            </Link>
                                            <Link
                                                to='/register'
                                                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                            >
                                                Register
                                            </Link>
                                        </>}
                                </div>
                            </div>
                        )}
                        <HostModal isOpen={isModalOpen} closeModal={closeModal} modalHandler={modalHandler}></HostModal>
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
