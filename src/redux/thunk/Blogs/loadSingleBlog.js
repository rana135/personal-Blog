import { singleLoaded } from '../../actions/blogAction';

const loadSingleBlog = (blogId) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://personal-blog-server-steel.vercel.app/blogs/${blogId}`);
        const data = await res.json();
        if (data) {
            dispatch(singleLoaded(data));
        }
    }
};

export default loadSingleBlog;