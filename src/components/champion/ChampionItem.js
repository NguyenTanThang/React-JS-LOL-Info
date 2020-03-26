import React, { Component } from 'react';
import {Link} from "react-router-dom";

class ChampionItem extends Component {
    render() {
        const championItem = this.props.championItem;
        const championImageURL = this.props.championImageURL;

        return (
            <div className="row champion-item align-items-center">
                <div className="col-lg-3 col-md-4 col-sm-12 champion-img text-center">
                    <img src={championImageURL} alt={championItem.name} className="img-fluid"/>
                </div>

                <div className="col-lg-9 col-md-8 col-sm-12 champion-desc">
                    <Link to={`/champions/${championItem.id}`}>
                        <h4>{championItem.name}</h4>
                    </Link>
                    <h5>{championItem.title}</h5>
                    <h6>Roles:</h6>
                    <ul>
                        {championItem.tags.map((tag, index) => {
                            return <li key={index}>{tag}</li>
                        })}
                    </ul>
                    <p>{championItem.blurb}</p>
                </div>
            </div>
        )
    }
}

export default ChampionItem;