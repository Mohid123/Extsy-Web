import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import GroupMemberInfo from "./groupMembersInfo/groupMembersInfo";
const menu = (
  <Menu
    items={[
      {
        label: 'usd',
        key: '0',
      },
      {
        label: <a href="https://www.aliyun.com">euro</a>,
        key: '1',
      },
      // {
      //   type: 'divider',
      // },
      {
        label: 'fr',
        key: '3',
      },
    ]}
  />
);

type Props = {
    
    children?: JSX.Element;
  };
const  GroupAdminMiddleLayout= ({children}:Props) => {
    return (  
        <div className="pt-5">
        <div className='coverImg' ></div>
        <GroupMemberInfo/>
        <div className="d-flex pt-2"> <hr className="ms-4 me-2" style={{width:'27.875rem',border: '1px solid #DFDFDF'}}></hr><p className="sortBy ">Sort by:</p>
        <Dropdown className="dropMenu" overlay={menu} trigger={['click']}>
      <a onClick={(e) => e.preventDefault()}>
        <Space className="recent">
          Recent
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
        </div> 
        <div >
        {children}
        </div>
       
       </div>
    );
}
 
export default GroupAdminMiddleLayout;