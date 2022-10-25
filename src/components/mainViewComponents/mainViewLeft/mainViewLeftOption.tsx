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
const MainViewLeftOption = () => {
    const [show, setShow] = useState(true);
    const navigate = useNavigate()
    return ( 
       <>
         <div className="p-5">
                    <span className="d-flex justify-content-between ">
                      
                    <span className=" propertiesTextStyle" onClick={()=>{console.log("watch new");}}><img src={play} className="me-3 "/>Watch Now</span> 
                         <Badge
        className="ms-3"
        count={show ? "new" : 0}
        style={{ backgroundColor: '#EE1D52' }}
      />
                    </span>    
                    <span className="d-flex justify-content-between mt-2">
                      
                    <span className=" propertiesTextStyle" onClick={()=>{console.log("nft market place new");}}><img src={bookMark} className="me-3"/>NFTs Marketplace</span> 
             
                  </span>  
                  <span className="d-flex justify-content-between mt-2">
                      
                      <span className=" propertiesTextStyle" onClick={()=>{}}><img src={p2p} className="me-3"/>P2P</span> 
             
                      </span>  
                      <span className="d-flex justify-content-between mt-2">
                      
                      <span className=" propertiesTextStyle" onClick={()=>{}}><img src={bookMark} className="me-3"/>Save Posts</span> 
             
                      </span>  
                  <span className="d-flex justify-content-between mt-2">
                      
                  <span className=" propertiesTextStyle" onClick={()=>{}}><img src={events} className="me-3"/>Events</span> 
         
                  </span>  
                  <span className="d-flex justify-content-between mt-2">
                      
                      <span className=" propertiesTextStyle" onClick={()=>{}}><img src={sponsor} className="me-3"/>Sponsors</span> 
             
                      </span>  
                  
                  <span className="d-flex justify-content-between mt-2 ">
                      
                  <span className=" propertiesTextStyle" onClick={()=>navigate('/groups')}><img src={groupUser} className="me-3"/>Groups</span> 
       
                 </span>  
                    </div>
                  <Groups/>
       </>
     );
}
 
export default MainViewLeftOption;