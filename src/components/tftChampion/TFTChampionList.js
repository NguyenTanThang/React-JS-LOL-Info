import React, { Component } from 'react';
import paginate from "../../utils/paginate";
import Pagination from "../partials/Pagination";
import TFTChampionItem from "./TFTChampionItem";
import tftChampions from "../../data/champions";
import tftTraits from "../../data/traits";

class TFTChampionList extends Component {
    state = {
        tftChampionsName: "",
        tftChampionTrait: "",
        tftChampions: [],
        currentPage: 1,
        tftTraits: []
    }

    componentDidMount() {
        this.setState({
            tftChampions,
            tftTraits
        })
    }

    onSearchItemByName = (e) => {
        const itemName = e.target.value;

        this.setState({
            tftChampions: tftChampions.filter(tftChampion => {
                return tftChampion.name.toLowerCase().includes(itemName.toLowerCase());
            })
        })
    }

    sortByTrait = (e) => {
        const itemName = e.target.value;

        if (itemName !== "all"){
            this.setState({
                tftChampions: tftChampions.filter(tftChampion => {
                    return tftChampion.traits.includes(itemName);
                })
            })
        } else {
            this.setState({
                tftChampions
            })
        }
    }

    changeCurrentPage = (pageNum) => {
        this.setState({
            currentPage: pageNum
        })
    }

    render() {
        const pageObject = paginate(this.state.tftChampions.length, this.state.currentPage, 8, 5)
        console.log(pageObject);

        const currentItemList = this.state.tftChampions.slice(pageObject.startIndex, pageObject.endIndex + 1);

        const itemList = currentItemList.map((item, index) => {
            return <TFTChampionItem tftChampion={item}/>
        })
        

        return (
            <div>
                <div className="container">
                    <div className="champion-item">
                        <form>
                            <div className="form-group">
                                <label>Item Name:</label>
                                <input type="text" className="form-control" placeholder="Your Champion's Name" onChange={this.onSearchItemByName}/>
                            </div>
                            
                            <div className="form-group">
                                <label>Sort By Trait:</label>
                                <select onChange={this.sortByTrait} className="custom-select">
                                    <option key="9999" value="all">All</option>
                                    {tftTraits.map((tftTrait, index) => {
                                        return <option key={index} value={tftTrait.name}>{tftTrait.name}</option>
                                    })}
                                </select>
                            </div>
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

export default (TFTChampionList);
