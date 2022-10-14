import React,{useState} from 'react';
import { AntDesignOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Input, Modal, Tabs, Tooltip } from "antd";

const GroupComp = () => {
  const [open, setOpen] = useState(false);
    return ( 
        <div>
            <Input size="small" placeholder="search" prefix={ <SearchOutlined/>} className="mainViewHeader__headerSearch__groupSearch" />
    <div className="d-flex justify-content-between tabs">
    <Tabs defaultActiveKey="1">
    <Tabs.TabPane tab="Popular Groups" key="1" className="tabPane">
    <div className="d-flex  justify-content-around">
 
          <div className="ms-4 text-center">
    <Avatar
            size={60}
            className={"container__storyAvatar ms-2"}

          src={
                <img
                  src="https://joeschmoe.io/api/v1/random"
                  style={{
                    // width: 32,
                  }}
                />
              }
            />
    <p className="mb-0  ">Top % Soccer</p>
          <p className="  container__userName m-0 p-0">43k+ member</p>
          <p className="  container__userName m-0 p-0">8 post dailys</p>
          <Avatar.Group
      maxCount={3}
      maxStyle={{
        color: '#f56a00',
        backgroundColor: '#fde3cf',
      }}
    >
      <Avatar src="https://joeschmoe.io/api/v1/random" />
      <Avatar
        style={{
          backgroundColor: '#f56a00',
        }}
      >
        K
      </Avatar>
      <Tooltip title="Ant User" placement="top">
        <Avatar
          style={{
            backgroundColor: '#87d068',
          }}
          icon={<UserOutlined />}
        />
      </Tooltip>
      <Avatar
        style={{
          backgroundColor: '#1890ff',
        }}
        icon={<AntDesignOutlined />}
      />
          <Avatar src="https://joeschmoe.io/api/v1/random" />
            <Avatar src="https://joeschmoe.io/api/v1/random" />
    </Avatar.Group><br/>
    <Button  className="createGroupBtn mt-3" >
      join Now
        </Button>
          </div>
          <div className="ms-4 text-center">
    <Avatar
            size={60}
            className={"container__storyAvatar ms-2"}

          src={
                <img
                  src="https://joeschmoe.io/api/v1/random"
                  style={{
                    // width: 32,
                  }}
                />
              }
            />
    <p className="mb-0  ">Top % Soccer</p>
          <p className="  container__userName m-0 p-0">43k+ member</p>
          <p className="  container__userName m-0 p-0">8 post dailys</p>
          <Avatar.Group
      maxCount={3}
      maxStyle={{
        color: '#f56a00',
        backgroundColor: '#fde3cf',
      }}
    >
      <Avatar src="https://joeschmoe.io/api/v1/random" />
      <Avatar
        style={{
          backgroundColor: '#f56a00',
        }}
      >
        K
      </Avatar>
      <Tooltip title="Ant User" placement="top">
        <Avatar
          style={{
            backgroundColor: '#87d068',
          }}
          icon={<UserOutlined />}
        />
      </Tooltip>
      <Avatar
        style={{
          backgroundColor: '#1890ff',
        }}
        icon={<AntDesignOutlined />}
      />
          <Avatar src="https://joeschmoe.io/api/v1/random" />
            <Avatar src="https://joeschmoe.io/api/v1/random" />
    </Avatar.Group><br/>
    <Button  className="createGroupBtn mt-3" >
      join Now
        </Button>
          </div>
          {/* <div className="ms-4">
    <Avatar
            size={60}
            className={"container__storyAvatar ms-2"}

          src={
                <img
                  src="https://joeschmoe.io/api/v1/random"
                  style={{
                    // width: 32,
                  }}
                />
              }
            />
    <p className="mb-0">Top % Soccer</p>
          <p className="text-center  container__userName m-0 p-0">43k+ member</p>
          <p className="text-center  container__userName m-0 p-0">8 post dailys</p>
          </div>
          <div className="ms-4">
    <Avatar
            size={60}
            className={"container__storyAvatar ms-2"}

          src={
                <img
                  src="https://joeschmoe.io/api/v1/random"
                  style={{
                    // width: 32,
                  }}
                />
              }
            />
    <p className="mb-0">Top % Soccer</p>
          <p className="text-center  container__userName m-0 p-0">43k+ member</p>
          <p className="text-center  container__userName m-0 p-0">8 post dailys</p>
          </div> */}
          
          
    </div>
    
    </Tabs.TabPane>
    <Tabs.TabPane tab="My Groups" key="2" className="tabPane">
    <div className="d-flex  justify-content-around">
 
 <div className="ms-4 text-center">
<Avatar
   size={60}
   className={"container__storyAvatar ms-2"}

 src={
       <img
         src="https://joeschmoe.io/api/v1/random"
         style={{
           // width: 32,
         }}
       />
     }
   />
<p className="mb-0  ">Top % Soccer</p>
 <p className="  container__userName m-0 p-0">43k+ member</p>
 <p className="  container__userName m-0 p-0">8 post dailys</p>
 <Avatar.Group
maxCount={3}
maxStyle={{
color: '#f56a00',
backgroundColor: '#fde3cf',
}}
>
<Avatar src="https://joeschmoe.io/api/v1/random" />
<Avatar
style={{
 backgroundColor: '#f56a00',
}}
>
K
</Avatar>
<Tooltip title="Ant User" placement="top">
<Avatar
 style={{
   backgroundColor: '#87d068',
 }}
 icon={<UserOutlined />}
/>
</Tooltip>
<Avatar
style={{
 backgroundColor: '#1890ff',
}}
icon={<AntDesignOutlined />}
/>
 <Avatar src="https://joeschmoe.io/api/v1/random" />
   <Avatar src="https://joeschmoe.io/api/v1/random" />
</Avatar.Group><br/>
<Button  className="createGroupBtn mt-3" >
join
</Button>
 </div>
 <div className="ms-4 text-center">
<Avatar
   size={60}
   className={"container__storyAvatar ms-2"}

 src={
       <img
         src="https://joeschmoe.io/api/v1/random"
         style={{
           // width: 32,
         }}
       />
     }
   />
<p className="mb-0  ">Top % Soccer</p>
 <p className="  container__userName m-0 p-0">43k+ member</p>
 <p className="  container__userName m-0 p-0">8 post dailys</p>
 <Avatar.Group
maxCount={3}
maxStyle={{
color: '#f56a00',
backgroundColor: '#fde3cf',
}}
>
<Avatar src="https://joeschmoe.io/api/v1/random" />
<Avatar
style={{
 backgroundColor: '#f56a00',
}}
>
K
</Avatar>
<Tooltip title="Ant User" placement="top">
<Avatar
 style={{
   backgroundColor: '#87d068',
 }}
 icon={<UserOutlined />}
/>
</Tooltip>
<Avatar
style={{
 backgroundColor: '#1890ff',
}}
icon={<AntDesignOutlined />}
/>
 <Avatar src="https://joeschmoe.io/api/v1/random" />
   <Avatar src="https://joeschmoe.io/api/v1/random" />
</Avatar.Group><br/>
<Button  className="createGroupBtn mt-3" >
join
</Button>
 </div>

 
 
</div>
    </Tabs.TabPane> 
  </Tabs>
  <Button  className="createGroupBtn mt-3"  onClick={() => setOpen(true)}>
      Create Group
        </Button>
    </div>

{/* create group modal  */}
<>
       
        <Modal
          title="Modal 1000px width"
          centered
          // style={{
          //   top: 20,
          //   zIndex:9999
          // }}
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={1000}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </>
        </div>
     );
}
 
export default GroupComp;