
import {  Tabs } from "antd";
import BuyerSellerComp from "./buyerSellerComp";
import './p2pBuyer.scss';
const P2pBuyer = () => {
    return ( 
      <div className="pb-5">
        <div className="BoxShadow mt-5 main bg-white">
     <Tabs defaultActiveKey="1">
    <Tabs.TabPane tab="Buy" key="1">
     <BuyerSellerComp type='Buy' />
    </Tabs.TabPane>
    <Tabs.TabPane tab="Sell" key="2">
    <BuyerSellerComp  type='Sell'/>
    </Tabs.TabPane>
  </Tabs>
        </div>
        </div>
     );
}
 
export default P2pBuyer
;