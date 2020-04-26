import React from "react";
import "../constants/styles.css";

const Search = props => {
  return (
    <div className="search">
      <p>Filter our current cities:</p>
      <input
        onChange={props.handleInput}
        type="text"
        placeholder="Search by city..."
      />
    </div>
  );
};

export default Search;
