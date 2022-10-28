
import {  Tabs } from "antd";
import BuyerSellerComp from "./buyerSellerComp";
import './p2pBuyer.scss';
const P2pBuyer = () => {
    return ( 
        <div className="p2pBuyer mt-5">
     <Tabs defaultActiveKey="1">
    <Tabs.TabPane tab="Buy" key="1">
     <BuyerSellerComp type='Buy' />
    </Tabs.TabPane>
    <Tabs.TabPane tab="Sell" key="2">
    <BuyerSellerComp  type='Sell'/>
    </Tabs.TabPane>
  </Tabs>
        </div>
     );
}
 
export default P2pBuyer
;