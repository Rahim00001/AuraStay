import { Helmet } from "react-helmet-async";
import Categories from "../../components/Categories/Categories";
import Rooms from "../../components/Rooms/Rooms";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home || AuraStay</title>
            </Helmet>
            {/* This is category section */}
            <Categories></Categories>

            {/* this is rooms section */}
            <Rooms></Rooms>
        </div>
    );
};

export default Home;