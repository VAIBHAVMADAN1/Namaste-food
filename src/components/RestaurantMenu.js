import { useParams } from "react-router-dom";
import { useState } from "react";

import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    
    const[showIndex, setShowIndex] = useState(0);
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />
    const {text} = resInfo.data.cards[0].card.card;
    const {cuisines, costForTwoMessage} = resInfo.data.cards[2].card.card.info;
    const categories = (resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards).filter(
        r => r?.["card"]?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    // console.log(categories);
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{text}</h1>
            <h2 className="font-bold text-lg">{cuisines.join(",")} - {costForTwoMessage}</h2>
            <ul>
                {categories.map((c,index) => <RestaurantCategory props={c} 
                key={c.card.card.title} 
                showItems={index === showIndex ? true : false}
                setShowIndex={()=>{ showIndex === index ? setShowIndex(false) :
                    setShowIndex(index)
                }}
                />)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;