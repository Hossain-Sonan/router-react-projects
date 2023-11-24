import { useLoaderData } from "react-router-dom";

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <p>We have fantastic Users</p>
            
        </div>
    );
};

export default Users;