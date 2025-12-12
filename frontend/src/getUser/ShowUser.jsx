import React, { useEffect } from "react";
import axios from "axios";
import "../getUser/showUser.css";
import { Link } from "react-router-dom";
//import toast from "react-hot-toast";
import Navbar from "../Navbar";

const ShowUser = ({users, setUsers, deleteUser}) => {


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
                return (
                    <div className="block" key={index}>
                        <div>First name: {user.first_name}</div>
                        <div>Last name: {user.last_name}</div>
                        <div>ID number: {user.ID_number}</div>
                        <div>Department: {user.Department}</div>
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