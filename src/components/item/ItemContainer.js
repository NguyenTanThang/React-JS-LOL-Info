import React, { Component } from 'react';

class ItemContainer extends Component {
    render() {
        const item = this.props.item;
        const itemImageURL = this.props.itemImageURL;

        return (
            <div className="col-lg-6 col-md-12 col-sm-12 item-container">
                    <img src={itemImageURL} alt={item.name} className="img-fluid"/>
                    <div className="item-container-desc">
                        <h4>{item.name}</h4>
                        <p>{item.plaintext}</p>
                        <h6>Types:</h6>
                        <ul className="item-usage-list">
                            {item.tags.map((tag, index) => {
                                return <li key={index}>{tag}</li>
                            })}
                        </ul>
                    </div>
                </div>
        )
    }
}

export default ItemContainer;

