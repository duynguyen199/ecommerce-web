import React from 'react'
import ProductList from '../../Component/SellingPage/ProductList'
import  { arrNewArrivals, topSellingArr } from '../../data/ProductDetailData'

type Props = {}

const ProductDetail = (props: Props) => {

  return (
    <div>
      <ProductList title='New Arrivals' products={arrNewArrivals}/>
      <ProductList title="Top Selling" products={topSellingArr}/>

    </div>
  )
}

export default ProductDetail