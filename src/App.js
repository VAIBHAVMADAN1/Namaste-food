import css from "./index.css"

import React, {Suspense, useState, useEffect, StrictMode} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";

import UserContext from "./utils/userContext";

import { Provider } from "react-redux";
import appStore from "./utils/appStore";

// Chunking
// Code Splitting
// Dynamic Bundling
// lazy loading
// on demand loading
// dynamic import
const Grocery = React.lazy(() => import("./components/Grocery"));
const AppLayout = () => {
  const [userName, setUserName] = useState("Ramses");
  //authentication
  // useEffect(()=>{
  //   const data={
  //     name:"Vaibhav Madan",
  //   };
  //   setUserName(data.name);
  // },[])
  return <>
  <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div>
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  </>;
};

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />,

      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      },
      {
        path:"/grocery",
        element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>
      },
      {
        path:"/cart",
        element: <Suspense fallback={<h1>Loading....</h1>}><Cart /></Suspense>
      },
    ],
    errorElement: <Error />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);