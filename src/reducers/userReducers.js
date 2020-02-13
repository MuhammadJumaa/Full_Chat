//store tarafın'dan sağlanın state'leri alır , 
//istenildiği şekilde günceller , 
//güncellenmiş data'yı store'a tekrar'dan gönderir.

//pure function - > tek bir değer return etmek.
//payload -> ilgili data'yı göndermek için

import {UPDATE_USER} from '../actions/userActions';

export default function userReducer(state = '', {type,payload}){
    switch(type){
        case UPDATE_USER:
            return payload.user
        default:
            return state;
    }
}