import React, { useEffect } from 'react';
import { getInfo } from '../../api/request';
import LeftPart from '../../components/LeftPart/index';
import { renderRoutes } from 'react-router-config';
import { Route, Redirect } from 'react-router'

function Sell(props){
    const { route } = props;
    useEffect(()=>{
        console.log(props)
        console.log(props.location.query)
        // console.log(url.parse()) 
        // getInfo({loginType:''}).then(res =>{
        //     console.log(res)
        // })
    },[])
    return (
        <div>
            
            <div id="main">
                <div className="wrap-middle clearfix">
                    <LeftPart></LeftPart>
                    { renderRoutes(route.routes) }
                    
                </div>
            </div>
            <Route exact path="/sell" render={() => (
                <Redirect to="/sell/company"/>
            )}/>
        </div>
    )
}

export default React.memo(Sell)