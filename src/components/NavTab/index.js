import React from 'react';
import logoUrl from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import './index.less'

function NavTab(props){
    return (
        <div id="head-nav">
            <div className="wrap-middle">
            <div className="logo iblock"><img src={logoUrl} /></div>
            <ul className="nav-lists clearfix iblock">
                <li>
                    <NavLink to="/sellCenter" activeClassName="act">首页</NavLink>
                </li>
                <li>
                <   NavLink to="/sell" activeClassName="act">销售</NavLink>
                </li>
                <li>
                    <NavLink to="/purchase" activeClassName="act">采购</NavLink>
                </li>
                <li >
                    <NavLink to="/giftserver" activeClassName="act">增值服务</NavLink>
                </li>
                <li>
                    <NavLink to="/account" activeClassName="act">账户管理</NavLink>
                </li>
                <li>
                    <NavLink to="/collect" activeClassName="act">收藏夹</NavLink>
                </li>
                <li> 
                    <NavLink to="/zfb" activeClassName="act">直飞宝</NavLink>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default React.memo(NavTab)