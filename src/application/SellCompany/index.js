import React from 'react';

function SellCompany(props){
    return (
        <div className="r-part R">
            <div className="border-eb">
            <h3 className="acc-tit acc-orderinfo-title">订单信息</h3>
            <div className="acc-order-info">
                这里是SellCompany
            </div>
            </div>
        </div>
    )
}

export default React.memo(SellCompany)