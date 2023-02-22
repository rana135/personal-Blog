import { addBlog } from "../../actions/blogAction";

const addBlogData = (blogs) => {
    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/blog", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(blogs)
        });
        const data = await res.json();
        if (data.acknowledged) {
            dispatch(addBlog({
                _id: data.insertedId,
                ...blogs,
            }));
        }
    }

}
export default addBlogData;