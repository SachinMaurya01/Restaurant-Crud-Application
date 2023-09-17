import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Page.css"
import Swal from 'sweetalert2'

const CreateUser = () => {

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [contact, setContact] = useState('')
    const navigate = useNavigate();

    const SubmitForm = (e) => {
        e.preventDefault();
        if (name != "" && address != "" && contact != "") {
            axios.post("http://localhost:3001/createUser", { name, address, contact })
                .then(res => {
                    console.log(res);
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Restaurant Added Succesfully',
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => {
                        navigate("/")
                    })
                })
                .catch(err => console.log(err))
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Fill all details',
            })
        }
    }

    const setphonenumber = (e) => {
        const newValue = e.target.value;

        if (newValue.length <= 10) {
            setContact(newValue);
        }
    }


    return (

        <>
            <div class="main">
                <div className='defaultimage'></div>
                <div class="container">
                    <h2>Add Restaurant</h2>
                    <div id="signupForm">
                        <div class="remaining-inputs"></div>
                        <form onSubmit={SubmitForm}>
                            <div style={{ width: '70%' }}>
                                <label htmlFor="">Name</label>
                                <input type="text" placeholder='Enter Name' value={name} className='form-control'
                                    onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div style={{ width: '70%' }}>
                                <label htmlFor="">Address</label>
                                <input type="text" placeholder='Enter Address' value={address} className='form-control'
                                    onChange={(e) => setAddress(e.target.value)} />
                            </div>
                            <div style={{ width: '70%' }}>
                                <label htmlFor="">Contact Number</label>
                                <input type="number" placeholders='Enter Contact Number' value={contact} className='form-control'
                                    onChange={(e) => setphonenumber(e)} />
                            </div>
                            <button className='btn btn-success'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateUser