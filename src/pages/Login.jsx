import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { LOGIN } from "../Redux/actionType";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const payload = {
            email, password
        }
        fetch("https://instamasai-6rnk.onrender.com/users/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(payload)
        })
            .then((res) => res.json())
            .then((res) => {
                dispatch({ type: LOGIN, payload: res.token });
                navigate("/")
            })
            .catch(err => console.log(err))
    }
    return <div>
        <form onSubmit={handleLogin}>
            <input type="email" placeholder="Enter email" value={email} required onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Enter password" value={password} required onChange={(e) => setPassword(e.target.value)} />
            <input type="submit" value={"Login"} />
        </form>
    </div>
}
export default Login;