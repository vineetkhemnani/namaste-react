import { restaurantList } from "../constants";
import RestaurantCard from "./restaurantCard";
import { useState, useEffect } from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
// import useOnline from "../utils/useOnline";
const Body = () => {
  
  const [allRestaurants, setAllRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // create local state variable in React
  const [searchText, setSearchText] = useState("");

  // useEffect(()=>{
  //   console.log("call this when dependency is changed")
  // },[searchText]);
  useEffect(() => {
    getRestaurants()
  }, [])
  async function getRestaurants() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.2074205&lng=78.01525769999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#'
    )
    // console.log(data)
    const json = await data.json()
    console.log(json);
    setAllRestaurants(
      // optional chaining 
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
    setFilteredRestaurants(
      // optional chaining 
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
  }
  // console.log("render");
  // not render component => Early return
  if(!allRestaurants) return null;

  // const isOnline = useOnline();
  // if(!isOnline) {
  //   return <h1>🔴 Offline, please check your internet connection!!</h1>;
  // }

  // if(filteredRestaurants?.length === 0)
  //   return <h1>No restaurants match your filter</h1>
  return (allRestaurants?.length === 0) ? <Shimmer /> : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // need to filter the data
            const data = filterData(searchText, allRestaurants)
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {/* RestaurantCard(restaurants[0]) */}
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={'/restaurant/' + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Body;