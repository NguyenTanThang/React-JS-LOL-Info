import React, { Component } from 'react';
import paginate from "../../utils/paginate";
import Pagination from "../partials/Pagination";
import TFTItemContainer from "./TFTItemContainer";
import tftItems from "../../data/items";

class TFTItemList extends Component {
    state = {
        tftChampionsName: "",
        tftItems: [],
        currentPage: 1,
    }

    componentDidMount() {
        this.setState({
            tftItems
        })
    }

    onSearchItemByName = (e) => {
        const itemName = e.target.value;

        this.setState({
            tftItems: tftItems.filter(tftChampion => {
                return tftChampion.name.toLowerCase().includes(itemName.toLowerCase());
            })
        })
    }

    changeCurrentPage = (pageNum) => {
        this.setState({
            currentPage: pageNum
        })
    }

    render() {
        const pageObject = paginate(this.state.tftItems.length, this.state.currentPage, 8, 5)
        console.log(pageObject);

        const currentItemList = this.state.tftItems.slice(pageObject.startIndex, pageObject.endIndex + 1);

        const itemList = currentItemList.map((item, index) => {
            return <TFTItemContainer tftItem={item}/>
        })
        

        return (
            <div>
                <div className="container">
                    <div className="champion-item">
                        <form>
                            <label>Item Name:</label>
                            <input type="text" className="form-control" placeholder="Your Champion's Name" onChange={this.onSearchItemByName}/>
                        </form>
                    </div>
                </div>

                <div className="container">
                    <div className='row justify-content-around'>
                        {itemList}
                    </div>
                </div>

                <div className="container pagination-container">
                    <Pagination pageObject={pageObject} changeCurrentPage={this.changeCurrentPage}/>
                </div>
            </div>
        )
    }
}

export default (TFTItemList);
