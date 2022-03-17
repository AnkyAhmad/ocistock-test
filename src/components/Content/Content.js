import React from "react";
import Cards from "../Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { ascendingProduk } from "../../actions/produkAction";
import { descendingProduk } from "../../actions/produkAction";

function Content() {
  const dispatch = useDispatch();
  const { statusBtn } = useSelector((state) => state.produkReducer);

  console.log(statusBtn);

  const ascendingPriceHandle = () => {
    dispatch(ascendingProduk());
  };

  const descendingProdukHandle = () => {
    dispatch(descendingProduk());
  };

  return (
    <>
      <div className='my-5 mx-10'>
        <div className='flex items-center'>
          <p className='font-medium text-base mr-5'>Filter :</p>
          <button
            type='button'
            onClick={() => ascendingPriceHandle()}
            className={`mr-3 text-base text-white py-1.5 px-5 rounded-2xl font-semibold ${
              statusBtn ? "bg-ocistock" : "bg-neutral-400"
            }`}
          >
            Harga Terendah
          </button>
          <button
            type='button'
            onClick={() => descendingProdukHandle()}
            className={`mr-3 text-base text-white py-1.5 px-5 rounded-2xl font-semibold ${
              !statusBtn ? "bg-ocistock" : "bg-neutral-400"
            }`}
          >
            Harga Tertinggi
          </button>
        </div>
        <Cards />
      </div>
    </>
  );
}

export default Content;
