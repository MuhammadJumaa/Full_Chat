//Reducer’lara ulaşarak onları tetikleyen, 
//store’daki güncellemesi gereken veriyi yollan bir araç. 
//Neyi güncellemesi gerektiğini adlandırırken “type” 
//ile belirtmemiz gerekirken, değiştirmesi gereken veriyi 
//payload’larla taşır

import config from '../config';
import axios from 'axios';


//rooms
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
                dispatch(fetchRoomsSuccess(json));
                return json;
            })
            .catch(error => error);
    };
}


//users
export function fetchUsers() {
    return dispatch => {
        var reqconfig = {
            headers: { Authorization: localStorage.usertoken }
        };
        return axios.post(config.APILink + '/users', reqconfig)
            .then(res => { return res.data; })
            .then(json => {
                dispatch(fetchUsersSuccess(json));
                return json;
            })
            .catch(error => error);
    };
}

export const fetchUsersSuccess = users => ({
    type: 'FETCH_USERS_SUCCESS',
    payload: users.results,
    code: users.code
});

//getMessage , inputActive
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
        messages: messages ,
        friendId:friendId
    }
});


//sendMessage
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
        messages:messages
    },
});


