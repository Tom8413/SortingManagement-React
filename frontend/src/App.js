import './App.css';
import ShowUser from './getUser/ShowUser';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddUser from './addUser/AddUser';
import UserList from './userList/UserList';
import React, { useState } from "react";
import axios from 'axios';
import toast from "react-hot-toast";
import { useEffect } from 'react'; 

function App() {

  const [users, setUsers] = useState([]);
  const [users2, setUsers2] = useState([]);

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:8000/delete-employee/${userId}`)
      .then((response) => {
        setUsers((prevUser) => prevUser.filter((user) => user._id !== userId));
        toast.success("User " + response.data.first_name + " deleted successful!", { position: "top-right" });
      })
      .catch((error) => {
        console.log(error);
      })
  };

const url = "http://localhost:8000/show-employee";

  useEffect(() => {
    const fetchData = async (setUsers, url) => {
        try {
            const response = await axios.get(url);
            setUsers(response.data);
        } catch (error) {
            console.log(error);
  
        }
    };
    fetchData()
  }, [setUsers]);

/*  useEffect(() => {
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
*/
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
      element: <UserList users2={users2} setUsers2={setUsers2} deleteUser={deleteUser}/>
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
