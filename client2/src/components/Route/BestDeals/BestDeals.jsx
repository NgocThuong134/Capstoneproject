import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const BestDeals = () => {
  const [data, setData] = useState([]);
  const { allProducts } = useSelector((state) => state.products);
  
  useEffect(() => {
    const allProductsData = allProducts ? [...allProducts] : [];
    const sortedData = allProductsData.sort((a, b) => b.sold_out - a.sold_out);
    const topFiveDeals = sortedData.slice(0, 5);
    setData(topFiveDeals);
  }, [allProducts]);

  return (
    <div className={`py-10 ${styles.section}`}>
      <div className={`${styles.heading} mb-6`}>
        <h1 className="text-3xl font-bold text-left">Ưu Đãi Tốt Nhất</h1>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-6 xl:grid-cols-5 xl:gap-8">
        {data.length > 0 ? (
          data.map((item, index) => (
            <ProductCard data={item} key={index} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">Không có sản phẩm nào!</p>
        )}
      </div>
    </div>
  );
};

export default BestDeals;