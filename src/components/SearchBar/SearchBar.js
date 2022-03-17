import React from "react";
import searchIcon from "../../searchIcon.png";

function SearchBar() {
  return (
    <form className='flex items-center relative w-searchBar' action='/'>
      <input
        className='py-3 px-3 border border-solid border-white rounded-xl cursor-pointer placeholder:font-medium placeholder:text-slate-400 w-full'
        type='text'
        placeholder='Search...'
        name='search'
      />
      <img className='absolute right-3 w-5 h-5' src={searchIcon} alt='' />
    </form>
  );
}

export default SearchBar;
