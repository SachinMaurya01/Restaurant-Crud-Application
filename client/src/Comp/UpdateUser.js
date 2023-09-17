import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2'



const UpdateUser = () => {

    const { id } = useParams();
    const [name, setname] = useState();
    const [address, setAddress] = useState();
    const [contact, setContact] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/getUser/" + id)
            .then(res => {
                // console.log(res)
                setname(res.data.name);
                setAddress(res.data.address);
                setContact(res.data.contact)
            })
            .catch(err => console.log(err))
    }, [])

    const setphonenumber = (e) => {
        const newValue = e.target.value;

        if (newValue.length <= 10) {
            setContact(newValue);
        }
    }

    const Updatedata = (e) => {
        e.preventDefault();
        if(name!= "" && address != "" && contact != ""){
        axios.put("http://localhost:3001/UpdateUser/" + id, { name, address, contact })
            .then(res => {
                console.log(res);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Details Updated Successfully',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    navigate("/")
                })
            })
            .catch(err => console.log(err))
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Fill all details! ',
              })
        }
    }


    return (
        <div class="main">
            <div className='defaultimage'></div>
            <div class="container">
                <h2 style={{color:'white', fontSize:'600'}}>Updated Restaurant Details</h2>
                <div id="signupForm">

                    <div class="remaining-inputs"></div>
                    <form onSubmit={Updatedata}>
                        {/* <h2>Update User</h2> */}
                        <div style={{ width: '70%' }}>
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder='Enter Name' value={name}
                                onChange={(e) => setname(e.target.value)}
                                className='form-control' />
                        </div>
                        <div style={{ width: '70%' }}>
                            <label htmlFor="">Address</label>
                            <input type="text" placeholder='Enter Adress'
                                onChange={(e) => setAddress(e.target.value)}
                                value={address} className='form-control' />
                        </div>
                        <div style={{ width: '70%' }}>
                            <label htmlFor="" >Contact</label>
                            <input type="number" placeholder='Enter Contact'
                                onChange={(e) => setphonenumber(e)}
                                value={contact} className='form-control'  />
                        </div>
                        <button className='btn btn-success'>Update</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default UpdateUser