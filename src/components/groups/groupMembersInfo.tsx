import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Tooltip } from "antd";
import vector from "../../assets/img/Vector.svg"
import userShield from "../../assets/img/user-shield-solid.svg";

import userGroup from "../../assets/img/userGroup.svg"
const GroupMemberInfo = () => {
    return (  
        <div className="p-4">
         <div className="d-flex justify-content-between ">
            <h6>Group Title</h6>
            <p>Public Group</p>
         </div>
         <p>Deplattformering kack. Monotoheten makroska. Tir kar att antigyhet. Mikrootrohet it the and sodäliga. Nopp fivarar. Nynar obror för att.</p>
        
        <div className="d-flex justify-content-between">
            <div><img src={vector}/><span className="ms-3">71 total post</span></div>
            <p>show recent</p>
        </div>
        <div className="d-flex justify-content-between">
            <div><img src={userGroup}/><span className="ms-3">10 Members</span></div>
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
        </div>
        <div className="d-flex justify-content-between">
            <div><img src={userShield}/><span className="ms-3">5 Moderators</span></div>
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
        </div>
         </div>
    );
}
 
export default GroupMemberInfo;