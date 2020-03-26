import React, { Component } from 'react';
import ChampionItem from "./ChampionItem";
import {connect} from "react-redux";
import {fetchChampions, searchChampionByName} from "../../actions/championActions";
import paginate from "../../utils/paginate";
import Pagination from "../partials/Pagination";
import {getChampionFaceImage} from "../../config/config";

class ChampionList extends Component {

    state = {
        championName: "",
        championList: [],
        currentPage: 1,
    }

    componentDidMount() {
        this.props.fetchChampions();
    }

    onSearchChampionByName = (e) => {
        const championName = e.target.value;

        this.props.searchChampionByName(championName);
    }

    changeCurrentPage = (pageNum) => {
        this.setState({
            currentPage: pageNum
        })
    }

    render() {
        const pageObject = paginate(this.props.champions.length, this.state.currentPage, 5, 5)
        console.log(pageObject);

        const currentChampionList = this.props.champions.slice(pageObject.startIndex, pageObject.endIndex + 1);

        const championList = currentChampionList.map((championItem, index) => {
            return <ChampionItem key={championItem.key} championItem={championItem} championImageURL={getChampionFaceImage(championItem.id)}/>
        })
        

        return (
            <div>
                <div className="container">
                    <div className="champion-item">
                        <form>
                            <label>Champion Name:</label>
                            <input type="text" className="form-control" placeholder="Your Champion's Name" onChange={this.onSearchChampionByName}/>
                        </form>
                    </div>
                </div>

                <div className="container">
                    {championList}
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
        champions: state.championReducer.champions,
        championImages: state.championReducer.championImages,
    }
})

const mapDispatchToProps = (dispatch => {
    return {
        fetchChampions: () => {dispatch(fetchChampions())},
        searchChampionByName: (championName) => {dispatch(searchChampionByName(championName))},
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ChampionList);
