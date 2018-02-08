const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes
const config = require('../config')

//const db = new Sequelize('passportdb', 'ppuser', 'pppass', {
   // dialect: 'mysql'})
const db = new Sequelize(config.DATABASE_URL);
const User = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: DataTypes.STRING
})

db.sync().then(() =>{console.log("Database created")})

exports = module.exports = {
    db,
    User
}





//const dbConfig = require('../config').DB