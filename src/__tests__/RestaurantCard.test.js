import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard from "../components/RestaurantCard";
import { withPromotedLabel } from "../components/RestaurantCard";
import MOCK_DATA from "./mocks/ResDataMock.json";

it("Restaurant card testing", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);
    const name = screen.getByText("KFC");
    expect(name).toBeInTheDocument();
})
it("Restaurant card testing 2", () => {
    const R = withPromotedLabel(RestaurantCard);
    render(<R resData={MOCK_DATA}/>)
    const name = screen.getByText("Promoted");
    expect(name).toBeInTheDocument();
})