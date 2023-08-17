import React from "react";
import { IMG_CON_URL } from '../constant';
 
 export const RestruantCards = ({
    name,
    cuisines,
    cloudinaryImageId,
    totalRatingsString,
  })=>{
      return (
          <div className="w-[363px]  h-96 bg-green-50 p-3 m-2 shadow-xl">
              <img className="rounded-3xl" src={IMG_CON_URL + cloudinaryImageId} />
              <h2 className="font-bold font text-center">{name}</h2>
              <h3>{cuisines.join(", ")}</h3>
              <h4>{totalRatingsString} stars</h4>
          </div>
      );
  };
