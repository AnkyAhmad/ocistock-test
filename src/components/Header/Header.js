import React from "react";
import LogoOcistock from "../../Logo.jpg";
import ButtonComp from "../Buttons/ButtonComp";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className='headers'>
        <div className='header-left'>
          <img className='logo-header' src={LogoOcistock} alt='' />
        </div>
        <div className='header-center'>
          <SearchBar />
        </div>
        <div className='header-right'>
          <ButtonComp classNameBtn='margin-r-20' textBtn='Login' />
          <ButtonComp textBtn='Daftar' />
        </div>
      </div>
    </>
  );
};

export default Header;
