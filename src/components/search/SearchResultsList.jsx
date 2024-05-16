import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";
import PropTypes from 'prop-types';

export const SearchResultsList = ({ results }) => {
  return (
    
     <div className="results-list"  style={{display:`${results.length > 0 ? "" : "none"  }`}}>
      {
      results.map((result, id) => {
        return <SearchResult result={result.title} key={id} />;
      })
      }
    </div> 



  );
};
SearchResultsList.propTypes = {
  results: PropTypes.array
};