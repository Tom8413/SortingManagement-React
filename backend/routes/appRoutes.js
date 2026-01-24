const express = require('express');
const appControllersEmployee = require('../controlles/appControllersEmployee');
const appControllersEuroPallet = require('../controlles/appControllersEuroPallet');
const router = express.Router();

router.get('/show-employee', appControllersEmployee.employee_details);

router.get('/show-employee2', appControllersEmployee.employee_details2);

router.post('/create-employee', appControllersEmployee.create_employee);

router.post('/create-employee2', appControllersEmployee.create_employee2);

router.delete('/delete-employee/:ID_number', appControllersEmployee.delete_employee);

router.delete('/delete-employee2/:ID_number', appControllersEmployee.delete_employee2);

router.get('/show-EuroPallet', appControllersEuroPallet.EuroPallet_details);

router.post('/createEuroPallet', appControllersEuroPallet.create_EuroPallet);

router.delete('/delete-EuroPallet/:id', appControllersEuroPallet.delete_EuroPallet);

// router.patch('/patch_employee/:ID_number', appControllersEmployee.patch_employee);

// router.patch('/patch_employee2/:ID_number', appControllersEmployee.patch_employee2);


module.exports = router;