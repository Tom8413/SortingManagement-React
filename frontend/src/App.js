import './App.css';
import ShowUser from './getUser/ShowUser';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AddUser from './addUser/AddUser';
import UserList from './userList/UserList';
import React, { useState } from "react";

function App() {

  const [users, setUsers] = useState([]);
 

 const route = createBrowserRouter([
  {
    path: "/",
    element: <ShowUser users={users} setUsers={setUsers}/>

  },
  {
    path: "/addUser",
    element: <AddUser />
  },
  {
    path: "/userList",
    element: <UserList users={users} setUsers={setUsers}/>
  },
 ]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
      </div>
  );
}

export default App;
