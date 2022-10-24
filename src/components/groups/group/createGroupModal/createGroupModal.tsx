
import { AntDesignOutlined, InfoCircleOutlined, SearchOutlined, SettingOutlined, UploadOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Collapse, Input, message, Modal, Tabs, Tooltip, Upload } from "antd";
import TextArea from 'antd/lib/input/TextArea';
import addIcon from '../../../../assets/img/plusIcon.svg'
import PrimaryButton from '../../../PrimaryButton';
import cameraIcon from '../../../../assets/img/cameraIcon.svg'
import './createGroupModal.scss'
const { Panel } = Collapse;

const CreateGroup = (props:any) => {
    const onChange = (e:any) => {
      console.log(e);
    };
    const prop = {
      name: 'file',
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info:any) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };
    return ( 
        <>
     <Modal
            // title="Modal 1000px width"
            className="groupModal"
            centered
            style={
              {
                // top: 20,
                // zIndex:9999
              }
            }
            {...props}
            width={626}
          >
            <div className="coverImg">
              <div className='uploadCoverImg'> <Upload {...prop} >
            {<img src={cameraIcon}/>}<span className='uploadCoverImg__textColor ms-2'>Add Cover Image</span>
            </Upload></div>
            </div>
            <div className='p-5'>
            <h5 className="createGroup">Create Group</h5>
            <p className="m-0 p-0 headings">Title</p>
            <Input
              placeholder="Enter group title"
              suffix={
                <Tooltip title="Extra information">
                  <InfoCircleOutlined
                    style={{
                      color: "rgba(0,0,0,.45)",
                    }}
                  />
                </Tooltip>
              }
            />
            <br />
            <br />
            <p className="m-0 p-0 headings">Description</p>
            <TextArea
              placeholder="Description..."
              allowClear
              onChange={onChange}
            />

            <Collapse defaultActiveKey={["1"]}>
              <Panel
                showArrow={false}
                header={
                  <>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="mb-0 pb-0 headings">Moderator</p>
                      <img src={addIcon} />
                    </div>
                    <Avatar.Group
                      maxCount={3}
                      maxStyle={{
                        color: "#f56a00",
                        backgroundColor: "#fde3cf",
                      }}
                      size={17}
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
                  </>
                }
                key="2"
              >
                <Input placeholder="Search user.." className="modelInput" />
                <div className="d-flex justify-content-between  align-items-center mt-3">
                  <div className="d-flex align-items-center ">
                    <Avatar
                      size={30}
                      className={"container__storyAvatar"}
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
                    <p className="ms-2 userName">Usman Ahmad</p>
                  </div>
               
                  <Button className="whiteBtnAdd ">
                    Add
                  </Button>
                </div>
                <div className="d-flex justify-content-between  align-items-center mt-3">
                  <div className="d-flex align-items-center ">
                    <Avatar
                      size={30}
                      className={"container__storyAvatar"}
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
                    <p className="ms-2 userName">Usman Ahmad</p>
                  </div>
               
                 <Button className="primaryBtnAdded">
                Added
                </Button>
                </div>
              </Panel>
            </Collapse>
            <div className="text-center">
              <PrimaryButton text="Create" height="38px" width="207px" />
            </div>
            </div>
          </Modal>
      </>
     );
}
 
export default CreateGroup;