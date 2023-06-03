import db from "../config/Database.js";
import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize;

const Users = db.define('user',{
  uuid:{
    type:DataTypes.STRING,
    defaultValue:DataTypes.UUIDV4,
    allowNull:false,
    validate:{
      notEmpty:true
    }
  },
   name:{
     type:DataTypes.STRING,
     allowNull:true,
     validate:{
       notEmpty:true,
       len:[3,100]
     }
   },
   email:{
     type:DataTypes.STRING,
     allowNull:true,
     validate:{
       notEmpty:true,
       isEmail:true
     }
   },
   password:{
     type:DataTypes.STRING,
     allowNull:true,
     validate:{
       notEmpty:true
     }
   },
   role:{
     type:DataTypes.STRING,
     allowNull:true,
     validate:{
       notEmpty:true
     }
   }
},{
  freezeTableName:true
});

export default Users;