//Reducer’lara ulaşarak onları tetikleyen, 
//store’daki güncellemesi gereken veriyi yollan bir araç. 
//Neyi güncellemesi gerektiğini adlandırırken “type” 
//ile belirtmemiz gerekirken, değiştirmesi gereken veriyi 
//payload’larla taşır

import config from '../config';
import axios from 'axios';

export const fetchRoomsSuccess = rooms => ({
  type: 'FETCH_ROOMS_SUCCESS',
  payload: { rooms }
});

export function fetchRooms() {
    return dispatch => {
        var reqconfig = {
            headers: { Authorization: localStorage.usertoken }
        };
        return axios.post(config.APILink+'/rooms',reqconfig)
        .then(res => {return res.data;})
        .then(json => {
            dispatch(fetchRoomsSuccess(json.results));
            return json.results;
        })
        .catch(error => error);
    };
}