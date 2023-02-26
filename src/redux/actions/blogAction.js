import {
  ADD_CONTENT,
  HISTORY,
  GET_CONTENT,
  DELETE_CONTENT,
  REMOVE_FROM_HISTORY,
  REMOVE_FROM_WISHLIST,
  SORT_ITEMS_ASC,
  SORT_ITEMS_DESC,
  TOGGLE_TAGS,
  WISHLIST,
  UPDATE_CONTENT,
  SINGLEDATA,
  SINGLEUPDATEDATA,
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
    type: ADD_CONTENT,
    payload: blog,
  };
};

export const loaded = (blogs) => {
  return {
    type: GET_CONTENT,
    payload: blogs,
  };
};

export const singleLoaded = (blogsId) => {
  return {
    type: SINGLEDATA,
    payload: blogsId,
  };
};

export const singleUpdateLoaded = (singleBlog) => {
  return {
    type: SINGLEUPDATEDATA,
    payload: singleBlog,
  }
}

export const sortItemAsc = (blogs) => {
  return {
    type: SORT_ITEMS_ASC,
    payload: blogs,
  };
};

export const sortItemDesc = (blogs) => {
  return {
    type: SORT_ITEMS_DESC,
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
    type: DELETE_CONTENT,
    payload: id,
  };
};
export const updateBlogAction = (data) => {
  return {
    type: UPDATE_CONTENT,
    payload: data
  }
}

