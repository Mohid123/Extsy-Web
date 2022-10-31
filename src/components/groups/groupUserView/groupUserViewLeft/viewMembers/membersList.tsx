
import { Button } from "antd";
import   './membersList.scss';
const MembersList = () => {
    return (
      <div className="p-4">
        <p className="memberList">Members List</p>
        {/* <Input
          size="small"
          placeholder="search user to add"
          prefix={<SearchOutlined />}
          className="groupViewMemberList"
        /> */}
        <div className="d-flex justify-content-between  align-items-center mt-3">
          <div className="d-flex align-items-center ">
          <img alt='rounded-img' className='circular-img-frndSuggestion' src={'https://www.lct.org/media/filer_public_thumbnails/filer_public/6e/a9/6ea9c4c6-8b21-478b-97e2-b7d0fd17787c/weaver_sigourney_headshot.jpg__270x310_q85_subsampling-2.jpg'}/>

            <p className="ms-2 memberName p-0 m-0">Usman Ahmad</p>
          </div>
          <div className="d-flex align-items-center">
            <p className=" me-2 memberListVisitProfile p-0 m-0">Visit Profile</p>
            <Button className="memberListFollow ">Follow</Button>
          </div>
        </div>
      </div>
    );
}
 
export default MembersList;