import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { useEffect } from 'react';

const router = createBrowserRouter([
  //접근 경로 처리
  {
    path: '/',   //현재 페이지에 접근하면 보여주는 요소들
    element: <RootLayout/>,
    errorElement: <NotFound/>,
    children: [
      {
        index: '/',
        element: <HomePage/>
      },
      {
        path: 'movies',
        element: <MoviesPage/>
      },
      {
        path: 'login',
        element: <LogIn/>
      },
      {
        path: 'signup',
        element: <Signup/>
      },
      {
        path: 'search',
        element: <SearchPage/>
      }
    ]
  }
])

function App() {
    return (
      <>
        <RouterProvider router={router}/>
      </>
    )
    
}

export default App
