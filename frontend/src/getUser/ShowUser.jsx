import React, {useEffect} from "react";
import axios from "axios";
import "../getUser/showUser.css";
import Navbar from "../Navbar";

const ShowUser = ({ users, setUsers, deleteUser }) => {


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/show-employee");
                setUsers(response.data);
            } catch (error) {
                console.log(error);

            }
        };
        fetchData()
    }, [setUsers]);


    return (
        <> <Navbar />
            <div className="horizontal">
                {users.map((user, index) => {
                    if(index < 8) {
                    return (
                        <div className="block" key={index}>
                            <div>First name: {user.first_name}</div>
                            <div>Last name: {user.last_name}</div>
                            <div>ID number: {user.ID_number}</div>
                            <div>Department: {user.Department}</div>
                            <button
                                onClick={() => deleteUser(user.ID_number)}
                            >Delete</button>
                        </div>
                    ); 
                    } else {
                       return  null
                    }
                })}
                
            </div>
                <button type="button" onClick={() => "/addUser"}> Add User</button>

        </>


    )
}

export default ShowUser;