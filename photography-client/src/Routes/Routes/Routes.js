import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddReview from "../../Pages/AddReview/AddReview";
import AddService from "../../Pages/AddService/AddService";
import Blogs from "../../Pages/Blogs/Blogs";
import EditReview from "../../Pages/EditReview/EditReview";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Services from "../../Pages/Services/Services";
import ServiceDetails from "../../Pages/Shared/ServiceDetails/ServiceDetails";
import SignUp from "../../Pages/SignUp/SignUp";
import ErrorRoute from "../ErrorRoute/ErrorRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
            },
            {
                path: '/addreview/:id',
                element: <AddReview></AddReview>,
                loader: ({params}) => fetch(`https://photography-server-chi.vercel.app/services/${params.id}`)
                
            },
            {
                path:'/myreviews',
                element: <PrivateRoute> <MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/editreview/:id',
                element: <EditReview></EditReview>,
                loader: ({params}) => fetch(`https://photography-server-chi.vercel.app/myreviews/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path:'/addservice',
                element: <AddService></AddService>
            },
            {
                path:'/services',
                element: <Services></Services>,
                loader: () => fetch('https://photography-server-chi.vercel.app/services')
            },
            {
                path:'/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`https://photography-server-chi.vercel.app/services/${params.id}`)
            },
            {
                path:'/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
         
    },
    {
        path: "*",
        element: <ErrorRoute></ErrorRoute>
    }
])