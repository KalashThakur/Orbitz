import React from 'react'

const Cart = () => {

   let cartItems =  JSON.parse(localStorage.getItem("cart"))
   console.log('cartItems:', cartItems)
   return (
       <div>
        <h1>CART</h1>
        
        <div id="maindiv">

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
                      <span className="span">{elem.rating} </span> {elem.review}
                    </p>
                    <hr />
                    
                  </div>
                  <div className="price">₹ {elem.price}</div>
                </div>
              </>
            );
          })}
        </div>
    </div>

         
    </div>
  )
}

export default Cart