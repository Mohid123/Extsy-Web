import { SearchOutlined } from '@ant-design/icons';
import { Badge, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/img/ExtsyLogo.svg'
import order from '../../../assets/img/orderCube.svg'
import heart from '../../../assets/img/Heart.svg'
import bellIcon from "../../../assets/img/Notification.svg"
import './p2pBuyerSellerHeader.scss'
import { useState } from 'react';
const BuyerSellerHeader = () => {
    const navigate = useNavigate()
    const [count, setCount] = useState(5);
    return (  
        <div className=' buyerSellerHeader'>
          <div className='d-flex justify-content-between mx-5 p-3 align-items-center'>
      <img src={logo} style={{ height: "25px", width: "106px", cursor:"pointer"}} alt=""  onClick={()=> navigate('/')} />
      <Input placeholder="search" prefix={<SearchOutlined />} className="p2pBuyerSellerSearch" />
        <div className=''>
            <img src={order }/><span className='ms-1 buyerSellerHeaderTabs'>Orders</span>
            <img src={heart } className='ms-3'/><span  className='ms-1 buyerSellerHeaderTabs'>Favorites</span>
           <Badge count={count} size="small" className='buyerSellerBadge ms-4 me-3'>
              <img src={bellIcon} className="" />
            </Badge>
            <img alt='rounded-img' className='circular-img-buyerSeller' src={'https://www.lct.org/media/filer_public_thumbnails/filer_public/6e/a9/6ea9c4c6-8b21-478b-97e2-b7d0fd17787c/weaver_sigourney_headshot.jpg__270x310_q85_subsampling-2.jpg'}/>
        </div>
        </div>
        <div className='d-flex justify-content-center'>
          <p className='mx-3 buyerSellerHeaderTabs'>Best Sellers</p>
          <p  className='mx-3 buyerSellerHeaderTabs'>New Releases</p>
          <p  className='mx-3 buyerSellerHeaderTabs'>Avatars</p>
          <p  className='mx-3 buyerSellerHeaderTabs'>Generative Arts</p>
          <p  className='mx-3 buyerSellerHeaderTabs'>Collectibles</p>
          <p  className='mx-3 buyerSellerHeaderTabs'>Music NFTs</p>
          <p  className='mx-3 buyerSellerHeaderTabs'>Gamified NFTs</p>
        </div>
        </div>
    );
}
 
export default BuyerSellerHeader;