import {
    FETCH_ITEMS,
    SEARCH_ITEM_BY_NAME
} from "../actions/types";

const initialState = {
    items: [],
    itemImages: []
}

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ITEMS:
            return {
                ...state,
                items: action.payload.items,
                itemImages: action.payload.itemImages,
            }
            break;
        case SEARCH_ITEM_BY_NAME:
            return {
                ...state,
                items: action.payload.items,
                itemImages: action.payload.itemImages,
            }
            break;
        default:
            return state;
            break;
    }
}

export default itemReducer;