import React from 'react';
import './index.less';
import { NavLink } from 'react-router-dom';

function SellCenter(props){
    var data = {id:3,name:'sam',age:36};
    var path = {
        pathname:'/sell',
        query:data,
        state:data,
        search:'sort=sell'
    }
    return (
        <div className="wrap-middle">
            <div className="user-info user-pd30 white-bg mb20">
                <div className="user-info-tbox clearfix">
                    <div className="user-info-pic L">
                        <NavLink to="/account" title="企业Logo"><img src="https://img3.912688.com/240ce13f-104b-48cd-8034-4e23d8cd4bf1.jpg" /></NavLink>
                    </div>
                    <div className="user-info-ins L">
                        <p className="user-info-name">早上好，栋栋先生，美好的一天开始了，祝您快乐度过，微笑生活！</p>
                        <div className="user-info-comp clearfix">
                            <a href="https://23177846.912688.com"  title="南浔千金云仙农产品商行"><p className="L">南浔千金云仙农产品商行</p></a>
                            <p className="user-info-v L">
                                <a href="https://www.912688.com/hhtonline/" className="user-info-vicon" title="采通通会员"></a>第<span className="red">&nbsp;1&nbsp;</span>年
                            </p>
                        </div>
                    </div>
                    <div className="user-info-zz clearfix R">
                        <NavLink to="/account" className="" title="企业资质已认证">
                            <div className="user-info-zz-item user-info-zz-item1 L act">资质已认证</div>
                        </NavLink>
                        <NavLink to="/account" className="" title="微信已绑定，可随时接受买家询盘">
                            <div className="user-info-zz-item user-info-zz-item2 L act">微信已认证</div>
                        </NavLink>
                        <NavLink to="/account" className="" title="13587230020">
                            <div className="user-info-zz-item user-info-zz-item3 L">手机已认证</div>
                        </NavLink>
                    </div>
                </div>
                <div className="user-info-list clearfix">
                    <NavLink to={path} className="user-info-item L" title="在售商品">在售商品（26）</NavLink>
                    <NavLink to="/sell/onsell" className='user-info-item L ' title="审核商品">审核商品(0）</NavLink>
                    <NavLink to="/sell/onsell" className='user-info-item L ' title="拒审商品">拒审商品(0）</NavLink>
                    <NavLink to="/sell/onsell" className='user-info-item L ' title="我的询盘">我的询盘（0）</NavLink>
                    <NavLink to="/sell/onsell" className="user-info-item L" title="我的留言">我的留言（0）</NavLink>
                    <NavLink to="/sell/onsell" className="user-info-item L" title="我的求购">我的求购（100）</NavLink>
                </div>
            </div>
        </div>
    )
}

export default React.memo(SellCenter)