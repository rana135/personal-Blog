import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { history, removeFromHistory, removeFromWishlist, wishList } from "../redux/actions/blogAction";

const BlogCard = ({ blog }) => {
  //console.log(blog);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const nevigateblogDetail = id => {
    console.log(id)
    Navigate(`/blog-detail/${id}`)
  }

  return (
    <div className='shadow-lg relative rounded-3xl border p-3 flex flex-col text-white bg-sky-400'>
      <div>
        <img className='rounded-lg w-full h-56 mb-3' src={blog?.image} alt={blog?.categories} />
      </div>
      <h1 className='hover:font-semibold text-2xl'>{blog?.title}</h1>

      <div className='gap-2 mt-5'>
        <span className="text-lg">{blog?.content[0].text.slice(0, 135)}</span>
        <span>
          <button
            onClick={() => {
              dispatch(history(blog));
              nevigateblogDetail(blog?._id);
            }}
            className=' flex-1 ml-1 hover:text-indigo-900 text-white font-bold'
          >
            read more...
          </button>
        </span>
      </div>

      <hr className='h-1 bg-white mb-6 mt-3' />
      <div className='flex justify-between'>
        <p className='text-center font-semibold mb-3'>{blog?.author.name}</p>
        <p className='text-center font-semibold mb-3'>{blog?.date}</p>
      </div>

      <div class="flex gap-7 justify-between">
        <div>
          <span
            class="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 mr-2 text-xs font-semibold text-blue-600"
          >
            {blog?.tags}
          </span>
        </div>
        <div className="flex gap-3">
          {!pathname.includes("wishlist") && (
            <button
              onClick={() => dispatch(wishList(blog))}
              title='Add to wishlist'
              className='bg-indigo-500  py-1 px-2 rounded-full'
            >
              <BiListPlus className='text-white' />
            </button>
          )}
          {pathname.includes("wishlist") && (
            <button
              title='Remove'
              onClick={() => dispatch(removeFromWishlist(blog))}
              className='inline-flex items-center rounded-full bg-orange-50 px-2 text-xs font-semibold text-red-500'
            >
              <p>Remove</p>
              <MdDeleteForever size='25' />
            </button>
          )}
          {pathname.includes("history") && (
            <button
              title='Remove'
              onClick={() => dispatch(removeFromHistory(blog))}
              className='inline-flex items-center rounded-full bg-orange-50 px-2 text-xs font-semibold text-red-500'
            >
              <p>Remove</p>
              <MdDeleteForever size='25' />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
