import { Col, Row, Button,Tabs,Input,Avatar, List,Divider,DatePicker } from 'antd';
import {useState,useEffect} from 'react';
import avatarImage from '../../assets/img/84_2.svg'
import {
    RightOutlined,SearchOutlined
  } from '@ant-design/icons';



const EditUserProfile = ()=>{
    const onChange = (date:any, dateString:any) => {
        console.log(date, dateString);
      }; 
    interface DataType {
        gender: string;
        name: {
          title: string;
          first: string;
          last: string;
        };
        email: string;
        picture: {
          large: string;
          medium: string;
          thumbnail: string;
        };
        nat: string;
      }
    const [data, setData] = useState<DataType[]>([]);
    const loadMoreData = () => {
        
        fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
          .then(res => res.json())
          .then(body => {
            setData([...data, ...body.results]);
          })
          .catch(() => {
          });
      };
    
      useEffect(() => {
        loadMoreData();
      }, []);
    return (
        <section className="container blue-grid edit-profile-container mt-5">
        <Row
             gutter={24} 
             className='edit-profile-content'
            >
              <Col className="edit-profile-content-profileimg" span={8}>
        <img src={avatarImage} alt=""  />
        <div className='   blur-bg' style={{ position: 'relative', bottom: '28px',color:'#fff',height:'30px', width:'98%' }}>
                                <div >
                                   
<p className='text-center textColor'>Upload New Image</p>
                                    
                                </div>
                               
                              


                            </div>
                </Col>
                <Col className="" span={16} >
                    <h6  className='editUser__label'>Full Name</h6>
                    
                <Input placeholder="" size='large' />
                <h6 className='mt-3 editUser__label'>User Name</h6>
                <Input placeholder="" size='large' />
                <h6 className='mt-3 editUser__label'>Email</h6>
                <Input placeholder=""  size='large'/>
                <h6 className='mt-3 editUser__label'>Phone Number</h6>
                <Input placeholder=""  size='large'/>
                <h6 className='mt-3 editUser__label'>DOB</h6>
                <DatePicker onChange={onChange} size='large' style={{ width: '100%' }} />
                <div className=' mt-3'>
                <Button type="primary" className='px-4 pb-1 userProfile'  >
        Save Profile
      </Button>
      </div>
                </Col>
                
                <Col className="" span={24} >
                <Tabs defaultActiveKey="1">
   
    <Tabs.TabPane tab="Followers" key="2">
    <Row
      gutter={{ xs: 24, sm: 24, md: 24, lg: 8 }}
    >
       <Col className="gutter-row pl-5" span={24}  >
        <Input size="large" className='Pb-0' placeholder="Search" bordered={false}  prefix={<SearchOutlined />} />
      <Divider className='mt-0 mb-2' />
        <List
          dataSource={data}
          renderItem={item => (
            <List.Item key={item.email}>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name.last}</a>}
                description={item.email}
              />
              <Button type="primary"  ghost style={{marginRight:'10px', borderRadius:'10px'}}>
      Remove
    </Button>
    <Button type="primary"  ghost  style={{ borderRadius:'10px',backgroundColor:'#F7F7F7', borderStyle:'none'}}>
      Remove
    </Button>
            </List.Item>
          )}
        />
        </Col>
        </Row>
    </Tabs.TabPane>
    <Tabs.TabPane tab="Following" key="3">
    <Row
      gutter={{ xs: 24, sm: 24, md: 24, lg: 6 }}
    >
      
        
        <Col className="gutter-row pl-5" span={24}  >
        <Input size="large" className='Pb-0' placeholder="Search" bordered={false}  prefix={<SearchOutlined />} />
      <Divider className='mt-0 mb-2' />
        <List
          dataSource={data}
          renderItem={item => (
            <List.Item key={item.email}>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name.last}</a>}
                description={item.email}
              />
              <Button type="primary"  ghost style={{marginRight:'10px', borderRadius:'10px'}}>
      Remove
    </Button>
    <Button type="primary"  ghost  style={{ borderRadius:'10px',backgroundColor:'#F7F7F7', borderStyle:'none'}}>
      Remove
    </Button>
            </List.Item>
          )}
        />
        </Col>
        </Row>
   
    </Tabs.TabPane>
  </Tabs>
                    </Col>
                
                </Row>
                
        </section>
        )

}

export default EditUserProfile