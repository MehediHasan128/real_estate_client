import Advertisement from "../Advertisement/Advertisement";
import Banner from "../Banner/Banner";
import LatestUser from "../LatestUser/LatestUser";

const Home = () => {
    return (
        <div>
            <Banner />
            <Advertisement />
            <LatestUser />
        </div>
    );
};

export default Home;