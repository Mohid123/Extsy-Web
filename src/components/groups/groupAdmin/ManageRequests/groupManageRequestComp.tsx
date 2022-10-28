import { Avatar, Button } from "antd";
import '../../group.scss'
import GroupAdminMiddleLayout from "../groupAdminMiddleLayout";

const GroupManageRequestComp = () => {
    return ( 
      <GroupAdminMiddleLayout>
        <div className="p-4 manageRequestShadow">
            <p className="heading">Manage Requests</p>
            <div className="d-flex justify-content-between  align-items-center mt-3">
                  <div className="d-flex align-items-center ">
                  <img alt='rounded-img' className='circular-img-frndSuggestion ' style={{width:'1.563rem',height:"1.563rem"}} src={'https://img.posterlounge.co.uk/images/l/1898617.jpg'}/>
                    <p className="ms-2 p-0 m-0">Usman Ahmad</p>
                  </div>
               
                  <span className="me-3 option">
                    undo
                    </span>
                </div>
                <div className="d-flex justify-content-between  align-items-center mt-3">
                  <div className="d-flex align-items-center ">
                  <img alt='rounded-img' className='circular-img-frndSuggestion ' style={{width:'1.563rem',height:"1.563rem"}} src={'https://img.posterlounge.co.uk/images/l/1898617.jpg'}/>
                    <p className="ms-2 p-0 m-0">Usman Ahmad</p>
                  </div>
                  <div>
                     <span className="me-3 option">
                    ignore
                    </span>
                  <Button className="groupButton ">
                    approved
                  </Button></div>
                
                </div>
              
        </div>
        </GroupAdminMiddleLayout>

    );
}
 
export default GroupManageRequestComp;