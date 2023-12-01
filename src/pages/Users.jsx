import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            setUsers(data);
        }

        getUsers();
    }, []);


    return (
        <div>
            <h1>Users list:</h1>
            <ul>
                {users.length > 0 && users.map((user) => {
                    return (
                        <li key={user.id}>
                            <Link to={`${user.id}`}>{user.name}</Link>
                            <p>{user.username}</p>
                            <p>{user.email}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Users;