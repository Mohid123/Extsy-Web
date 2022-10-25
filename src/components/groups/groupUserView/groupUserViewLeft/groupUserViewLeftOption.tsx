import userShield from "../../../../assets/img/user-shield-solid.svg";
import leaveGroupIcon  from "../../../../assets/img/leaveGroupIcon.svg"
import userGroup from "../../../../assets/img/userGroup.svg"
import { ExclamationCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input, Modal } from "antd";
import { useNavigate } from 'react-router-dom';
import { fireSwal } from "../../../../utils/toast";

import './groupUserView.scss'
import { useState } from "react";
import LeaveGroupModal from "./leaveGroup/leaveGroupModal";

const GroupUserViewLeftOption = () => {
  const fire= ()=>{
 fireSwal("Leave Group","Are you sure you want to leave this group? This action cannot be undone.","warning")
  }
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
    return (
      <>
        <div className="p-5">
          <p className="manageGrp">Manage Group</p>
          <Input
            placeholder="search"
            prefix={<SearchOutlined />}
            className="mb-2 groupSearch"
          />
          <span
            className="d-flex justify-content-between "
            onClick={() => navigate("/groups/groupuserviewmemberslist")}
          >
            <span className=" propertiesTextStyle">
              <img src={userGroup} className="me-3 " />
              View Members
            </span>
          </span>
          <span className="d-flex justify-content-between mt-2">
            <span
              className=" propertiesTextStyle"
              onClick={() => navigate("/groups/groupuserviewmoderators")}
            >
              <img src={userShield} className="me-3" />
              View Moderators
            </span>
          </span>
          <span
            onClick={() => setOpen(true)}
            className="d-flex justify-content-between mt-2"
          >
            <span className="propertiesTextStyle">
              <img src={leaveGroupIcon} className="me-3" />
              Leave Group
            </span>
          </span>
        </div>
  <LeaveGroupModal
  open={open}
   onOk={() => setOpen(false)}
   onCancel={() => setOpen(false)}
  />
      </>
    );
}
 
export default GroupUserViewLeftOption;