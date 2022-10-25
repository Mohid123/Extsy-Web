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
              <div className=" ">
              <img alt='rounded-img' className='circular-img-frndSuggestion ' style={{width:'1.563rem',height:"25px"}} src={'https://img.posterlounge.co.uk/images/l/1898617.jpg'}/>
                <span className="ms-2">Usman Ahmad</span>
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