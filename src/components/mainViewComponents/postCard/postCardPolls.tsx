import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Tooltip } from "antd";
import PostCardLayout from "./postCardLayout"

const PostCardPolls = () => {
    return (
      <PostCardLayout>
        <div className="p-3 poll">
          <p className="pollQuery">which application is most popular</p>
          <>
            <div className="d-flex align-items-center justify-content-between my-2">
              <p className="m-0 p-0 pollOption">Twitter</p>
              <p className="m-0 p-0 pollOption">35%</p>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-label="Danger example"
                style={{ width: "35%" }}
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </>
          <>
            <div className="d-flex align-items-center justify-content-between my-2">
              <p className="m-0 p-0 pollOption">Facebook</p>
              <p className="m-0 p-0 pollOption">70%</p>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-label="Danger example"
                style={{ width: "70%" }}
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </>
          <>
            <div className="d-flex align-items-center justify-content-between my-2">
              <p className="m-0 p-0 pollOption">Instagram</p>
              <p className="m-0 p-0 pollOption">48%</p>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-label="Danger example"
                style={{ width: "48%" }}
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </>
          <>
            <div className="d-flex align-items-center justify-content-between my-2">
              <p className="m-0 p-0 pollOption">SnapChat</p>
              <p className="m-0 p-0 pollOption">88%</p>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-label="Danger example"
                style={{ width: "88%" }}
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </>
          <hr style={{color:'#DFDFDF'}}/>
          <div className="d-flex align-items-center justify-content-between">
            <p className="p-0 m-0 participants">Participants</p>
            <Avatar.Group
                      maxCount={3}
                      maxStyle={{
                        color: "#f56a00",
                        backgroundColor: "#fde3cf",
                      }}
                      size={17}
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
          <p className="text-center pollExpire">Poll will expire in 24hrs</p>
        </div>
      </PostCardLayout>
    );
}
 
export default PostCardPolls;