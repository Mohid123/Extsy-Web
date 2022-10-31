import {useState} from 'react';
import { AntDesignOutlined,SearchOutlined,UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Input, Tabs, Tooltip } from "antd";
import '../group.scss'
import './groupTabs.scss'
import CreateGroup from './createGroupModal/createGroupModal';
import postCardImage from "../../../assets/img/postCardImage.png"
const initialItems = [
  {
    label:<p className='groupTabs p-0 m-0'>Popular Groups</p>,
    children: <div className="mx-3">
    <div className="d-flex justify-content-between  align-items-center mt-3">
      <div className="d-flex align-items-center ">
        <Avatar
          style={{width:'92px', height:'58px'}}
          // className={"container__storyAvatar"}
          src={
            postCardImage 
          }
        />
        <div className="ms-3">
          <h6 className=" m-0 p-0 groupName">Usman Ahmad</h6>
          <p className=" m-0 p-0 groupDescription">
            Group description if any, Group description if any , Group
            description if any , Group description if any , Group
            description.{" "}
          </p>
        </div>
      </div>

      <Button className="groupButton ms-3">Join Now</Button>
    </div>
    <div className="d-flex justify-content-between">
      <Avatar.Group
        maxCount={3}
        maxStyle={{
          color: "#f56a00",
          backgroundColor: "#fde3cf",
        }}
        size={20}
       style={{marginLeft:'4.5rem'}}
      >
        <Avatar src="https://joeschmoe.io/api/v1/random" />
        <Avatar src="https://joeschmoe.io/api/v1/random" />
        <Avatar src="https://joeschmoe.io/api/v1/random" />
        <Avatar src="https://joeschmoe.io/api/v1/random" />
      </Avatar.Group>
      <p className='m-0 p-0 member'>2.4k members</p>
    </div>
    <hr style={{marginLeft:'4.5rem'}}/>
    <div className="d-flex justify-content-between  align-items-center mt-3">
      <div className="d-flex align-items-center ">
        <Avatar
          style={{width:'92px', height:'58px'}}
          // className={"container__storyAvatar"}
          src={
            postCardImage 
          }
        />
        <div className="ms-3">
          <h6 className=" m-0 p-0 groupName">Usman Ahmad</h6>
          <p className=" m-0 p-0 groupDescription">
            Group description if any, Group description if any , Group
            description if any , Group description if any , Group
            description.{" "}
          </p>
        </div>
      </div>

      <Button className="groupPrimaryBtn ">pending</Button>
    </div>
    <div className="d-flex justify-content-between">
      <Avatar.Group
        maxCount={3}
        maxStyle={{
          color: "#f56a00",
          backgroundColor: "#fde3cf",
        }}
        size={20}
       style={{marginLeft:'4.5rem'}}
      >
        <Avatar src="https://joeschmoe.io/api/v1/random" />
        <Avatar
          style={{
            backgroundColor: "#f56a00",
          }}
        >
          K
        </Avatar>
        <Tooltip title="Ant User" placement="top">
          <Avatar
            style={{
              backgroundColor: "#87d068",
            }}
            icon={<UserOutlined />}
          />
        </Tooltip>
        <Avatar
          style={{
            backgroundColor: "#1890ff",
          }}
          icon={<AntDesignOutlined />}
        />
        <Avatar src="https://joeschmoe.io/api/v1/random" />
        <Avatar src="https://joeschmoe.io/api/v1/random" />
      </Avatar.Group>
      <p className='m-0 p-0 member'>2.4k members</p>
     
    </div>
    <hr style={{marginLeft:'4.5rem'}}/>
  </div>,
    key: "1",
    closable: false,
  },
  {
    label: <p className='groupTabs p-0 m-0'>My Groups</p>,
    children: (
      <div className="mx-3">
        <div className="d-flex justify-content-between  align-items-center mt-3">
          <div className="d-flex align-items-center ">
            <Avatar
              style={{width:'92px', height:'58px'}}
              // className={"container__storyAvatar"}
              src={
                postCardImage 
              }
            />
            <div className="ms-3">
              <h6 className=" m-0 p-0 groupName">Usman Ahmad</h6>
              <p className=" m-0 p-0 groupDescription">
                Group description if any, Group description if any , Group
                description if any , Group description if any , Group
                description.{" "}
              </p>
            </div>
          </div>

          <Button className="groupButton ">View</Button>
        </div>
        <div className="d-flex justify-content-between">
          <Avatar.Group
            maxCount={3}
            maxStyle={{
              color: "#f56a00",
              backgroundColor: "#fde3cf",
            }}
            size={20}
           style={{marginLeft:'4.5rem'}}
          >
            <Avatar src="https://joeschmoe.io/api/v1/random" />
            <Avatar
              style={{
                backgroundColor: "#f56a00",
              }}
            >
              K
            </Avatar>
            <Tooltip title="Ant User" placement="top">
              <Avatar
                style={{
                  backgroundColor: "#87d068",
                }}
                icon={<UserOutlined />}
              />
            </Tooltip>
            <Avatar
              style={{
                backgroundColor: "#1890ff",
              }}
              icon={<AntDesignOutlined />}
            />
            <Avatar src="https://joeschmoe.io/api/v1/random" />
            <Avatar src="https://joeschmoe.io/api/v1/random" />
          </Avatar.Group>
          <p className='m-0 p-0 member'>2.4k members</p>
        </div>
        <hr style={{marginLeft:'4.5rem'}}/>
      </div>
    ),
    key: "2",
    closable: false,
  },
];
const GroupComp = () => {
  const [open, setOpen] = useState(false);
  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const [items, setItems] = useState(initialItems);
  const onChange = (newActiveKey:any) => {
    setActiveKey(newActiveKey);
  };
 

  

    return (
      <div className='mt-5'>
        <Input
          size="small"
          placeholder="Explore Groups"
          prefix={<SearchOutlined />}
          className="mainViewHeader__headerSearch__groupSearch mb-3"
        />
          <Tabs
      type="editable-card"
      className='tabMain'
      onChange={onChange}
      items={items}
      addIcon={<Button className="createGroupBtn" onClick={() => setOpen(true)}>Create
    </Button>}
    />
        <>
         <CreateGroup     open={open}
          onOk={() => setOpen(false) }
            onCancel={() => setOpen(false) }/>
        </>
      </div>
    );
}
 
export default GroupComp;