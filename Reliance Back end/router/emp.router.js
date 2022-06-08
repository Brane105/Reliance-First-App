let express = require('express');
let router = express.Router();
let EmpController = require('../controller/emp.controller');
router.post('/store', EmpController.empDetails);
router.get('/getEmployees', EmpController.getEmp);
router.get('/getEmployeeById/:empname', EmpController.getEmpByID);
router.delete('/deleteEmpById/:pid', EmpController.deleteEmpById);
router.put('/editEmployee', EmpController.editEmpPro);
module.exports = router;