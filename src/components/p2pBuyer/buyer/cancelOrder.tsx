import './cancelOrder.scss'
import arrowRightCircle from'../../../assets/img/arrow-right-circle.svg'
import { Button, Checkbox } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
const CancelOrder = () => {
  const navigate = useNavigate()
    const [check, setCheck] =useState(false)
    const onChange = (e:any) => {
        
        console.log(`checked = ${e.target.checked}`);
        setCheck(e.target.checked)
      };
    return (
      <div className="BoxShadow mt-5 buyerUSDT mx-auto">
        <p className="orderCancelHeading">Order Cancellation</p>
        <div className="orderCancelForm BoxShadow">
          <div className="d-flex align-items-start">
            <img src={arrowRightCircle} />
            <p className="cancelOrderPoint ms-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
              non venenatis, facilisi cras congue sit. Vivamus congue parturient
              sit amet, ut curabitur adipiscing turpis. In blandit felis lectus
              habitant pretium, sollicitudin scelerisque. Tincidunt duis non sed
              elementum dolor sit nisl.
            </p>
          </div>
          <div className="d-flex align-items-start">
            <img src={arrowRightCircle} />
            <p className="cancelOrderPoint ms-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
              non venenatis, facilisi cras congue sit. Vivamus congue parturient
              sit amet, ut curabitur adipiscing turpis. In blandit felis lectus
              habitant pretium, sollicitudin scelerisque. Tincidunt duis non sed
              elementum dolor sit nisl.
            </p>
          </div>
          <div className="d-flex align-items-start">
            <img src={arrowRightCircle} />
            <p className="cancelOrderPoint ms-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
              non venenatis, facilisi cras congue sit. Vivamus congue parturient
              sit amet, ut curabitur adipiscing turpis. In blandit felis lectus
              habitant pretium, sollicitudin scelerisque. Tincidunt duis non sed
              elementum dolor sit nisl.
            </p>
          </div>
        </div>
        <div className="p-4">
          <p className="feedback">Feedback</p>
          <p>
            We keep your feedback confidential and aim to serve you better next
            time.
          </p>
          <Checkbox onChange={onChange} className={`mb-3 ${"checkTextStyle"}`}>
            I do not want to trade anymore
          </Checkbox>
          <br />
          <Checkbox
            onChange={onChange}
            className={`mb-3 ${check ? "detailText" : "checkTextStyle"}`}
          >
            I do not meet the requirements of the advertiser’s trading terms and
            conditions
          </Checkbox>
          <br />
          <Checkbox onChange={onChange} className={`mb-3 ${"checkTextStyle"}`}>
            Seller is asking for extra fee
          </Checkbox>
          <br />
          <Checkbox onChange={onChange} className={`mb-3 ${"checkTextStyle"}`}>
            Seller is asking for confidential information
          </Checkbox>
          <br />
          <TextArea
            rows={4}
            style={{ width: "36.75rem" }}
            placeholder="Write your own feedback..."
            className="writeFeedback"
          />
        </div>
        <div className="d-flex justify-content-end">
          <Button className="cancelOrder" onClick={()=>{navigate('/p2pbuyer/p2psellusdt')}}>Go Back</Button>
          <Button className="buyNow ms-2" onClick={()=>{navigate('/p2pbuyer')}}>Cancel Order</Button>
        </div>
      </div>
    );
}
 
export default CancelOrder;