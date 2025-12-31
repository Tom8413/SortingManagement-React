import React, {useState} from 'react'
import "../userList/UserList.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect } from 'react'; 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const UserList = ({users2, setUsers2, deleteUser2, sendUser}) => {

    const [filterText, setFilterText] = useState("");

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

  return (
<>
    <div className="table">
        <div className="MainPage">
            <Link to="/">
                Main Page
            </Link>
        </div>
        <div>
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
        
            <Link to="/adduserToDataBase">
            <button type='button' 
                    className="buttonCentred">Add user</button>
            </Link>
        
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
                        <td><button onClick={() => sendUser(users2[index])}>Send</button></td>
                    </tr>
                    </tbody>
                )
            })}
        </table>
    </div>
    </>
  );
 
};

export default UserList;
