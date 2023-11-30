import { ADD_TO_CART } from './types';
import type { ResponseData } from '../interfaces/response.interface'

export const addToCart = (product: ResponseData) => ({
  type: ADD_TO_CART,
  payload: product
});