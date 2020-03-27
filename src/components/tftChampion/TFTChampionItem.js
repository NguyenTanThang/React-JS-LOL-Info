import React, { Component } from 'react';
import {getTFTChampionImage, getTFTTrait} from "../../config/config";

export default class TFTChampionItem extends Component {
    render() {
        const tftChampion = this.props.tftChampion;
        const tftChampionImageURL = getTFTChampionImage(tftChampion.name)
        const traitsImageURLs = tftChampion.traits.map(trait => {
            return getTFTTrait(trait)
        })

        return (
            <div className="col-lg-6 col-md-12 col-sm-12 item-container tft-champion-container">
                    <img src={tftChampionImageURL} alt={tftChampion.name} className="img-fluid tft-champ-img"/>
                    <div className="item-container-desc">
                        <h4>{tftChampion.name}</h4>
                        <p>Price: {tftChampion.cost}</p>
                        <h6>Traits:</h6>
                        <ul className="traits-list d-flex text-center justify-content-around">
                            {traitsImageURLs.map((traitsImageURL, index) => {
                                return <li key={index}>
                                    <img src={traitsImageURL} alt={tftChampion.traits[index]}/>
                                    <p>{tftChampion.traits[index]}</p>
                                </li>
                            })} 
                        </ul>
                    </div>
                </div>
        )
    }
}
