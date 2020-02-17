//Reducer’lara ulaşarak onları tetikleyen, 
//store’daki güncellemesi gereken veriyi yollan bir araç. 
//Neyi güncellemesi gerektiğini adlandırırken “type” 
//ile belirtmemiz gerekirken, değiştirmesi gereken veriyi 
//payload’larla taşır

import config from '../config';

import axios from 'axios';
export const FETCH_ROOMS_SUCCESS = 'FETCH_ROOMS_SUCCESS';
export const FETCH_ROOMS_FAILURE = 'FETCH_ROOMS_FAILURE';
export const FETCH_ROOMS_BEGIN   = 'FETCH_ROOMS_BEGIN';

export const fetchRoomsSuccess = rooms => ({
  type: FETCH_ROOMS_SUCCESS,
  payload: { rooms }
});

export const fetchRoomsFailure = error => function(){ 
    console.log(error,3); return ({
    type: FETCH_ROOMS_FAILURE,
    payload: { error }
})};

export const fetchRoomsBegin = () => ({
    type: FETCH_ROOMS_BEGIN
});

export function fetchRooms() {
    return dispatch => {
      dispatch(fetchRoomsBegin());
        var reqconfig = {
            headers: { Authorization: localStorage.usertoken }
        };
        return axios.post(config.APILink+'/rooms',reqconfig)
        .then(res => {return res.data;})
        .then(json => {
            dispatch(fetchRoomsSuccess(json.results));
            return json.results;
        })
        .catch(error => dispatch(fetchRoomsFailure(error)));
    };
}