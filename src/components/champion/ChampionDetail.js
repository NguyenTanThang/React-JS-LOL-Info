import React, { Component } from 'react';
import {getChampionByID} from "../../actions/championActions";
import {connect} from "react-redux";
import Carousel from "../partials/Carousel";

class ChampionDetail extends Component {

    state = {
        champion: {}
    }

    async componentDidMount(){
        const championID = this.props.match.params.championID;

        this.props.getChampionByID(championID)
    }

    render() {
        console.log(this.props.champion)
        let items = []
        const champion = this.props.champion
        let tags, skills, allytips, enemytips, passive;

        if (champion.splashArtImgURLs !== undefined){
            champion.splashArtImgURLs.forEach(splashArtObj => {
                items.push({
                    src: splashArtObj.url,
                    caption: splashArtObj.name
                })
            })

            tags = champion.tags.map((tag, index) => {
                return <li key={index}>{tag}</li>
            })

            skills = champion.skills.map((skill, index) => {
                const skillsChar = ["Q", "W", "E", "R"];

                return  (
                <div key={index} className="champion-skill-item">
                    <div className="champion-skill-img">
                        <img src={skill.url} alt={skill.name} className="img-fluid"/>
                    </div>
                    <div className="champion-skill-desc">
                        <h4>{skill.name} (Skill {skillsChar[index]})</h4>
                        <p dangerouslySetInnerHTML={{__html: skill.desc}}></p>
                    </div>
                </div>
                )
            })

            allytips = champion.allytips.map((allytip, index) => {
                return <li key={index}>{allytip}</li>
            })

            enemytips = champion.enemytips.map((enemytip, index) => {
                return <li key={index}>{enemytip}</li>
            })

            passive = (
                <div className="champion-skill-item">
                    <div className="champion-skill-img">
                        <img src={champion.passiveImageURL} alt={champion.passive.name} className="img-fluid"/>
                    </div>
                    <div className="champion-skill-desc">
                        <h4>{champion.passive.name} (Passive)</h4>
                        <p dangerouslySetInnerHTML={{__html: champion.passive.description}}></p>
                    </div>
                </div>
            )
        }

        return (
            <div>

                <div className="container">
                    <div className="row champion-item">
                        <div className="col-12 champion-detail-header">
                            <h3>Overview</h3>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-12 champion-img text-center pt-4">
                            <img src={champion.faceImg} alt={champion.name} className="img-fluid"/>
                        </div>

                        <div className="col-lg-9 col-md-8 col-sm-12 champion-desc">
                            <h4>{champion.name}</h4>
                            <h5>{champion.title}</h5>
                            <h6>Roles:</h6>
                            <ul>
                                {tags}
                            </ul>
                            <p>{champion.blurb}</p>
                        </div>

                        <div className="col-12 champion-detail-header">
                            <h3>Lore</h3>
                        </div>

                        <div className="col-12">
                            <p>{champion.lore}</p>
                        </div>

                        <div className="col-12 champion-detail-header">
                            <h3>Skills</h3>
                        </div>

                        <div className="col-12">
                            {passive}
                            {skills}
                        </div>

                        <div className="col-12 champion-detail-header">
                            <h3>Tips</h3>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <h5>Play as {champion.name}</h5>
                            <ul>
                                {allytips}
                            </ul>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <h5>Play against {champion.name}</h5>
                            <ul>
                                {enemytips}
                            </ul>
                        </div>

                        <div className="col-12 champion-detail-header">
                            <h3>Skins</h3>
                        </div>

                        <div className="col-12 champion-skins-carousel">
                            <Carousel items={items}/>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        champion: state.championReducer.champion
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getChampionByID: (championID) => {dispatch(getChampionByID(championID))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampionDetail);
