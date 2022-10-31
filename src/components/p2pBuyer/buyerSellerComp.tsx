import { DownOutlined } from "@ant-design/icons";
import {  Dropdown, Menu, Space, Tabs } from "antd";
import {  useNavigate } from "react-router-dom";
import BuySellTable from "./buySellTable";

import './tableRowsStyle.scss'
const menu = (
  <Menu
    items={[
      {
        label: 'usd',
        key: '0',
      },
      {
        label: <a href="https://www.aliyun.com">euro</a>,
        key: '1',
      },
      // {
      //   type: 'divider',
      // },
      {
        label: 'fr',
        key: '3',
      },
    ]}
  />
);

type Props ={
  type:string
}
const BuyerSellerComp = ({type}:Props) => {
  const navigate =useNavigate()
    return ( 
        <>
   
  <Tabs
    defaultActiveKey="1"
    type="editable-card"
    // onChange={onChange}
    items={[
      {
        label: `USDT`,
        key: "1",
        children: <BuySellTable text={type} onClick={()=>navigate("/p2pbuyer/buyerusdt")}/>,
      },
      {
        label: `BTC`,
        key: "2",
        children:<BuySellTable text={type} onClick={()=>navigate("/p2pbuyer/buyerusdt")}/>,
      },
      {
        label: `ETH`,
        key: "3",
        children: <BuySellTable text={type} onClick={()=>navigate("/p2pbuyer/buyerusdt")}/>,
      },
      {
        label: `KCS`,
        key: "4",
        children: <BuySellTable text={type} onClick={()=>navigate("/p2pbuyer/buyerusdt")}/>,
      },
      {
        label: `BTC`,
        key: "5",
        children: <BuySellTable text={type} onClick={()=>navigate("/p2pbuyer/buyerusdt")}/>,
      },
      {
        label: `ETH`,
        key: "6",
        children:<BuySellTable text={type} onClick={()=>navigate("/p2pbuyer/buyerusdt")}/>,
      },
      {
        label: `KCS`,
        key: "7",
        children: <BuySellTable text={type} onClick={()=>navigate("/p2pbuyer/buyerusdt")}/>,
      },
    ]}  
    addIcon={<Dropdown className="dropMenu" overlay={menu} trigger={['click']}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Pkr
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>}
  />
        </>
     );
}
 
export default BuyerSellerComp;