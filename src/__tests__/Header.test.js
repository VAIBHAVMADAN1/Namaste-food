import { render,screen,fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../components/Header";
import Body from "../components/Body";

it("Header test",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const login = screen.getByRole('button',{name:"Login"});
    fireEvent.click(login);
    const logout = screen.getByRole('button', { name: "Logout" });
    expect(logout).toBeInTheDocument();

});


it("Header test 2",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const cart = screen.getByText(/Cart/);
    fireEvent.click(cart);
    expect(cart).toBeInTheDocument();
});