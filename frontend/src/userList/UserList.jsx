import React from 'react'

export const UserList = ({users}) => {
  return (
<>
    <div className="App">
        <table>
            <tbody>
            <tr>
                <th>first_name</th>
                <th>last_name</th>
                <th>ID_number</th>
                <th>Department</th>
            </tr>
            </tbody>
            {users.map((user, index) => {
                return (
                    <tbody>
                    <tr>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.ID_number}</td>
                        <td>{user.Department}</td>
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
