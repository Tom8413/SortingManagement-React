import React, { useState } from 'react';
import './addPallet.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast'


export const AddPallet = (props) => {

  const [KeyPallet, setKeyPallet] = useState('');
  const [Quantity, setQuantity] = useState('');
  const [Department, setDepartment] = useState('NCP');
  const [Nestet, setNestet] = useState('No');
  const [Location, setLocation] = useState("");

  const navigate = useNavigate();


  const isFromValid = () => {
    return KeyPallet.length >= 3 &&
    Quantity.length >= 7

  };


  const handleSubmit = async (event) => {
    event.preventDefault();


    const data = {
      ID_number: props.users[props.sendIndexPallet].ID_number,
      KeyPallet: KeyPallet,
      Quantity: Quantity,
      Nestet: Nestet,
      Department: Department,
      Location: Location

    };

    await axios.post("http://localhost:8000/createEuroPallet", data)
          .then((response) => {
            console.log(response.data);
            toast.success("Pallet " + response.data.KeyPallet+ " created successful!", { position: "top-right" });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          })

      
/*
    let condition = props.users.filter((user) => (user.ID_number) === (event.target.ID_number.value));
    let condition2 = props.users2.filter((user) => user.ID_number === (event.target.ID_number.value));

    if (condition.length === 0 && condition2.length === 0) {
      if (props.users.length < 8) {
        await axios.post("http://localhost:8000/createEuroPallet", data)
          .then((response) => {
            console.log(response.data);
            toast.success("Palett " + response.data.KeyPallet+ " created successful!", { position: "top-right" });
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
          toast.success("Palett " + response2.KeyPalett + " created in database successful!", { position: "top-right" });
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        })

    } else
      if (condition.length !== 0 && condition2.lenght !== 0) {

        toast.error("Palett already exist in Department", { position: "top-right" });
        toast.error("Palett already exist in DataBase", { position: "top-right" });

      } else if (condition.length !== 0 && condition2.lenght === 0) {
        toast.error("Palett already exist in Department", { position: "top-right" });

        await axios.post("http://localhost:8000/create-employee2", data)
          .then((response2) => {
            console.log(response2.data);
            toast.success("Palett " + response2.KayPalett + " created in database successful!", { position: "top-right" });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          })

      } else if (condition.length === 0 && condition2.length !== 0) {
        toast.error("Palett already exist in DataBase", { position: "top-right" });

        if (props.users.length < 8) {
          await axios.post("http://localhost:8000/create-employee", data)
            .then((response) => {
              console.log(response.data);
              toast.success("Palett " + response.data.KeyPalett + " created successful!", { position: "top-right" });
              navigate("/");
            })
            .catch((error) => {
              console.log(error);
            })
        }
      }
      */
  }

  return (
    <div className="backdrop">

      <form onSubmit={handleSubmit}>
        <h3 className='NewPallet'>Add New Pallet</h3>
        <div className='labelClass'>
          <h3 className="ID_numberh3" >ID_Number: {props.users[props.sendIndexPallet].ID_number}</h3>
        </div>

        <div className='labelClass'>
          <label htmlFor='KeyPallet'>KeyPallet:</label>
        </div>
        <input type="text"
          id='KeyPallet'
          name='KeyPallet'
          value={KeyPallet}
          maxLength={15}
          placeholder='Enter KeyPallet'
          onChange={(event) => setKeyPallet(event.target.value.replace(/[^a-z]/gi, ''))}
        />

        <div className='labelClass'>
          <label htmlFor='Quantity'>Quantity:</label>
        </div>
        <input type="text"
          maxLength={8}
          id='Quantity'
          name='Quantity'
          value={Quantity}
          placeholder='Enter Quantity'
          onChange={(event) => setQuantity(event.target.value.replace(/[^0-9]/gi, ''))}
        />

        <div className='labelClass'>
          <label htmlFor='Nestet'>Location:</label>
        </div>
        <input type="text"
          maxLength={8}
          id='Location'
          name='NesLocationtet'
          value={Location}
          placeholder='Enter Location'
          onChange={(event) => setLocation(event.target.value.replace(/[^0-9]/gi, ''))}
        />

        <div className='labelClass'>
          <label htmlFor='Nestet'>Nestet: </label>
        </div>

        <select
          className='select'
          value={Nestet}
          onChange={(event) => setNestet(event.target.value)}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <div className='labelClass'>
          <label htmlFor='Department'>Department: </label>
        </div>

        <select
          className='select'
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

export default AddPallet;