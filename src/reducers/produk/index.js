import { GET_LIST_PRODUK } from "../../actions/produkAction";
import { DELETE_PRODUK } from "../../actions/produkAction";
import { ASCENDING_PRODUK } from "../../actions/produkAction";
import { DESCENDING_PRODUK } from "../../actions/produkAction";

const intialSTate = {
  getListProdukResult: [],
  getListProdukLoading: false,
  getListProdukError: false,

  ASCENDING_PRODUK: [],
  DESCENDING_PRODUK: [],
  statusBtn: true,
};

const produk = (state = intialSTate, action) => {
  switch (action.type) {
    case GET_LIST_PRODUK:
      return {
        ...state,
        getListProdukResult: action.payload.data,
        getListProdukLoading: action.payload.loading,
        getListProdukError: action.payload.errorMessage,
      };
    case DELETE_PRODUK:
      //   console.log(`delete ini`, ...state.getListProdukResult.map((i) => i.id_product));
      console.log(action);
      return {
        ...state,
        getListProdukResult: state.getListProdukResult.filter((event) => event.id_product !== action.payload),
      };
    case ASCENDING_PRODUK:
      console.log("action ASCENDING_PRODUK", action);
      return {
        ...state,
        statusBtn: action.payload.statusBtn,
        ASCENDING_PRODUK: state.getListProdukResult.sort(function ({ price: a }, { price: b }) {
          return a - b;
        }),
      };
    case DESCENDING_PRODUK:
      console.log("action DESCENDING_PRODUK", action);
      return {
        ...state,
        statusBtn: action.payload.statusBtn,
        DESCENDING_PRODUK: state.getListProdukResult.sort(function ({ price: a }, { price: b }) {
          return b - a;
        }),
      };
    default:
      return state;
  }
};

export default produk;
