import React, { useState } from 'react';
import '../addUser/addUser.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast'


export const AddUser = (props) => {

  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [ID_number, setID_number] = useState('');
  const [Department, setDepartment] = useState('NCP');
  const navigate = useNavigate();


  //console.log(users)
  const isFromValid = () => {
    return first_name.length >= 3 &&
      last_name.length >= 3 &&
      ID_number.length >= 7
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    //let users = props.users;

    const data = {
      first_name: first_name,
      last_name: last_name,
      ID_number: ID_number,
      Department: Department,
    };

    let condition = props.users.filter((user) => (user.ID_number) === (event.target.ID_number.value));

    if (condition.length === 0) {

      if (props.users.length < 8) {
        await axios.post("http://localhost:8000/create-employee", data)
          .then((response) => {
            console.log(response.data);
            toast.success("User " + response.data.first_name + " created successful!", { position: "top-right" });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          })

      } else {
        toast.error("You cannot add more than nine employees", { position: "top-right" });
      }

      await axios.post("http://localhost:8000/create-employee2", data)
        .then((response2) => {
          console.log(response2.data);
          toast.success("User " + response2.data.first_name + " created in database successful!", { position: "top-right" });
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        })

    }
    else {
      toast.error("User already exist in Department", { position: "top-right" });
      toast.error("User already exist in DataBase", { position: "top-right" });

    }
  }

  return (
    <div className="backdrop">

      <form onSubmit={handleSubmit}>
        <h3 className='NewUser'>Add New user</h3>
        <label htmlFor='first_name'>First Name:</label>
        <input type="text"
          id='first_name'
          name='first_name'
          value={first_name}
          placeholder='Enter First Name'
          maxLength={15}
          onChange={(event) => setFirst_name(event.target.value.replace(/[^a-z]/gi, ''))}
        />

        <label htmlFor='last_name'>Last Name:</label>
        <input type="text"
          id='last_name'
          name='lastName'
          value={last_name}
          maxLength={15}
          placeholder='Enter Last Name'
          onChange={(event) => setLast_name(event.target.value.replace(/[^a-z]/gi, ''))}
        />

        <label htmlFor='ID_number'>ID_number:</label>
        <input type="text"
          maxLength={8}
          id='ID_number'
          name='IDNumber'
          value={ID_number}
          placeholder='ID_number'
          onChange={(event) => setID_number(event.target.value.replace(/[^0-9]/gi, ''))}
        />

        <label htmlFor='Department'>Department: </label>
        <select

          value={Department}
          onChange={(event) => setDepartment(event.target.value)}>
          <option value="NCP">NCP</option>
          <option value="NCC">NCC</option>
          <option value="STM">STM</option>
          <option value="Kids">Kids</option>
        </select>
        <button type="submit"
          disabled={!isFromValid()}>
          Submit
        </button>

        <button type='button' onClick={() => navigate("/")}>
          Cancel
        </button>

      </form>
    </div>
  )
}

export default AddUser;
