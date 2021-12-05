module.exports = (sequelize,Sequelize) =>{
    const policyStructure = sequelize.define('Policy',{
        PolicyNumber :{
            primaryKey:true,
            type : Sequelize.INTEGER
        },
        PolicyHoldersName : Sequelize.STRING, 
        PolicyAmount : Sequelize.INTEGER, 
        MaturityAmount : Sequelize.INTEGER,
        Nominee : Sequelize.STRING
    });
    return policyStructure;
}