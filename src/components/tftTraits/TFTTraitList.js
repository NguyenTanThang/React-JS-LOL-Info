import React, { Component } from 'react';
import paginate from "../../utils/paginate";
import Pagination from "../partials/Pagination";
import TFTItemContainer from "./TFTTraitContainer";
import tftTraits from "../../data/traits";

class TFTItemList extends Component {
    state = {
        tftChampionsName: "",
        tftTraits: [],
        currentPage: 1,
    }

    componentDidMount() {
        this.setState({
            tftTraits
        })
    }

    onSearchItemByName = (e) => {
        const itemName = e.target.value;

        this.setState({
            tftTraits: tftTraits.filter(tftChampion => {
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
        const pageObject = paginate(this.state.tftTraits.length, this.state.currentPage, 8, 5)
        console.log(pageObject);

        const currentItemList = this.state.tftTraits.slice(pageObject.startIndex, pageObject.endIndex + 1);

        const itemList = currentItemList.map((item, index) => {
            return <TFTItemContainer tftTraitItem={item}/>
        })
        

        return (
            <div>
            <div className="search-form search-tft-traits">
                <div className="container">
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
