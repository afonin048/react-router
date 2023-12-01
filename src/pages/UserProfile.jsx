import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const UserProfile = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        const getUserById = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const data = await res.json();
            setUser(data);
        }

        getUserById();
    }, [id]);

    return (
        <div>
            User: {user.name}
        </div>
    );
};

export default UserProfile;