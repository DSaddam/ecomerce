// // import React, { useContext } from 'react'
// // import './css/ShopCategory.css';
// // import { ShopContext } from '../Context/ShopContext';

// // const ShopCategory = (props) => {
// //   const {all_products} = useContext(ShopContext);
// //   return (
// //     <div className='shop-category'>
// //       <img src={props.banner} alt="" />
// //     </div>  
// //   )
// // }

// // export default ShopCategory
// import React, { useContext } from 'react'
// import { ShopContext } from '../Context/ShopContext'
// import dropdown_png from '../Components/Assets/dropdown_icon.png'
// import Item from '../Components/Items/Item'
// const ShopCategory = (props) => {
//   const {all_products} = useContext(ShopContext);
//   return (

//   )
// }

// export default ShopCategory

import React from 'react'
import { useContext } from 'react';
import ShopContext from '../Context/ShopContext';
import './css/ShopCategory.css';
import dropdown_png from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Items/Item';
const ShopCategory = (props) => {
  const all_products = useContext(ShopContext);
  console.log("all products>>>>",all_products,props.category);
  return (
      <div className='shop-category'>
        <img src={props.banner} alt="" />
        <div className="shopcategory-indexSort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="shopcategory-sort">
            sort by <img src={dropdown_png} alt="" />
          </div>
          <div className="shopcategory-products">
            {all_products.map((item, i) => {
              if (props.category === item.category) {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              }
            })}
          </div>
        </div>
      </div>
  )
}

export default ShopCategory
