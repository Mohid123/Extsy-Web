import EditUserProfile from "./editUserProfile"
import TabsPanel from  "./Tabs";
import FollowingTab from  "./TabsUserFollowing";
import FollowersTab from  "./TabsUserFollowers";

import { Col, Row, Button,Tabs, Card  } from 'antd';
import topImage from '../../assets/img/Rectangle 19.svg'
import avatarImage from '../../assets/img/84.svg'
import { UploadOutlined } from '@ant-design/icons';
import { useState } from "react";
const style = {
    background: '#0092ff',
    padding: '8px 0',
  };
  
const UserProfileInfo = () => {
    const [tabs, setTabs] = useState(true)
    const [followingTab, setFollowingTab] = useState(false)
    const [followersTab, setFollowersTab] = useState(false)
    const [editProfile, setEditProfile] = useState(false)
    const [userID, setUserID] = useState('my id')

    
    
    const showFollowers = () =>{
      setTabs(false)
      setFollowersTab(true)
      setFollowingTab(false)
    }
  const handleClick = () =>{
    setTabs(false)
    setFollowingTab(true)
    setFollowersTab(false)
  }
  const showPosts = () =>{
    setTabs(true)
    setFollowingTab(false)
    setFollowersTab(false)
  }
  const closeDiv = () =>{
    setEditProfile(true)
  }
    return ( 
        <div > 
{editProfile? (<EditUserProfile/>):( <div className=" container">
         <Row
      gutter={{ xs: 24, sm: 24, md: 24, lg: 8 }}
    >
      <Col className="gutter-row" span={24} >
        <div>
        <img src={topImage} style={{ width:"100%"}} alt=""/>
        </div>
      </Col>
      <Col className="gutter-row" span={24}>
        <div className="text-center  mt-4" >
        <img src={avatarImage} style={{ width:"9%", }} className="circle" alt=""/>
        <h6 className="mt-3 userProfile__userName">Ali Raza</h6>
        <p className="userProfile__userEmail">@aliraza</p>
        {userID==='my id'?( <div><Button type="primary" shape="round"  size={"large"} onClick={closeDiv} className="poppinsFont">
        Edit Profile
      </Button>
      <Button type="primary"  shape="circle" icon={<UploadOutlined style={{color:'#8A2F88'}} />} size={'large'} style={{marginLeft:'10px',backgroundColor:'#F2E8F2', borderStyle:'none'}} />
     </div>):(<div><Button type="primary" shape="round"  size={"large"} onClick={closeDiv} className="poppinsFont">
        Following
      </Button>
      <Button type="primary" shape="round"  size={"large"} onClick={closeDiv} style={{marginLeft:'10px'}} ghost className="poppinsFont">
        Message
      </Button>
      <Button type="primary"  shape="circle" icon={<UploadOutlined style={{color:'#8A2F88'}} />} size={'large'} style={{marginLeft:'10px',backgroundColor:'#F2E8F2', borderStyle:'none'}} /></div>)}
     
      <div className="d-flex justify-content-center poppinsFont mt-3">
        <div style={{borderRight: '1px solid #8A2F88',paddingRight:'30px',height:'30px', cursor:'pointer'}} onClick={showPosts}>
       
      <p className=" userProfile__tabs">Posts</p>
      <h6 className=" userProfile__tabsNumbers">
        20
      </h6>
      </div>
      <div style={{borderRight: '1px solid #8A2F88', paddingLeft:'30px',paddingRight:'30px',height:'30px',cursor:'pointer'}} onClick={handleClick}>
        
      <p className="userProfile__tabs">Following</p>
      <h6 className="  userProfile__tabsNumbers">
        20K
      </h6>
      </div>
      <div style={{ paddingLeft:'30px',cursor:'pointer'}} onClick={showFollowers}>
       
      <p className="userProfile__tabs">Followers</p>
      <h6 className="  userProfile__tabsNumbers">
        20K
      </h6>
      </div>
      </div> 
      {followingTab? (<FollowingTab/>) :tabs?(<TabsPanel/>):(<FollowersTab/>)}
      
        </div>
      </Col>
      <Col className="gutter" span={24}>
         
      </Col>
    
     
    </Row> </div>)}

    
    </div>
    )
}
export default UserProfileInfo;

