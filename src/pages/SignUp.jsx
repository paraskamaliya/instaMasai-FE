import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        gender: "",
        password: "",
        age: "",
        city: "",
        is_married: false,
    })
    const navigate = useNavigate();
    const handleChange = (e) => {
        const val = e.target.type == "checkbox" ? e.target.checked : e.target.value;
        setForm({ ...form, [e.target.name]: val })
    }
    const handleRegister = () => {
        fetch("https://instamasai-6rnk.onrender.com/users/register", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(form)
        })
            .then((res) => res.json())
            .then((res) => navigate("/login"))
            .catch(err => console.log(err))
    }
    return <div >
        <form style={{ display: "flex", flexDirection: "column", margin: "auto", width: "50%" }} onChange={handleChange} onSubmit={handleRegister}>
            <input type="text" placeholder="Enter name" name="name" required />
            <input type="email" placeholder="Enter email" name="email" required />
            <select name="gender" id="" required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            <input type="password" name="password" placeholder="Enter Password" required />
            <input type="number" placeholder="Enter Age" name="age" required />
            <input type="text" placeholder="Enter City" name="city" required />
            <div>
                <input type="checkbox" name="is_married" required />
                <label>Married</label>
            </div>
            <input type="submit" value={"SignUp"} />
        </form>
    </div>
}
export default SignUp;