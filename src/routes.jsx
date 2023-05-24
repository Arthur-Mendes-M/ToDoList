import React from "react";
import { createBrowserRouter } from "react-router-dom";

// Components
import { ErrorPage } from "./components/screens/errorPage";
import { LandingPage } from "./components/screens/LandingPage";
import { ToDoPage } from "./components/screens/ToDoPage";

const routes = createBrowserRouter([
    {   
        path: '/',
        element: <LandingPage/>,
        errorElement: <ErrorPage />
    },
    {
        path: '/toDo/:id',
        element: <ToDoPage/>
    }
])

export { routes }