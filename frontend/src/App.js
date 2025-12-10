import './App.css';
import ShowUser from './getUser/ShowUser';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AddUser from './addUser/AddUser';
import UserList from './userList/UserList';
import Navbar from './Navbar';

function App() {

 const route = createBrowserRouter([
  {
    path: "/",
    element: [<Navbar />, <ShowUser />]

  },
  {
    path: "/addUser",
    element: <AddUser />
  },
  {
    path: "/userList",
    element: <UserList />
  },
 ]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
      </div>
  );
}

export default App;
