import React, { useState } from "react";
import './nav.css'
import { MovieSearch } from "../../../utils/utilities";

const NavigationBar=()=>{
    const [searchValue,setsearchValue]=useState("")
    const [searchResults,setsearchResults]=useState("")

    const handleInput=(event)=>{
        setsearchValue(event.target.value)
    };
    const handlesearch = async()=>{
        const results = await MovieSearch(searchValue);
        setsearchResults(results.results)
        
    };
    return(
        <div className="navigation">
            <nav className="nav">
                <div>
                    <h1>Movies</h1>
                </div>
                <div >
                    <input  value={searchValue} onChange={handleInput} type="text" placeholder="Search"/>
                    <button onClick={handlesearch} className="search">Search</button>
                </div>
                <div className="bars">
                   <a>Home</a>
                   <a>Movie List</a>
          <button className="reg">Sign in</button>
         </div>
            </nav>
            {searchResults.length > 0 && (
        <div className="results">
          {searchResults.map((movie) => (
            <div key={movie.id} className="result">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                
              />
              <h3>{movie.title}</h3>
              {/* <p>{movie.overview}</p> */}
            </div>
          ))}
        </div>
      )}
        </div>
    )
}
export default NavigationBar;