import React from "react";
import ShopContext from "./ShopContext";
import shop_products from '../Components/Assets/all_product';
const ShopContextState = (props) => {
    const state = shop_products;
    console.log("state:-",state)
  return (
    <div>
      <ShopContext.Provider value={state}>
           {props.children}
      </ShopContext.Provider>
    </div>
  )
}

export default ShopContextState
