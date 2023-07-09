import React from 'react'
import Shimer from './Shimer';
import { useState, useEffect } from "react";
import { restruantList } from '../constant';
import { RestruantCards } from './RestruantCard';
import { Link } from 'react-router-dom';
import { filterSearch } from './utils/helper';
import useOnline from "./utils/useOnline";

const Body = () => {
  const [allRestruants,setAllRestruants] = useState([]);
  const [filteredRestruants,setFilteredRestruants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(()=>{
    getRestruants();
  }, []);
  
  const status = useOnline();

  if(!status){
    return <h1>you are Offline, check your internet connection</h1>
  }

  async function getRestruants(){
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestruants(json?.data?.cards[2]?.data?.data?.cards)
    setFilteredRestruants(json?.data?.cards[2]?.data?.data?.cards)

  }
    if(!allRestruants) return null;
  
    // if(filteredRestruants?.length === 0) 
    //   return <h1>Restruants Not Found</h1>;

    
    return (allRestruants.length === 0) ? <Shimer /> : (
        <>
          <div className="p-2 m-2 bg-green-50 flex justify-center">
            <input 
            className="h-9 p-2 w-80 mr-3"
            type="text" 
            placeholder="Search Here" 
            value={searchText}
            onChange = {(e)=>{
              setSearchText(e.target.value)
            }}
            ></input>
            <button 
            className="bg-red-400 p-2"
            onClick={()=>{
              // filter the data
              const data = filterSearch(searchText,allRestruants);
              // return the data
              setFilteredRestruants(data);
            }}
            >Search</button>
          </div >
          {allRestruants.length === 0 ? (<Shimer /> ):(<div className="flex flex-wrap">
          {filteredRestruants.map((restruant)=>{
            return <Link key = {restruant.data.id} to={"/restruant/" + restruant.data.id}><RestruantCards {...restruant.data} /></Link>
          })}
          </div>
          )}
        </>
    )
}

export default Body
