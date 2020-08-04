import React,{ useState } from 'react';
import LeftPart from '../../components/LeftPart/index';
import { ConfigProvider, DatePicker, message,Alert, Menu  } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css';
import { NavLink } from 'react-router-dom';

const { SubMenu } = Menu;

function Purchase(props){
    const [date, setDate] = useState(null);
    const handleChange = value => {
        message.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
        setDate(value);
    };
    const handleClick = e =>{
        console.log('click',e)
    }
    return (
        <div className="wrap-middle clearfix">
            <LeftPart></LeftPart>
            <div className="r-part R">
                <h1>采购</h1>
                <ConfigProvider locale={zhCN}>
                    <div style={{ width: 400, margin: '0 0 0 20px' }}>
                        <DatePicker onChange={handleChange} />
                        <div style={{ marginTop: 16 }}>
                        当前日期：{date ? date.format('YYYY年MM月DD日') : '未选择'}
                        </div>
                        <Alert message="当前日期" description={date ? date.format('YYYY年MM月DD日') : '未选择'} />
                    </div>
                </ConfigProvider>
                <h1>导航菜单</h1>
                <Menu
                  onClick = {handleClick}
                  style={{widt:256}}
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  mode="inline"
                  >
                    <SubMenu key="sub1" title={
                        <span>
                            <MailOutlined/>
                            <span>Navigation One</span>
                        </span>
                    }>
                        <Menu.ItemGroup key="g1" title="Item 1">
                            <Menu.Item key="1">Options 1</Menu.Item>
                            <Menu.Item key="2">Options 2</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="g2" title="Item 2">
                            <Menu.Item key="3">Options 3</Menu.Item>
                            <Menu.Item key="4">Options 4</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                        </SubMenu>
                        <SubMenu
                        key="sub4"
                        title={
                            <span>
                            <SettingOutlined />
                            <span>Navigation Three</span>
                            </span>
                        }
                        >
                        <Menu.Item key="9"><NavLink to="/">Option 9</NavLink></Menu.Item>
                        <Menu.Item key="10"><NavLink to="/">Option 10</NavLink></Menu.Item>
                        <Menu.Item key="11"><NavLink to="/">Option 11</NavLink></Menu.Item>
                        <Menu.Item key="12"><NavLink to="/">Option 12</NavLink></Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        </div>
    )
}

export default React.memo(Purchase)