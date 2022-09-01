const express = require('express');
const app = express();
app.use(express.static('Public'));


app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor funcionando en http://localhost:3000');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/Views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/Views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/Views/register.html');
});