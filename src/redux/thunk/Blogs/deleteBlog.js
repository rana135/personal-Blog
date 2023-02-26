import { removeProduct } from "../../actions/blogAction";


const deleteBlog = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://personal-blog-server-steel.vercel.app/blog/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            },
        });
        const data = await res.json();
        if (data.acknowledged) {
            dispatch(removeProduct(id));
        }
    }

}
export default deleteBlog;