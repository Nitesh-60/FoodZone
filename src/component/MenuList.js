import React from "react";
import { IMG_CON_URL } from '../constant';

export const MenuList = (
    imageId,
    name,
    price,
    description,
) => {
    return (
        <div className="w-72  h-80 bg-green-50 p-3 m-2 shadow-xl">
            <img className="rounded-3xl" src={IMG_CON_URL + imageId} />
            <h2 className="font-bold font text-center">{name}</h2>
            <h3>Price: {price}</h3>
            <h4>{description}</h4>
        </div>
    )
}