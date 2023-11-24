import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const {name, phone, website} = user;
    return (

        <div>
            <h2>Details about users: {name}</h2>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
           
            
        </div>
    );
};

export default UserDetails;