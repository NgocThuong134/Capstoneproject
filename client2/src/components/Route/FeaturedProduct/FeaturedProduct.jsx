import React from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const FeaturedProduct = () => {
  const { allProducts } = useSelector((state) => state.products);

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading} mb-6`}>
          <h1 className="text-3xl font-bold text-left">Sản Phẩm Nổi Bật</h1>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-6 xl:grid-cols-5 xl:gap-8 mb-12">
          {allProducts && allProducts.length > 0 ? (
            allProducts.map((product, index) => (
              <ProductCard data={product} key={index} />
            ))
          ) : (
            <h4 className="col-span-full text-center text-gray-500">Không có sản phẩm nào!</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;