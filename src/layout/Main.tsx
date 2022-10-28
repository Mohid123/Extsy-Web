import { useLocation } from "react-router-dom";
import MainViewHeader from "../components/LandingPageHeader";
import BuyerSellerHeader from "../components/p2pBuyer/p2pBuyerSellerHeader/p2pBuyerSellerHeader";

const MainLayout = ({children}:any) => {
    const url = useLocation();
    
    return ( 
    <div>
        {url.pathname === "/p2pbuyer"? <BuyerSellerHeader/>:  <MainViewHeader/>}
        <div className="MainDivCentral">
            {children}
        </div>
    </div> 
    );
}
 
export default MainLayout;