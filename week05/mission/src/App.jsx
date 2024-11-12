import './App.css'
import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

//import pages
import RootLayout from './layout/root-layout';
import Movies from './pages/movies'
import HomePage from './pages/home';
import NotFound from './pages/notfound';
import LoginPage from './pages/login';
import SignpuPage from './pages/signup';
import MovieDetail from './pages/movie_detail';

import DumyPage from './pages/dumy';

const router = createBrowserRouter([
    {
        path:'/',
        element: <RootLayout/>,
        errorElement: <NotFound/>,

        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: 'movies',
                element: <Movies/>
            },
            {
                path: 'login',
                element: <LoginPage/>
            },
            {
                path: 'signup',
                element: <SignpuPage/>
            },
            {
                path: 'movies/:movieId',
                element: <MovieDetail/>
            },
            {
                path: 'dumy/:dumyId',
                element: <DumyPage/>
            }
        ]
    }
])

function App(){
    return(
        <RouterProvider router={router}/>
    )
}
export default App;