import React, { useEffect, useState } from "react";
import axios from "axios";
import "../getUser/user.css";

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


    return (
        <div className="horizontal">
            {users.map((user, index) => {
                return (
                <div className="block" key={index}>
                    <div>First name : {user.first_name}</div>
                    <div>Last name : {user.last_name}</div>
                    <div>ID number : {user.ID_number}</div>
                    <div>Department :</div>
                    <button>Delete</button>
                </div>
                );
            })}
        </div>
        
    )
}

export default ShowUser;