import React, {useState} from 'react';
import '../addUser/addUser.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast'


export const AddUser = () => {

  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [ID_number, setID_number] = useState('');
  const [Department, setDepartment] = useState('NCP');
  const navigate = useNavigate();
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      first_name: first_name,
      last_name: last_name,
      ID_number: ID_number,
      Department: Department,
    };

    
      await axios.post("http://localhost:8000/create-employee", data)
      .then((response) => {
        console.log(response.data);
        toast.success("User " + response.data.first_name + " created successful!", {position: "top-right"});
        navigate("/");
      })
      .catch ((error) => {
      console.log(error);
    })

    await axios.post("http://localhost:8000/create-employee2", data)
    .then((response2) => {
      console.log(response2.data);
      toast.success("User " + response2.data.first_name + " created in database successful!", {position: "top-right"});
      navigate("/");
    })
    .catch ((error) => {
    console.log(error);
  })
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
             minLength={3}
             onChange={(event) => setFirst_name(event.target.value.replace(/[^a-z]/gi, ''))}
             />

      <label htmlFor='last_name'>Last Name:</label>
      <input type="text"
             id='last_name'
             name='lastName'
             value={last_name}
             maxLength={15}  
             minLength={3}
             placeholder='Enter Last Name'
             onChange={(event) => setLast_name(event.target.value.replace(/[^a-z]/gi, ''))}
             />

      <label htmlFor='ID_number'>ID_number:</label>
      <input type="text"
             maxLength={8}
             minLength={7} 
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
      <button type="submit">      
              Submit
      </button>
      <Link to="/">
      <button type ='button'>
        Cancel
      </button>
      </Link>
    </form>
  </div>
  )
}

export default AddUser;
