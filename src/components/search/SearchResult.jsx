import "./SearchResult.css";
import PropTypes from 'prop-types';



export const SearchResult = ( { result } ) => {
  return (
    <div
      className="search-result"
      onClick={() => alert(`Seçildi ${result}!`)}
    /*   onClick={() =>  navigate(`/videoPage?videoId=${onClick}`) } */
    >
     <div  >{result }</div> 
     
    </div>
  );
};
SearchResult.propTypes = {
  result: PropTypes.array
};