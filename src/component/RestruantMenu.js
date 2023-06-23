import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {IMG_CON_URL} from "../constant";
import Shimer from "./Shimer";
import Skeleton from "react-loading-skeleton";

const RestruantMenu = () => {
    const params = useParams();
    const {id} = params;

    const [restruant, setRestruant] = useState(null);

    useEffect(()=>{
        getRestruantInfo();
    },[])

    async function getRestruantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.3664631&lng=72.8155136&restaurantId=" + id)
        const json = await data.json();
        console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.Regular?.cards[2]?.card?.card?.itemCards[0]?.card);
        setRestruant(json?.data?.cards[0]?.card?.card?.info);
    }

    // const {name, cloudinaryImageId, areaName, avgRating, city, costForTwoMessage, locality } = restruant;

    return (!restruant)?<Skeleton width={600} height={600}/>: (
        <>
            <div className="menu">
                <h1>Restruant ID : {restruant?.id}</h1>
                <h2>{restruant?.name}</h2>
                <img src={IMG_CON_URL + restruant?.cloudinaryImageId}/>
                <h3>Addres : {restruant?.locality}, {restruant?.areaName}, {restruant?.city}</h3>
                <h3>Cost Fot Two : {restruant?.costForTwoMessage}</h3>
                <h3>Avg Ratings : {restruant?.avgRating}</h3>
            </div>
            {/* <div>
                <h1>Menu</h1>
                <ul>
                    {(restruantMenu?.info).map((item)=>(
                        <li key={item?.id}>{item?.name}</li>
                    ))}
                </ul>
            </div> */}
        </>
    )
}

export default RestruantMenu;