import { useState,useEffect } from "react";
import { RES_MENU_URL, RES_MENU_URL_COMPLETE } from "../../constant";

const useRestruant = (id) => {
    const [restruant, setRestruant] = useState(null);

     useEffect(()=>{
        getRestruantInfo();
    },[])

    async function getRestruantInfo(){
        const data = await fetch(RES_MENU_URL + id + RES_MENU_URL_COMPLETE)
        const json = await data.json();
        console.log(json);
        setRestruant(json?.data?.cards[0]?.card?.card?.info);
    } 

    return restruant;
};

export default useRestruant;