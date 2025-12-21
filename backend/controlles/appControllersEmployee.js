const Employees = require('../modules/ShameTemplate');
const Employees2 = require('../modules/ShameTemplate2');


const employee_details = (req, res) => {
    Employees.find()
        .then((result) => {
            res.status(200).send(result)
        })
        .catch((error) => {
            res.status(500).json(error)
        })
};

const employee_details2 = (req, res) => {
    Employees2.find()
        .then((result) => {
            res.status(200).send(result)
        })
        .catch((error) => {
            res.status(500).json(error)
        })
};


const create_employee = (req, res) => {

    const employee = new Employees(req.body);

    employee.save()
        .then((result) => {
            res.status(201).send(result)
            console.log(req.body)
        })
        .catch((err) => {
            console.log(err);
        });
};

const create_employee2 = (req, res) => {

    const employee2 = new Employees2(req.body);

        employee2.save()
        .then((result) => {
            res.status(201).send(result)
            console.log(req.body)
        })
        .catch((err) => {
            console.log(err);
        })
};


const delete_employee = (req, res) => {
    const id_number = req.params.ID_number;
    Employees.findOneAndDelete(id_number)
        .then(result => {
            res.status(200).send(result)
            console.log(result);
        })
        .catch(err => {
            res.status(500);
            console.log(err);
        })
}
const delete_employee2 = (req, res) => {
    const id_number = req.params.ID_number;
    Employees2.findOneAndDelete(id_number)
        .then(result => {
            res.status(200).send(result)
            console.log(result);
        })
        .catch(err => {
            res.status(500);
            console.log(err);
        })
    }

module.exports = {

    create_employee,
    create_employee2,
    employee_details,
    employee_details2,
    delete_employee,
    delete_employee2,
};