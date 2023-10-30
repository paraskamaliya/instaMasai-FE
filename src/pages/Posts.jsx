import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { FETCH } from "../Redux/actionType";
import { useNavigate } from "react-router-dom";

const Posts = () => {
    const token = useSelector(store => store.token)
    const dispatch = useDispatch();
    const post = useSelector(store => store.posts);
    const auth = useSelector(store => store.isAuth);
    const navigate = useNavigate();
    const handleFetch = () => {
        fetch("https://instamasai-6rnk.onrender.com/posts", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => res.json())
            .then(res => dispatch({ type: FETCH, payload: res }))
            .catch(err => console.log(err))
    }
    const handleDelete = (id) => {
        fetch(`https://instamasai-6rnk.onrender.com/posts/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => res.json())
            .then(res => handleFetch())
            .catch(err => console.log(err))
    }
    useEffect(() => {
        handleFetch();
    }, [])
    if (!auth) {
        return <h1>Please Login</h1>
    }
    return <div>
        <p>Posts: {post.length}</p>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {post.length > 0 && post.map((el) => {
                    return <tr key={el._id}>
                        <td>{el.title}</td>
                        <td>{el.body}</td>
                        <td>
                            <button onClick={() => navigate(`/update/${el._id}`)}>Edit</button>
                        </td>
                        <td>
                            <button onClick={() => handleDelete(el._id)}>Delete</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
}
export default Posts;