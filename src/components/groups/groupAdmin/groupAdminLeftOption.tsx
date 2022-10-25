
import userShield from "../../../assets/img/user-shield-solid.svg";
import addUser  from "../../../assets/img/AddUser.svg"
import userGroup from "../../../assets/img/userGroup.svg"
import settings from "../../../assets/img/Setting.svg";
import { useNavigate } from "react-router-dom";
import NavigateOption from "../../navigateOption";




const GroupAdminLeftOption= () => {
  
 const navigate = useNavigate()
    return (
      <>
        <div className="p-3">
          <p className="groupName">Manage Group</p>
          <NavigateOption
            url={addUser}
            text="Manage Requests"
            onClick={() => navigate("/groupadmin/managerequest")}
          />

          <NavigateOption
            url={userGroup}
            text="Add/Remove Members"
            onClick={() => navigate("/groupadmin/addremovemembers")}
          />

          <NavigateOption
            url={userShield}
            text="Make Moderator"
            onClick={() => navigate("/groupadmin/groupmoderator")}
          />

          <NavigateOption
            url={settings}
            text="Group settings"
            onClick={() => navigate("/")}
          />
        </div>

      
      </>
    );
}
 
export default GroupAdminLeftOption ;