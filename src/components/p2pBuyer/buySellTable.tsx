import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, Menu, Space } from "antd";
import check from '../../assets/img/P2p/Check.svg'
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
  type Props={
    text:string;
    onClick:()=>void
  }
const BuySellTable = ({text,onClick}:Props) => {
    return ( 
        <div>
        <div className="d-flex mx-3 justify-content-between">
          <div>
            <p className="p-0 m-0">Amount</p>
            <Input
              size="small"
              placeholder="search"
              prefix={<SearchOutlined />}
              className="searchFilter"
            />
          </div>
          <div>
            <p className=" m-0">Flat</p>
            <Dropdown
              className="flatDropMenu"
              overlay={menu}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Pkr
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
          <div>
            <p className=" m-0">Payment method</p>
            <Input
              size="small"
              placeholder="search"
              prefix={<SearchOutlined />}
              className="searchFilter"
            />
          </div>
          <div>
            <p className=" m-0">Available Region(s)</p>
            <Input
              size="small"
              placeholder="search"
              prefix={<SearchOutlined />}
              className="searchFilter"
            />
          </div>
          <div>
            <p className="m-0">Available Region(s)</p>
            <Input
              size="small"
              placeholder="search"
              prefix={<SearchOutlined />}
              className="searchFilter"
            />
          </div>
        </div>
        <div className="d-flex justify-content-between mx-5 mt-3">
          <p className="w-100 ">Advertisers(Completion rate)</p>
          <p className="w-50">Price</p>
          <p className="w-100 ">Limit/Available</p>
          <p className="w-100 ">Payment</p>
          <p className="w-50 ">Action</p>
        </div>
    
     {/* table rows */}
     {[1, 2,4,3,4,5,6].map((item: any) => {
        return (
            <div className="d-flex justify-content-between mx-5 tableRow mt-3">
    {/* advertisers */}
    <div className="d-flex w-100">
      <img
        alt="rounded-img"
        className="circular-img-buyerSeller"
        src={
          "https://www.lct.org/media/filer_public_thumbnails/filer_public/6e/a9/6ea9c4c6-8b21-478b-97e2-b7d0fd17787c/weaver_sigourney_headshot.jpg__270x310_q85_subsampling-2.jpg"
        }
      />
      <div className="ms-2">
        <p className="m-0 p-0 advertiserName">Cybil Trader <img src={check}/></p>
        <p className="m-0 p-0 advertiserDiscrip">136 orders | 100.00% completion</p>
      </div>
    </div>
    {/* price */}
    <div className="w-50">
      <p className="m-0 p-0 price">233.8</p>
      <p className="m-0 p-0 pkr">PKR</p>
    </div>
    {/* unit */}
    <div className="w-100">
      <p className="m-0 p-0 USDT"><span className="available">Available</span> 225.00 USDT</p>
      <p className="m-0 p-0 dollar"><span className="limit">limit</span> $ 200.00 - $ 512,625.89</p>
    </div>
    {/* payment */}
    <div className="w-100">
      <p className="m-0 p-0 mb-2">
        <span className="bank me-2">Bank Transfer</span>
        <span className="jazzCash">JazzCash</span>
      </p>
      <p className="m-0 p-0">
        <span className="ubl mx-2">UBL Bank</span>
        <span className="easyPaisa ms-3">EasyPaisa</span>
      </p>
    </div>
    {/* action */}
    <div className="w-50"><Button className="buyBtn" onClick={onClick}>{text}</Button></div>
    
</div>
        )
     })}
       
   

      
    
    </div>
     );
}
 
export default BuySellTable;