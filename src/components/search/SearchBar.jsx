import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import PropTypes from 'prop-types';
import "./SearchBar.css";
import axios from "axios";

export const SearchBar = ( { setResults } ) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.data)
      .then((data) => {
        const results = data.filter((items) =>
          items.title.toLowerCase().includes(value.toLowerCase())
        );
        
        setResults(results);
      });
  };
  



  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Search"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
SearchBar.propTypes = {
  setResults: PropTypes.array
};