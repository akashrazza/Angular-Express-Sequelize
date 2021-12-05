var Sequelize = require('sequelize');
var dbConfig=require('../config/db.config')

var sequelize = new Sequelize(dbConfig.db,dbConfig.username,dbConfig.password,{
    host:dbConfig.host,
    dialect:dbConfig.dialect,
    pool:{
        min:dbConfig.pool.min,
        max:dbConfig.pool.max,
        acquire:dbConfig.pool.acquire,
        idle:dbConfig.pool.idle
    }
}
)

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.policyModal = require("./PolicyModal")(sequelize, Sequelize);
db.UserModal = require('./UserModal')(sequelize,Sequelize);
db.EmployeeModal = require('./EmployeeModal')(sequelize,Sequelize);
db.StudentModal = require('./Student')(sequelize,Sequelize);
// db.policyModal.sync()
// db.EmployeeModal.sync()
// db.StudentModal.sync({force:true})
// db{
//     Sequelize:Sequelize
//     sequelize:sequelize
//     policyModal:policyModal
//     UserModal
// }

// db.UserModal.sync()
module.exports = db;


