
const mongoose = require('mongoose');
const uniqueValidator = require ('mongoose-unique-validator');

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol válido'
} 


let Schema = mongoose.Schema;


let usuarioSchema  = new Schema ({
    nombre:{
        type: String,
        required: [false, 'El nombre es necesairo.']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El correo es obligatorio.']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria.']
    },   
    img:{   //no es obligatoria
        type: String,
        required: false
    },
    role: { //default: 'USER_ROLE'
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos
    },
    estado: { //boolean
        type: Boolean,
        default: true
    },
    google: { //boolean
        type: Boolean,
        default: false
    }
});

usuarioSchema.methods.toJSON = function() {

    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}


usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe ser único.' });

module.exports = mongoose.model('Usuario', usuarioSchema);