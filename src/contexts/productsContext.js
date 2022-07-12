import React, { useReducer } from "react";
import axios from "axios";

export const productsContext = React.createContext();

const INIT_STATE = {
  products: [],
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
}

const API = "https://backend-for-fs-makers.herokuapp.com/api/v1";

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  async function getProducts() {
    try {
      const res = await axios(`${API}/products/`);
      console.log(res.data.count);
      console.log(res.data.results);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <productsContext.Provider value={{ getProducts }}>
      {children}
    </productsContext.Provider>
  );
};
export default ProductsContextProvider;
//CORS
