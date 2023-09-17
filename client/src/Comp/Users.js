import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([])
    const [showLoading,setshowLoading]=useState(false);

    useEffect(() => {
        axios.get("http://localhost:3001")
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }, [])


    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteUser/' + id)
            .then(res => {
                console.log(res)
                window.location.reload();
            })
            .catch(err => console.log(err))
    }

    return (
        <div class="main">
            <div className='defaultimage'></div>
            <div class="container1" >
                <div id="signupForm">
                    <div class="remaining-inputs"></div>
                    <div style={{marginBottom:'10px', textAlign:'left'}}>
                        <span style={{backgroundColor:'black', padding:'5px 10px', borderRadius:'10px'}}>
                        <Link to="/createUser" style={{textDecoration:'none', color:'white'}}>Add +</Link>
                        </span>
                    </div>

                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Contact Number</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                showLoading ?
                                <div>
                                    
                                </div>

                                :
                                users.map((user) => {
                                    return (
                                        <tr>
                                            <td>{user.name}</td>
                                            <td>{user.address}</td>
                                            <td>{user.contact}</td>
                                            <td>
                                                <div style={{display:'flex'}}>

                                                <Link to={`/updateUser/${user._id}`} className="btn btn-success">Update</Link>
                                                <button style={{ marginLeft: '10px', borderRadius: '10px', background: 'red', border: 'none', padding: '5px 10px' }}
                                                    onClick={(e) => { handleDelete(user._id) }}>Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Users