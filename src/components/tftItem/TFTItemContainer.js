import React, { Component } from 'react';
import {getTFTItem} from "../../config/config";

export default class TFTItemContainer extends Component {
    render() {
        const tftItem = this.props.tftItem;
        const tftItemImage = getTFTItem(this.props.tftItem.id);

        return (
            <div className="col-lg-6 col-md-12 col-sm-12 item-container tft-champion-container">
                    <img src={tftItemImage} alt={tftItem.name} className="img-fluid tft-champ-img"/>
                    <div className="item-container-desc">
                        <h4>{tftItem.name}</h4>
                    </div>
                </div>
        )
    }
}
