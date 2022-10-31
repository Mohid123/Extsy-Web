import { SearchOutlined } from "@ant-design/icons";
import { Avatar, Button, Input } from "antd";
import '../../group.scss'
import   './addRemoveMembersComp.scss';
import GroupAdminMiddleLayout from "../groupAdminMiddleLayout";
const AddRemoveMemberComp = () => {
    return ( 
   <GroupAdminMiddleLayout>
         <div className="p-4">
        <p className="heading">Add or remove members</p>
        <Input
          size="small"
          placeholder="search user to add"
          prefix={<SearchOutlined />}
          className="groupViewMemberList"
        />
        <div className="d-flex justify-content-between  align-items-center mt-3">
              <div className=" d-flex   align-items-cente">
              <img alt='rounded-img' className='circular-img-frndSuggestion ' style={{width:'1.563rem',height:"25px"}} src={'https://img.posterlounge.co.uk/images/l/1898617.jpg'}/>
                <p className="ms-2 m-0 p-0">Usman Ahmad</p>
              </div>
           
              <Button className="removeButton ">
                Remove
              </Button>
            </div>
          
    </div>
    </GroupAdminMiddleLayout>

     
     );
}
 
export default AddRemoveMemberComp;