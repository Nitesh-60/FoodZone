import React from 'react'
import Shimer from './Shimer';
import { useState, useEffect } from "react";
import { restruantList } from '../constant';
import { RestruantCards } from './RestruantCard';
import { Link } from 'react-router-dom';


  function filterSearch(searchText,newRestruants){
    const filter_data = newRestruants.filter((res)=>
      res?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    console.log(filter_data);
    return filter_data;
  }

const Body = () => {
  const [allRestruants,setAllRestruants] = useState([]);
  const [filteredRestruants,setFilteredRestruants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(()=>{
    getRestruants();
  }, []);

  async function getRestruants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&page_type=DESKTOP_WEB_LISTING");
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
          <div className="search-div">
            <input 
            type="text" 
            className="srch" 
            placeholder="Search Here" 
            value={searchText}
            onChange = {(e)=>{
              setSearchText(e.target.value)
            }}
            ></input>
            <button 
            className="search-btn"
            onClick={()=>{
              // filter the data
              const data = filterSearch(searchText,allRestruants);
              // return the data
              setFilteredRestruants(data);
            }}
            >Search</button>
          </div>
          <div className="RestruantList">
          {filteredRestruants.map((restruant)=>{
            return <Link key = {restruant.data.id} to={"/restruant/" + restruant.data.id}><RestruantCards {...restruant.data} /></Link>
          })}
          </div>
        </>
    )
}

export default Body
