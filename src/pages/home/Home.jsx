import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="header-container">
      <Navbar />
      <Header/>
      </div>
      <div className="homeContainer">
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
      </div>
    </div>
  );
};

export default Home;
