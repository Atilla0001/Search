import { SearchBar } from "../components/search/SearchBar";
import { SearchResultsList } from "../components/search/SearchResultsList";
import { useState } from "react";


const Home = () => {
    const [results, setResults] = useState([]);


    const [click, setClick] = useState(false)
    const clickNot = () => {
    setClick(!click)
    }
    
  return (
    <div style={{paddingTop:"10%",paddingLeft:"20%"}}>
                      <div className="search-bar-container" style={{ width: "70%", paddingTop: "15px" }} onClick={ clickNot}>
                    <SearchBar setResults={setResults} />
                    {results && results.length > 0 && <SearchResultsList results={results} />}
                    {
                       <div  style={{ display: click ? "block" : "none" }}>
                            <div className="container-fluid" style={{ backgroundColor: "#fff", borderRadius: "5px", marginTop: "6px", display: `${results.length == 0 ? "" : "none"}` }}>
                                <h3 > <p style={{ fontSize: "medium", padding: "10px" }}>No Data </p></h3></div>
                       </div>
                    }
                </div>

    </div>
  )
}

export default Home
