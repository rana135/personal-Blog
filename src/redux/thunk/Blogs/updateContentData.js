import { updateBlogAction } from "../../actions/blogAction";

const updateContentData = (blog, id) => {
    return async (dispatch) => {
        const res = await fetch(`https://personal-blog-server-steel.vercel.app/blog/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(blog)
        })
        const data = res.json()
        if (data.acknowledged) {
            dispatch(updateBlogAction(blog))
        }
    }

}
export default updateContentData;