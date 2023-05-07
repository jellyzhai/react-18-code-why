import { GET_VUE_GOLD_VIPS, GET_VUE_BRONZE_VIPS } from "./constants";

const initialState = {
    vueSilverVips: [],
    vueBronzeVips: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_VUE_GOLD_VIPS:
            return {...state, vueSilverVips: action.vueSilverVips};
        case GET_VUE_BRONZE_VIPS:
            return {...state, vueBronzeVips: action.vueBronzeVips};
        default:
            return state;
    }
}

export default reducer;