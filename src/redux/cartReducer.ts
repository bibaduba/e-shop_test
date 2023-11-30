import { ADD_TO_CART, ADD_TO_CART_SUCCESS, CartAction, CartState } from './types';

const initialState: CartState = {
  items: [],
  loading: false,
};

const cartReducer = (state = initialState, action: CartAction): CartState => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        loading: true,
      };
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.payload],
        loading: false,
      };
    default:
      return state;
  }
};

export default cartReducer;