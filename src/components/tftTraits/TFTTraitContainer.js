import React, { Component } from 'react';
import {getTFTTrait} from "../../config/config";

export default class TFTItemContainer extends Component {
    render() {
        const tftTraitItem = this.props.tftTraitItem;
        const tftTraitImage = getTFTTrait(tftTraitItem.name);

        const desc = tftTraitItem.description ? tftTraitItem.description : tftTraitItem.innate

        return (
            <div className="col-lg-6 col-md-12 col-sm-12 item-container tft-champion-container">
                    <img src={tftTraitImage} alt={tftTraitItem.name} className="img-fluid tft-champ-img"/>
                    <div className="item-container-desc">
                        <h4>{tftTraitItem.name}</h4>
                        <p>{desc}</p>
                    </div>
                </div>
        )
    }
}
