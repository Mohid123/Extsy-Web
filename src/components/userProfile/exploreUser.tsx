import {useEffect, useState} from 'react';
import { Col, Row, Tabs, Avatar, List, Button, Input, Skeleton } from 'antd';
import { RightOutlined, SearchOutlined } from '@ant-design/icons';
import { User } from '../../store/reducers/profileSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, searchUserByName } from '../../store/reducers/usersSlice';
import { debounceTime, switchMap, distinctUntilChanged, map, Subject, filter, combineLatest } from 'rxjs';
import { followUser } from './../../store/reducers/profileSlice';
import { getGroups, searchGroup } from '../../store/reducers/groupsSlice';
import { Groups } from './../../store/reducers/groupsSlice';
import { EventRes, getAllEvents, searchEvents } from '../../store/reducers/eventsSlice';

const Arr = Array;
const num: number = 5;

const ExploreUser= () => {
    const [searchInput, setSearchInput] = useState("");
    const [timer, setTimer] = useState<any>(null)
    const dispatch = useDispatch<any>();
    const loadUserData = () => {
      dispatch(getAllUsers({offset: 0, limit: 10}))
    };

    const loadGroupData = () => {
      dispatch(getGroups({offset: 0, limit: 10}))
    }

    const loadEventData = () => {
      dispatch(getAllEvents({offset: 0, limit: 10}))
    }

    const {users} = useSelector((state: any) => state?.users);
    const {groups} = useSelector((state: any) => state?.groups);
    const {events} = useSelector((state: any) => state?.events);
    const userStatus = useSelector((state: any) => state?.users?.status);
    const groupStatus = useSelector((state: any) => state?.groups?.status);
    const eventStatus = useSelector((state: any) => state?.events?.status);
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
          filter(val => val.length > 0),
          distinctUntilChanged(),
          debounceTime(400),
          switchMap((val: string) => {
            return combineLatest(
              dispatch(searchUserByName({offset: 0, limit: 10, name: val})),
              dispatch(searchGroup({offset: 0, limit: 10, name: val})),
              dispatch(searchEvents({offset: 0, limit: 10, name: val}))
            )
          })
        ).subscribe();
      }
      else {
        loadUserData()
        loadGroupData()
        loadEventData()
      }
      
    }

    const skeletonLoader = Arr(num).fill(1).map((arr: any) => {
      return (
        <Skeleton className='my-5' avatar paragraph={{ rows: 2 }} />
      )
    })
    
    useEffect(() => { 
      loadUserData();
      loadGroupData();
      loadEventData();
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

                  {/* Users*/}

                  <h4 className='mt-4'>Users</h4>
                  {userStatus === 'loading' && skeletonLoader}
                  {userStatus === 'succeeded' && <List
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

                {/* Groups */}

                <h4 className='mt-4'>Groups</h4>
                {groupStatus === 'loading' && skeletonLoader}
                {groupStatus === 'succeeded' && 
                  <List
                  dataSource={groups}
                  renderItem={(item: Groups) => (
                    <List.Item key={item.id}>
                      <List.Item.Meta
                        avatar={<Avatar src={item.captureImageURL} />}
                        title={<span>{item.groupName}</span>}
                        description={item.description}
                      />
                      <Button type="primary"  ghost style={{marginRight:'10px', borderRadius:'10px'}}>
                        Join Now
                      </Button>
                    </List.Item>
                  )}
                />}

                {/* Events */}

                <h4 className='mt-4'>Events</h4>
                {eventStatus === 'loading' && skeletonLoader}
                {eventStatus === 'succeeded' && 
                  <List
                  dataSource={events}
                  renderItem={(item: EventRes) => (
                    <List.Item key={item.event?.id}>
                      <List.Item.Meta
                        avatar={<Avatar src={item.event?.captureImageURL} />}
                        title={<span>{item.event?.eventName}</span>}
                        description={item.event?.detail}
                      />
                      <Button type="primary"  ghost style={{marginRight:'10px', borderRadius:'10px'}}>
                        View
                      </Button>
                    </List.Item>
                  )}
                />}
                </Col>
              </Row>
        </div>
        </div>
    )
}
export default ExploreUser