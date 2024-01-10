import Advertisement from "../Advertisement/Advertisement";
import Banner from "../Banner/Banner";
import LatestUser from "../LatestUser/LatestUser";
import UserReview from "../UserReview/UserReview";

const Home = () => {
    return (
        <div>
            <Banner />
            <Advertisement />
            <LatestUser />
            <UserReview />
        </div>
    );
};

export default Home;