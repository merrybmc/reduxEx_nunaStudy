const initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREASE':
      return {
        ...state,
        count: action.payload ? state.count + Number(action.payload) : state.count + 1,
      };
    case 'DECREASE':
      return {
        ...state,
        count: action.payload ? state.count - Number(action.payload) : state.count - 1,
      };
    case 'MULTIPLE':
      return {
        ...state,
        count: action.payload ? state.count * Number(action.payload) : state.count * 2,
      };
    case 'DIVIDE':
      return {
        ...state,
        count: action.payload ? state.count / Number(action.payload) : state.count / 2,
      };
    case 'RESET':
      return { ...state, count: 0 };
    default:
      return { ...state };
  }
}

export default reducer;
