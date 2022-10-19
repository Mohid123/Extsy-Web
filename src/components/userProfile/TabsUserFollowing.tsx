import {useState,useEffect} from 'react';
import { Col, Row, Divider, Avatar, List, Button ,Input} from 'antd';
import tab1Image1 from '../../assets/img/Rectangle 2.svg'
import tab1Image2 from '../../assets/img/Rectangle 2.1.svg'
import tab1Image3 from '../../assets/img/Rectangle 2.2.svg'
import tab1Image4 from '../../assets/img/Rectangle 2.3.svg'
import tab2Image1 from '../../assets/img/7748175 2.svg'
import tab2Image2 from '../../assets/img/7748175 2.svg'
import tab2Image3 from '../../assets/img/7748175 3.svg'
import tab2Image4 from '../../assets/img/7748175 4.svg'
import {   } from '@ant-design/icons';
import {
    SearchOutlined
  } from '@ant-design/icons';




const TabsPanel1  = () => {
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
    <Row
      gutter={{ xs: 24, sm: 24, md: 24, lg: 8 }}
    >
     
      <Col className="gutter-row" span={24} >
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
   
    )
}
export default TabsPanel1