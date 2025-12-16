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
import FoodDetails from './components/FoodDetails/FoodDetails.jsx';
import Login from './components/Login/Login.jsx';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './Routes/PrivateRoute.jsx';



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
        path: 'login',
        Component: Login
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
      },
      {
        path: 'foodDetails/:id',
        loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`),
        element : <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>,
)
