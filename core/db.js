const Sequelize = require('sequelize')

const sequelize = new Sequelize('basketBall','root','123456',{
    dialect: 'mysql',
    host:'localhost',
    port:3306,
    logging:true,
    define:{

    }
})
sequelize.sync()
module.exports = {
    db:sequelize
}
