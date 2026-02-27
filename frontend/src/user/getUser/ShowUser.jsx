import React, { useEffect } from "react";
import axios from "axios";
import "../getUser/showUser.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import {Button} from '@mui/material';

const ShowUser = ({ users, setUsers, palett, setPalett, deleteUser, setsendIndexPalett, deletePalett}) => {

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
        const fetchData2 = async () => {
            try {
                const response2 = await axios.get("http://localhost:8000/show-EuroPallet")
                setPalett(response2.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
        fetchData2();
    }, [setUsers, setPalett]);


    return (
        <>
            <div className="horizontalContainer">
                <div className="navbarbutton">
                    <div className="link">
                        <Link to="/userlist">
                            Database Employee
                        </Link>
                    </div>

                    <div className="buttonContainer">
                        <button type="button" onClick={() => navigate("/addUser")}> Add User</button>
                    </div>
                </div>

                <div className="departmentData">
                    {users.map((user, index) => {
                        if (index < 8) {
                            return (
                                <div className="block" key={index}>
                                    <Button variant = 'contained' sx={{m:0.01}} 
                                            startIcon={<AddCircleOutlineSharpIcon/>}
                                            onClick={() =>{ navigate("/addPalett"); setsendIndexPalett(index); }
                                            }>Add Palette
                                    </Button>
                                    <div className="IconButton">First name: {user.first_name}</div>
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
                <div className="departamentPalettData">
                    {palett.map((palett, index2) => {
                        if(index2 < 8) {
                            return (
                                <div className="block" key={index2}>
                                    <div className="IconButton">ID_number: {palett.ID_number}</div>
                                    <div>Keypalett: {palett.KeyPalett}</div>
                                    <div>Quantity: {palett.Quantity}</div>
                                    <div>Nestet: {palett.Nestet}</div>
                                    <div>Department: {palett.Department}</div>
                                    <div>Location: {palett.Location}</div>
                                    <button
                                        onClick={() => deletePalett(palett.ID_number)}
                                    >Delete</button>
                                </div>
                            )
                        } else {
                            return null;
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