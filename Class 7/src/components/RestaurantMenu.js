import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const params = useParams();
    // console.log(params);
    // const {id} = params;
  return (
    <div>
        <h1>Restaurant id: {id}</h1>
        <h2>restaurant name</h2>
    </div>
  )
}
export default RestaurantMenu