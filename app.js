import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./Components/Header.js"
import Body from "./Components/Body.js";

import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";


const AppLayout = () => {
    return(
        <div className ="app">
            <Header />
            <Outlet />
        </div>
    )
}
const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[

            {
                path:"/",
                element:<Body/>,
            },
            
            

        ],

    },
    


    
]
);
     


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
