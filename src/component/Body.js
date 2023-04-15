import React from 'react'
import { useState } from "react";
import { burgerKing } from '../constant';
import { RestruantCards } from './RestruantCard';




  
  function filterSearch(searchText,newRestruants){
    const filter_data = newRestruants.filter((res)=>{
      res.data.name.includes(searchText);
    });
    return filter_data;
  }

const Body = () => {
    const [searchText, setSearchText] = useState();
    const [newRestruants,setNewRestruants] = useState(burgerKing)
    return (
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
              const data = filterSearch(searchText,newRestruants);
              // return the data
              setNewRestruants(data);
            }}
            >Search</button>
          </div>
          <div className="RestruantList">
          {burgerKing.map((restruant)=>{
            return <RestruantCards {...restruant.data} keys = {restruant.data.id}/>
          })}
          </div>
        </>
    )
}

export default Body
