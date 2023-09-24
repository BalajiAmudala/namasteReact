import React from "react";
import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor : "#F0F0F0"
}

const RestaurantCard = (props) => {
const {resData} = props
   const { cloudinaryImageId ,name,cuisines,avgRating,deliveryTime} = resData?.data;
   return(
       <div className="res-card" style={styleCard}>
           <img className="res-logo" src={ CDN_URL + cloudinaryImageId} />
        <h3 className="res-name">{name}</h3>
        <h4 className="cuisine">{cuisines.join(",")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{deliveryTime} minutes</h4>
       </div>
   );
}

export default RestaurantCard ;