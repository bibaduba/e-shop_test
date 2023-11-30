import type { ResponseData } from '../interfaces/response.interface'

export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';


export interface CartState {
  items: ResponseData[];
  loading: boolean;
}

interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: ResponseData
}

interface AddToCartSuccessAction {
  type: typeof ADD_TO_CART_SUCCESS;
  payload: ResponseData;
}

export type CartAction = AddToCartAction | AddToCartSuccessAction;
