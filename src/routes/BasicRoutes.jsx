import { createBrowserRouter } from "react-router-dom";
import Service from "../pages/clientSide/servicepage/Service";
import Home from "../pages/clientSide/homepage/Home";
import Work from "../pages/clientSide/workpage/Work";
import Blog from "../pages/clientSide/blogpage/Blog";
import About from "../pages/clientSide/aboutpage/About";
import Contact from "../pages/clientSide/contactpage/Contact";
import ClientLayout from "../layouts/ClientLayout";
import Blogdetails from "../pages/clientSide/blogpage/Blogdetails";
import Workdetail from "../pages/clientSide/workpage/Workdetail";
import Pricing from "../pages/clientSide/pricepage/Pricing";

const routes = createBrowserRouter([

    {
        path: "/",
        element: <ClientLayout></ClientLayout>,
        children: [
            {
            path: "/",
            element: <Home></Home>
            },
            {
            path: "service",
            element: <Service></Service>
            },
            {
                path: "work",
                element: <Work></Work>  
            },
            {
                path: "work-detail",
                element: <Workdetail></Workdetail>
            },
            {
                path: "blog",
                element: <Blog></Blog>
            },
            {
                path: "blog-detail",
                element: <Blogdetails></Blogdetails>
            },
            {
                path: "about",
                element: <About></About>
            },
            {
                path: "contact",
                element: <Contact></Contact>
            },
            {
                path: "pricing",
                element: <Pricing></Pricing>
            },
        ]
    },
    
   
    
])

export default routes;