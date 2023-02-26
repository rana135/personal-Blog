import { singleUpdateLoaded } from "../../actions/blogAction";


const loadSingleUpdateData = (id) => {
    return async (dispatch) => {
        const res = await fetch(`https://personal-blog-server-steel.vercel.app/blogs/${id}`);
        const data = await res.json();
        console.log(data);
        if (data) {
            dispatch(singleUpdateLoaded(data));
        }
    }
};

export default loadSingleUpdateData;