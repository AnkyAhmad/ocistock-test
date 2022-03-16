import React from "react";
import Cards from "../Cards/Cards";
import "./Content.css";

const Content = () => {
  return (
    <>
      <div className='container'>
        <div className='container-filter'>
          <p className='text-filter'>Filter :</p>
          <button type='button' className='btn-filter-harting btn-bg-orange'>
            Harga Terendah
          </button>
          <button type='button' className='btn-filter-harter btn-bg-grey'>
            Harga Terendah
          </button>
        </div>
        <Cards />
      </div>
    </>
  );
};

export default Content;
