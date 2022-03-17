import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListProduk } from "../../actions/produkAction";
import { deleteProduk } from "../../actions/produkAction";
import "./Card.css";

function Cards() {
  const dispatch = useDispatch();
  const { getListProdukResult, getListProdukLoading, getListProdukError } = useSelector(
    (state) => state.produkReducer
  );

  useEffect(() => {
    dispatch(getListProduk());
  }, [dispatch]);

  const deleteHandle = (id_product) => {
    dispatch(deleteProduk(id_product));
  };

  return (
    <>
      {getListProdukResult ? (
        <>
          <div className='container-cards'>
            {getListProdukResult.map((produk, e) => (
              <div key={e} className='cards'>
                <img className='card-image' src={produk.image} alt='' />
                <div className='card-text'>
                  <div className='text-title line-clamp'>{produk.productName}</div>
                  <div className='text-price'>Rp.{produk.price}</div>
                  <div className='btn-delete' onClick={() => deleteHandle(produk.id_product)}>
                    Delete
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : getListProdukLoading ? (
        <p> Loading ....</p>
      ) : (
        <p>{getListProdukError ? getListProdukError : "Gagal Menamplilkan Data"}</p>
      )}
    </>
  );
}

export default Cards;
