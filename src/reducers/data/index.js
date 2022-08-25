
const defaultState = {
    items: 1,
    isLodging: false,
    isActionNav: 1

}




export const data = (state = defaultState, action) => {
    console.log(action.value);
    switch (action.type) {
      case 'oooo' :
        
      return {...state,items:action.value}
      case 'ooopo' :
      return {...state}

        default:
            return state;
    }
}