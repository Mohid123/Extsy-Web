import Header from "../LandingPageHeader"
import EditUserProfile from "./editUserProfile"
import TabsPanel from  "./Tabs";
import TabsPanel1 from  "./TabsUserFollowing";
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
    const [lists, setLists] = useState(false)
    const [editProfile, setEditProfile] = useState(false)
    const [userID, setUserID] = useState('my iddd')

    

  const handleClick = () =>{
    setTabs(false)
    setLists(true)
  }
  const showPosts = () =>{
    setTabs(true)
    setLists(false)
  }
  const closeDiv = () =>{
    setEditProfile(true)
  }
    return ( 
        <div > <Header></Header>
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
        <div className="text-center mt-4">
        <img src={avatarImage} style={{ width:"10%"}} alt=""/>
        <h6 className="mt-3">Ali Raza</h6>
        <p>@aliraza</p>
        {userID==='my id'?( <div><Button type="primary" shape="round"  size={"large"} onClick={closeDiv}>
        Edit Profile
      </Button>
      <Button type="primary"  shape="circle" icon={<UploadOutlined style={{color:'#8A2F88'}} />} size={'large'} style={{marginLeft:'10px',backgroundColor:'#F2E8F2', borderStyle:'none'}} />
     </div>):(<div><Button type="primary" shape="round"  size={"large"} onClick={closeDiv}>
        Following
      </Button>
      <Button type="primary" shape="round"  size={"large"} onClick={closeDiv} style={{marginLeft:'10px'}} ghost>
        Message
      </Button>
      <Button type="primary"  shape="circle" icon={<UploadOutlined style={{color:'#8A2F88'}} />} size={'large'} style={{marginLeft:'10px',backgroundColor:'#F2E8F2', borderStyle:'none'}} /></div>)}
     
      <div className="d-flex justify-content-center mt-3">
        <div style={{borderRight: '1px solid #8A2F88',paddingRight:'30px',height:'30px', cursor:'pointer'}} onClick={showPosts}>
        <h6 className="mb-0 pt-1">
        20
      </h6>
      <p className="">Posts</p>
      </div>
      <div style={{borderRight: '1px solid #8A2F88', paddingLeft:'30px',paddingRight:'30px',height:'30px',cursor:'pointer'}} onClick={handleClick}>
        <h6 className="mb-0 pt-1">
        20K
      </h6>
      <p className="">Following</p>
      </div>
      <div style={{ paddingLeft:'30px',cursor:'pointer'}} onClick={handleClick}>
        <h6 className="mb-0 pt-1">
        20K
      </h6>
      <p className="">Followers</p>
      </div>
      </div> 
      {lists? (<TabsPanel1/>) :(<TabsPanel/>)}
      
        </div>
      </Col>
      <Col className="gutter" span={24}>
         
      </Col>
    
     
    </Row> </div>)}

    
    </div>
    )
}
export default UserProfileInfo;

