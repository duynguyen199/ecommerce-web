import React from "react";
import ProductList from "../SellingPage/ProductList";
import { arrNewArrivals, topSellingArr } from "../../data/ProductDetailData";
import BrowseStyle from "../../Component/BrowseStyle/BrowseStyle";

type Props = {};

const ProductDetail = (props: Props) => {
  return (
    <div>
      <ProductList title="New Arrivals"  />
      <ProductList title="Top Selling"  />
      <BrowseStyle/>
      
    </div>
  );
};

export default ProductDetail;
