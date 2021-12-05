var db = require('../connections/connection');
Policy = db.policyModal
exports.create = (req, res) => {
    if (Object.keys(req.body).length != 5) {
        flag = true;
        throw "Entre All data";
    }

    if (req.body.PolicyNumber == undefined || req.body.PolicyHoldersName == undefined || req.body.PolicyAmount == undefined || req.body.MaturityAmount == undefined || req.body.Nominee == undefined) {
        res.status(400).send("Please provide vaild Structure");
        throw "Not Valid Structure";
    }
    var created_data = {
        PolicyNumber: req.body.PolicyNumber,
        PolicyHoldersName: req.body.PolicyHoldersName,
        PolicyAmount: req.body.PolicyAmount,
        MaturityAmount: req.body.MaturityAmount,
        Nominee: req.body.Nominee
    }

    console.log(created_data)
    var create_obj = Policy.build(created_data)
    create_obj.save()
        .then(data => {
            res.status(200).send("Created Sucessfully");
        })
        .catch(err => {
            res.status(400).send("Something went wrong");
        })
}

exports.findAll = (req, res) => {

    Policy.findAll()
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            console.log("Error : ", err);
            res.status(400).send("Something went wrong");
        });

}

exports.findByPk = (req, res) => {
    var id = parseInt(req.params.id);

    if (!id) {
        res.status(400).send("Provide valid Id");
        throw "Provide valid Id";
    }

    Policy.findByPk(id)
        .then(data => {
            if(Array.isArray(data)){
                res.status(200).send(data);
            }
            else{
                data?res.status(200).send([data]):res.status(200).send(data);
            }
        })
        .catch(err => {
            console.log("Error : ", err);
            res.status(400).send("Something went wrong");
        })
}

exports.Update = (req, res) => {
    var id = parseInt(req.params.id);

    if (!id) {
        res.status(400).send("Provide Valid Id");
        throw "Provide valid Id";
    }

    if (req.body.PolicyHoldersName == undefined || req.body.PolicyAmount == undefined || req.body.MaturityAmount == undefined || req.body.Nominee == undefined) {
        res.status(400).send("Please provide vaild Structure");
        throw "Not Valid Structure";
    }

    var updated_data = {
        PolicyHoldersName: req.body.PolicyHoldersName,
        PolicyAmount: req.body.PolicyAmount,
        MaturityAmount: req.body.MaturityAmount,
        Nominee: req.body.Nominee
    }

    Policy.update(
        updated_data,
        { where: { PolicyNumber: id } }
    )
        .then(data => {
            res.status(200).send("Updated Sucessfully");
        })
        .catch(err => {
            console.log("Error : ", err);
            res.status(400).send("Something went wrong");
        })
}

exports.Delete = (req, res) => {
    var id = parseInt(req.params.id);
    console.log(id)
    if (!id) {
        res.status(400).send("Invalid Id");
        throw "Invalid Id";
    }

    Policy.destroy(
        { where: { PolicyNumber: id } }
    )
        .then((data) => {
            res.status(200).send("Deleted Sucessfully");
        })
        .catch(err => {
            console.error("Error : ", err);
            res.status(400).send("Something went wrong");
        })
}