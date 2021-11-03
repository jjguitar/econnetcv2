const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_MODAL':
      return {
        ...state,
        openModal: !state.openModal
      }
    case 'SET_FAVORITE':
      return {
        ...state,
        myList: [...state.myList, action.payload]
      }
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter(items => items.id !== action.payload)
      }
    case 'LOGIN_REQUEST':
    case 'REGISTER_REQUEST':
    case 'REGISTER_DATA':
      return {
        ...state,
        meetings: action.payload
      }
    case 'SET_LOAD':
      return {
        ...state,
        loading: action.payload,
      }
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload
      }
    case 'SET_SEARCH_VALUE':
      return {
        ...state,
        searchValue: action.payload
      }
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing: state.trends.find(item => item.id === Number(action.payload)) ||
          state.originals.find(item => item.id === Number(action.payload)) || {}
      }
    case 'FIND_DATA':
      // const newExps = [...state.meetings]
      // return newExps.find(item => item.id === (action.payload))
      let newExps = []
      if(!state.searchValue.length >= 1) {
        newExps = state.meetings
      } else {
        newExps = state.meetings.filter(exp => {
          const expText = exp.name.toLowerCase()
          const searchedText = state.searchValue.toLowerCase()
    
          return expText.includes(searchedText)
        })
      }
      return {
        ...state,
        searchedExps: newExps
      }
    default:
      return state;
  }
};

export default reducer;