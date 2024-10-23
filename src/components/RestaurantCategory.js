import ItemList from "./ItemList";

const RestaurantCategory = ({props, showItems, setShowIndex}) => {
    const handleClick = () => setShowIndex();

    return (
        <div className="w-6/12 mx-auto my-2 bg-stone-300 border-green-300 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold">
                    {props.card.card.title} ({props.card.card.itemCards.length})
                </span>
                <span>{showItems? '⬆️': '⬇️'}</span>
            </div>
            <div>
                {showItems && <ItemList items={props.card.card.itemCards}/>}
            </div>
        </div>
    );
};
export default RestaurantCategory;