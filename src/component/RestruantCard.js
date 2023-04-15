import React from "react";
import { IMG_CON_URL } from '../constant';
 
 export const RestruantCards = ({
    name,
    cuisines,
    cloudinaryImageId,
    totalRatingsString,
  })=>{
      return (
          <div className="cards">
              <img src={IMG_CON_URL +  cloudinaryImageId} />
              <h2>{name}</h2>
              <h3>{cuisines.join(", ")}</h3>
              <h4>{totalRatingsString} stars</h4>
          </div>
      );
  };
