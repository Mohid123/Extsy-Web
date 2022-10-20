import { SearchOutlined } from "@ant-design/icons";
import { Avatar, Button, Input } from "antd";
import   '../groupUserView.scss';
const MembersList = () => {
    return (
      <div className="p-4">
        <p>Members List</p>
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
                />
              }
            />
            <p className="ms-2">Usman Ahmad</p>
          </div>
          <div>
            <Button className="groupPrimaryBtn me-2">Visit Profile</Button>
            <Button className="groupButton ">Follow</Button>
          </div>
        </div>
      </div>
    );
}
 
export default MembersList;