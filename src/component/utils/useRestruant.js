import { useState,useEffect } from "react";
import { RES_MENU_URL } from "../../constant";

const useRestruant = (id) => {
    const [restruant, setRestruant] = useState(null);

     useEffect(()=>{
        getRestruantInfo();
    },[])

    async function getRestruantInfo(){
        const data = await fetch(RES_MENU_URL + id)
        const json = await data.json();
        console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.Regular?.cards[2]?.card?.card?.itemCards[0]?.card);
        setRestruant(json?.data?.cards[0]?.card?.card?.info);
    } 

    return restruant;
};

export default useRestruant;