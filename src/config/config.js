export const LATEST_VERSION = "10.6.1";
export const REGION = "en_US"

// Champion URL

export const getSearchChampionByIDURL = (championName) => {
    return `https://ddragon.leagueoflegends.com/cdn/${LATEST_VERSION}/data/${REGION}/champion/${championName}.json`
}

export const getAllChampionsURL = `https://ddragon.leagueoflegends.com/cdn/${LATEST_VERSION}/data/${REGION}/champion.json`;

export const getChampionFaceImage = (championName) => {
    return `https://ddragon.leagueoflegends.com/cdn/${LATEST_VERSION}/img/champion/${championName}.png`
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

