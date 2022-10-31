import { useState } from "react";
import PauseIcon from "../../assets/img/Pause.svg"
import Thumb from "../../assets/img/Thumb Icon.svg"
import Share from "../../assets/img/share icon.svg"
import Story from "../../assets/img/Vector2.svg"
import AvatarImage from "../../assets/img/94.svg"
import ellipse from "../../assets/img/Ellipse 7.svg"
import Back from "../../assets/img/BackArrow.svg"
import ThumbBlack from "../../assets/img/Thumb IconBlack.svg"
import commentImage from '../../assets/img/commentImgIcon.svg'
import chevronDown from '../../assets/img/Shape2.svg'
import { Col, Row, Button,Input, Modal, Avatar, Image  } from 'antd';

const UserStory = () => {
    const [viewAllComments, setViewAllComments] = useState(false)
    const [comments, setComments] = useState(false)
    const [card1, setCard1] = useState(true)
    return ( 
        <div className="userStoryCard">
            <div className="text-center">
            <img src={PauseIcon} className="pauseIcon" alt="" />
            </div>
            
            <div className=" ">
                <Row  gutter={{ xs: 24, sm: 24, md: 24, lg: 8 }} className="justify-content-end">
                    <Col className="gutter-row" span={4}>
                        <div className="mt-3">
                    <img src={Thumb} className="" alt="" />
                    <h6 className="fs_12 fw_600 fc_white mt-3">212</h6>
                    </div>
                    <div className="mt-3">
                    <img src={Story} className="" alt="" onClick={()=>{setComments(true)}}/>
                    <h6 className="fs_12 fw_600 fc_white mt-3">212</h6>
                    </div>
                    <div className="mt-3">
                    <img src={Share} className="" alt="" />
                    </div>
                   

                    </Col>
                </Row>
                <div>
                <div className="d-flex  ">
                        <img src={AvatarImage} alt="" style={{width:'39px',marginRight:'10px',marginLeft:'10px', marginTop:'30px'}}/>
                       
                                <div>
                             <h4 className="mt-5 fs_16 fw_400 fc_white  mb-1">Ali Raza</h4>
                            <h6 className="fs_12 fw_400 fc_white ">UserName</h6>
                            </div>
                            
                            <Button   ghost style={{marginLeft:'10px', borderRadius:'10px',color:'#fff',marginTop:'50px'}}>
                            Follow
    </Button>
                          
                    </div>
                    <p className="fs_11 fw_400 fc_white ms-4 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit...</p>
                    </div>
           
            </div>
            {comments?( <div className="commentCard">
                <div className="d-flex mt-3 ms-3">
                <img src={Back} alt="" onClick={()=>{setComments(false)}}/>
<h6 className="ms-3 fs_16 fw_500 fc_black">Comments</h6>
                </div>

<div className="d-flex ms-3 mt-3">
<img src={AvatarImage} alt="" />
                <div className="innerCommentCard ms-1">
                    <div className="d-flex justify-content-between ">
                        <h6 className="fs_12 fw_500 fc_black">Boom Bit Coin</h6>
                        <div>
                        <img src={ellipse} alt="" />
                        <img src={ellipse} alt="" />
                        <img src={ellipse} alt="" />
                        </div>
                    </div>
                    <p className="fs_11 fw_400 fc_cyan">Bitoicn News     2hrs</p>
                    <div className=" d-flex align-items-center">
                        <img src={ThumbBlack} alt="" />
                        <p className="p-0 m-0 ms-1 fs_12 fw_500 fc_cyan">15</p>
                        <p className="p-0 m-0 ms-5">6 Replies</p>
                    </div>
                </div>
                </div>
<div className="d-flex ms-5 my-3">
    <h6 style={{color:'#7C167D'}} className="fs_12 fw_500 fc_purple">View all comments</h6>
    <img src={chevronDown} alt="" className="ms-2" onClick={()=>{setViewAllComments(!viewAllComments)}} />
</div>
{viewAllComments?(<div className="d-flex ms-5 mt-3">
<img src={AvatarImage} alt="" />
                <div className="viewAllComments ms-1">
                    <div className="d-flex justify-content-between ">
                        <h6 className="fs_12 fw_500 fc_black">Boom Bit Coin</h6>
                        <div>
                        <img src={ellipse} alt="" />
                        <img src={ellipse} alt="" />
                        <img src={ellipse} alt="" />
                        </div>
                    </div>
                    <p className="fs_11 fw_400 fc_cyan">Bitoicn News     2hrs</p>
                    <div className=" d-flex align-items-center">
                        <img src={ThumbBlack} alt="" />
                        <p className="p-0 m-0 ms-1">15</p>
                        <p className="p-0 m-0 ms-5 fs_12 fw_500 fc_cyan">6 Replies</p>
                    </div>
                </div>
                </div>):(<></>)}


                <div className="d-flex newComment ms-5 my-3 px-3">
          <Avatar
            src={
              <Image
                src="https://joeschmoe.io/api/v1/random"
                style={{
                  width: 32,
                }}
              />
            }
          />
          <Input placeholder="write something..." bordered={false} />
          <img src={commentImage} />
        </div>
            </div>):(<></>)}
           
        </div>
    ) 
}

export default UserStory