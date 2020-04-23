import axios from "axios";

export const LATEST_VERSION = "10.8.1";
export const REGION = "en_US";

// Champion URL

export const getSearchChampionByIDURL = (championName) => {
    return `https://ddragon.leagueoflegends.com/cdn/${LATEST_VERSION}/data/${REGION}/champion/${championName}.json`
}

export const getAllChampionsURL = `https://ddragon.leagueoflegends.com/cdn/${LATEST_VERSION}/data/${REGION}/champion.json`;

export const getChampionFaceImage = (championName) => {
    return `https://ddragon.leagueoflegends.com/cdn/${LATEST_VERSION}/img/champion/${championName}.png`
}

export const getChampionTags = async () => {
    let tags = [];

    try {
        const res = await axios.get(getAllChampionsURL)
        const champions = res.data.data;
        const keys = Object.keys(champions);

        for (let index = 0; index < keys.length; index++) {
            const champion = champions[keys[index]];
            
            champion.tags.forEach((tag, idnex) => {
                if (!tags.includes(tag)){
                    tags.push(tag);
                }
            })
        }
        console.log(tags);

        return tags;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const getChampionSkinSplashArt = (championName, skinNum) => {
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_${skinNum}.jpg`
}

export const getChampionSkillImageURL = (championSkillName) => {
    return `https://ddragon.leagueoflegends.com/cdn/${LATEST_VERSION}/img/spell/${championSkillName}`
}

export const getChampionPassiveImageURL = (championSkillName) => {
    return `https://ddragon.leagueoflegends.com/cdn/${LATEST_VERSION}/img/passive/${championSkillName}`
}

// Item URL

export const getAllItemsURL = `https://ddragon.leagueoflegends.com/cdn/${LATEST_VERSION}/data/${REGION}/item.json`;

export const getItemImage = (itemID) => {
    return `https://ddragon.leagueoflegends.com/cdn/${LATEST_VERSION}/img/item/${itemID}.png`
}

// TFT URL

export const getTFTChampionImage = (championName) => {
    championName = championName.replace(/-|\s|'/g,"").toLowerCase();
    return `/champions/${championName}.png`;
}

export const getTFTTrait = (traitName) => {
    traitName = traitName.replace(/-|\s|'/g,"").toLowerCase();
    return `/traits/${traitName}.png`;
}

export const getTFTItem = (itemID) => {
    itemID = itemID+"";
    const stringLength = itemID.length;
    if (stringLength === 1){
        itemID = "0" + itemID;
    }

    return `/items/${itemID}.png`;
}

