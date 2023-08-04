import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMAGE_CDN_URL } from '../constants'
import Shimmer from './Shimmer'

const RestaurantMenu = () => {
  const params = useParams()
  // console.log(params);
  const { id } = params
  const [restaurant, setRestaurant] = useState({})
  const [restaurantMenu, setRestaurantMenu] = useState([])
  useEffect(() => {
    getRestaurantInfo()
  }, [])
  async function getRestaurantInfo() {
    try {
      const data = await fetch(
        'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.2074205&lng=78.01525769999999&restaurantId=' +
          id
      )
      const json = await data.json()
      const itemCards =
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
          ?.card?.itemCards
      // console.log(json.data.cards);
      setRestaurant(json?.data?.cards[0]?.card?.card?.info)
      setRestaurantMenu(itemCards)
      // console.log(itemCards)
    } catch (error) {
      console.log(error)
    }
  }
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant id: {id}</h1>
        <h2>{restaurant?.name}</h2>
        <img
          id="restroImg"
          src={IMAGE_CDN_URL + restaurant?.cloudinaryImageId}
          alt=""
        />
        <h2>{restaurant?.areaName}</h2>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwoMessage}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {restaurantMenu.map((item) => (
            <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
// data.cards[0].card.card.info.city
// data.cards[0].card.card.info.cloudinaryImageId
// data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info
// data.cards[2].groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card?.itemCards[0]?.card?.info?.name
export default RestaurantMenu
