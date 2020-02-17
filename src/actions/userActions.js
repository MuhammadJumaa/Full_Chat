//Reducer’lara ulaşarak onları tetikleyen, 
//store’daki güncellemesi gereken veriyi yollan bir araç. 
//Neyi güncellemesi gerektiğini adlandırırken “type” 
//ile belirtmemiz gerekirken, değiştirmesi gereken veriyi 
//payload’larla taşır

import config from '../config';

import axios from 'axios';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';

export const fetchProductsSuccess = users => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { users }
});

export const fetchProductsFailure = error => function(){ 
    console.log(error,3); return ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: { error }
})};

export const fetchProductsBegin = () => ({
    type: FETCH_PRODUCTS_BEGIN
});

export function fetchProducts() {
    return dispatch => {
      dispatch(fetchProductsBegin());
    var reqconfig = {
            headers: { Authorization: localStorage.usertoken }
        };
        return axios.post(config.APILink+'/users',reqconfig)
        .then(res => {return res.data;})
        .then(json => {
            dispatch(fetchProductsSuccess(json.results));
            return json.results;
        })
        .catch(error => dispatch(fetchProductsFailure(error)));
    };
}