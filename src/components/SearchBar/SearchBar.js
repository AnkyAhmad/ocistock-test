import React from "react";
import "./SearchBar.css";
import searchIcon from "../../searchIcon.png";

function SearchBar() {
  return (
    <form className='searchbar' action='/'>
      <input type='text' placeholder='Search...' name='search' />
      <img className='search-icon' src={searchIcon} alt='' />
    </form>
  );
}

export default SearchBar;
