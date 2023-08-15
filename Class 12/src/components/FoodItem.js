import { IMAGE_CDN_URL } from "../constants"

const FoodItem = ({name,price,description,imageId}) => {
    return (
      <>
        <div className="p-2 m-2 shadow-md bg-purple-50 rounded-lg flex">
          <img className="w-32" src={IMAGE_CDN_URL + imageId} alt="" />
          <div className="ml-4">
            <h2 className="text-xl font-bold">{name}</h2>
            <h3>{description}</h3>
            <h4>{!price ? ' ' : 'Rs. ' + price / 100}</h4>
          </div>
        </div>
      </>
    )
}

export default FoodItem;