import { Avatar, Button, Divider } from "antd";
import postIcon from "../../assets/img/Post Icons.svg"
import Message from "../../assets/img/Messages.svg"
import ChevronUp from "../../assets/img/ChevronUp.svg"
import ChevronDown from "../../assets/img/ChevronDown2.svg"
import UserImage from "../../assets/img/userImage.svg"
import image from "../../assets/img/Ellipse 14.svg"
import image2 from "../../assets/img/Ellipse 14_2.svg"
import ellipse from "../../assets/img/Ellipse 7.svg"
import CloseChat from "../../assets/img/CloseChat.svg"

import { useState } from "react";

import "./index.scss"
const Chat = () => {
    const [opened, setOpened] = useState(false)
    const [online, setOnline] = useState(true)
    const [userChat, setUserChat] = useState(false)


    return (
        <div className="">
            <div className="chatbox">
                <div className="d-flex justify-content-between">
                    <div>
                        <img src={postIcon} className="ms-3 mt-3" alt="" />
                        <img src={Message} className="ms-3 mt-3" alt="" />
                    </div>
                    <img src={ChevronUp} className="me-4 mt-3" alt="" onClick={() => { setOpened(true) }} />
                </div>

            </div>
            {opened ? (<div className="openedChatBox">
                <div className="d-flex justify-content-between">
                    <img src={Message} className="ms-3 mt-3" alt="" />
                    <img src={ChevronDown} className="me-4 mt-3" alt="" onClick={() => { setOpened(false) }} />
                </div>
                <Divider></Divider>
                <div className="chatInnerDiv" onClick={() => { setUserChat(true) }}>
                    <div className="d-flex ">
                        <img src={UserImage} style={{ width: '40px', marginTop: '0px' }} alt="" />

                        {online ? (<img src={image} alt="" style={{ position: 'relative', right: '10px', top: '10px' }} />
                        ) :
                            (<img src={image2} alt="" style={{ position: 'relative', right: '10px', top: '10px' }} />)}

                        <div className=" mt-1 ms-1">
                            <h6 className="mb-0 headingFont">Waqar Shams</h6>
                            <p className="sunHeadingFont">Your message goes here...</p>
                        </div>
                        <div className="ellipse">
                            <img src={ellipse} alt="" className="mt-1" />
                            <img src={ellipse} alt="" className="mt-1" />
                            <img src={ellipse} alt="" className="mt-1" />
                        </div>

                    </div>
                    <p className="  mb-1 timeFont">Today, 7:45 pm</p>
                    <Divider className="mt-0 ps-5"></Divider>
                </div>
            </div>) : (<></>)}
            {userChat ? (<div className="userChatbox">
                <div className="userChatHeader" >
                    <div className="d-flex justify-content-between">
                        <div className="d-flex  mt-2">
                            <div>
                                <img src={UserImage} style={{ width: '40px', marginTop: '0px' }} alt="" />

                                {online ? (<img src={image} alt="" style={{ position: 'relative', right: '10px', top: '10px' }} />
                                ) :
                                    (<img src={image2} alt="" style={{ position: 'relative', right: '10px', top: '10px' }} />)}
                            </div>

                            <div className=" mt-1 ms-1">
                                <h6 className="mb-0 headingFont">Waqar Shams</h6>
                                <p className="sunHeadingFont">Online</p>
                            </div>

                        </div>
                        <img src={CloseChat} alt="" className="mt-1 mr-2" />
                    </div>
                    <Divider className="mt-2 ps-5"></Divider>

                    <div className="message">
                        <p className="messageText mt-2">Hi</p>
                    </div>
                    <div className="message">
                        <p className="messageText mt-2">How are you</p>
                      
                    </div>
                    <p className="messageTime mt-1">Yesterday, 8.30pm</p>
                    <div className="message2">
                    <p className="messageText mt-2">Fine</p>
                    </div>
                    <div className="message2">
                    <p className="messageText mt-2">Fine</p>
                    </div>
                </div>
            </div>) : (<></>)}

        </div>
    )
}

export default Chat