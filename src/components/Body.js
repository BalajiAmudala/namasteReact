import React from "react";
import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData";
import {useState} from "react";

const Body = () => {

    // state variable --- super power
 const [ resData , setResData ] = useState( resList ) ;
 const [ avgData , setAvgData ] = useState( resList ) ;

    
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList = resData.filter(
                    (res)=> res.data.avgRating > 4 );
                    setResData(filteredList);                    
                    }}>Top rated restaurant </button>
            </div>
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredListAvg = avgData.filter(
                    (res)=> res.data.avgRating < 4 );
                    setAvgData(filteredListAvg);                    
                    }}>Average rated restaurant </button>
            </div>
            <div className="res-container">
                {
                    resData.map((restaurant , index)=> <RestaurantCard key={restaurant.data.id} resData={restaurant}/> )
                }
            </div>
        </div>
    );
}

export default Body ;