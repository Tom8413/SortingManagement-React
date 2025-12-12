import './App.css';
import ShowUser from './getUser/ShowUser';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddUser from './addUser/AddUser';
import UserList from './userList/UserList';
import React, { useState } from "react";
import axios from 'axios';
import toast from "react-hot-toast";

function App() {

  const [users, setUsers] = useState([]);

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:8000/delete-employee/${userId}`)
      .then((response) => {
        setUsers((prevUser) => prevUser.filter((user) => user._id !== userId));
        toast.success("User " + response.data.first_name + " deleted successful!", { position: "top-right" });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const route = createBrowserRouter([
    {
      path: "/",
      element: <ShowUser users={users} setUsers={setUsers} deleteUser={deleteUser}/>

    },
    {
      path: "/addUser",
      element: <AddUser />
    },
    {
      path: "/userList",
      element: <UserList users={users} setUsers={setUsers} deleteUser={deleteUser}/>
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
