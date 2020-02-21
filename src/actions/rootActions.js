//Reducer’lara ulaşarak onları tetikleyen, 
//store’daki güncellemesi gereken veriyi yollan bir araç. 
//Neyi güncellemesi gerektiğini adlandırırken “type” 
//ile belirtmemiz gerekirken, değiştirmesi gereken veriyi 
//payload’larla taşır

import config from '../config';
import axios from 'axios';

export const fetchRoomsSuccess = rooms => {
    return {
        type: 'FETCH_ROOMS_SUCCESS',
        payload: rooms.results,
        code: rooms.code
    }
};

export function fetchRooms() {
    return dispatch => {
        var reqconfig = {
            headers: { Authorization: localStorage.usertoken }
        };
        return axios.post(config.APILink + '/rooms', reqconfig)
            .then(res => { return res.data; })
            .then(json => {
                //  console.log(json);
                dispatch(fetchRoomsSuccess(json));
                return json;
            })
            .catch(error => error);
    };
}


//users

export const fetchProductsSuccess = users => ({
    type: 'FETCH_PRODUCTS_SUCCESS',
    payload: users.results,
    code: users.code
});

export function fetchProducts() {
    return dispatch => {
        var reqconfig = {
            headers: { Authorization: localStorage.usertoken }
        };
        return axios.post(config.APILink + '/users', reqconfig)
            .then(res => { return res.data; })
            .then(json => {
                dispatch(fetchProductsSuccess(json));
                return json;
            })
            .catch(error => error);
    };
}



export function fetchInputState(friendId) {
    return dispatch => {
        var reqconfig = {
            headers: { Authorization: localStorage.usertoken },
            'friend_id': friendId
        };
        return axios.post(config.APILink + '/messages', reqconfig)
            .then(res => { return res.data; })
            .then(json => {
                dispatch(fetchInputStateSuccess(json.results,friendId));
                return json.results;
            })
            .catch(error => error);
    };
}


export const fetchInputStateSuccess = (messages,friendId) => ({
    type: 'FETCH_ACTIVE_INPUT',
    payload: {
        inputState: true,
        messages: messages ,
        friendId:friendId
    }
});



export function fetchSendMessage(message, friendId) {
    return dispatch => {
        var reqconfig = {
            headers:
            {
                Authorization: localStorage.usertoken
            },
            'friend_id': friendId,
            "Message": message
        };
        return axios.post(config.APILink + '/AddMessages', reqconfig)
            .then(res => { return res.data; })
            .then(json => {
                dispatch(fetchSendMessageSuccess(json.results));
                return json.results;
            })
            .catch(error => error);
    };
}

export const fetchSendMessageSuccess = (messages) => ({
    type: 'FETCH_SEND_MESSAGE',
    payload: {
        messages: messages
    },
});


