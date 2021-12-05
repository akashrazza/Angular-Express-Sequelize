var db = require('../connections/connection');
Employee = db.EmployeeModal;

//Get All Employee View
exports.getAllEmployee = (req,res)=>{
    Employee.findAll()
    .then(data=>{
        res.status(200).send(data);
    })
    .catch(err=>{
        console.log(err);
        res.status(400).send("Something Went Wrong");
    })
}
//Get Employee By ID
exports.getAllEmployeeById = (req,res) =>{

    var id =parseInt(req.params.id);
    
    if(!id){
        res.status(400).send("Provide Valid id");
        throw "Not provided valid ID";
    }

    Employee.findByPk(id)
    .then(data=>{
        if(Array.isArray(data))
            res.status(200).send(data);
        else
        {
            data?res.status(200).send([data]):res.status(200).send(data);
          
        }
        
    })
    .catch((err)=>{
        console.log(err);
        res.status(400).send({error:"Something went wronge"});
    })
}

//Search Employee By Name
exports.getAllEmployeeByName = (req,res) =>{
    var name =req.params.name;
    if(name==undefined){
        res.status(400).send("Provide Valid name");
        throw "Not provided valid Name";
    }

    Employee.findAll({where:{name:name}})
    .then(data=>{
        if(Array.isArray(data))
            res.status(200).send(data);
        else
        res.status(200).send([data]);
    })
    .catch((err)=>{
        console.log(err);
        res.status(400).send({error:"Something went wronge"});
    })
}

//Bulk Insert data into Employee Table
exports.BulkInsert = (req,res)=>{
    Employee.bulkCreate(req.body)
    .then(data=>{
        res.status(200).send("Inserted Sucessfully");
    })
    .catch(err=>{
        console.log(err);
        res.send(400).send("Error")
    })
}

//Insert Into Employee table
exports.Insert = (req,res) =>{
    var id = req.body.id;
    var name = req.body.name;
    var dept = req.body.dept;
    var designation = req.body.designation;

    if(id==undefined || name==undefined || dept==undefined || designation==undefined){
        res.status(400).send("Invalid body Provided");
    }

    Employee.create({
        id:id,
        name:name,
        dept:dept,
        designation:designation
    })
    .then(data=>{
        res.status(201).send("Created Sucessfully");
    })
    .catch(er=>{
        console.log(err);
        res.status(400).send("Something Went Wronge");
    })
}

//Update Employee
exports.UpdateEmployee = (req,res) =>{
    var id =parseInt(req.params.id);
    
    if(!id){
        res.status(400).send("Provide Valid id");
        throw "Not provided valid ID";
    }

    var name = req.body.name;
    var dept = req.body.dept;
    var designation = req.body.designation;

    if(name==undefined || dept==undefined ||designation==undefined){
        res.status(400).send("Invalid Structure");
        throw "Invalid Body Provided"
    }

    Employee.update(
        {name:name,dept:dept,designation:designation},
        {where:{id:id}}
    )
    .then(data=>{
        res.status(200).send("Update Sucessfully");
    })
    .catch (err=>{
        console.error(err);
        res.status(400).send("Something Went wronge");
    })
}

//DeleteEmployee
exports.DeleteEmployee= (req,res) =>{
    var id =parseInt(req.params.id);
    
    if(!id){
        res.status(400).send("Provide Valid id");
        throw "Not provided valid ID";
    }

    Employee.destroy({where:{id:id}})
    .then(data=>{
        res.status(200).send("Deleted Sucessfully");
    })
    .catch(err=>{
        console.log(err);
        res.status(400).send("Something Went Wronge");
    })
}

//TotalSalary Operation
exports.TotalSalaryOperation = (req,res)=>{
    var Basic = parseInt(req.body.basic);
    var HRA = parseInt(req.body.hra);
    var DA = parseInt(req.body.da);
    var IT = parseInt(req.body.it);
    var PF = parseInt(req.body.pf);

    if(Basic==undefined || HRA== undefined || DA==undefined || IT==undefined || PF==undefined){
        res.status(400).send({error:"Provide Vaild Structure"});
        throw "Not Provided Valid Structure";
    }

    var TotalSalary = Basic + HRA + DA - (IT + PF);
    res.status(200).send({total_salary:TotalSalary})
}


//Sync table with Db
Employee.sync()
    .then(console.log("syncronize Sucessfully"))