import { createBrowserRouter } from "react-router-dom";
import Login from "./features/identify/component/Login";
import Register from "./features/identify/component/Register";
import IdentityLayout from "./layouts/identity-layout";

const router = createBrowserRouter([
    {
        element:<IdentityLayout />,
        children: [
            {
                path:'login',
                element:<Login />
            },
        
            {
                path:'register',
                element:<Register />
            },
        ]
    },
   
    
])

export default router