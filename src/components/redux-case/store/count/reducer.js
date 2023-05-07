import { ADD_NUM, MINUS_NUM } from "./constants";

const initialState = {
    count: 0
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NUM:
            return {...state, count: state.count + action.num};
        case MINUS_NUM:
            return {...state, count: state.count - action.num};
        default:
            return state;
    }
}

export default reducer;