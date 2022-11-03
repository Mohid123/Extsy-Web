import {useEffect, useState} from 'react';
import { Col, Row, Tabs, Avatar, List, Button, Input, Skeleton } from 'antd';
import { RightOutlined, SearchOutlined } from '@ant-design/icons';
import { User } from '../../store/reducers/profileSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, searchUserByName } from '../../store/reducers/usersSlice';
import { debounceTime, switchMap, distinctUntilChanged, map, Subject, filter } from 'rxjs';

const Arr = Array;
const num: number = 5;

const ExploreUser= () => {
    const [searchInput, setSearchInput] = useState("");
    const [timer, setTimer] = useState<any>(null)
    const dispatch = useDispatch<any>();
    const loadUserData = () => {
      dispatch(getAllUsers({offset: 0, limit: 10}))
    };

    const {users} = useSelector((state: any) => state?.users)
    const status = useSelector((state: any) => state?.users?.status);
    const searchSubject = new Subject();

    const searchUser = (e: any) => {
      setSearchInput(e?.target?.value);
      if(e?.target?.value?.length > 0) {
        clearTimeout(timer)

        const newTimer = setTimeout(() => {
          searchSubject.next(e?.target?.value)
        }, 600)

        setTimer(newTimer)

        searchSubject.pipe(
          map((val: any) => val.trim()),
          debounceTime(600),
          distinctUntilChanged(),
          filter(val => val.length > 0),
          switchMap((val: string) => dispatch(searchUserByName({offset: 0, limit: 10, name: val})))
        ).subscribe();
      }
      else {
        dispatch(getAllUsers({offset: 0, limit: 10}))
      }
      
    }

    const skeletonLoader = Arr(num).fill(1).map((arr: any) => {
      return (
        <Skeleton className='my-5' avatar paragraph={{ rows: 2 }} />
      )
    })
    
    useEffect(() => { 
      loadUserData();
    }, []);

    return (
        <div> 
        <div className=' container  '>
              <Row
                gutter={{ xs: 24, sm: 24, md: 24, lg: 24 }}
                className='edit-profile-content'
              >
                <Col className="gutter-row " span={24}  >
                  <Input id='input-box' onChange={searchUser} value={searchInput} size="large" className='mt-5' placeholder="Search Users, Groups, Events"  prefix={<SearchOutlined />} />
                  <h4 className='mt-4'>Users</h4>
                  {status === 'loading' && skeletonLoader}
                  {status === 'succeeded' && <List
                    dataSource={users}
                    renderItem={(item: User) => (
                      <List.Item key={item.id}>
                        <List.Item.Meta
                          avatar={<Avatar src={item.profilePicURL} />}
                          title={<span>{item.fullName}</span>}
                          description={item.email}
                        />
                        <Button type="primary" ghost style={{marginRight:'10px', borderRadius:'10px'}}>
                          Follow
                        </Button>
                      </List.Item>
                    )}
                  />}
                {/* <h4 className='mt-4'>Groups</h4> */}
                {/* <List
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
                /> */}
                </Col>
              </Row>
        </div>
        </div>
    )
}
export default ExploreUser