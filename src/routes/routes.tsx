import App from "@/App";
import { createBrowserRouter } from "react-router-dom";



export const route=createBrowserRouter([
    {
        path:'/',
        element:<App></App>
        
    },
    {
        path:'/admin',
        element:()
    }
])