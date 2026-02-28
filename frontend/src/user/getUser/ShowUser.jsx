import React, { useEffect } from "react";
import axios from "axios";
import "../getUser/showUser.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import {Button} from '@mui/material';

const ShowUser = ({ users, setUsers, pallet, setPallet, deleteUser, setsendIndexPallet, deletePallet}) => {

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
                setPallet(response2.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
        fetchData2();
    }, [setUsers, setPallet]);


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
                                            onClick={() =>{ navigate("/addPallet"); setsendIndexPallet(index); }
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
                    {pallet?.map((pallet, index2) => {
                        if(index2 < 8) {
                            return (
                                <div className="block" key={index2}>
                                    <div className="IconButton">ID_number: {pallet.ID_number}</div>
                                    <div>Keypalett: {pallet.KeyPalett}</div>
                                    <div>Quantity: {pallet.Quantity}</div>
                                    <div>Nestet: {pallet.Nestet}</div>
                                    <div>Department: {pallet.Department}</div>
                                    <div>Location: {pallet.Location}</div>
                                    <button
                                        onClick={() => deletePallet(pallet.ID_number)}
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