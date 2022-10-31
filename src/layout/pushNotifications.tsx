import { SearchOutlined } from "@ant-design/icons";
import {  Card } from "antd";
import {  Tabs } from "antd";
// import { useNavigate } from "react-router-dom";
import avatar from "../assets/img/96.svg"
import ellipse from "../assets/img/Ellipse 7.svg"
import   "../layout/layout.scss"


const PushNotifications =() =>{
    // const navigate = useNavigate()
return (
    <div className="container ">
        <Card  className="pushNotificationsCard poppinsFont"
                >
                    
                    
                    <div className="d-flex  justify-content-between mt-3">
                        <h5 className="fs_16 fw_600">Notifications</h5>
                      
                            <h6 className="mr-5 fs_16 fw_400">Mark all as read</h6>
                           

                        
                    </div>
                    <Tabs defaultActiveKey="1">
    <Tabs.TabPane tab="Users" key="1"></Tabs.TabPane>
    <Tabs.TabPane tab="Wallet" key="1"></Tabs.TabPane>
    <Tabs.TabPane tab="Market Place" key="1"></Tabs.TabPane>
    </Tabs>
                    <h6 className="mt-2 fs_16 fw_500 ">Today</h6>
                    <div className="d-flex innerDiv  ">
                        <img src={avatar} alt="" style={{width:'39px',marginRight:'10px',marginLeft:'10px'}}/>
                        <div>
                            <div className="d-flex justify-content-between "> <h6 className="mt-2 fs_16 fw_600">Jason Roy</h6>
                            <div className="d-flex justify-content-between mr-2"> 
                            <img src={ellipse} alt="" style={{width:'5px'}}/>
                            <img src={ellipse} alt=""  style={{width:'5px',marginLeft:'5px',marginRight:'5px'}}/>
                            <img src={ellipse} alt=""  style={{width:'5px'}}/></div>
                            </div> 
                       
                        <p className="fs_14 fw_400">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit...</p>
                        <p className="fs_12 fw_400">Today, 9:25 pm</p>
                       
                        </div>
                    </div>
                    <div className="d-flex innerDiv mt-3 ">
                        <img src={avatar} alt="" style={{width:'39px',marginRight:'10px',marginLeft:'10px'}}/>
                        <div>
                            <div className="d-flex justify-content-between "> <h6 className="mt-2 fs_16 fw_600">Jason Roy</h6>
                            <div className="d-flex justify-content-between mr-2"> 
                            <img src={ellipse} alt="" style={{width:'5px'}}/>
                            <img src={ellipse} alt=""  style={{width:'5px',marginLeft:'5px',marginRight:'5px'}}/>
                            <img src={ellipse} alt=""  style={{width:'5px'}}/></div>
                            </div> 
                       
                        <p  className="fs_14 fw_400">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit...</p>
                        <p className="fs_12 fw_400">Today, 9:25 pm</p>
                       
                        </div>
                    </div>
                    <h6 className="mt-2 fs_16 fw_500 ">Earlier</h6>
                    <div className="d-flex  ">
                        <img src={avatar} alt="" style={{width:'39px',marginRight:'10px',marginLeft:'10px'}}/>
                        <div>
                            <div className="d-flex justify-content-between  "> <h6 className="mt-2 fs_16 fw_600">Jason Roy</h6>
                            <div className="d-flex justify-content-between "> 
                            <img src={ellipse} alt="" style={{width:'5px'}}/>
                            <img src={ellipse} alt=""  style={{width:'5px',marginLeft:'5px',marginRight:'5px'}}/>
                            <img src={ellipse} alt=""  style={{width:'5px'}}/></div>
                            </div> 
                       
                        <p  className="fs_14 fw_400">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit...</p>
                        <p className="fs_12 fw_400">Today, 9:25 pm</p>
                       
                        </div>
                    </div>
                    <div className="d-flex mt-3 ">
                        <img src={avatar} alt="" style={{width:'39px',marginRight:'10px',marginLeft:'10px'}}/>
                        <div>
                            <div className="d-flex justify-content-between  "> <h6 className="mt-2 fs_16 fw_600">Jason Roy</h6>
                            <div className="d-flex justify-content-between "> 
                            <img src={ellipse} alt="" style={{width:'5px'}}/>
                            <img src={ellipse} alt=""  style={{width:'5px',marginLeft:'5px',marginRight:'5px'}}/>
                            <img src={ellipse} alt=""  style={{width:'5px'}}/></div>
                            </div> 
                       
                        <p  className="fs_14 fw_400">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit...</p>
                        <p className="fs_12 fw_400">Today, 9:25 pm</p>
                       
                        </div>
                    </div>

            </Card>
    </div>
)
}

export default PushNotifications