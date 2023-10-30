import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { LOGOUT } from "../Redux/actionType";

const Navbar = () => {
    const auth = useSelector(store => store.isAuth);
    const token = useSelector(store => store.token);
    const dispatch = useDispatch();
    const handleLogout = () => {
        fetch("https://instamasai-6rnk.onrender.com/users/logout", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => res.json())
            .then((res) => dispatch({ type: LOGOUT }))
            .catch(err => console.log(err))
    }
    return <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link to="/">Home</Link>
        <Link to="/signup">SignUp</Link>
        {
            !auth &&
            <Link to="/login">Login</Link>
        }
        <Link to="/posts">Posts</Link>
        {auth && <button onClick={handleLogout}>Logout</button>}
    </div>
}
export default Navbar;