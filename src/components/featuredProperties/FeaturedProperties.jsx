import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch.js";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true");

	
  return (
    <div className="fp">
       {loading? 
       <div>
        <svg className="pl" viewBox="0 0 128 128" width="128px" height="128px">
	<defs>
		<linearGradient id="pl-grad" x1="0" y1="0" x2="1" y2="1">
			<stop offset="0%" stop-color="#000" />
			<stop offset="100%" stop-color="#fff" />
		</linearGradient>
		<mask id="pl-mask">
			<rect x="0" y="0" width="128" height="128" fill="url(#pl-grad)" />
		</mask>
	</defs>
	<g stroke-linecap="round" stroke-width="8" stroke-dasharray="32 32">
		<g stroke="hsl(193,90%,50%)">
			<line className="pl__line1" x1="4" y1="48" x2="4" y2="80" />
			<line className="pl__line2" x1="19" y1="48" x2="19" y2="80" />
			<line className="pl__line3" x1="34" y1="48" x2="34" y2="80" />
			<line className="pl__line4" x1="49" y1="48" x2="49" y2="80" />
			<line className="pl__line5" x1="64" y1="48" x2="64" y2="80" />
			<g transform="rotate(180,79,64)">
				<line className="pl__line6" x1="79" y1="48" x2="79" y2="80" />
			</g>
			<g transform="rotate(180,94,64)">
				<line className="pl__line7" x1="94" y1="48" x2="94" y2="80" />
			</g>
			<g transform="rotate(180,109,64)">
				<line className="pl__line8" x1="109" y1="48" x2="109" y2="80" />
			</g>
			<g transform="rotate(180,124,64)">
				<line className="pl__line9" x1="124" y1="48" x2="124" y2="80" />
			</g>
		</g>
		<g stroke="hsl(283,90%,50%)" mask="url(#pl-mask)">
			<line className="pl__line1" x1="4" y1="48" x2="4" y2="80" />
			<line className="pl__line2" x1="19" y1="48" x2="19" y2="80" />
			<line className="pl__line3" x1="34" y1="48" x2="34" y2="80" />
			<line className="pl__line4" x1="49" y1="48" x2="49" y2="80" />
			<line className="pl__line5" x1="64" y1="48" x2="64" y2="80" />
			<g transform="rotate(180,79,64)">
				<line className="pl__line6" x1="79" y1="48" x2="79" y2="80" />
			</g>
			<g transform="rotate(180,94,64)">
				<line className="pl__line7" x1="94" y1="48" x2="94" y2="80" />
			</g>
			<g transform="rotate(180,109,64)">
				<line className="pl__line8" x1="109" y1="48" x2="109" y2="80" />
			</g>
			<g transform="rotate(180,124,64)">
				<line className="pl__line9" x1="124" y1="48" x2="124" y2="80" />
			</g>
		</g>
	</g>
</svg>
       </div> :
       <>
       {data?.map((item) => (
        <div className="fpItem" key={item._id}>
        <img
          src={item?.photos[0]}
          alt=""
          className="fpImg"
        />
        <span className="fpName">{item?.name}</span>
        <span className="fpCity">{item?.city}</span>
        <span className="fpPrice">Starting from ${item?.cheapestPrice}</span>
        {item?.rating && 
        <div className="fpRating">
          <button>{item?.rating}</button>
		  <Link to='' ><button>See again </button></Link>
          <span>Excellent</span>
        </div>}
      </div> 
       ))}
       </>
       }

    </div>
  );
};

export default FeaturedProperties;
