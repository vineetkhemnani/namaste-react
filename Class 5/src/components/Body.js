import { restaurantList } from "../constants";
import RestaurantCard from "./restaurantCard";
import { useState } from 'react';

function filterData(searchText, restaurants){
const filterData = restaurants.filter((restaurant)=>
    restaurant.info.name.includes(searchText)
);
    return filterData;
}

const Body = () => {
    const [restaurants, setRestaurants]=useState(restaurantList);
    // create local state variable in React
    const [searchText, setSearchText] = useState();
  return (
    <>
    <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" value={searchText}
        onChange={(e)=>{
            setSearchText(e.target.value);
        }} />
        <button className="search-btn" 
        onClick={()=>{
            // need to filter the data
            const data = filterData(searchText,restaurants);
            // update the state - restaurants
            setRestaurants(data);
        }}>Search</button>
    </div>
    <div className="restaurant-list">
      {/* RestaurantCard(restaurants[0]) */}
      {restaurants.map((restaurant) => {
        return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
      })}
    </div>
    </>
  )
}

export default Body;