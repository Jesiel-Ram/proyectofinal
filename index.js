const express = require('express');
const app = express();

app.listen(process.env.PORT || 3100, () =>{ //es lo mismo que poner function()
    console.log("Server is running...");
});