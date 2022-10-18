import { Avatar, Button } from "antd";
import '../group.scss'
import GroupAdminMiddleLayout from "../groupAdminMiddleLayout";

const GroupManageRequestComp = () => {
    return ( 
      <GroupAdminMiddleLayout>
        <div className="p-4">
            <p>Manage Requests</p>
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
               
                  <span className="me-3 option">
                    undo
                    </span>
                </div>
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
                     <span className="me-3 option">
                    ignore
                    </span>
                  <Button className="groupButton ">
                    approved
                  </Button></div>
                
                </div>
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
               <Button className="groupPrimaryBtn me-3">
                    approve
                  </Button>
                  <Button className="groupButton ">
                    Dispprove
                  </Button>
               </div>
              
                </div>
        </div>
        </GroupAdminMiddleLayout>

    );
}
 
export default GroupManageRequestComp;