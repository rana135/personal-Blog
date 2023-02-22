import React from "react";
import { useSelector } from "react-redux";
import BlogCard from "../../components/BlogCard";

const Wishlist = () => {
    const wishlist = useSelector((state) => state?.blog.wishlist);
    console.log(wishlist);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-7xl gap-14 mx-auto my-10'>
            {wishlist.map((blog) => (
                <BlogCard key={blog._id} blog={blog} ></BlogCard>
            ))}
        </div>
    );
};

export default Wishlist;
