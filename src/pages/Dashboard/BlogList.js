import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadBlogData from "../../redux/thunk/Blogs/loadBlogData";
import { AiTwotoneDelete } from 'react-icons/ai'
import { removeProduct } from "../../redux/actions/blogAction";
import deleteBlog from "../../redux/thunk/Blogs/deleteBlog";

const BlogList = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBlogData());
  }, []);

  return (
    <div class='flex flex-col justify-center items-center h-full w-full '>
      <div class='w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200'>
        <header class='px-5 py-4 border-b border-gray-100'>
          <div class='font-semibold text-gray-800'>Blogs</div>
        </header>

        <div class='overflow-x-auto p-3'>
          <table class='table-auto w-full'>
            <thead class='text-xs font-semibold uppercase text-gray-400 bg-gray-50'>
              <tr>
                <th></th>
                <th class='p-2'>
                  <div class='font-semibold text-left'>Title</div>
                </th>
                <th class='p-2'>
                  <div class='font-semibold text-left'>Author Name</div>
                </th>
                <th class='p-2'>
                  <div class='font-semibold text-left'>Categories</div>
                </th>
                <th class='p-2'>
                  <div class='font-semibold text-left'>Tags</div>
                </th>
                <th class='p-2'>
                  <div class='font-semibold text-center'>Action</div>
                </th>
              </tr>
            </thead>

            <tbody class='text-sm divide-y divide-gray-100'>
              {blogs.map(({ title, author, categories, tags, _id }) => (
                <tr>
                  <td class='p-2'>
                    <input type='checkbox' class='w-5 h-5' value='id-1' />
                  </td>
                  <td class='p-2'>
                    <div class='font-medium text-gray-800'>{title.slice(0, 35)}...</div>
                  </td>
                  <td class='p-2'>
                    <div class='text-left capitalize'>{author.name}</div>
                  </td>
                  <td class='p-2'>
                    <div class='text-left'>
                      {categories}
                    </div>
                  </td>
                  <td class='p-2'>
                    <div class='text-left font-medium text-indigo-500'>
                      {tags}
                    </div>
                  </td>
                  <td class='p-2'>
                    <div class='flex justify-center text-red-500'>
                      <button onClick={() => dispatch(deleteBlog(_id))}>
                        <AiTwotoneDelete size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    // </section>
  );
};

export default BlogList;
