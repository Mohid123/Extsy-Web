
import userShield from "../../../assets/img/user-shield-solid.svg";
import addUser  from "../../../assets/img/AddUser.svg"
import userGroup from "../../../assets/img/userGroup.svg"
import settings from "../../../assets/img/Setting.svg";
import cameraImg from '../../../assets/img/camera.svg';
import { useState } from "react";
import addIcon from '../../../assets/img/addIcon.svg'
import { Avatar, Button, Collapse, DatePicker, Form, Input, Modal, Radio, TimePicker, Tooltip } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { AntDesignOutlined, CalendarOutlined, ClockCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Row } from "react-bootstrap";
import Col from "antd/es/grid/col";
import PrimaryButton from "../../PrimaryButton";

const { Panel } = Collapse;

type LayoutType = Parameters<typeof Form>[0]['layout'];


const GroupAdminLeftOption= () => {
    const [isEventModalOpen, setIsEventModalOpen] = useState(false);
    const showEventModal = () => {
        setIsEventModalOpen(true);
    };
    const hideEventModal = () => {
        setIsEventModalOpen(false);
    };

    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState<LayoutType>('vertical');

    const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
        setFormLayout(layout);
    };

    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

    const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        }
      : null;

  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: { span: 14, offset: 4 },
        }
      : null;

    return (  
        <>
            <div className="p-5">
                <p>Manage Group</p>
                <span className="d-flex justify-content-between ">
                    <span onClick={showEventModal} className=" propertiesTextStyle"><img src={addUser} className="me-3 "/>Manage Requests</span> 
                </span> 

                <span className="d-flex justify-content-between mt-2">
                    <span className=" propertiesTextStyle"><img src={userGroup} className="me-3"/>Add/Remove Members</span> 
                </span>

                <span className="d-flex justify-content-between mt-2">
                    <span className=" propertiesTextStyle"><img src={userShield} className="me-3"/>Make Moderator</span> 
                </span>
                
                <span className="d-flex justify-content-between mt-2 ">
                    <span className=" propertiesTextStyle"><img src={settings} className="me-3"/>Group settings</span> 
                </span>  
            </div>

            <>
                <Modal open={isEventModalOpen} onCancel={hideEventModal} className='position-relative top-modal'>
                    <div className="modal-image position-relative">
                        <div className="d-flex position-absolute add-image">
                            <img alt="camera" src={cameraImg}/>
                            <span className="camera-text ms-1 mt-1">Add cover image</span>
                        </div>
                    </div>
                    <div className="modal-content">
                        <span className="form-heading mt-2 mb-3">Create Event</span>
                        <Form
                            {...formItemLayout}
                            layout={formLayout}
                            form={form}
                            initialValues={{ layout: formLayout }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item rules={[{ required: true, message: 'Please provide a title for the event' }]} label="Title" name="Title">
                                <Input placeholder="Title goes here..."/>
                            </Form.Item>
                            <Form.Item rules={[{ required: true, message: 'Please provide a description for the event' }]} label="Description" name="Description">
                                <TextArea placeholder="Description goes here..." />
                            </Form.Item>
                            <Form.Item rules={[{ required: true, message: 'Please select a start date for the event' }]} label="Start Date/Time" name="Start Date/Time">
                                <DatePicker onKeyDown={(e) => e.preventDefault()}/>
                            </Form.Item>
                            <Input.Group size="large">
                                <Row gutter={5}>
                                    <Col span={12}>
                                        <TimePicker onKeyDown={(e) => e.preventDefault()}/>
                                    </Col>
                                    <Col span={12}>
                                        <TimePicker onKeyDown={(e) => e.preventDefault()} />
                                    </Col>
                                </Row>
                            </Input.Group>

                            <Form.Item rules={[{ required: true, message: 'Please select an end date for the event' }]} label="End Date/Time" name="End Date/Time">
                                <DatePicker />
                            </Form.Item>
                            <Input.Group size="large">
                                <Row gutter={5}>
                                    <Col span={12}>
                                        <TimePicker onKeyDown={(e) => e.preventDefault()}/>
                                    </Col>
                                    <Col span={12}>
                                        <TimePicker onKeyDown={(e) => e.preventDefault()}/>
                                    </Col>
                                </Row>
                            </Input.Group>

                            <Form.Item rules={[{ required: true, message: 'Please provide a meet link for the event' }]} label="Meet link" name="Meet link">
                                <Input placeholder="https://meet.google.com/Meryl_Streep"/>
                            </Form.Item>

                            <Form.Item rules={[{ required: true, message: 'Please provide a venue for the event' }]} label="Venue" name="Venue">
                                <Input placeholder="Belgium City"/>
                            </Form.Item>

                            <Collapse defaultActiveKey={["1"]}>
                                <Panel
                                    showArrow={false}
                                    header={
                                    <>
                                        <div className="d-flex justify-content-between align-items-center">
                                        <p className="mb-0 pb-0">Moderator</p>
                                        <img alt="iconic" src={addIcon} />
                                        </div>
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
                                    </>
                                    }
                                    key="2"
                                >
                                    <div className="border border-light border-1 rounded-2 px-3 py-2">
                                        <Input placeholder="Search user.." className="modelInput" />
                                        <div className="d-flex justify-content-between align-items-center mt-3 border-light border-bottom pb-2">
                                        <div className="d-flex align-items-center">
                                            <Avatar
                                            size={30}
                                            className={"container__storyAvatar"}
                                            src={
                                                
                                                <img alt="img-ion"
                                                src="https://joeschmoe.io/api/v1/random"
                                                />
                                            }
                                            />
                                            <p className="ms-2 usman">Usman Ahmad</p>
                                        </div>
                                    
                                        <Button className="add-btn-end">Add</Button>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center border-light border-bottom mt-3">
                                        <div className="d-flex align-items-center ">
                                            <Avatar
                                            size={30}
                                            className={"container__storyAvatar"}
                                            src={
                                                <img
                                                alt="img"
                                                src="https://joeschmoe.io/api/v1/random"
                                                style={
                                                    {
                                                    // width: 32,
                                                    }
                                                }
                                                />
                                            }
                                            />
                                            <p className="ms-2 usman">Usman Ahmad</p>
                                        </div>
                                    
                                        <PrimaryButton text='Added' height='32px' width='68px'/>
                                        </div>
                                    </div>
                                </Panel>
                            </Collapse>

                            <Form.Item {...buttonItemLayout} className='d-flex justify-content-center mt-3'>
                                <Button type="primary">Create</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Modal>
            </>
        </>
    );
}
 
export default GroupAdminLeftOption ;