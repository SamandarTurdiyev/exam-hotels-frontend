import useFetch from "../../hooks/useFetch.js";
import "./propertyList.css";

const PropertyList = () => {
  const {data ,loading } = useFetch("/hotels/countByType")
const images = [
  "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
  "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
  "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
  "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
  "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
]
  return (
    <div className="pList">
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
        </div> :  <>
      {data && 
        images.map((img , i) => (
          
        <div className="pListItem" key={i}>
        <img
          src={img}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>{data[i]?.type}</h1>
          <h2>{data[i]?.count} {data[i]?.type}</h2>
        </div>
      </div>
      )) 
      }
      </>}
    </div>
  );
};

export default PropertyList;
