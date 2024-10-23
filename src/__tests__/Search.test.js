import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import {act} from "react";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "./mocks/mockResListData.json";
import Body from "../components/Body";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=> {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("Should render the body component",async()=>{
    await act(
        async ()=>
            render(
                <BrowserRouter>
                    <Body/>
                </BrowserRouter>
            )
    );
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(8);

    const searchInput = screen.getByTestId("searchInput");
    const searchBtn = screen.getByRole('button',{name: 'Search'});
    fireEvent.change(searchInput,{target: {value: "and"}});
    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(1);
});

// beforeEach(()=>{console.log("hey 1")});
// beforeAll(()=>{console.log("hey 2")});
// afterEach(()=>{console.log("hey 3")});
// afterAll(()=>{console.log("hey 4")});