
import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Footer from "./component/Footer";
import Error from "./component/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./component/Contact";
import Github from "./component/Github";
import RestruantMenu from "./component/RestruantMenu";
import { Suspense } from "react";

const Instamart = lazy(()=>import('./component/Instamart'))

const AppLayout = () =>{
    return(
        <>
        <Header />
        <Outlet />
        <Footer/>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/github",
                element: <Github />,
            },
            {
                path: "/restruant/:id",
                element: <RestruantMenu />,
            },
            {
                path: "/instamart",
                element: <Suspense><Instamart /></Suspense>,
            },
        ]
    },
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);