import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

import useOnlineStatus from "../utils/useOnlineStatus";

import { useContext } from "react";
import UserContext from "../utils/userContext";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  // console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.900965&lng=75.8572758"
    );
    const json = await data.json();
    const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListofRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Looks like you are offline!! Please check your internet connection</h1>

  const {loggedInUser, setUserName} = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex items-center">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            data-testid="searchInput"
          />
          <button
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              // console.log(searchText);
              setFilteredRestaurants(
                listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                ));
            }}
            className="px-4 py-2 bg-green-100 m-4"
          >Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center"> 
            <button
            className="px-4 py-2 bg-gray-100 rounded-xl"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestaurants(filteredList);
            }}>Top Rated Restaurants
          </button>
        </div>    
          <div>
            <label>Username: </label>
             <input
              className="border border-solid border-black p-2"
              value={loggedInUser}
              onChange = {(e)=> setUserName(e.target.value)}
              data-testid = "username"
            />
          </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id} data-testid="resCard">
            <RestaurantCardPromoted resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;