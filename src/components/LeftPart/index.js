import React,{ useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css'

function LeftPart(props){
    
    useEffect(()=>{
        console.log(props)
    },[])

    return (
        <div>
            <div className="l-part L">
                <div className="border-eb info-m menu-item">
                <p className="menu-title">账户信息</p>
                <NavLink to="/sell/company" className="menu-item-link" activeClassName="act">企业信息</NavLink>
                <NavLink to="/sell/userinfo" className="menu-item-link" activeClassName="act">个人信息</NavLink>
                <NavLink to="/sell/order" className="menu-item-link" activeClassName="act">订单信息</NavLink>
                </div>
                <div className="border-eb security-m menu-item">
                <p className="menu-title">账户安全</p>
                <NavLink to="/sell/infocenter" className="menu-item-link" activeClassName="act">信息中心</NavLink>
                <NavLink to="/sell/changepassw" className="menu-item-link" activeClassName="act">修改密码</NavLink>
                <NavLink to="/sell/changephone" className="menu-item-link" activeClassName="act">修改手机</NavLink>
                </div>
                <div className="border-eb enterprise-m menu-item">
                <p className="menu-title">企业认证</p>
                <NavLink to="/sell/auth" className="menu-item-link" activeClassName="act">资质认证</NavLink>
                </div>
            </div>
        </div>
    )
}

export default React.memo(LeftPart)