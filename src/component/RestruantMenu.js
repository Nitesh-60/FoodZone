
import { useParams } from "react-router-dom";
import {IMG_CON_URL} from "../constant";
import Skeleton from "react-loading-skeleton";
import useRestruant from "./utils/useRestruant";

const RestruantMenu = () => {
    const params = useParams();
    const {id} = params;

    const restruant = useRestruant(id);


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
        </>
    )
}

export default RestruantMenu;