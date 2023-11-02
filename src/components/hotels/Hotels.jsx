import { Link } from "react-router-dom";
import "./hotels.css";

const Hotels = ({item}) => {
    return (
    <div className="HotelsItem">
      <img
        src={item.photos[0]}
        alt=""
        className="hiImg"
      />
      <div className="hiDesc">
        <h1 className="hiTitle">{item.name}</h1>
        <span className="hiDistance">{item.distance}</span>
        <span className="hiTaxiOp">Free airport taxi</span>
        <span className="hiSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="hiFeatures">
          {item.desc}
        </span>
        <span className="hiCancelOp">Free cancellation </span>
        <span className="hiCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="hiDetails">
       {item.rating && <div className="hiRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="hiDetailTexts">
          <span className="hiPrice">${item.cheapestPrice}</span>
          <span className="hiTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="hiCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
