import { FETCH, LOGIN, LOGOUT } from "./actionType"

const initState = {
    isAuth: false,
    token: "",
    posts: []
}
const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case LOGIN: {
            return { ...state, isAuth: true, token: payload }
        }
        case LOGOUT: {
            return { ...state, isAuth: false, token: "", posts: [] }
        }
        case FETCH: {
            return { ...state, posts: payload }
        }
        default: {
            return state
        }
    }
}
export default reducer;