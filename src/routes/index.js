import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from '../application/Home';
import SellCenter from '../application/SellCenter';
import Sell from '../application/Sell';
import Purchase from '../application/Purchase';
import Giftserver from '../application/Giftserver';
import Account from '../application/Account';
import Collect from '../application/Collect';
import Zfb from '../application/Zfb';
import SellCompany from '../application/SellCompany';

export default [
    {
      path: "/",
      component: Home,
      routes:[
        {
          path:'/',
          exact:true,
          render:()=>(
            <Redirect to={"/sellCenter"} />
          )
        },
        {
          path:"/sellCenter",
          component:SellCenter,
        },
        {
          path:"/sell",
          component:Sell,
          routes:[
            {
              path:'/sell/company',
              component:SellCompany
            },
            {
              path:'/sell/userinfo',
              component:Zfb
            }
          ]
        },
        {
          path:"/purchase",
          component:Purchase,
        },
        {
          path:"/giftserver",
          component:Giftserver,
        },
        {
          path:"/account",
          component:Account,
        },
        {
          path:"/collect",
          component:Collect,
        },
        {
          path:"/zfb",
          component:Zfb,
        },
      ]
    }
  ]