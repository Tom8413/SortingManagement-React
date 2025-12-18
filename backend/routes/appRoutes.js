const express = require('express');
const appControllersEmployee = require('../controlles/appControllersEmployee');
const appControllersEuroPallet = require('../controlles/appControllersEuroPallet');
const router = express.Router();

router.get('/show-employee', appControllersEmployee.employee_details);

router.get('/show-employee2', appControllersEmployee.employee_details2);

router.post('/create-employee', appControllersEmployee.create_employee);

router.delete('/delete-employee/:id', appControllersEmployee.delete_employee);

router.delete('/delete-employee2/:id', appControllersEmployee.delete_employee2);

router.get('/show-EuroPallet', appControllersEuroPallet.EuroPallet_details);

router.post('/createEuroPallet', appControllersEuroPallet.create_EuroPallet);

router.delete('/delete-EuroPallet/:id', appControllersEuroPallet.delete_EuroPallet);


module.exports = router;