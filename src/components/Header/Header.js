import React from "react";
import LogoOcistock from "../../Logo.jpg";
import ButtonComp from "../Buttons/ButtonComp";
import SearchBar from "../SearchBar/SearchBar";

function Header() {
  return (
    <>
      <div className='h-20 bg-ocistock flex justify-between items-center'>
        <img className='logo-header w-44 ml-10' src={LogoOcistock} alt='' />
        <SearchBar />
        <div className='flex mr-10'>
          <ButtonComp classNameBtn='mr-5' textBtn='Login' />
          <ButtonComp textBtn='Daftar' />
        </div>
      </div>
    </>
  );
}

export default Header;
