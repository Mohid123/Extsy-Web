import {useState,useEffect} from 'react';
import Header from "../LandingPageHeader"
import { Col, Row, Tabs,Avatar, List, Button, Input } from 'antd';
import { RightOutlined, SearchOutlined } from '@ant-design/icons';
const ExploreUser= ()=>{
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
    <div> 
    <div className=' container  '>
          <Row
      gutter={{ xs: 24, sm: 24, md: 24, lg: 24 }}
      className='edit-profile-content'
    >
      
        <Col className="gutter-row " span={24}  >
        <Input size="large" className=' mt-5' placeholder="Search Users, Groups, Events"  prefix={<SearchOutlined />} />
        <h4 className='mt-4'>Users</h4>
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
      Follow
    </Button>
   
            </List.Item>
          )}
        />
        <h4 className='mt-4'>Groups</h4>
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
      Join Now
    </Button>
   
            </List.Item>
          )}
        />
        <h4 className='mt-4'>Events</h4>
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
      View
    </Button>
   
            </List.Item>
          )}
        />
        </Col>
        </Row>
    </div>
    </div>
)
}
export default ExploreUser