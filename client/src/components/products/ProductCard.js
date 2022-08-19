import React from "react";
import "./ProductCard.css"

const ProductCard = ({product}) =>{

   

    return (
        <div class="container">
        <div class="card">
          <img src={product.imageLink} alt="" />
          <div class="card-body">
            <div class="row">
              <div class="card-title">
                <h4>{product.title}</h4>
                <h3>{product.price}</h3>
              </div>
              <div class="view-btn">
                <a href="">View Details</a>
              </div>
            </div>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
              dignissimos.
            </p>
            <div class="btn-group">
              <div class="btn">
                <a href="">Buy Now</a>
              </div>
              <a href=""> Cancel</a>
            </div>
          </div>
        </div>
      </div>
    )

}

export default ProductCard