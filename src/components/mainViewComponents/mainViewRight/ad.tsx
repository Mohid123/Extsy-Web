import { Carousel } from 'antd';
import img1 from '../../../assets/img/unsplash_tZCrFpSNiIQ.svg'
import img2 from '../../../assets/img/image.png'

import './mainViewRight.scss'
// interface contentStyle {
//   height ?: string,
//   color ?: string,
//   lineHeight?:string,
//   background?:string
// }
const contentStyle: any = {
  height : '200px',
  color: '#fff',
  lineHeight: '339px',
  textAlign: 'center',
  // background: '#364d79',
};
const Ad = () => {

    return (
      <>
        <div className="image">
          <div className="image__text ">
           
            <p className="image__textStyle1 p-0 m-0 p-2">
            What is this generation of workers really wants
            <p className="m-0 p-0 image__textStyle2">find out more...</p>
            </p>
         
          </div>
        </div>
        <br/>
        {/* <br/> */}
        <div className="nftAd bg-white">
        <Carousel autoplay>
    <div>
      <h3 style={contentStyle}><img src={img1}  
      style={{width:'100%',maxWidth:"23.125rem"}}
      /></h3>
    
    </div>
    <div>
      <h3 ><img src={img1} 
   style={{width:'100%',maxWidth:"23.125rem"}}
      /></h3>
    </div>
    <div>
      <h3 ><img src={img1} 
    style={{width:'100%',maxWidth:"23.125rem"}}
       /></h3>
    </div>
    <div>
      <h3 ><img src={img1}  
      style={{width:'100%',maxWidth:"23.125rem"}}
      /></h3>
    </div>
  </Carousel>
          </div>
          <div className="nftAdText bg-white">
           
            <p className=" p-0 m-0 p-2 image__textStyle1 pt-0">
            Discover the most usnique NFT Marketplace
            <p className="m-0 p-0 image__textStyle2">Visit Now</p>
            </p>
         
          </div>
       
      </>
    );
}
 
export default Ad;