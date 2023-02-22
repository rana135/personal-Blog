import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import addBlogData from "../../redux/thunk/Blogs/addBlogData";

const AddBlog = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const submit = (data) => {
    const blog = {
      title: data.title,
      author: {
        name: data.name,
        email: data.email,
        bio: data.bio,
      },
      date: data.date,
      image: data.image,
      categories: data.categories,
      tags: [
        data.tags,
      ],
      content: [
        {
          type: data.type,
          text: data.text,
        },
        {
          type: data.type1,
          text: data.text1,
        },
      ],
    };
    reset();
    console.log(blog);
    dispatch(addBlogData(blog));
  };

  return (
    <div className='flex justify-center items-center h-full '>
      <form
        className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
        onSubmit={handleSubmit(submit)}
      >
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='name'>
            Name
          </label>
          <input type='text' id='name' {...register("name")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='email'>
            Email
          </label>
          <input type='text' name='email' id='email' {...register("email")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='email'>
            Bio
          </label>
          <input type='text' name='bio' id='bio' {...register("bio")} />
        </div>

        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='date'>
            Date
          </label>
          <input type='text' id='date' {...register("date")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='title'>
            title
          </label>
          <input type='text' name='title' id='title' {...register("title")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='image'>
            Image
          </label>
          <input type='text' name='image' id='image' {...register("image")} />
        </div>

        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-3' htmlFor='categories'>
            Categories
          </label>
          <select name='categories' id='categories' {...register("categories")}>
            <option value='web'>Web</option>
            <option value='IT'>IT</option>
            <option value='programming'>Programming</option>
          </select>
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='tags'>
            tags
          </label>
          <input type='text' name='tags' id='tags' {...register("tags")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='type'>
            type
          </label>
          <input
            type='text'
            name='type'
            id='type'
            {...register("type")}
          />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='text'>
            text
          </label>
          <input
            type='text'
            name='text'
            id='text'
            {...register("text")}
          />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='type1'>
            type1
          </label>
          <input
            type='text'
            name='type1'
            id='type'
            {...register("type1")}
          />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='text1'>
            text1
          </label>
          <input
            type='text'
            name='text1'
            id='text1'
            {...register("text1")}
          />
        </div>


        <div className='flex justify-between items-center w-full'>
          <button
            className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;