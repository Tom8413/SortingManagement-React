import React, { useEffect } from "react";
import axios from "axios";
import "../getUser/showUser.css";
//import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const ShowUser = ({ users, setUsers, deleteUser }) => {

    const navigate = useNavigate();

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
        <>
            <div className="horizontal">
                <div>
                    <div className="navbarbuttonContainer">
                    <Link to="/userlist">
                        Database Employee
                    </Link>
                    <div  className="buttonContainer">
                        <button type="button" onClick={() => navigate("/addUser")}> Add User</button>
                    </div>
                    </div>


                </div>
                <div className="departmentData">
                    {users.map((user, index) => {
                        if (index < 8) {
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
                            return null
                        }
                    })}
                </div>

                <div>
                </div>
            </div>


        </>


    )
}

export default ShowUser;