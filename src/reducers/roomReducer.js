//store tarafın'dan sağlanın state'leri alır , 
//istenildiği şekilde günceller , 
//güncellenmiş data'yı store'a tekrar'dan gönderir.

//pure function - > tek bir değer return etmek.
//payload -> ilgili data'yı göndermek için


  const initialState = {
    items: [],
    loading: false,
    test : "testt",
    error: null
  };

  export default function roomReducer(state = initialState, action) {
    switch(action.type) {
      case 'FETCH_ROOMS_SUCCESS':
        console.log("selsese");
        return {
          ...state,
          loading: false,
          items: action.payload.rooms
        };
      default:
        return state;
    }
  }
