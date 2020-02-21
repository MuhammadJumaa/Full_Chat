//store tarafın'dan sağlanın state'leri alır , 
//istenildiği şekilde günceller , 
//güncellenmiş data'yı store'a tekrar'dan gönderir.

//pure function - > tek bir değer return etmek.
//payload -> ilgili data'yı göndermek için


const initialState = {
  rooms: [],
  users: [],
  currentConversationMessages: [],
  inputState: true,
  code: 0,
  activeClass: false,
  friendId:0
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_ROOMS_SUCCESS':
      // console.log(action);
      return {
        ...state,
        rooms: action.payload,
        code: action.code
      };
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        users: action.payload,
        code: action.code
      };
    case 'FETCH_ACTIVE_INPUT':
      return {
        ...state,
        inputState: false,
        currentConversationMessages: action.payload.messages,
        friendId: action.payload.friendId
      };
    case 'FETCH_SEND_MESSAGE':
      return {
        ...state,
        message: action.payload.messages,
      };
    default:
      return state;
  }

}
