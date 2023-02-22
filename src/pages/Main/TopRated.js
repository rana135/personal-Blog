import React from "react";
import { useSelector } from "react-redux";
import BlogCard from "../../components/BlogCard";

const TopRated = () => {
  const blogs = useSelector((state) => state.blog.blogs);

  let content;
  if (blogs.length) {
    content = blogs.filter((b) => b.rating >= 5).map((blog) => (
      <BlogCard blog={blog} />
    ))
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-7xl gap-14 mx-auto my-10'>
      {content}
    </div>
  );
};

export default TopRated;
