const {body} = require("express-validator");
const {User} = require("../database/models/index");

let email = body("email").notEmpty().withMessage("Email no puede quedar vacío").bail().isEmail().withMessage("Email no válido").custom((value,{req}) => {
  let user = User.findOne({where:{email: req.body.email}}).then(userFound=>
      {if(!userFound){
        return true
      }
      throw new Error("Email ya registrado")
      
  })
  return user
})

let clave = body("clave").notEmpty().withMessage("Debes ingresar una contraseña").bail().isLength({min:8}).withMessage("Mínimo 8 caraceteres")

let confirmarClave = body("confirmarClave").notEmpty().withMessage("Debes confirmar la contraseña").bail().isLength({min:8}).withMessage("Mínimo 4 caraceteres").custom((value,{req}) => {
    if (value !== req.body.clave) {
      throw new Error('La confirmación no coincide con la contraseña');
    }
    return true;
  })

  const imageValidation =
  body("imagen")
  .isIn([ "PNG", "JPEG", "GIF" ]).withMessage("El archivo debe ser JPEG, PNG O GIF")

let validaciones = [email,clave,confirmarClave,imageValidation]

module.exports = validaciones;