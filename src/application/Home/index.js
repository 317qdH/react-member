import React from 'react';
import Header from '../../components/Header/index';
import NavTab from '../../components/NavTab/index';
import { renderRoutes } from 'react-router-config';

function Home(props){
    const { route } = props
    return (
        <div>
            <Header></Header>
            <NavTab></NavTab>
            { renderRoutes(route.routes) }
        </div>
    )
}

export default React.memo(Home)