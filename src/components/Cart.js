import { useSelector } from "react-redux";
import ItemList from "./ItemList";

import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);

    const dispatch = useDispatch();
    const handleClearCart = ()=> {
        dispatch(clearCart())
    };

    return <div className="text-center m-4 p-4">
    <h1 className="text-3xl font-bold">Cart</h1>
    <button className="border border-black"
    onClick={handleClearCart}>
        Clear cart
    </button>
        <div className="w-6/12 mx-auto my-2 p-4 bg-stone-300 border-green-300 shadow-lg">
            {cartItems.length === 0 && <h1>Cart is empty. Add items to your cart!</h1>}
            <ItemList items={cartItems}/>
        </div>
    </div>
}

export default Cart;