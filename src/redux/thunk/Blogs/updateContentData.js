import { updateBlogAction } from "../../actions/blogAction";

const updateContentData = (blog, id) => {
    console.log(blog,id, "bloggggg")
    return async (dispatch) => {
        const res = await fetch(`http://localhost:5000/blog/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(blog)
        })
        const data = res.json()
        if (data.acknowledged) {
            dispatch(updateBlogAction(...blog))
        }
    }

}
export default updateContentData;