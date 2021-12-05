var db = require('../connections/connection');
var Student = db.StudentModal;

// console.log(Student)
exports.findAllStudents = (req,res) =>{
    Student.findAll()
    .then(data=>{
        res.status(200).send(data);
    })
    .catch(err=>{
        res.status(400).send("Something Went Wronge");
    })
}

exports.findByPk = (req,res) => {
    var id = parseInt(req.params.id)

    if(!id){
        res.status(400).send("Invalid Id");
        throw "Invalid ID";
    }

    Student.findByPk(id)
    .then(data=>{
        res.status(200).send(data)
    })
    .catch(err=>{
        console.log(err);
        res.status(400).send("Something Went Wronge");
    })
}

exports.Insert = (req,res) => {
  
    console.log(req.body)
    if(req.body.ID==undefined || req.body.Name==undefined || req.body.Stream==undefined || req.body.Marks==undefined || req.body.Address==undefined || req.body.Location==undefined ||req.body.Pincode==undefined || req.body.State==undefined || req.body.PhoneNumber==undefined){
        res.status(400).send("Not Vaild Structure");
        throw "Not Vaid Body Provided";
    }

    Student.create(req.body)
    .then(data=>{
        res.status(200).send("Created Sucessfully");
    })
    .catch(err=>{
        console.log(err);
        res.status(400).send("Something Went Wronge");
    })
}

exports.Update = (req,res) =>{
    var id  = parseInt(req.params.id);

    if(!id){
        res.status(400).send("Invalid Id");
        throw "Invalid ID";
    }

    if(req.body.Name==undefined || req.body.Stream==undefined || req.body.Marks==undefined || req.body.Address==undefined || req.body.Location==undefined ||req.body.Pincode==undefined || req.body.State==undefined || req.body.PhoneNumber==undefined){
        res.status(400).send("Not Vaild Structure");
        throw "Not Vaid Body Provided";
    }

    Student.update(
        req.body,
        {where:{ID:id}}
    )
    .then(data => {
        res.status(200).send("Update Sucessfully");
    })
    .catch(err=>{
        console.log(err);
        res.status(400).send("Something Went Wrong");
    })
}

exports.Delete = (req,res) =>{
    var id  = parseInt(req.params.id);

    if(!id){
        res.status(400).send("Invalid Id");
        throw "Invalid ID";
    }

    Student.destroy({where:{ID:id}})
    .then(data => {
        res.status(200).send("Deleted Sucessfully");
    })
    .catch(err => {
        console.log(err);
        res.status(400).send("Something Went Wronge");
    })
}