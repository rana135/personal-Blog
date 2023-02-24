import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../../components/BlogCard";
import { sortItemAsc, sortItemDesc, toggleTags } from "../../redux/actions/blogAction";
import loadBlogData from "../../redux/thunk/Blogs/loadBlogData";
import './Home.css';

const Home = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  const tags = useSelector((state) => state.tag.tags);
  //console.log(tags);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBlogData());
  }, []);

  const activeClass = "text-white  bg-indigo-500 border-white";
  let content;
  if (blogs.length) {
    content = blogs
      .map((blog) => (
        <BlogCard blog={blog} />
      ))
  }
  if (blogs.length && tags.length) {
    content = blogs
      .filter((blog) => {
        if (tags.length) {
          return tags.includes(blog.categories);
        }
        return blog;
      })
      .map((blog) => (
        <BlogCard blog={blog} />
      ))
  }

  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>

      <div className="flex justify-between">
        <div className='mb-10 flex justify-start gap-5'>
          <button
            onClick={() => dispatch(sortItemAsc())}
            className={`sort border px-3 py-2 rounded-full font-semibold`}>
            SORT BY FIRST UPLOAD
          </button>
          <button
            onClick={() => dispatch(sortItemDesc())}
            className={`sort border px-3 py-2 rounded-full font-semibold`}>
            SORT BY lAST UPLOAD
          </button>
        </div>

        <div className='mb-10 flex justify-end gap-5'>
          <button
            onClick={() => dispatch(toggleTags("web"))}
            className={`border px-3 py-2 rounded-full font-semibold 
          ${tags.includes("web") ? activeClass : null} `}
          >
            WEB
          </button>
          <button
            onClick={() => dispatch(toggleTags("IT"))}
            className={`border px-3 py-2 rounded-full font-semibold 
          ${tags.includes("IT") ? activeClass : null} `}
          >
            IT
          </button>
          <button
            onClick={() => dispatch(toggleTags("programming"))}
            className={`border px-3 py-2 rounded-full font-semibold 
          ${tags.includes("programming") ? activeClass : null} `}>
            Programming
          </button>

        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-14'>
        {content}
      </div>
    </div>
  );
};

export default Home;
