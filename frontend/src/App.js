import './App.css';
import ShowUser from './getUser/ShowUser';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddUser from './addUser/AddUser';
import UserList from './userList/UserList';
import AdduserToDataBase from './adduserToDataBase/AdduserToDataBase'
import React, { useCallback, useState } from "react";
import axios from 'axios';
import toast from "react-hot-toast";
import { useEffect } from 'react';

function App() {

  const [users, setUsers] = useState([]);
  const [users2, setUsers2] = useState([]);
  const [index, setIndex] = useState([]);

  const sendIndex = useCallback(() => {
    setIndex(index)
  }, [index]);

  //console.log(index)

  const deleteUser = async (ID_number) => {
    await axios.delete(`http://localhost:8000/delete-employee/${ID_number}`)
      .then((response) => {
        console.log(response)
        setUsers((prevUser) => prevUser.filter((user) => user.ID_number !== ID_number));
        toast.success("User " + response.data.first_name + " deleted successful!", { position: "top-right" });
      })
      .catch((error) => {
        console.log(error);
      })
  };

  const deleteUser2 = async (ID_number) => {

    await axios.delete(`http://localhost:8000/delete-employee/${ID_number}`)
      .then((response) => {
        console.log(response)
        setUsers((prevUser) => prevUser.filter((user) => user.ID_number !== ID_number));
        toast.success("User " + response.data.first_name + " deleted successful!", { position: "top-right" });
      })
      .catch((error) => {
        console.log(error);
      });

    await axios.delete(`http://localhost:8000/delete-employee2/${ID_number}`)
      .then((response2) => {
        console.log(response2)
        setUsers2((prevUser2) => prevUser2.filter((user2) => user2.ID_number !== ID_number));
        toast.success("User " + response2.data.first_name + " deleted from database successful!", { position: "top-right" });
      })
      .catch((error) => {
        console.log(error);
      })
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response2 = await axios.get("http://localhost:8000/show-employee2");
        setUsers2(response2.data);
      } catch (error) {
        console.log(error);

      }
    };
    const fetchData2 = async () => {
      try {
        const response3 = await axios.get("http://localhost:8000/show-employee");
        setUsers(response3.data);
      } catch (error) {
        console.log(error);

      }
    };
    fetchData();
    fetchData2();
  }, [setUsers, setUsers2]);


  const sendUser = async (index) => {

    setIndex(index);
    const data = users2[index];
    //console.log(index)

    await axios.post("http://localhost:8000/create-employee", data)
      .then((response) => {
        console.log(response);

      })
      .catch((error) => {
        console.log(error);
      })

    await axios.get("http://localhost:8000/show-employee")
      .then((response) => {
        console.log(response);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const route = createBrowserRouter([
    {
      path: "/",
      element: <ShowUser users={users} setUsers={setUsers} deleteUser={deleteUser} />

    },
    {
      path: "/addUser",
      element: <AddUser users={users} setUsers={setUsers} setUsers2={setUsers2} index={index} setIndex={setIndex} users2={users2} />
    },
    {
      path: "/userList",
      element: <UserList users2={users2} setUsers2={setUsers2} deleteUser2={deleteUser2} sendUser={sendUser} users={users} sendIndex={sendIndex} />
    },
    {
      path: "/adduserToDataBase",
      element: <AdduserToDataBase />
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
