import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
    const dispatch = useDispatch();
    const handleAddItem = item=> {
        dispatch(addItem(item))
    }
    return <div>
        {items.map(i => <div className="p-2 m-2 border-b-2 border-gray-400 text-left" key={i.card.info.id} data-testid="foodItems">
                <div className="flex justify-between h-32">
                    <div className="w-96">
                        <span>{i.card.info.name} </span>
                        <li>₹{i.card.info.defaultPrice ? i.card.info.defaultPrice / 100 : i.card.info.price / 100}</li>
                        <p className="text-xs">{i.card.info.description}</p>
                    </div>
                    <div className="w-28 relative">
                        <button className="absolute bg-black text-white rounded-lg shadow-lg left-1/2 -translate-x-1/2"
                        onClick={()=>handleAddItem(i)}
                        data-testid="add"
                        >
                        Add+
                    </button>
                    {i.card.info.imageId ? 
                    <img src={CDN_URL + i.card.info.imageId} 
                    className="w-full" alt="image not available"/> 
                    : null}
                    </div>
                </div>
            </div>
        )}
    </div>


}

export default ItemList;