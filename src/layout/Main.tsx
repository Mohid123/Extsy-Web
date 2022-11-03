import { useLocation } from "react-router-dom";
import MainViewHeader from "../components/LandingPageHeader";
import BuyerSellerHeader from "../components/p2pBuyer/p2pBuyerSellerHeader/p2pBuyerSellerHeader";
import ChatBox from '../components/chat/chat'
const MainLayout = ({children}:any) => {
    const url = useLocation();
    
    return ( 
    <div style={{background:' #F5F5F5'}}>
        {url.pathname.includes("/p2pbuyer")? <BuyerSellerHeader/>:  <MainViewHeader/>}
        <div className="MainDivCentral">
            {children}
        </div>
        {url.pathname.includes("/p2pbuyer")? "":  <ChatBox/>}
        
    </div> 
    );
}
 
export default MainLayout;