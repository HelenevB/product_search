import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function ProductList(props) {


const loading = props.loading 
let tableDisplay;

const allAttractions = props.attractionList.filter(
    (attraction) => attraction.price_from_adult > 0
  );
  console.log(`for ${props.searchValue} for ${props.location}`, allAttractions);

const attractions = allAttractions.map((attraction, index) => (
  <tr key={index}>
    <td className="attraction">
      <img
        id="experience-image"
        src={attraction.img_sml}
        alt="experience-img"
      />
      {attraction.title}
    </td>
    <td>{attraction.dest}</td>
    <td>{attraction.price_from_adult}</td>
  </tr>

));

if(!loading){

  tableDisplay= 
  <div>
  <table id="product-table">
    <thead>
      <tr>
        <th>Attraction</th>
        <th>Destinaton</th>
        <th> Adult Prices ({props.currency.sale_cur})</th>
      </tr>
    </thead>
    <tbody>{attractions}</tbody>
  </table>
</div>
  
  } else{

  tableDisplay =
  <div> <div id="loading"></div>
  <div id="load-sign">  <h1 id="load-text">Loading<br/><FontAwesomeIcon icon={faSpinner} spinPulse size="lg"></FontAwesomeIcon></h1></div>
  <div id="load-background">   <table id="product-table">
        <thead>
          <tr>
            <th>Attraction</th>
            <th>Destinaton</th>
            <th> Adult Price ({props.currency.sale_cur})</th>
          </tr>
        </thead>
        <tbody>{attractions}</tbody>
   </table>
  </div>
  </div>
 
  };
    return (
      <div>{tableDisplay}</div>
      
    );
  }
  