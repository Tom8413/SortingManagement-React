import React, { useEffect, useState } from "react";
import axios from "axios";
import "../getUser/showUser.css";
import { Link } from "react-router-dom";

const ShowUser = () => {

    const [users, setUsers] = useState([]);
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
    }, []);

    const deleteUser = async(userId) => {
        await axios.delete(`http://localhost:8000/delete-employee/${userId}`)
        .then((response) => {
            setUsers((prevUser) =>prevUser.filter((user) => user._id !== userId));
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <><div className="horizontal">
            {users.map((user, index) => {
                return (
                    <div className="block" key={index}>
                        <div>First name: {user.first_name}</div>
                        <div>Last name: {user.last_name}</div>
                        <div>ID number: {user.ID_number}</div>
                        <div>Department :</div>
                        <button
                        onClick={() => deleteUser(user._id)}
                        >Delete</button>
                    </div>
                );
            })}
        </div>
        <Link to="/addUser">
            <button> Add User</button>
        </Link>
        </>
        
        
    )
}

export default ShowUser;