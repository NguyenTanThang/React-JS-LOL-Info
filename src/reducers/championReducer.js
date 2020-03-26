import {
    FETCH_CHAMPIONS,
    GET_CHAMPION_BY_ID,
    SEARCH_CHAMPION_BY_NAME
} from "../actions/types";

const initialState = {
    champions: [],
    championImages: [],
    champion: {}
}

const championReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHAMPIONS:
            return {
                ...state,
                champions: action.payload.champions,
                championImages: action.payload.championImages,
            }
            break;
        case SEARCH_CHAMPION_BY_NAME:
            return {
                ...state,
                champions: action.payload.champions,
                championImages: action.payload.championImages,
            }
            break;
        case GET_CHAMPION_BY_ID:
            return {
                ...state,
                champion: action.payload.champion
            }
            break;
        default:
            return state;
            break;
    }
}

export default championReducer;