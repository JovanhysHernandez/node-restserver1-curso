const express = require('express');


let { verificaToken } = require ('../middlewares/autenticacion');

let app = express();

let Categoria = require ('../models/categoria');

// ================================
// Mostrar todas las categorias
// ================================
app.get('/categoria', (req, res) => {

});

// ================================
// Mostrar una categoria por ID
// ================================
app.get('/categoria/:id', (req, res) => {
    Categoria.findById();
});

// ================================
// Crea nueva categoria
// ================================
app.post('/categoria', verificaToken, (req, res) => {
   
    let body = req.body;

    let categoria = new Categoria({
        descripcion: body.descripcion,
        usuario: req.usuario._id
    });


    Categoria.save( (err, categoriaDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!categoriaDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        resp.json({
            ok: true,
            categoria: categoria
        })

    })

});


// ================================
// 
// ================================
app.put('/categoria/:id', (req, res) => {
   
});

// ================================
// Mostrar una categoria por ID
// ================================
app.delete('/categoria/:id', (req, res) => {
    
});



module.exports = app;