export const GET_LIST_PRODUK = "GET_LIST_PRODUK";
export const DELETE_PRODUK = "DELETE_PRODUK";
export const ASCENDING_PRODUK = "ASCENDING_PRODUK";
export const DESCENDING_PRODUK = "DESCENDING_PRODUK";

export const getListProduk = () => {
  return (dispatch) => {
    //Loading
    dispatch({
      type: GET_LIST_PRODUK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // Get Api
    fetch("https://dev.ocistok.co.id/test-fe", {
      method: "GET",
      headers: { "Content-Type": "Application/json" },
    })
      .then((response) => response.json())
      .then((json) => {
        //   Success
        dispatch({
          type: GET_LIST_PRODUK,
          payload: {
            loading: false,
            data: json.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        //   Fail
        dispatch({
          type: GET_LIST_PRODUK,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};

export const deleteProduk = (id_product) => {
  return {
    type: "DELETE_PRODUK",
    payload: id_product,
  };
};

export const ascendingProduk = () => {
  return {
    type: "ASCENDING_PRODUK",
    payload: {
      statusBtn: true,
    },
  };
};

export const descendingProduk = () => {
  return {
    type: "DESCENDING_PRODUK",
    payload: {
      statusBtn: false,
    },
  };
};
