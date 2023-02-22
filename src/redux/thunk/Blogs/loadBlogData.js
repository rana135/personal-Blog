import { loaded } from "../../actions/productAction";

const loadBlogData = () => {
    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/blogs");
        const data = await res.json();
        console.log(data);
        if (data.data.length) {
            dispatch(loaded(data.data));
        }
    }

}
export default loadBlogData;