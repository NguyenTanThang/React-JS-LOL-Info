import React, { Component } from 'react';
import {connect} from "react-redux";
import {fetchItems, searchItemByName} from "../../actions/itemActions";
import paginate from "../../utils/paginate";
import Pagination from "../partials/Pagination";
import {getItemImage} from "../../config/config";
import ItemContainer from "./ItemContainer";

class ChampionList extends Component {
    state = {
        itemName: "",
        itemList: [],
        currentPage: 1,
    }

    componentDidMount() {
        this.props.fetchItems();
    }

    onSearchItemByName = (e) => {
        const itemName = e.target.value;

        this.props.searchItemByName(itemName);
    }

    changeCurrentPage = (pageNum) => {
        this.setState({
            currentPage: pageNum
        })
    }

    render() {
        const pageObject = paginate(this.props.items.length, this.state.currentPage, 8, 5)
        console.log(pageObject);

        const currentItemList = this.props.items.slice(pageObject.startIndex, pageObject.endIndex + 1);

        const itemList = currentItemList.map((item, index) => {
            return <ItemContainer key={index} item={item} itemImageURL={getItemImage(item.id)}/>
        })
        

        return (
            <div>
            <div className="search-form search-items">
                <div className="container">
                        <form>
                            <label>Item Name:</label>
                            <input type="text" className="form-control" placeholder="Your Item's Name" onChange={this.onSearchItemByName}/>
                        </form>
                    </div>
                </div>

                <div className="container">
                    <div className='row justify-content-between'>
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

const mapStateToProps = (state => {
    return {
        items: state.itemReducer.items,
        itemImages: state.itemReducer.itemImages,
    }
})

const mapDispatchToProps = (dispatch => {
    return {
        fetchItems: () => {dispatch(fetchItems())},
        searchItemByName: (itemName) => {dispatch(searchItemByName(itemName))}
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ChampionList);
