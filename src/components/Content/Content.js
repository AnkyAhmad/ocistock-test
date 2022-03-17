import React from "react";
import Cards from "../Cards/Cards";
import { useDispatch } from "react-redux";
import { ascendingProduk } from "../../actions/produkAction";
import { descendingProduk } from "../../actions/produkAction";
import "./Content.css";

function Content() {
  const dispatch = useDispatch();

  const ascendingPriceHandle = () => {
    dispatch(ascendingProduk());
  };

  const descendingProdukHandle = () => {
    dispatch(descendingProduk());
  };

  return (
    <>
      <div className='container'>
        <div className='container-filter'>
          <p className='text-filter'>Filter :</p>
          <button
            type='button'
            onClick={() => ascendingPriceHandle()}
            className='btn-filter-harting btn-bg-orange'
          >
            Harga Terendah
          </button>
          <button
            type='button'
            onClick={() => descendingProdukHandle()}
            className='btn-filter-harter btn-bg-grey'
          >
            Harga Terendah
          </button>
        </div>
        <Cards />
      </div>
    </>
  );
}

export default Content;
