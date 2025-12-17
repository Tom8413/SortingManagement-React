import React from 'react'
import "../userList/UserList.css";
import { useEffect } from 'react'; 
import axios from 'axios';

export const UserList = ({users2, setUsers2, deleteUser}) => {

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/show-employee2");
                setUsers2(response.data);
            } catch (error) {
                console.log(error);

            }
        };
        fetchData()
    }, [setUsers2]);

  return (
<>
    <div className="table">
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
            {users2.map((user, index) => {
                return (
                    <tbody key={index}>
                    <tr >
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.ID_number}</td>
                        <td>{user.Department}</td>
                        <td><button onClick={() => deleteUser(user._id)}>Delete</button></td>
                        <td><button>Send</button></td>
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
