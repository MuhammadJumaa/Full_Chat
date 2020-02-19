//store tarafın'dan sağlanın state'leri alır , 
//istenildiği şekilde günceller , 
//güncellenmiş data'yı store'a tekrar'dan gönderir.

//pure function - > tek bir değer return etmek.
//payload -> ilgili data'yı göndermek için


const initialState = {
    rooms: [],
    users: [],
    currentConversationMessages: [],
    inputState : true,
  };

  export default function appReducer(state = initialState, action) {
    switch(action.type) {
      case 'FETCH_ROOMS_SUCCESS':
        return {
          ...state,
          rooms: action.payload.rooms
        };
      case 'FETCH_PRODUCTS_SUCCESS':
        return {
          ...state,
          users: action.payload.users
        };
        
        case 'FETCH_ACTIVE_INPUT':
          return {
            ...state,
            inputState :  false,
            currentConversationMessages:action.payload.messages
          };
      default:
        return state;
    }
    
  }
