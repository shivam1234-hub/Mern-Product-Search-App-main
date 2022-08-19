import React from 'react'
import classes from './Product.module.css'
import ProductCard from './ProductCard'



export default function Product() {

    return (
       <div className = {classes.row}>
        
               <ProductCard/>
               <ProductCard/>
               <ProductCard/>
               <ProductCard/>
               <ProductCard/>
               <ProductCard/>
               <ProductCard/>
               <ProductCard/>
               <ProductCard/>

      </div>
        
    )
}



