import React,{useState,useEffect} from 'react';
import { AntDesignOutlined, InfoCircleOutlined, SearchOutlined, SettingOutlined, UploadOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Collapse, Input, message, Modal, Tabs, Tooltip, Upload } from "antd";
import TextArea from 'antd/lib/input/TextArea';
import addIcon from '../../assets/img/plusIcon.svg'
import PrimaryButton from '../PrimaryButton';
import CreateGroup from './creatGroupModal';
const { Panel } = Collapse;
const GroupComp = () => {
  const [open, setOpen] = useState(false);



	// useEffect(() => {
	// 	document.addEventListener('mousedown', handleClickOutside);
	// 	return () =>
	// 		document.removeEventListener('mousedown', handleClickOutside);
	// });
  // const handleClickOutside =() => {
		
  //   setOpen(false);
  // }

    return (
      <div>
        <Input
          size="small"
          placeholder="search"
          prefix={<SearchOutlined />}
          className="mainViewHeader__headerSearch__groupSearch"
        />
        <div className="d-flex justify-content-between tabs">
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Popular Groups" key="1" className="tabPane">
            
                <div className="">
              
                  <div className='bg-info  '>
                    <Avatar
                    size={60}
                    className={""}
                    src={
                      <img
                        src="https://joeschmoe.io/api/v1/random"
                        style={
                          {
                            // width: 32,
                          }
                        }
                      />
                    }
                  />
                  <p className="">Top % Soccer Group description if any, Group description if any , Group description if any , Group description if any , Group description.</p>
                  </div>
                 
                  {/* <Avatar.Group
                    maxCount={3}
                    maxStyle={{
                      color: "#f56a00",
                      backgroundColor: "#fde3cf",
                    }}
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
                  </Avatar.Group> */}
                  
                  <Button className="createGroupBtn">join Now</Button>
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
                        style={
                          {
                            // width: 32,
                          }
                        }
                      />
                    }
                  />
                  <p className="mb-0  ">Top % Soccer</p>
                  <p className="  container__userName m-0 p-0">43k+ member</p>
                  <p className="  container__userName m-0 p-0">8 post dailys</p>
                  <Avatar.Group
                    maxCount={3}
                    maxStyle={{
                      color: "#f56a00",
                      backgroundColor: "#fde3cf",
                    }}
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
                  <br />
                  <Button className="createGroupBtn mt-3">join</Button>
                </div>
                <div className="ms-4 text-center">
                  <Avatar
                    size={60}
                    className={"container__storyAvatar ms-2"}
                    src={
                      <img
                        src="https://joeschmoe.io/api/v1/random"
                        style={
                          {
                            // width: 32,
                          }
                        }
                      />
                    }
                  />
                  <p className="mb-0  ">Top % Soccer</p>
                  <p className="  container__userName m-0 p-0">43k+ member</p>
                  <p className="  container__userName m-0 p-0">8 post dailys</p>
                  <Avatar.Group
                    maxCount={3}
                    maxStyle={{
                      color: "#f56a00",
                      backgroundColor: "#fde3cf",
                    }}
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
                  <br />
                  <Button className="createGroupBtn mt-3">join</Button>
                </div>
              </div>
            </Tabs.TabPane>
          </Tabs>
          <Button className="createGroupBtn mt-3" onClick={() => setOpen(true)}>
            Create Group
          </Button>
        </div>

        {/* create group modal  */}
        <>
         <CreateGroup     open={open}
          
            onCancel={() => false }/>
        </>
      </div>
    );
}
 
export default GroupComp;