import { useSelector } from "react-redux"
import FoodItem from "./FoodItem"
const Cart = () => {
  const cartItems = useSelector(store=> store.cart.items);

  
  return (
    <div>
        <div className="flex">
        <h1 className="font-bold text-3xl">Item(s) added - {cartItems.length}</h1>
        <button className="bg-green-400 rounded p-1 ml-6 mt-1" onClick={()=>handleClearCart()}>Clear cart</button>
        </div>
        {cartItems.map(item => 
            <FoodItem key={item.id} {...item} />
            )}
        
    </div>
  )
}
export default Cart