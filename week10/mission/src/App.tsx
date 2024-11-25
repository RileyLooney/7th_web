import './App.css'
import {createBrowserRouter, RouteObject, RouterProvider} from "react-router-dom";
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
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

const queryClient = new QueryClient()

function App(){
    return(
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
        
    )
}
export default App;