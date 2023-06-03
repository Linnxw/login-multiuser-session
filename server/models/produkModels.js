import db from "../config/Database.js";
import { Sequelize } from "sequelize";
import Users from "./userModels.js"
const { DataTypes } = Sequelize;

const Products = db.define('product',{
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
   price:{
     type:DataTypes.INTEGER,
     allowNull:true,
     validate:{
       notEmpty:true
     }
   },
   userId:{
     type:DataTypes.INTEGER,
     allowNull:true,
     validate:{
       notEmpty:true
     }
   }
},{
  freezeTableName:true
});

Users.hasMany(Products);
Products.belongsTo(Users, { foreignKey:'userId' } );

export default Products;