import {
  ADD_BLOG,
  HISTORY,
  PRODUCT_LOADED,
  REMOVE_BLOG,
  REMOVE_FROM_HISTORY,
  REMOVE_FROM_WISHLIST,
  TOGGLE_TAGS,
  WISHLIST,
} from "../actionTypes/actionTypes";

export const history = (blog) => {
  return {
    type: HISTORY,
    payload: blog,
  };
};

export const wishList = (blog) => {
  return {
    type: WISHLIST,
    payload: blog,
  }
}

export const removeFromHistory = (blog) => {
  return {
    type: REMOVE_FROM_HISTORY,
    payload: blog,
  };
};

export const removeFromWishlist = (blog) => {
  return {
    type: REMOVE_FROM_WISHLIST,
    payload: blog,
  }
}

export const addBlog = (blog) => {
  return {
    type: ADD_BLOG,
    payload: blog,
  };
};

export const loaded = (blogs) => {
  return {
    type: PRODUCT_LOADED,
    payload: blogs,
  };
};
export const toggleTags = (tags) => {
  return {
    type: TOGGLE_TAGS,
    payload: tags,
  };
};
export const removeProduct = (id) => {
  return {
    type: REMOVE_BLOG,
    payload: id,
  };
};
