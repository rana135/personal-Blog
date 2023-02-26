import {
  ADD_CONTENT,
  HISTORY,
  GET_CONTENT,
  DELETE_CONTENT,
  REMOVE_FROM_HISTORY,
  REMOVE_FROM_WISHLIST,
  SORT_ITEMS_ASC,
  SORT_ITEMS_DESC,
  WISHLIST,
  UPDATE_CONTENT,
  SINGLEDATA,
  SINGLEUPDATEDATA,
} from "../actionTypes/actionTypes";

const initialState = {
  history: [],
  wishlist: [],
  blogs: [],
  blog: [],
  updateBlogLoad: [],
};

const blogReducer = (state = initialState, action) => {
  const selectedBlog = state.history.find((blog) => blog._id === action.payload._id)
  const selectedWish = state.wishlist.find((blog) => blog._id === action.payload._id)

  switch (action.type) {
    case HISTORY:
      if (selectedBlog) {
        const newHistory = state.history.filter((blog)=>blog._id !== selectedBlog._id)
        selectedBlog.count = selectedBlog.count + 1;
        return {
            ...state,
            history:[...newHistory,selectedBlog]
        }
    }
      return {
        ...state,
        history: [...state.history, { ...action.payload, count: 1 }],
      };
    case WISHLIST:
      if (selectedWish) {
        return state;
      }
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      }
    case REMOVE_FROM_HISTORY:
      if (selectedBlog.count > 1) {
        const newHistory = state.history.filter((blog)=>blog._id !== selectedBlog._id)
        selectedBlog.count = selectedBlog.count - 1;
        return {
            ...state,
            history:[...newHistory,selectedBlog]
        }
    }
      return {
        ...state,
        history: state.history.filter(
          (blog) => blog._id !== action.payload._id
        ),
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter((blog) => blog._id !== action.payload._id)
      }
    case ADD_CONTENT:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    case GET_CONTENT:
      return {
        ...state,
        blogs: action.payload,
      };
    case SINGLEDATA:
      return {
        ...state,
        blog: action.payload,
      };
    case SINGLEUPDATEDATA:
      return {
        ...state,
        updateBlogLoad: action.payload,
      };
    case SORT_ITEMS_ASC:
      return {
        ...state,
        blogs: [...state.blogs].sort((a, b) => new Date(a.date) - new Date(b.date))
      };
    case SORT_ITEMS_DESC:
      return {
        ...state,
        blogs: [...state.blogs].sort((a, b) => new Date(b.date) - new Date(a.date))
      };
    case DELETE_CONTENT:
      return {
        ...state,
        blogs: state.blogs.filter(
          (blog) => blog._id !== action.payload
        ),
      };
    case UPDATE_CONTENT:
      const updateProduct = state.blogs.map(blog => {
        if (blog._id === action.payload) {
          return [...blog, action.payload]
        } else {
          return blog
        }
      })
      return {
        ...state,
        blogs: updateProduct
      }

    default:
      return state;
  }
};

export default blogReducer;
