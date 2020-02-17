//store tarafın'dan sağlanın state'leri alır , 
//istenildiği şekilde günceller , 
//güncellenmiş data'yı store'a tekrar'dan gönderir.

//pure function - > tek bir değer return etmek.
//payload -> ilgili data'yı göndermek için

import {
    FETCH_ROOMS_BEGIN,
    FETCH_ROOMS_SUCCESS,
    FETCH_ROOMS_FAILURE
  } from '../actions/roomActions';
  const initialState = {
    items: [],
    loading: false,
    error: null
  };
  export default function roomReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_ROOMS_BEGIN:
        // Mark the state as "loading" so we can show a spinner or something
        // Also, reset any errors. We're starting fresh.
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_ROOMS_SUCCESS:
        // All done: set loading "false".
        // Also, replace the users with the ones from the server
        return {
          ...state,
          loading: false,
          items: action.payload.rooms
        };
  
      case FETCH_ROOMS_FAILURE:
        // The request failed. It's done. So set loading to "false".
        // Save the error, so we can display it somewhere.
        // Since it failed, we don't have users to display anymore, so set `users` empty.
        //
        // This is all up to you and your app though:
        // maybe you want to keep the users around!
        // Do whatever seems right for your use case.
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          items: []
        };
  
      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }
