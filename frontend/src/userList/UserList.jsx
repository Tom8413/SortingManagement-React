import React, { useState } from 'react'
import "../userList/UserList.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

export const UserList = ({ users, users2, setUsers2, deleteUser2, sendUser }) => {

    const [filterText, setFilterText] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response2 = await axios.get("http://localhost:8000/show-employee2");
                setUsers2(response2.data);
            } catch (error) {
                console.log(error);

            }
        };
        fetchData()
    }, [setUsers2]);

    const handleFilterChange = (event) => {
        setFilterText(event.target.value)
    }

    const filteredUser = users2.filter(user =>
        user.first_name.toLowerCase().includes(filterText.toLocaleLowerCase()) ||
        user.last_name.toLowerCase().includes(filterText.toLocaleLowerCase()) ||
        user.Department.toLowerCase().includes(filterText.toLocaleLowerCase())
    );

    const isDisabledButton = (index) => {
        const condition = users.filter((user) => user.ID_number === users2[index].ID_number);
        if(condition.length !== 0) {
            return true;
    };
    };

    return (
        <>
            <div className="tableContainer">
                <div className="MainPage">
                    <Link to="/">
                        Main Page
                    </Link>
                    <Box display='flex' justifyContent="flex-end">
                        <TextField
                            width="40%"
                            label="Search User"
                            variant='outlined'
                            value={filterText}
                            onChange={handleFilterChange}>

                        </TextField>

                    </Box>
                </div>

                <div className="tableData">
                    <table>
                        <tbody>
                            <tr>
                                <th>first_name</th>
                                <th>last_name</th>
                                <th>ID_number</th>
                                <th>Department</th>
                                <th>Delete User</th>
                                <th>Send User to Department</th>
                            </tr>
                        </tbody>
                        {filteredUser.map((user, index) => {
                            return (
                                <tbody key={index}>
                                    <tr >
                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                        <td>{user.ID_number}</td>
                                        <td>{user.Department}</td>
                                        <td><button onClick={() => deleteUser2(user.ID_number)}>Delete</button></td>
                                        <td><button disabled={isDisabledButton(index)}
                                                    onClick={() => sendUser(users2[index])}>Send</button></td>
                                    </tr>
                                </tbody>
                            )
                        })}
                    </table>

                    <div className="tableButtonContainer">
                            <button type='button' onClick={() => navigate("/adduserToDataBase")}>Add user</button>
                    </div>
                </div>
            </div>
        </>
    );

};

export default UserList;
