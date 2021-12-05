
module.exports = (sequelize,Sequelize) =>{
    let EmployeeTableInstance = sequelize.define('EmployeeTable',{
        id:{
            primaryKey:true,
            type:Sequelize.INTEGER
        },
        name:Sequelize.STRING,
        dept:Sequelize.STRING,
        designation:Sequelize.STRING
    })
    return EmployeeTableInstance;
}