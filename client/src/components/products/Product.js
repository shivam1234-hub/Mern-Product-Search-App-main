import React from 'react'
import classes from './Product.module.css'
import ProductCard from './ProductCard'

const titles = [{
  id: 1,
  title: 'Dummy Shake',
  price: '120',
  date: new Date(),
  imageLink: "https://as2.ftcdn.net/v2/jpg/03/15/17/27/1000_F_315172714_Nkbsndlpr3TxSLQQl1fKdUzb05Ao41bH.jpg",

},
{
  id: 2,
  title: 'Dummy Shake',
  author: 'Coursera',
  imageLink: 'https://post.healthline.com/wp-content/uploads/2020/09/AN274-Eggs-carton-732x549-Thumb.jpg',
  price: '50',
  date: new Date()
},
{
  id: 3,
  title: 'Dummy Shake',
  price: '120',
  date: new Date(),
  imageLink: "https://as2.ftcdn.net/v2/jpg/03/15/17/27/1000_F_315172714_Nkbsndlpr3TxSLQQl1fKdUzb05Ao41bH.jpg",
},
{
  id: 4,
  title: 'Dummy Shake',
  price: '120',
  date: new Date(),
  imageLink: "https://as2.ftcdn.net/v2/jpg/03/15/17/27/1000_F_315172714_Nkbsndlpr3TxSLQQl1fKdUzb05Ao41bH.jpg",
},
{
  id: 5,
  title: 'Dummy Shake',
  price: '120',
  date: new Date(),
  imageLink: "https://as2.ftcdn.net/v2/jpg/03/15/17/27/1000_F_315172714_Nkbsndlpr3TxSLQQl1fKdUzb05Ao41bH.jpg",
},
{
  id: 6,
  title: 'Dummy Shake',
  price: '120',
  date: new Date(),
  imageLink: "https://as2.ftcdn.net/v2/jpg/03/15/17/27/1000_F_315172714_Nkbsndlpr3TxSLQQl1fKdUzb05Ao41bH.jpg",
},
{
  id: 7,
  title: 'Dummy Shake',
  price: '120',
  date: new Date(),
  imageLink: "https://as2.ftcdn.net/v2/jpg/03/15/17/27/1000_F_315172714_Nkbsndlpr3TxSLQQl1fKdUzb05Ao41bH.jpg",
},
{
  id: 8,
  title: 'Dummy Shake',
  price: '120',
  date: new Date(),
  imageLink: "https://as2.ftcdn.net/v2/jpg/03/15/17/27/1000_F_315172714_Nkbsndlpr3TxSLQQl1fKdUzb05Ao41bH.jpg",
},
{
  id: 9,
  title: 'Dummy Shake',
  price: '120',
  date: new Date(),
  imageLink: "https://as2.ftcdn.net/v2/jpg/03/15/17/27/1000_F_315172714_Nkbsndlpr3TxSLQQl1fKdUzb05Ao41bH.jpg",
},
{
  id: 10,
  title: 'Dummy Shake',
  price: '120',
  date: new Date(),
  imageLink: "https://as2.ftcdn.net/v2/jpg/03/15/17/27/1000_F_315172714_Nkbsndlpr3TxSLQQl1fKdUzb05Ao41bH.jpg",
}
];



export default function Product(props) {

    return (
       <div className = {classes.row}>

            {/* {props.product?props.product.map((product)=>{
                return <ProductCard product = {product}/>
            }
            ):titles.map((product)=>{
                return <ProductCard product = {product}/>
            )
            } */}

            { 
            props.product?props.product.map((product)=>{
                return <ProductCard product = {product}/>
              }):titles.map((product)=>{
                return <ProductCard product = {product}/>
              }
            )
            }



            


      </div>
        
    )
}



