import { put, takeLatest } from 'redux-saga/effects';
import { ADD_TO_CART, ADD_TO_CART_SUCCESS, CartAction } from './types';

function* addToCartSaga(action: CartAction) {
  try {
    yield put({ type: ADD_TO_CART_SUCCESS, payload: action.payload });
  } catch (error) {
    console.log(error)
  }
}

function* rootSaga() {
  yield takeLatest(ADD_TO_CART, addToCartSaga);
}

export default rootSaga;
