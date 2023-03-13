import { useRoutes } from 'react-router-dom'
import { Countrie } from '../pages/Countrie'
import { Home } from '../pages/Home'
import { Context } from '../contexts/Context';
import { useContext } from 'react';


export const MainRoutes = () => {
    const{state} = useContext(Context)
    return useRoutes([
        { path:'/',  element: <Home/>},                                             
        { path:'/countrie/:index',  element: <Countrie theme={{ status: state.theme.status }}/>}         
    ]);
};


