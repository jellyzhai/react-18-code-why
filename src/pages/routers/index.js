import { Navigate } from "react-router-dom";
// import AboutPage from "../AboutPage";
import HomePage from "../HomePage";
import HomeRank from "../HomePage/HomeRank";
import HomeRecommend from "../HomePage/HomeRecommend";
import LoginPage from "../LoginPage";
import NotFound from "../NotFound";
import DetailsPage from "../DetailsPage";
import React from "react";

const AboutPage = React.lazy(() => import('../AboutPage'));

const routers = [
    {
        path: '/',
        element: <Navigate to="/login" />
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/home',
        element: <HomePage />,
        children: [
            {
                path: '/home',
                element: <Navigate to='/home/recommend' />
            },
            {
                path: '/home/recommend',
                element: <HomeRecommend />
            },
            {
                path: '/home/rank',
                element: <HomeRank />
            },
        ]
    },
    {
        path: '/about',
        element: <AboutPage />
    },
    {
        path: '/details/:id',
        element: <DetailsPage />
    },
    {
        path: '*',
        element: <NotFound />
    },
];

export default routers;