const express = require('express');
const customer = express.Router();
const db = require('../config/database.js');

customer.get("/", async (req,res, next)=>{//Los dos puntos es como {param} de java
    //console.log(req.params.name);
    const ctms = await db.query("SELECT *, CONCAT('<center><button class=\"btn btn-sm btn-danger clearfix\" onClick=\"botones(', id, ');\">Eliminar</button></center>') as btn,  CONCAT('<center><button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#actualizar\" onClick=\"actu(',id,');\">Actualizar</button></center>') as actualizar FROM customers");
    console.log(ctms);
    return res.status(200).json({code: 1, data: ctms});
});

customer.post("/", async (req, res, next) =>{
    //console.log(req);
    const {nombre, apellido, telefono, correoElectronico, direccion} = req.body;
       
    if(nombre && apellido && telefono && correoElectronico && direccion){
        let query = "INSERT INTO customers (nombre, apellido, telefono, correoElectronico, direccion)";
        query += `VALUES('${nombre}', '${apellido}', '${telefono}', '${correoElectronico}', '${direccion}')`;

        const rows = await db.query(query);
        //console.log(rows);
        

        if(rows.affectedRows == 1){
            return res.status(201).json({code: 201, mesagge: "Insertado correctamente"});
        }

    return res.status(200).json({code: 1, mesagge: "Ocurrió un error"});
    }

    return res.status(500).json({code: 500, mesagge: "datos incompletos"});
    
        
});

customer.delete("/:id([0-9]{1,3})", async (req, res, nest)=>{

    const query = `DELETE FROM customers WHERE id=${req.params.id}`;

    const rows = await db.query(query);

    if(rows.affectedRows == 1){
        return res.status(200).json({code: 200, mesagge: "Borrado correctamente"})
    }
    return res.status(400).json({code: 400, mesagge: "No encontrado"})

});

customer.put("/:id([0-9]{1,3})", async(req, res, next) =>{
    const {nombre, apellido, telefono, correoElectronico, direccion} = req.body;

    if(nombre && apellido && telefono && correoElectronico && direccion){
        let query = `UPDATE customers SET nombre='${nombre}', apellido='${apellido}',telefono='${telefono}',correoElectronico='${correoElectronico}',direccion='${direccion}' WHERE id=${req.params.id};`;

        const rows = await db.query(query);
        //console.log(rows);

        if(rows.affectedRows == 1){
            return res.status(200).json({code: 200, mesagge: "Actualizacion correcta"});
        }

    return res.status(200).json({code: 1, mesagge: "Ocurrió un error"});
    }

    return res.status(500).json({code: 500, mesagge: "datos incompletos"})
});

customer.get('/:name([A-Za-z]+)', async (req, res, next)=>{

    const name = req.params.name;
    const datos = await db.query("Select *, CONCAT('<center><button class=\"btn btn-sm btn-danger clearfix\" onClick=\"botones(', id, ');\">Eliminar</button></center>') as btn,  CONCAT('<center><button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#actualizar\" onClick=\"actu(',id,');\">Actualizar</button></center>') as actualizar FROM customers WHERE nombre='"+name+"'");

    if(datos.length>0){
        return res.status(200).json({code:1, data:datos});
    }
    return res.status(404).send({code: 1, mesagge: "Dato no encotrado"});

});

module.exports = customer;