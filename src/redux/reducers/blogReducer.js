import {
  ADD_BLOG,
  HISTORY,
  PRODUCT_LOADED,
  REMOVE_BLOG,
  REMOVE_FROM_HISTORY,
  REMOVE_FROM_WISHLIST,
  WISHLIST,
} from "../actionTypes/actionTypes";

const initialState = {
  history: [],
  wishlist: [],
  blogs: [],
};

const blogReducer = (state = initialState, action) => {
  const selectedBlog = state.history.find((blog) => blog._id === action.payload._id)
  const selectedWish = state.wishlist.find((blog) => blog._id === action.payload._id)

  switch (action.type) {
    case HISTORY:
      if (selectedBlog) {
        return state;
      }
      return {
        ...state,
        history: [...state.history, action.payload],
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
    case ADD_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    case PRODUCT_LOADED:
      return {
        ...state,
        blogs: action.payload,
      };
    case REMOVE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter(
          (blog) => blog._id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default blogReducer;
