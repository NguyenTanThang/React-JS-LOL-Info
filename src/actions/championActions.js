import axios from "axios";
import {
    FETCH_CHAMPIONS,
    GET_CHAMPION_BY_ID,
    SEARCH_CHAMPION_BY_NAME
} from "./types";
import {
    getAllChampionsURL,
    getChampionFaceImage,
    getSearchChampionByIDURL,
    getChampionSkinSplashArt,
    getChampionSkillImageURL,
    getChampionPassiveImageURL
} from "../config/config";

export const getChampionByID = (championID) => {
    return async (dispatch) => {
        let res = await axios.get(getSearchChampionByIDURL(championID))
        let champion = res.data.data[championID];
        console.log(champion)
        champion.splashArtImgURLs = [];
        champion.skills = [];
        champion.faceImg = getChampionFaceImage(championID)

        champion.passiveImageURL = getChampionPassiveImageURL(champion.passive.image.full);

        champion.spells.forEach(element => {
            champion.skills.push({
                url: getChampionSkillImageURL(element.image.full),
                desc: element.description,
                name: element.name,
            });
        });

        champion.skins.forEach(element => {
            champion.splashArtImgURLs.push({
                url: getChampionSkinSplashArt(champion.name, element.num),
                name: element.name
            })
        });
        
        return dispatch({
            type: GET_CHAMPION_BY_ID,
            payload: {
                champion
            }
        })
    }
}

export const fetchChampions = () => {
    return async (dispatch) => {
        let res = await axios.get(getAllChampionsURL)
        let champions = res.data.data;
        let championImages = [];
        let arrayOfChampions = [];
        const championNames = Object.keys(champions)

        for (let index = 0; index < championNames.length; index++) {
            const element = championNames[index];
            
            arrayOfChampions.push(champions[element])
            championImages.push(getChampionFaceImage(element))
        }
        
        return dispatch({
            type: FETCH_CHAMPIONS,
            payload: {
                champions: arrayOfChampions,
                championImages
            }
        })
    }
}

export const searchChampionByName = (championName) => {
    return async (dispatch) => {
        let res = await axios.get(getAllChampionsURL)
        let champions = res.data.data;
        let championImages = [];
        let arrayOfChampions = [];
        let championNames = Object.keys(champions)

        championNames = championNames.filter((championItem => {
            return championItem.toLowerCase().includes(championName.toLowerCase());
        }))

        for (let index = 0; index < championNames.length; index++) {
            const element = championNames[index];
            
            arrayOfChampions.push(champions[element])
            championImages.push(getChampionFaceImage(element))
        }
        
        return dispatch({
            type: SEARCH_CHAMPION_BY_NAME,
            payload: {
                champions: arrayOfChampions,
                championImages
            }
        })
    }
}