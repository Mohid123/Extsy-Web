import { Avatar, Image, Input } from "antd";
import { useState } from "react";
import imageIcon from "../../../assets/img/ImageIcon.svg"
import videoIcon from "../../../assets/img/Video.svg"
import calenderIcon from "../../../assets/img/Calendar.svg"
import pollsIcon from "../../../assets/img/polls.svg"
import sendIcon from "../../../assets/img/Send.svg"
import { EditOutlined } from "@ant-design/icons";
import './mainViewMiddle.scss'
import CreatePoll from "./createPoll/createPoll";
import TextArea from "antd/lib/input/TextArea";
const ShareContentComp = () => {
 
  const [createPoll, setCreatePoll] = useState(false)
  const [postText, setPostText] = useState("")
  const onChangeTextArea = (e:any) => {
        setPostText(e.target.value)
        console.log(postText)
  }
    return (
      <div className="mainViewMiddle__mainViewPostContainer bg-white">
        <div className="d-flex pt-4 ">
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
        
          <TextArea
            bordered={false}
            onChange={onChangeTextArea}
            value={postText}
           rows={4}
           style={{height:"70px" }}
           placeholder={`Write your own feedback...`}
           className="writeSomething "
         />
         { !postText &&  <EditOutlined
            className="pencil"
              style={{ width: "18px !important", height: "17px !important" }}
            />}
          
        </div>
        <div className="mainViewMiddle__mainViewPostContainer__options d-flex justify-content-around align-items-center">
          <span className="propertiesTextStyle__colorWhite">
            <img
              src={imageIcon}
              style={{ color: "#EE1D52" }}
              width="20.7"
              height="20"
            />{" "}
            Photo
          </span>
          <span style={{ color: "#DFDFDF" }}>|</span>
          <span className="propertiesTextStyle__colorWhite">
            <img src={videoIcon} width="20.7" height="20" /> Video
          </span>
          <span style={{ color: "#DFDFDF" }}>|</span>
          <span className="propertiesTextStyle__colorWhite">
            <img src={calenderIcon} width="20.7" height="20" /> Events
          </span>
          <span style={{ color: "#DFDFDF" }}>|</span>
          <span
            style={{ marginRight: "87px" }}
            className="propertiesTextStyle__colorWhite"
            onClick={() => {
              setCreatePoll(!createPoll);
              console.log("poll btn pressssd", createPoll);
            }}
          >
            <img src={pollsIcon} width="20.7" height="20" /> Polls
          </span>
          <span className="mainViewMiddle__mainViewPostContainer__options__postBtn d-flex  justify-content-center align-items-center">
            <img src={sendIcon} width="20.7" height="20" />
          </span>
        </div>
        <CreatePoll show={createPoll} onHide={setCreatePoll} />
      </div>
    );
}
 
export default ShareContentComp;