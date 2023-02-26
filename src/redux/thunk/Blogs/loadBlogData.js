import { loaded } from "../../actions/blogAction";

const loadBlogData = () => {
    return async (dispatch, getState) => {
        const res = await fetch("https://personal-blog-server-steel.vercel.app/blogs");
        const data = await res.json();
        console.log(data);
        if (data.data.length) {
            dispatch(loaded(data.data));
        }
    }

}
export default loadBlogData;