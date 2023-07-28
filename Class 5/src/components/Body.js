import { restaurants } from "../constants";
import RestaurantCard from "./restaurantCard";
const Body = () => {
  return (
    <div className="restaurant-list">
      {/* RestaurantCard(restaurants[0]) */}
      {restaurants.map((restaurant) => {
        return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
      })}
    </div>
  )
}

export default Body;