import {createBrowserRouter} from "react-router"
import App from "../App"
import DetailsPage from "./DetailsPage"
import Navbar from "./Navbar"
import {items }from "./ItemData"
import NavFilter from "./NavFilter"

export const Router = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        children : [
            {
                path : '/',
                element : <NavFilter/>
            },
            {
                path : '/items/:id',
                element : <DetailsPage/>
            },
            {
                path : '/detailedpage',
                element : <DetailsPage/>
            },
           
        ]
    }
])