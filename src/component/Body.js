import React from 'react'
import Shimer from './Shimer';
import { useState, useEffect } from "react";
import { RestruantCards } from './RestruantCard';
import { Link } from 'react-router-dom';
import { filterSearch } from './utils/helper';
import useOnline from "./utils/useOnline";
import { useDispatch } from 'react-redux';
import { addRestruantMenuList } from './utils/restruantMenusSlice';
import InterestMenu from './InterestMenu';

const Body = () => {
  const [allRestruants, setAllRestruants] = useState([]);
  const [filteredRestruants, setFilteredRestruants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch()

  const status = useOnline();

  if (!status) {
    return <h1>you are Offline, check your internet connection</h1>
  }
  useEffect(() => {
    getRestruants();
  }, []);

  async function getRestruants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.3664631&lng=72.8155136&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

      dispatch(addRestruantMenuList(json?.data))
    setAllRestruants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestruants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

  }
  if (!allRestruants) return null;

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
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
        ></input>
        <button
          className="bg-red-400 p-2"
          onClick={() => {
            // filter the data
            const data = filterSearch(searchText, allRestruants);
            // return the data
            setFilteredRestruants(data);
          }}
        >Search</button>  
      </div >

      <div>
          <InterestMenu />
      </div>
        <h1 className='px-16 pb-4 font-bold text-2xl'>Restaurants with online food delivery in Mumbai</h1>
      {allRestruants.length === 0 ? (<Shimer />) : (<div className="flex flex-wrap px-16 pb-4">
        {filteredRestruants.map((restruant) => {
          return <Link key={restruant?.info.id} to={"/restruant/" + restruant?.info.id}><RestruantCards {...restruant?.info} /></Link>
        })}
      </div>
      )}
    </>
  )
}

export default Body
