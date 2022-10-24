import { Avatar, Image, Input } from "antd";
import imageIcon from "../../../assets/img/ImageIcon.svg"
import videoIcon from "../../../assets/img/Video.svg"
import calenderIcon from "../../../assets/img/Calendar.svg"
import sendIcon from "../../../assets/img/Send.svg"
import { EditOutlined } from "@ant-design/icons";
import './mainViewMiddle.scss'
const shareContentComp = () => {
    return (
      <div className="mainViewMiddle__mainViewPostContainer ">
        <div className="d-flex pt-4 ps-2">
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
          <span className="d-flex align-items-center">
            <Input placeholder="write something..." bordered={false} />
            <EditOutlined />
          </span>
        </div>
        <div className="mainViewMiddle__mainViewPostContainer__options d-flex justify-content-around align-items-center">
          <span className="propertiesTextStyle__colorWhite">
            <img
              src={imageIcon}
              style={{ color: "#EE1D52" }}
              width="22"
              height="16"
            />
            Photo
          </span>
          <span style={{ color: "#DFDFDF" }}>|</span>
          <span className="propertiesTextStyle__colorWhite">
            <img src={videoIcon} width="22" height="16" /> Video
          </span>
          <span style={{ color: "#DFDFDF" }}>|</span>
          <span className="propertiesTextStyle__colorWhite">
            <img src={calenderIcon} width="22" height="16" /> Evnets
          </span>
          <span style={{ color: "#DFDFDF" }}>|</span>
          <span
            style={{ marginRight: "87px" }}
            className="propertiesTextStyle__colorWhite"
          >
            <img src={calenderIcon} width="22" height="16" />
            Polls
          </span>
          <span className="mainViewMiddle__mainViewPostContainer__options__postBtn d-flex  justify-content-center align-items-center">
            <img src={sendIcon} width="22" height="16" />
          </span>
        </div>
      </div>
    );
}
 
export default shareContentComp;