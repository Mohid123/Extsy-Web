import {  Layout, Menu } from 'antd';
import CompleteKyc from "../components/kyc/CompleteKyc";
const { Header, Content, Footer, Sider } = Layout;
const MainLayout = ({children}:any) => {
    return ( 
    <div className="container" style={{backgroundColor:'red'}}>
         <Layout >
        <Sider width='400' >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', width:'100%' }}
          />
        </Sider>
        <Content style={{backgroundColor:  '#FCFBFC' , height:'100vh'}} ><CompleteKyc/></Content>
      </Layout>
       
    </div> 
    );
}
 
export default MainLayout;