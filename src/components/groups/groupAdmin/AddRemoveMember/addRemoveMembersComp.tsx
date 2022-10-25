import { SearchOutlined } from "@ant-design/icons";
import { Avatar, Button, Input } from "antd";
import '../../group.scss'
import GroupAdminMiddleLayout from "../groupAdminMiddleLayout";
const AddRemoveMemberComp = () => {
    return ( 
   <GroupAdminMiddleLayout>
         <div className="p-4">
        <p>Add or remove members</p>
        <Input
          size="small"
          placeholder="search user to add"
          prefix={<SearchOutlined />}
          className="groupViewMemberList"
        />
        <div className="d-flex justify-content-between  align-items-center mt-3">
              <div className="d-flex align-items-center ">
                <Avatar
                  size={30}
                  className={"container__storyAvatar"}
                  src={
                    <img
                      src="https://joeschmoe.io/api/v1/random"
                      style={
                        {
                          // width: 32,
                        }
                      }
                   alt="" />
                  }
                />
                <p className="ms-2">Usman Ahmad</p>
              </div>
           
              <Button className="groupButton ">
                Remove
              </Button>
            </div>
          
    </div>
    </GroupAdminMiddleLayout>

     
     );
}
 
export default AddRemoveMemberComp;