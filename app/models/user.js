const {db} = require('../../core/db')

const {Sequelize,Model} = require('sequelize')

class User extends Model{

}

User.init({
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    nickname:Sequelize.STRING,
    password:Sequelize.STRING,
    openid:{
        type:Sequelize.STRING(64),
        unique:true
    }
},{sequelize:db,modelName:'user'})


