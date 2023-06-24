import {createBrowserRouter} from "react-router-dom";
import Layout from "../Components/Common/Layout";
import LandingPage from "../Pages/LandingPage";


export const mainRoutes = createBrowserRouter([
    {
        path : "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element : <LandingPage/>
            }
        ]
    }
])