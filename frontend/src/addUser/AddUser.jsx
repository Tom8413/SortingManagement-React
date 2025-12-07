import React from 'react';
import '../addUser/addUser.css';

export const AddUser = () => {
  return (
    <div className="backdrop">
 
    <form>
    <h3 className='NewUser'>Add New user</h3>
      <label htmlFor='first_name'>First Name:</label>
      <input type="text" 
             id='first_name'
             required
             placeholder='Enter First Name' 
             maxLength="15" 
             />

      <label htmlFor='last_name'>Last Name:</label>
      <input type="text"
             id='last_name'
             maxLength="15"  
             placeholder='Enter Last Name'
             required 
             />

      <label htmlFor='ID_number'>ID_number:</label>
      <input type="text"
             //onkeypress='return event.charCode >= 48 && event.charCode <= 57'
             maxLength="8" 
             id='ID_number'
             placeholder='ID_number'
             required
             />

      <label htmlFor='Department'>Department: </label>
      <select >
        <option value="NCP">NCP</option>
        <option value="NCC">NCC</option>
        <option value="STM">STM</option>
        <option value="Kids">Kids</option>
      </select>
    
      <button type="button">      
              Submit
      </button>
      <button type="button">Cancel</button>
    </form>
  </div>
  )
}

export default AddUser;
