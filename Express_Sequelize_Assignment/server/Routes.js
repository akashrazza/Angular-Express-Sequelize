module.exports = app =>{
    var route = require('express').Router();
    var PolicyView = require('../modals/Policy');
    var UserView = require('../modals/Credentials');
    var EmployeeView = require('../modals/Employee');
    var StudentView  = require('../modals/Student');
    route.get('/getAllPolicies',PolicyView.findAll);
    route.get('/getAllPolicies/:id',PolicyView.findByPk);
    route.post('/getAllPolicies',PolicyView.create);
    route.put('/getAllPolicies/:id',PolicyView.Update);
    route.delete('/getAllPolicies/:id',PolicyView.Delete);
    route.post('/login',UserView.Login);
    route.post('/signup',UserView.Register);

    route.post('/totalSalary',EmployeeView.TotalSalaryOperation);
    route.get('/getAllEmployee',EmployeeView.getAllEmployee);
    route.get('/search_employee_by_id/:id',EmployeeView.getAllEmployeeById);
    route.get('/search_employee_by_name/:name',EmployeeView.getAllEmployeeByName);
    route.post('/createEmployee',EmployeeView.Insert);
    route.put('/updateEmployee/:id',EmployeeView.UpdateEmployee);
    route.delete('/deleteEmployee/:id',EmployeeView.DeleteEmployee);
    route.post('/bulkcreate',EmployeeView.BulkInsert);

    route.get('/student',StudentView.findAllStudents);
    route.get('/student/:id',StudentView.findByPk);
    route.post('/student',StudentView.Insert);
    route.put('/student/:id',StudentView.Update);
    route.delete('/student/:id',StudentView.Delete);
    app.use('/api',route);
}