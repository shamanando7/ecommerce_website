// import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   // increace qty
//     const incqty = (product) => {
//         const exsit = cart.find((x) => {
//             return x.id === product.id
//         })
//         setCart(cart.map((curElm) => {
//             return curElm.id === product.id ? { ...exsit, qty: exsit.qty + 1 } : curElm
//         }))
//     }

//   // decreace qty
//   const decqty = (product) => {
//     const exsit = cart.find((x) => {
//         return x.id === product.id
//     })
//     setCart(cart.map((curElm) => {
//         return curElm.id === product.id ? { ...exsit, qty: exsit.qty - 1 } : curElm
//     }))
// }

//   // Remove cart product
//   const removeproduct = (product) => {
//     const exsit = cart.find((x) => {
//         return x.id === product.id
//     })
//     if (exsit.qty > 0) {
//         setCart(cart.filter((x) => {
//             return x.id !== product.id
//         }))
//     }
// }

//   // Total price
//   const Totalprice = cart.reduce((price, item) => price + item.qty * item.Price, 0)

//   return (
//     <CartContext.Provider value={{ cart, setCart, incqty, decqty, removeproduct, Totalprice }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };
