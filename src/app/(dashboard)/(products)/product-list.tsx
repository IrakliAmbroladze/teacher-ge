"use client";

import React, { useState, useEffect, JSX } from "react";
import ProductCard from "./product-cart";
import { Product, ProductListProps } from "@/types/product";

const ProductList = ({ locale }: ProductListProps): JSX.Element => {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      console.log(data);
      setProductList(data.products);
    };
    loadProducts();
  }, []);

  console.log(productList);

  return (
    <div className="w-full max-w-[1110px] mx-auto mb-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-3 gap-4 justify-items-center">
        {productList.map((product, index) => (
          <div
            key={product.id}
            className={`border border-r-stone-200 p-2 
              ${index % 5 !== 0 ? "rounded-[45px]" : ""}
              ${index % 2 !== 0 ? "mt-20" : ""}
              ${index % 3 !== 0 ? "mt-10" : ""}`}
          >
            <ProductCard product={product} locale={locale} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
