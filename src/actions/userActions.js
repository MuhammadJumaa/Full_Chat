import config from '../config';

export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';

export const fetchProductsSuccess = users => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { users }
});

export const fetchProductsFailure = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: { error }
});

export const fetchProductsBegin = () => ({
    type: FETCH_PRODUCTS_BEGIN
});

export function fetchProducts() {
    return dispatch => {
      dispatch(fetchProductsBegin());
        return fetch(config.APILink+'users')
        .then(res => res.json())
        .then(json => {
            dispatch(fetchProductsSuccess(json.results));
            return json.results;
        })
        .catch(error => dispatch(fetchProductsFailure(error)));
    };
}