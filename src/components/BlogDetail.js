import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import loadSingleBlog from "../redux/thunk/Blogs/loadSingleBlog";

const BlogDetail = () => {
    const blog = useSelector((state) => state.blog.blog);
    const dispatch = useDispatch();
    const { blogId } = useParams();
  
    useEffect(() => {
        dispatch(loadSingleBlog(blogId))
    }, [blogId]);

    return (
        <div className='relative rounded-3xl border p-3 flex flex-col'>
            <div>
                <img className='rounded-lg w-full h-72 mb-3' src={blog.image} alt={blog.categories} />
            </div>
            <div className='mb-16'>
                <div className='mb-3'>
                    <h1 className='font-bold text-3xl text-center mb-2'>{blog?.title}</h1>
                    <p className='text-center text-slate-600 font-bold'>{blog?.date}</p>
                </div>
                <hr className='h-1 bg-zinc-900' />
            </div>

            <div className=' flex-1'>
                <ul className='space-y-2'>
                    {blog?.content?.map((blogs) =>
                        <div>
                            <li key={blogs} className='font-bold text-2xl mb-4 text-slate-800'>
                                {blogs?.type}
                            </li>
                            <li key={blogs} className='text-xl mb-9'>
                                {blogs?.text}
                            </li>
                        </div>)}
                </ul>
            </div>

            <hr className='h-1 bg-white mt-3' />

            <div class="bg-gray-50 md:bg-white md:shadow-lg dark:bg-gray-900 md:dark:bg-gray-800">
                <a href='#'>
                    <div class="p-4">
                        <p
                            class="truncate font-bold mb-2 md:mt-2 text-2xl text-gray-600 dark:text-gray-200 tracking-normal">
                            About Writter …</p>
                        <div class="break-words text-sm text-gray-600 dark:text-gray-400 ">
                            <p>
                                <p>&nbsp;</p>
                                <p>{blog?.author?.bio}</p>
                            </p>
                        </div>
                    </div>
                </a>
                <div class="flex items-center justify-between p-2 md:p-4 mx-2 md:mx-4">
                    <a href='# '>
                        <div class="flex items-center ml-2">
                            <img class="overflow-hidden object-cover w-10 h-10 md:w-12 md:h-12 rounded " src={blog?.author?.img} alt="author" />
                            <div class="text-xs ml-2 text-left text-gray-600 dark:text-gray-400">
                                <p>{blog?.author?.name}</p>
                                <p>{blog?.author?.email}</p>
                            </div>
                        </div>
                    </a>
                    <div class="text-sm md:text-base text-left text-gray-600 dark:text-gray-400 px-8 py-2">
                        <p>
                            1 min read
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BlogDetail;