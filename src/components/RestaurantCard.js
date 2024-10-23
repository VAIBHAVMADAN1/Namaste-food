import { CDN_URL } from "../utils/constants";

import { useContext } from "react";
import UserContext from "../utils/userContext";

const RestaurantCard = (props) => {

  const {loggedInUser} = useContext(UserContext);

  const { resData } = props;


  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  return <>
    <div className="m-3 p-3 w-[280px] border rounded-2xl hover:bg-gray-50 h-[500px]">
      <div>
        <img
          className="h-[250px] w-[220px]"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="">
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.slaString}</h4>
        <h4>User- {loggedInUser}</h4>
      </div>
    </div>
  </>;
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    )
    }
}

export default RestaurantCard;