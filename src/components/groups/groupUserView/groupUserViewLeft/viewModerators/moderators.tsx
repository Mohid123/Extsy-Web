import { SearchOutlined } from "@ant-design/icons";
import { Avatar, Button, Input } from "antd";

const Moderators = () => {
    return ( 
        <div className="p-4">
        <p className="memberList">Moderators</p>
        {/* <Input
          size="small"
          placeholder="search user to add"
          prefix={<SearchOutlined />}
          className="mainViewHeader__headerSearch__groupSearch"
        /> */}
        <div className="d-flex justify-content-between  align-items-center mt-3">
          <div className="d-flex align-items-center ">
          <img alt='rounded-img' className='circular-img-frndSuggestion' src={'https://www.lct.org/media/filer_public_thumbnails/filer_public/6e/a9/6ea9c4c6-8b21-478b-97e2-b7d0fd17787c/weaver_sigourney_headshot.jpg__270x310_q85_subsampling-2.jpg'}/>
            <p className="ms-2 memberName">Elon mask</p>
          </div>
          <div>
            <Button className="groupPrimaryBtn me-2">Visit Profile</Button>
            <Button className="groupButton ">Follow</Button>
          </div>
        </div>
      </div>
     );
}
 
export default Moderators;