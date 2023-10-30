import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Posts from "../pages/Posts";
import Update from "../pages/Update";

const AllRoutes = () => {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/update/:id" element={<Update />} />
    </Routes>
}
export default AllRoutes;