import { useDispatch, useSelector } from "react-redux";
import { IMG_CON_URL } from "../constant";
import { clearCart } from "./utils/cartSlice";



const Cart = () =>{
    const cartItems = useSelector((store)=> store.cart.items);
    const dispatch = useDispatch
    const handleClearItem = ()=>{
        dispatch(clearCart())
    }
    return(
        <>
            <h1 className="text-3xl font-bold">Cart - {cartItems.length} items</h1>
            <button className="bg-green-100" onClick={()=>handleClearItem}>Clear Item</button>
            <div className="flex">
                
                {(cartItems).map((item)=>
                (<div className="w-72  h-80 bg-green-50 p-3 m-2 shadow-xl" key={item?.card?.info?.id}>
                    <img className="rounded-3xl" src={IMG_CON_URL + item?.card?.info?.imageId} />
                    <h2 className="font-bold font text-center">{item?.card?.info?.name}</h2>
                    <h3 className="text-center">Price: {item?.card?.info?.price}</h3>
                    <h4 className="font text-center">{item?.card?.info?.description}</h4>
                </div>))}
            </div>
        </>
        

    )
}

export default Cart;