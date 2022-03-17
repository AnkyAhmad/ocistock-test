import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListProduk } from "../../actions/produkAction";
import { deleteProduk } from "../../actions/produkAction";

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
          <div className='grid grid-cols-5 gap-6 my-9'>
            {getListProdukResult.map((produk, e) => (
              <div key={e} className='w-card h-card border-2 rounded-2xl flex flex-col items-center py-2.5'>
                <img className='w-40 h-36 mb-2' src={produk.image} alt='' />
                <div className='mx-3 self-center'>
                  <div className='text-xs font-normal mb-2.5 line-clamp-2'>{produk.productName}</div>
                  <div className='text-xs font-normal text-ocistock mb-2.5'>Rp.{produk.price}</div>
                  <button
                    type='button'
                    className='text-xs font-normal w-full bg-redBtn py-1.5 rounded-md text-white'
                    onClick={() => deleteHandle(produk.id_product)}
                  >
                    Hapus
                  </button>
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
