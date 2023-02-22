import { removeProduct } from "../../actions/productAction";


const deleteBlog = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/blog/${id}`, {
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