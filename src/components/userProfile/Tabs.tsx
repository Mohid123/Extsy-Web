import {useState,useEffect} from 'react';
import { Col, Row, Tabs,Avatar, List } from 'antd';
import tab1Image1 from '../../assets/img/Rectangle 2.svg'
import tab1Image2 from '../../assets/img/Rectangle 2.1.svg'
import tab1Image3 from '../../assets/img/Rectangle 2.2.svg'
import tab1Image4 from '../../assets/img/Rectangle 2.3.svg'
import tab2Image1 from '../../assets/img/7748175 2.svg'
import tab2Image2 from '../../assets/img/7748175 2.svg'
import tab2Image3 from '../../assets/img/7748175 3.svg'
import tab2Image4 from '../../assets/img/7748175 4.svg'
import Like from '../../assets/img/Like.svg'
import Comment from '../../assets/img/Comment.svg'
import Share from '../../assets/img/Share.svg'
import Heart from '../../assets/img/Heart.svg'
import CryptoIcon from '../../assets/img/Crypto icons.svg'
import Ellipse3 from '../../assets/img/Ellipse 3.svg'


import {   } from '@ant-design/icons';
import {
  RightOutlined
} from '@ant-design/icons';




const TabsPanel  = () => {
    const data1 =[{name:'fdfsa',email:'fdafdsafa',Image:'dasfsdfdf'}]
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
        <Tabs defaultActiveKey="1">
    <Tabs.TabPane tab="My Posts" key="1">
    <Row
      gutter={{ xs: 24, sm: 24, md: 24, lg: 8 }}
    >
      <Col className="gutter-row" span={6} >
      <div className='px-2'>
        <img src={tab1Image1} alt="" />
        <div className='d-flex px-4 justify-content-between blur-bg'>
                                <div style={{ position: 'relative', bottom: '10px' }}>
                                    <img src={Like} alt="" />

                                    <span className='textColor'>124</span>
                                </div>
                                <div style={{ position: 'relative', bottom: '10px' }}>
                                    <img src={Comment} alt="" />
                                    <span className='textColor'>9</span>
                                </div>

                                <div style={{ position: 'relative', bottom: '10px' }}>
                                    <img src={Share} alt="" />
                                </div>


                            </div>
      </div>
        </Col>
        <Col className="gutter-row" span={6} >
      <div className='px-2'>
        <img src={tab1Image2} alt="" />
                            <div className='d-flex px-4 justify-content-between blur-bg'>
                                <div style={{ position: 'relative', bottom: '10px' }}>
                                    <img src={Like} alt="" />

                                    <span className='textColor'>124</span>
                                </div>
                                <div style={{ position: 'relative', bottom: '10px' }}>
                                    <img src={Comment} alt="" />
                                    <span className='textColor'>9</span>
                                </div>

                                <div style={{ position: 'relative', bottom: '10px' }}>
                                    <img src={Share} alt="" />
                                </div>


                            </div>
      </div>
        </Col>
        <Col className="gutter-row" span={6} >
      <div className='px-2'>
        <img src={tab1Image3} alt="" />
        <div className='d-flex px-4 justify-content-between blur-bg'>
                                <div style={{ position: 'relative', bottom: '10px' }}>
                                    <img src={Like} alt="" />

                                    <span className='textColor'>124</span>
                                </div>
                                <div style={{ position: 'relative', bottom: '10px' }}>
                                    <img src={Comment} alt="" />
                                    <span className='textColor'>9</span>
                                </div>

                                <div style={{ position: 'relative', bottom: '10px' }}>
                                    <img src={Share} alt="" />
                                </div>


                            </div>
      </div>
        </Col>
        <Col className="gutter-row" span={6} >
      <div className='px-2'>
        <img src={tab1Image4} alt="" />
        <div className='d-flex px-4 justify-content-between blur-bg'>
                                <div style={{ position: 'relative', bottom: '10px' }}>
                                    <img src={Like} alt="" />

                                    <span className='textColor'>124</span>
                                </div>
                                <div style={{ position: 'relative', bottom: '10px' }}>
                                    <img src={Comment} alt="" />
                                    <span className='textColor'>9</span>
                                </div>

                                <div style={{ position: 'relative', bottom: '10px' }}>
                                    <img src={Share} alt="" />
                                </div>


                            </div>
      </div>
        </Col>
        </Row>
     
    </Tabs.TabPane>
    <Tabs.TabPane tab="My NFT’s" key="2">
    <Row
      gutter={{ xs: 24, sm: 24, md: 24, lg: 8 }}
    >
      <Col className="gutter-row" span={6} >
      <div className='px-2'>
        <img src={tab2Image1} alt="" />
        
        <div className='d-flex px-4 justify-content-between blur-bg2'>
                                <div >
                                  <p className='textColor mt-2'>Monkey with hat</p> 
                                </div>
                                

                                <div className='d-flex'>
                                    <img src={Heart} className="" style={{width:'20px'}} alt="" />
                                    <p className='textColor mt-2 ms-2'> 6</p>
                                </div>


                            </div>
                            <div className=' monkeyDiv'>
                             <div className='d-flex'>
                             <img src={Ellipse3} alt="" />
                              <p className='mt-3 ms-2'>Johinson</p>
                             </div>
                             <div className='d-flex'>
                             <img src={CryptoIcon} alt="" />
                              <p className='mt-3 ms-2'>615</p>
                             </div>
                             
                             
                            </div>
      </div>
        </Col>
        <Col className="gutter-row" span={6} >
      <div className='px-2'>
        <img src={tab2Image2} alt="" />
        <div className='d-flex px-4 justify-content-between blur-bg2'>
                                <div >
                                  <p className='textColor mt-2'>Monkey with hat</p> 
                                </div>
                                

                                <div className='d-flex'>
                                    <img src={Heart} className="" style={{width:'20px'}} alt="" />
                                    <p className='textColor mt-2 ms-2'> 6</p>
                                </div>


                            </div>
                            <div className=' monkeyDiv'>
                             <div className='d-flex'>
                             <img src={Ellipse3} alt="" />
                              <p className='mt-3 ms-2'>Johinson</p>
                             </div>
                             <div className='d-flex'>
                             <img src={CryptoIcon} alt="" />
                              <p className='mt-3 ms-2'>615</p>
                             </div>
                             
                             
                            </div>
      </div>
        </Col>
        <Col className="gutter-row" span={6} >
      <div className='px-2'>
        <img src={tab2Image3} alt="" />
        <div className='d-flex px-4 justify-content-between blur-bg2'>
                                <div >
                                  <p className='textColor mt-2'>Monkey with hat</p> 
                                </div>
                                

                                <div className='d-flex'>
                                    <img src={Heart} className="" style={{width:'20px'}} alt="" />
                                    <p className='textColor mt-2 ms-2'> 6</p>
                                </div>


                            </div>
                            <div className=' monkeyDiv'>
                             <div className='d-flex'>
                             <img src={Ellipse3} alt="" />
                              <p className='mt-3 ms-2'>Johinson</p>
                             </div>
                             <div className='d-flex'>
                             <img src={CryptoIcon} alt="" />
                              <p className='mt-3 ms-2'>615</p>
                             </div>
                             
                             
                            </div>
      </div>
        </Col>
        <Col className="gutter-row" span={6} >
      <div className='px-2'>
        <img src={tab2Image4} alt="" />
        <div className='d-flex px-4 justify-content-between blur-bg2'>
                                <div >
                                  <p className='textColor mt-2'>Monkey with hat</p> 
                                </div>
                                

                                <div className='d-flex'>
                                    <img src={Heart} className="" style={{width:'20px'}} alt="" />
                                    <p className='textColor mt-2 ms-2'> 6</p>
                                </div>


                            </div>
                            <div className=' monkeyDiv'>
                             <div className='d-flex'>
                             <img src={Ellipse3} alt="" />
                              <p className='mt-3 ms-2'>Johinson</p>
                             </div>
                             <div className='d-flex'>
                             <img src={CryptoIcon} alt="" />
                              <p className='mt-3 ms-2'>615</p>
                             </div>
                             
                             
                            </div>
      </div>
        </Col>
        </Row>
    </Tabs.TabPane>
    <Tabs.TabPane tab="Tokens" key="3">
    <Row
      gutter={{ xs: 24, sm: 24, md: 24, lg: 6 }}
    >
      <Col className="gutter-row" span={6} >
      <List
          dataSource={data}
          renderItem={item => (
            <List.Item key={item.email}>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name.last}</a>}
                description={item.email}
              />
              <RightOutlined />
            </List.Item>
          )}
        />
        </Col>
        <Col className="gutter-row" span={6} >
      <List
          dataSource={data}
          renderItem={item => (
            <List.Item key={item.email}>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name.last}</a>}
                description={item.email}
              />
              <RightOutlined />
            </List.Item>
          )}
        />
        </Col>
        <Col className="gutter-row pl-5" span={6}  >
      <List
     
          dataSource={data}
          renderItem={item => (
            <List.Item key={item.email}>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name.last}</a>}
                description={item.email}
              />
              <RightOutlined />
            </List.Item>
          )}
        />
        </Col>
        </Row>
   
    </Tabs.TabPane>
  </Tabs>
    )
}
export default TabsPanel