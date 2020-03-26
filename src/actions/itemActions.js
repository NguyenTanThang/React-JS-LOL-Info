import axios from "axios";
import {
    FETCH_ITEMS,
    SEARCH_ITEM_BY_NAME
} from "./types";
import {
    getItemImage,
    getAllItemsURL
} from "../config/config";

export const fetchItems = () => {
    return async (dispatch) => {
        let res = await axios.get(getAllItemsURL)
        let items = res.data.data;
        let itemImages = [];
        let arrayOfItems = [];
        const itemIDs = Object.keys(items)

        for (let index = 0; index < itemIDs.length; index++) {
            const element = itemIDs[index];
            
            items[element].id = element;
            arrayOfItems.push(items[element])
            itemImages.push(getItemImage(element))
        }
        
        return dispatch({
            type: FETCH_ITEMS,
            payload: {
                items: arrayOfItems,
                itemImages
            }
        })
    }
}

export const searchItemByName = (itemName) => {
    return async (dispatch) => {
        let res = await axios.get(getAllItemsURL)
        let items = res.data.data;
        let itemImages = [];
        let arrayOfItems = [];
        const itemIDs = Object.keys(items)

        for (let index = 0; index < itemIDs.length; index++) {
            const element = itemIDs[index];

            if (items[element].name.toLowerCase().includes(itemName)) {
                items[element].id = element;
                arrayOfItems.push(items[element])
                itemImages.push(getItemImage(element))
            }
        }

        return dispatch({
            type: SEARCH_ITEM_BY_NAME,
            payload: {
                items: arrayOfItems,
                itemImages
            }
        })
    }
}