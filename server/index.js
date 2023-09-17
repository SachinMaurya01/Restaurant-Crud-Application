const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const UserModal = require('./Modals/User');

const app = express()
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/Crud")

app.get("/", (req, res) => {
    UserModal.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.post('/createUser', (req, res) => {
    UserModal.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    UserModal.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.put('/updateUser/:id', (req,res)=>{
    const id=req.params.id;
    UserModal.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        adress:req.body.adress,
        contact:req.body.contact
    })
    .then( users => res.json(users))
    .catch(err => res.json(err))
})



app.delete('/deleteUser/:id', (req,res)=>{
    const id=req.params.id;
    UserModal.findByIdAndDelete({_id:id})
    .then( res => res.json(res))
    .catch(err => res.json(err))
})


app.listen(3001, () => {
    console.log("Server is Running");
})

// mongodb://localhost:27017