import React, {useState} from 'react';
import '../addUser/addUser.css';
//import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';


export const AddUser = () => {

  const [first_name, setFirst_name] = useState('');
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name: first_name,
    };

    try {
      const response = await axios.post("http://localhost:3000/create-employee", data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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
             maxLength="15" 
             onChange={(event) => setFirst_name(event.target.value)}
             />

      <label htmlFor='last_name'>Last Name:</label>
      <input type="text"
             id='last_name'
             name='lastName'
             maxLength="15"  
             placeholder='Enter Last Name'
             />

      <label htmlFor='ID_number'>ID_number:</label>
      <input type="text"
             //onkeypress='return event.charCode >= 48 && event.charCode <= 57'
             maxLength="8" 
             id='ID_number'
             name='IDNumber'
             placeholder='ID_number'
             />

      <label htmlFor='Department'>Department: </label>
      <select >
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
