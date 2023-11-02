import { useNavigate } from "react-router-dom";
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";
import FaqAcardion from "../../components/faq/Faq";
// import { useContext } from "react";
// import { SearchContext } from "../../context/searchContext";

const Home = () => {
  const navigate = useNavigate()
  // const {dispatch} = useContext(SearchContext)

  // const handleSearch = () => {
  //   dispatch({type: "NEW_SEARCH" , payload: {destination , dates , options}})
  //   navigate("/hotels", { state: { destination, dates, options } });
  // };
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <FaqAcardion/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
