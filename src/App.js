
import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

const title = (
    <a href="/">
        <img
            className="logo"
            src="https://www.shutterstock.com/image-vector/food-logo-smile-label-company-260nw-1271590297.jpg"
        ></img>
    </a>
)


const Header = ()=>{
    return (
        <div className="head">
            {title}
            <div className="nav">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const burgerKing = [
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "657142",
            "name": "Punjabi Angithi (Delhi Wale)",
            "uuid": "269728de-0f94-4ea2-a78a-63f28ff53347",
            "city": "22",
            "area": "Hathibarkala",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "0a59d45ca92d85e5f63f5bc79f3dbb33",
            "cuisines": [
              "North Indian",
              "Chinese",
              "Punjabi",
              "Kebabs",
              "Tandoor"
            ],
          }
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "69769",
            "name": "Aman Vegetarian",
            "uuid": "4ef9eafb-9c6d-4e9b-b1e9-0bbd0e88f9ef",
            "city": "22",
            "area": "Paltan Bazaar",
            "totalRatingsString": "5000+ ratings",
            "cloudinaryImageId": "ygczg6efdbjietl1req7",
            "cuisines": [
              "North Indian",
              "Chinese",
              "Continental"
            ],
          }
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "407709",
            "name": "GANESH JI CHOLE BHATURE",
            "uuid": "7c521f6b-1d27-48d8-9947-072626a0ede7",
            "city": "22",
            "area": "Race Course",
            "totalRatingsString": "500+ ratings",
            "cloudinaryImageId": "nbnl8bimo1jrl8amii9q",
            "cuisines": [
              "Indian"
            ],
          }
        },
  ];

const RestruantCards = ({
  name,
  cuisines,
  cloudinaryImageId,
  totalRatingsString,
})=>{
    return (
        <div className="cards">
            <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`} />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{totalRatingsString} stars</h4>
        </div>
    );
};

function filterSearch(searchText,newRestruants){
  const filter_data = newRestruants.filter((res)=>{
    res.data.name.includes(searchText);
  });
  return filter_data;
}

const Body = ()=>{
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
    );
};

const Footer = ()=>{
    return (
        <h1>Footer</h1>
    );
};

const AppLayout = () =>{
    return(
        <>
        <Header />
        <Body/>
        <Footer/>
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);