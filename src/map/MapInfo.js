import React from "react";
import tileData, {WORMHOLE_SYMBOLS, EXPANSIONS} from "../data/tileData";
import boardData from "../data/boardData.json";
import raceData from "../data/raceData.json";

class MapInfo extends React.Component{
    constructor(prop){
        super(prop);
        this.state = {
            tiles: [],
            lengendaries: [],
            resources: -1,
            influence: -1,
        };
        this.fillLegendaries = this.fillLegendaries.bind(this);
    };

    fillLegendaries(tiles){
        for (let tile of tiles){
            if (tileData.all[tile] !== undefined && tileData.all[tile].planets.length !== 0){
                let planets = tileData.all[tile].planets; 
                if (planets.filter(planet => planet.legendary === true).length !== 0){
                    console.log(planets.filter(planet => planet.legendary === true));
                }
            }
        };
    };

    render() {
        //this.setState({
        //    tiles: this.props.tiles});
        console.log ("Hello from mapInfo");
        console.log(this.props);
        this.fillLegendaries(this.props.tiles)
        return
    };



};
export default MapInfo;