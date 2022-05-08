import React from "react";
import styled from "./Checkout.module.css";

const Checkout = () => {
  let cartItems = JSON.parse(localStorage.getItem("cart"));
  console.log("cartItems:", cartItems);

  return (
    <div id={styled.div}>
      <div id={styled.div} >
        {/* <h1>Checkout</h1> */}
        <div id={styled.main} className={styled.div}>
          <div id={styled.mainDiv}>
            <div className="container">
              {cartItems.map((elem) => {
                return (
                  <>
                    <div className="cont">
                      <div id="image">
                        <img src={elem.imgURL} alt="" />
                      </div>
                      <div id="details">
                        <h3>{elem.title}</h3>
                        <p>{elem.place}</p>
                        <p className="desc">{elem.desc}</p>
                        <p>
                          <span className="span">{elem.rating} </span>{" "}
                          {elem.review}
                        </p>
                      </div>
                      <div className="price">₹ {elem.price}</div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          {/* *************************PROMO********************** */}
          <div id={styled.mainDiv2}>
          {/* <div id={styled.address}> */}
        
        <form action="" id="form2">
          <div id={styled.enter_promo}>
            <h2 id={styled.heading}>ENTER PROMO CODE</h2>
            <input type="text" id={styled.input_promo} />
            <input type="submit" id={styled.submit_btn} className={styled.apply} value="APPLY" />
          </div>

          <div id={styled.payment_detail}>
            <h2>Payment Detail</h2>

            <div id="total5">
              <div>Order Total</div>
              <div id="final_price">0</div>
            </div>
          </div>
        </form>
      </div>
          </div>

        </div>
        {/* </div> */}
        {/* *********************************** */}
        <div id={styled.address}>
          <form >
            <h3 id="shipping">SHIPPING ADDRESS</h3>

            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
            <input type="text" placeholder="Company" />

            <input type="text" placeholder="Address" required />
            <input type="text" placeholder="City/town" required />
            <input type="text" placeholder="State/province" required />
            <input type="number" placeholder="Zip/postcode" required />
            <input type="number" placeholder="Mobile" required />
            <input type="submit" value="SAVE & CONTINUE" id={styled.submit_btn} />
          </form>
        </div>





       
            <h3>PAYMENT</h3>

           


        
    </div>
  );
};

export default Checkout;