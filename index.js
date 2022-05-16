const express = require('express');
const app = express();
const morgan = require('morgan');
//Routes
const usuarios = require('./routes/usuarios.js')
const customers = require('./routes/customers.js');

//Middleware
const cors = require('./middleware/cors');
const auth = require('./middleware/auth');


app.use(cors);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/user",usuarios);
app.use(auth);
app.use("/customers", customers );


app.listen(process.env.PORT || 3100, () =>{ //es lo mismo que poner function()
    console.log("Server is running...");
});