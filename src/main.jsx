import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './layouts/RootLayout.jsx';
import Home from './components/Home/Home.jsx';
import AvailableFoods from './components/AvailableFoods/AvailableFoods.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import Register from './components/Register/Register.jsx';
import AddFood from './components/AddFood/AddFood.jsx';
import MyFoods from './components/MyFoods/MyFoods.jsx';
import FoodRequests from './components/FoodRequests/FoodRequests.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'availableFoods',
        Component: AvailableFoods
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: 'addFood',
        element: <AddFood></AddFood>
      },
      {
        path: 'myFoods',
        element: <MyFoods></MyFoods>
      },
      {
        path: 'foodRequests',
        element: <FoodRequests></FoodRequests>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
