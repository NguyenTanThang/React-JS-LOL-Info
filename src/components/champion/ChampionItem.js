import React, { Component } from 'react';
import {Link} from "react-router-dom";

class ChampionItem extends Component {
    render() {
        const championItem = this.props.championItem;
        const championImageURL = this.props.championImageURL;
        const {championLoadingImageURL} = this.props;

        return (
            <div className="champion-item champion-item-container">
                <Link className="champion-title" to={`/champions/${championItem.id}`}>
                    <div className="champion-img text-center">
                        <img src={championLoadingImageURL} alt={championItem.name} className="img-fluid"/>
                    </div>

                    <div className="champion-desc">
                        <h4>{championItem.name}</h4>
                    </div>
                </Link>
            </div>
        )
    }
}

export default ChampionItem;