

module.exports = (sequelize,Sequelize)=>{
    var StudentModal = sequelize.define('Student',{
        ID:{
            primaryKey:true,
            type:Sequelize.INTEGER
        },
        Name:Sequelize.STRING,
        Stream:Sequelize.STRING,
        Marks:Sequelize.INTEGER,
        Address:Sequelize.STRING,
        Location:Sequelize.STRING,
        Pincode:Sequelize.INTEGER,
        State:Sequelize.STRING,
        PhoneNumber:Sequelize.STRING  
    })
    return StudentModal;
}