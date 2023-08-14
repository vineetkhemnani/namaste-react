import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMAGE_CDN_URL } from '../constants'
import Shimmer from './Shimmer'
import useRestaurant from '../utils/useRestaurant'

const RestaurantMenu = () => {
  const params = useParams()
  // console.log(params);
  const { id } = params;

  const restaurant = useRestaurant(id)[0];
  const restaurantMenu = useRestaurant(id)[1];
  
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu flex">
      <div>
        <h1>Restaurant id: {id}</h1>
        <h2 className="font-bold text-3xl mb-4">{restaurant?.name}</h2>
        <img
          id="restroImg"
          src={IMAGE_CDN_URL + restaurant?.cloudinaryImageId}
          alt=""
        />
        <h2>{restaurant?.areaName}</h2>
        <div
          className={
            restaurant?.avgRating < 4
              ? (restaurant?.avgRating < 3
                ? 'bg-red-500 rounded inline-block p-1'
                : 'bg-orange-500 rounded inline-block p-1')
              : 'bg-green-500 rounded inline-block p-1'
          }
        >
          {restaurant?.avgRating}  stars
        </div>
        <h3>{restaurant?.costForTwoMessage}</h3>
      </div>
      <div className="ml-10">
        <h1 className="font-bold text-xl">Menu</h1>
        <ul>
          {restaurantMenu.map((item) => (
            <li className="box-border" key={item?.card?.info?.id}>
              {item?.card?.info?.name}
            </li>
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
