import { INNSER, LOADING, ACTIONNAV } from "../action";

const defaultState = {
    items: [{ a: 1 }],
    isLodging: false,
    isActionNav: 1

}



export const data = (state = defaultState, action) => {
    switch (action.type) {
        case INNSER:
            return { ...state, items: action.time }
        case LOADING:
            return { ...state, isLodging: action.data }
        case ACTIONNAV:
            return { ...state, isActionNav: action.data }
        default:
            return state;
    }
}