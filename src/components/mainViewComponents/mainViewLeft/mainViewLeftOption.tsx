import { Badge} from "antd";
import   {useState} from 'react';
import play from "../../../assets/img/Play.svg";
import events  from "../../../assets/img/events.svg"
import bookMark from "../../../assets/img/Bookmark.svg"
import sponsor from "../../../assets/img/sponsors.svg"
import groupUser from "../../../assets/img/user-group-solid.svg"
import p2p from "../../../assets/img/p2p.svg"
import { useNavigate } from "react-router-dom";
import './mainViewLeft.scss'
import Groups from "./groups";
import NavigateOption from "../../navigateOption";
const MainViewLeftOption = () => {
   
    const navigate = useNavigate()
    return (
      <>
        <div className="landingPageOption ">
          <NavigateOption
            url={play}
            text="Watch Now"
            onClick={() => navigate("/")}
            badge={true}
          />
          <NavigateOption
            url={bookMark}
            text="NFTs Marketplace"
            onClick={() => navigate("/")}
          />
          <NavigateOption url={p2p} text="P2P" onClick={() => navigate("/p2pbuyer")} />
          <NavigateOption
            url={bookMark}
            text="Save Posts"
            onClick={() => navigate("/")}
          />
          <NavigateOption
            url={events}
            text="Events"
            onClick={() => navigate("/p2pbuyer/cancelorder")}
          />
          <NavigateOption
            url={sponsor}
            text="Sponsors"
            onClick={() => navigate("/p2pbuyer/buyerusdt")}
          />
          <NavigateOption
            url={groupUser}
            text="Groups"
            onClick={() => navigate("/groups")}
          />
        </div>
        
      </>
    );
}
 
export default MainViewLeftOption;