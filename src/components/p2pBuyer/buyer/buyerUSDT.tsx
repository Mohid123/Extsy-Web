import buyUsdtImg from '../../../assets/img/p2p/buyUsdtPic.png';
import exchange from '../../../assets/img/p2p/exchange.svg'
import completionRate from '../../../assets/img/p2p/completion rate icon.svg'
import check from '../../../assets/img/p2p/Check.svg'
import './buyerUSDT.scss'
import { Button, Checkbox, Input } from 'antd'
import { useNavigate } from 'react-router-dom'
const BuyerUSDT = () => {
    const onChange = (e:any) => {
        console.log(`checked = ${e.target.checked}`);
      };
      const navigate = useNavigate()
    return (
      <div className="BoxShadow mt-5 buyerUSDT mx-auto bg-white">
        <div className="d-flex">
          <img src={buyUsdtImg} />
          <div className="ms-5">
            {" "}
            <p className="buyerName p-0 m-0">
              Cybil
              <span>
                {" "}
                <img src={check} />
              </span>
            </p>
            <p className="idd">#seller_id</p>
            <p className="sellerProfile">Seller Profile</p>
            <div className="d-flex">
              <div className="d-flex">
                <img src={exchange} />
                <div className="ms-2">
                  <p className="p-0 m-0 totalTrades">Total Trades</p>
                  <p className="p-0 m-0  totalTradesInDigit">216 Trades</p>
                </div>
              </div>
              <div className="d-flex ms-5">
                <img src={completionRate} />
                <div className="ms-2">
                  <p className="p-0 m-0  totalTrades">Completion Rate</p>
                  <p className="p-0 m-0  totalTradesInDigit">97%</p>
                </div>
              </div>
            </div>
            {/* second row */}
            <div className="d-flex mt-3">
              <div className="d-flex">
                <img src={exchange} />
                <div className="ms-2">
                  <p className="p-0 m-0 totalTrades">Total Trades</p>
                  <p className="p-0 m-0  totalTradesInDigit">216 Trades</p>
                </div>
              </div>
              <div className="d-flex ms-5">
                <img src={completionRate} />
                <div className="ms-2">
                  <p className="p-0 m-0  totalTrades">Completion Rate</p>
                  <p className="p-0 m-0  totalTradesInDigit">97%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* want to buy */}
        <div className='d-flex'>
        <div className="usdtBuy BoxShadow mt-4">
          <p className='wantToBuy'>How many USDT you want to buy?</p>
          <Input
            className="buyInput buyInput__inputText"
            placeholder='234343'
            suffix={
              <p
                className="p-0 m-0"
                onClick={() => {
                  console.log("buy usdt button click");
                }}
              >
                PKR | All
              </p>
            }
          />

          <Input
            className="buyInput buyInput__inputText mt-1"
            placeholder='234343'
            suffix={
              <p
                className="p-0 m-0 buyInput__inputText"
                onClick={() => {
                  console.log("buy usdt button click");
                }}
              >
                PKR | All
              </p>
            }
          />
          <p className='p-0 m-0 avaBalance mt-3'>Available Balance:<span className='amount'>$100,000</span></p>
        </div>
        {/* detail */}
        <div className='buyDetail BoxShadow mt-4 ms-3'>
            <p className='wantToBuy' >Details</p>
            <div className='d-flex justify-content-between'>
                <p className='detailText'>Price</p>
                <p className='detailText__detailAmount'>247.45</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p className='detailText'>Quantity</p>
                <p className='detailText__detailAmount'>8954.6 USDT</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p className='detailText'>Limit</p>
                <p className='detailText__detailAmount'>$ 10,000 - 100,000</p>
            </div>
        </div>
        </div>
        {/* remarks */}
        <div className='p-4'>
        <p className='wantToBuy'>Remarks</p>
        <div className='d-flex'>
            <p className='detailText fieldWidth'>Contact Info</p>
            <p className='ms-5 detailText__detailAmount w-100'> +92 651 364 15</p>
        </div>
        <div className='d-flex'>
            <p className='detailText fieldWidth'>Token ID</p>
            <p className='ms-5 detailText__detailAmount w-100'>74</p>
        </div>
        <Checkbox onChange={onChange} className='mb-3 detailText'>By placing an order, you indicate that you agree to the P2P Transactions Rules</Checkbox>
      <br/>
      <Button className='cancelOrder' onClick={()=>{navigate('/p2pbuyer')}}>Cancel Order</Button>
      <Button className='buyNow ms-2' onClick={()=>{navigate('/p2pbuyer/p2psellusdt')}}>Buy Now</Button>
      </div>
      </div>
    );
}
 
export default BuyerUSDT;
