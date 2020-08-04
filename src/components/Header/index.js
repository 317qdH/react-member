import React from 'react';
import topnavPhoneUrl from '../../assets/images/topnav-phone.png';

function Header (props){
    return (
        <div className="topnav-common">
        <div className="topnav-con wrap-middle">
          <div className="topnav-phone topnav-arrow">
            <i className="topnav-iconphone"></i>手机网站
            <div className="topnav-phone-detail">
              <div className="topnav-phone-d-t">手机搜好货：
                <a href="//m.912688.com" target="_blank">m.912688.com </a>
              </div>
              <div className="topnav-phone-d-img">
                <img src={topnavPhoneUrl}/>
              </div>
            </div>
          </div>
          <div className="L" id="top-navigate">
            <span className="pl10">老板！</span>
            <a rel="nofollow"  title="登录" className="topnav-ora">[请登录]</a>&nbsp;
            <a rel="nofollow" href="/reg1.html" title="注册" className="topnav-ora">[免费注册]</a>
          </div>
    
          <ul className="topnav-menu R">
            <li>
              <div className="topnav-menu-con">
                <a href="//www.912688.com" title="网站首页"><i className="iconfont"></i>网站首页</a>
              </div>
            </li>
            <li className="topnav-list-haschild topnav-usercenter">
              <div className="topnav-arrow">
                <a rel="nofollow" target="_blank" href="##" title="会员中心">会员中心</a>
              </div>
              <div className="topnav-list-childcon topnav-usercenter-con">
                <dl className="clearfix">
                  <dt>我的供应</dt>
                  <dd>
                    <a rel="nofollow" target="_blank" href="/sellercenter/findcategory" title="发布供应产品">发布供应产品</a>
                  </dd>
                  <dd>
                    <a rel="nofollow" target="_blank" href="/sellercenter/onsaleproductlist" title="管理供应产品">管理供应产品</a>
                  </dd>
                </dl>
                <dl className="clearfix">
                  <dt>我的询盘</dt>
                  <dd>
                    <a rel="nofollow" target="_blank" href="/sellercenter/findcategory" title="我发出的询盘">我发出的询盘</a>
                  </dd>
                  <dd>
                    <a rel="nofollow" target="_blank" href="/sellercenter/onsaleproductlist" title="我收到的询盘">我收到的询盘</a>
                  </dd>
                </dl>
                <dl className="clearfix">
                  <dt>我的采购</dt>
                  <dd>
                    <a rel="nofollow" target="_blank" href="/sellercenter/findcategory" title="发布采购信息">发布采购信息</a>
                  </dd>
                  <dd>
                    <a rel="nofollow" target="_blank" href="/sellercenter/onsaleproductlist" title="管理采购信息">管理采购信息</a>
                  </dd>
                </dl>
                <dl className="clearfix">
                  <dt>我的收藏</dt>
                  <dd>
                    <a rel="nofollow" target="_blank" href="/sellercenter/findcategory" title="我收藏的店铺">我收藏的店铺</a>
                  </dd>
                  <dd>
                    <a rel="nofollow" target="_blank" href="/sellercenter/onsaleproductlist" title="我收藏的产品">我收藏的产品</a>
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <div className="topnav-menu-con">
                <a target="_blank" href="/_resources/aboutus/enterpriseBackground.html">采通通</a>
              </div>
            </li>
            <li>
              <div className="topnav-menu-con">
                <a target="_blank" href="/_resources/aboutus/enterpriseBackground.html">直飞宝</a>
              </div>
            </li>
            <li>
              <div className="topnav-menu-con">
                <a target="_blank" href="/_resources/aboutus/enterpriseBackground.html">标王</a>
              </div>
            </li>
            <li>
              <div className="topnav-menu-con">
                <a target="_blank" href="/_resources/aboutus/enterpriseBackground.html">关于我们</a>
              </div>
            </li>
            <li>
              <div className="topnav-menu-con">
                <a target="_blank" href="/_resources/aboutus/enterpriseBackground.html">网站导航</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default React.memo(Header)