module.exports = (sequelize,Sequelize)=>{
    let usermodal = sequelize.define('User',{
        user:Sequelize.STRING,
        password  : Sequelize.STRING,
        role : Sequelize.STRING
    })
    return usermodal;
}