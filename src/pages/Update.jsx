import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Update = () => {
    const { id } = useParams();
    const posts = useSelector(store => store.posts);
    const token = useSelector(store => store.token);
    const [data, setData] = useState();
    const fetch = () => {
        const data = posts.find((el) => el._id === id)
        setData(data);
    }
    const handleSubmit = (e, id) => {
        e.preventDefault();
        fetch(`https://instamasai-6rnk.onrender.com/posts/update/${id}`, {
            method: "PATCH",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        fetch();
    }, [])
    return <div>
        <form onChange={(e) => {
            setData({ ...data, [e.target.name]: e.target.value })
        }} onSubmit={(e) => handleSubmit(e, data?._id)}>
            <input type="text" value={data?.title} name="title" />
            <input type="text" value={data?.body} name="body" />
            <input type="text" value={data?.device} name="device" />
            <input type="text" value={data?.no_of_comments} name="no_of_comments" />
            <input type="submit" value={"Update"} />
        </form>
    </div>

}
export default Update;