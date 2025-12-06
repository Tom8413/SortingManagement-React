import './App.css';
import ShowUser from './getUser/ShowUser';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AddUser from './addUser/AddUser';

function App() {
 const route = createBrowserRouter([
  {
    path: "/",
    element: <ShowUser />

  },
  {
    path: "/addUser",
    element: <AddUser />
  }
 ]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
  
      </div>
  );
}

export default App;
