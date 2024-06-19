import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import TestNavbar from "../components/Shared/Navbar/TestNavbar";

const Main = () => {
    return (
        <div>
            <TestNavbar></TestNavbar>
            <Navbar></Navbar>
            <div className="pt-24 min-h-[calc(100vh-68px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;