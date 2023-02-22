import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";

const History = () => {
  const history = useSelector((state) => state?.blog?.history);
  console.log(history);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-7xl gap-14 mx-auto my-10'>
      {history.map((blog) => (
          <ProductCard key={blog._id} blog={blog} ></ProductCard>
        ))}
    </div>
  );
};

export default History;
