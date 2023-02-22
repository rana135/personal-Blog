import { TOGGLE_TAGS } from "../actionTypes/actionTypes";

export const initialState = {
    tags: [],
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_TAGS:
            if (!state.tags.includes(action.payload)) {
                return {
                    ...state,
                    tags: [...state.tags, action.payload]
                }
            }
            return {
                ...state,
                tags: state.tags.filter((tags)=>tags !== action.payload)
            }
        default:
            return state;
    }
}