import { createSlice } from "@reduxjs/toolkit";

const calculateTotal = (state) => {
  state.totalAmount = 0;
  state.items.forEach((element) => {
    state.totalAmount += +element.totalPrice;
  });
  // return items.reduce((total, item) => total + item.price * item.quantity, 0);
};
const initialState = {
  items: [],
  totalAmount: 0,
  user: null,
  userId: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // let find = state.items.findIndex((item) => item.id === action.payload.id);
      // if (find >= 0) {
      //   state.items[find].totalQuantities += 1;
      // } else {
      //   state.items.push(action.payload);
      // }
       
      
        if (state.items.length < 1) {
          state.items.push(action.payload);
        } else {
          const newItem = action.payload;
          const existingItem = state.items.find(item =>
            item.img === newItem.img &&
            item.desc === newItem.desc &&
            item.price === newItem.price &&
            item.sizeBottle === newItem.sizeBottle
            
          );
          if (!existingItem)
           {
            // state.items.totalQuantities += 1;
            state.items.push(action.payload);
          }
        
        }
        calculateTotal(state);
 
  
    },
    removeItem: (state, action) => {

   
        
    state.items = state.items.filter(
        (item) => JSON.stringify(item) !== JSON.stringify(action.payload)
      );
      calculateTotal(state);

    },
    increaseQuantity: (state, action) => {
        // state.items=state.items.map((item)=>{
        //                     if(item.id===action.payload){
        //                         return{...item,quantity:item.quantity+1}
        //                     }
        //                     return item
        //                 });

  state.items.forEach((element, index) => {
        if (JSON.stringify(element) === JSON.stringify(action.payload)) {
          element.totalQuantities += 1;
          element.totalPrice = parseInt(element.totalQuantities * element.price);

          console.log(element.totalQuantities);
          console.log("total price",element.totalPrice);
        }
      });
      calculateTotal(state);
    
    },
    decreaseQuantity: (state, action) => {

        // state.items=state.items.map((item)=>{
        //     if(item.id===action.payload){
        //         return{...item,quantity:item.quantity-1}
        //     }
        //     return item
        // });
      state.items.forEach((element, index) => {
        if (JSON.stringify(element) === JSON.stringify(action.payload)) {
          element.totalQuantities = Math.max(1, element.totalQuantities - 1);
          element.totalPrice = parseInt(element.totalQuantities * element.price);
          console.log(element.totalQuantities);
        }
      });
      calculateTotal(state);
    },
  
  },
});

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  
} = cartSlice.actions;
export default cartSlice.reducer;