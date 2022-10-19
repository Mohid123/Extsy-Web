import { SearchOutlined } from "@ant-design/icons";
import { Input, Card, Divider, Avatar } from "antd";
import { useHistory } from "react-router-dom";
import avatar from "../assets/img/96.svg"
import ellipse from "../assets/img/Ellipse 7.svg"
import   "../layout/layout.scss"


const PushNotifications =() =>{
return (
    <div className="container">
        <Card  className="pushNotificationsCard"
                >
                    <div className="d-flex">
                        <h6>Users</h6>
                        <h6 className="mx-4">Groups</h6>
                        <h6>Events</h6>


                    </div>
                    <div className="d-flex justify-content-between mt-5">
                        <h5>Notifications</h5>
                        <div className="d-flex mt-1">
                            <h6 className="mr-5">Mark as read</h6>
                            <h6 className="ml-4" style={{ marginLeft: '30px' }}>See all</h6>

                        </div>
                    </div>
                    <h6 className="mt-2">Today</h6>
                    <div className="d-flex innerDiv ">
                        <img src={avatar} alt="" style={{width:'39px',marginRight:'10px',marginLeft:'10px'}}/>
                        <div>
                            <div className="d-flex justify-content-between "> <h6 className="mt-2">Jason Roy</h6>
                            <div className="d-flex justify-content-between mr-2"> 
                            <img src={ellipse} alt="" style={{width:'5px'}}/>
                            <img src={ellipse} alt=""  style={{width:'5px',marginLeft:'5px',marginRight:'5px'}}/>
                            <img src={ellipse} alt=""  style={{width:'5px'}}/></div>
                            </div> 
                       
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit...</p>
                        <p>Today, 9:25 pm</p>
                       
                        </div>
                    </div>
                    <h6 className="mt-2">Earlier</h6>
                    <div className="d-flex ">
                        <img src={avatar} alt="" style={{width:'39px',marginRight:'10px',marginLeft:'10px'}}/>
                        <div>
                            <div className="d-flex justify-content-between "> <h6 className="mt-2">Jason Roy</h6>
                            <div className="d-flex justify-content-between"> 
                            <img src={ellipse} alt="" style={{width:'5px'}}/>
                            <img src={ellipse} alt=""  style={{width:'5px',marginLeft:'5px',marginRight:'5px'}}/>
                            <img src={ellipse} alt=""  style={{width:'5px'}}/></div>
                            </div> 
                       
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit...</p>
                        <p>Today, 9:25 pm</p>
                       
                        </div>
                    </div>

            </Card>
    </div>
)
}

export default PushNotifications