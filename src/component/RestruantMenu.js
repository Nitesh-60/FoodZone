import Shimer from "./Shimer";
import { useParams } from "react-router-dom";
import { IMG_CON_URL } from "../constant";
import Skeleton from "react-loading-skeleton";
import useRestruant from "./utils/useRestruant";
import { useState, useEffect } from "react";
import { MenuList } from "./MenuList";
import { RES_MENU_URL, RES_MENU_URL_COMPLETE } from "../constant";
import { useDispatch } from "react-redux";
import {addItem} from "./utils/cartSlice" 


const RestruantMenu = () => {
    const params = useParams();
    const { id } = params;
    const [menu, setMenu] = useState(null);

    const restruant = useRestruant(id);

    useEffect(() => {
        getMenu();
    }, []);

    const dispatch = useDispatch();

    const handleAddItem = (item) =>{
        dispatch(addItem(item))
    }

    async function getMenu() {
        const data = await fetch(
            RES_MENU_URL + id + RES_MENU_URL_COMPLETE
        );
        const json = await data.json();
        // console.log(json);
        setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)

    }


    return (!restruant) ? <Skeleton width={600} height={600} /> : (
        <div className="flex gap-4 flex-wrap flex-col justify-center items-center" >
            <div className="menu">
                <h1>Restruant ID : {restruant?.id}</h1>
                <h2>{restruant?.name}</h2>
                <img src={IMG_CON_URL + restruant?.cloudinaryImageId} />
                <h3>Addres : {restruant?.locality}, {restruant?.areaName}, {restruant?.city}</h3>
                <h3>Cost Fot Two : {restruant?.costForTwoMessage}</h3>
                <h3>Avg Ratings : {restruant?.avgRating}</h3>
            </div>
            <div >
                <h1>MENU</h1>
                {(!menu)?<Shimer />:<div>
                    {(menu).map((item) => (
                        <div className="flex gap-4 w-200px h-44 bg-green-50 p-3 m-2 shadow-xl" key={item?.card?.info?.id}>
                            <div>
                                <img className="max-w-none w-44 h-40 rounded-3xl" src={IMG_CON_URL + item?.card?.info?.imageId} />
                            </div>
                            <div>
                                <h2 className="font-bold font text-center">{item?.card?.info?.name}</h2>
                                <h3>Price: ₹{item?.card?.info?.price/100}</h3>
                                <h4>{item?.card?.info?.description}</h4>
                                <div>
                                    <button className="p-2 m-4 bg-red-100" onClick={()=>handleAddItem(item)}>Add Item</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>}
            </div>

        </div>
    )
}

export default RestruantMenu;