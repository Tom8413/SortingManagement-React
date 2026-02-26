const EuroPallets = require('../modules/ShemeEuroPallet');

const EuroPallet_details = (req, res) => {
    EuroPallets.find()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            res.status(500).json(error);
        })
};

const create_EuroPallet = (req, res) => {
    const EuroPallet = new EuroPallets(req.body);

    EuroPallet.save()
        .then((result) => {
            res.status(201).send(result)
            console.log(req.body);
        })
        .catch((err) => {
            res.status(500);
            console.log(err);
        })
};

const delete_EuroPallet = (req, res) => {
    const id_KeyPallet = req.params.Id_KeyPallet;
    EuroPallets.findByIdAndDelete({Id_KeyPallet: id_KeyPallet})
    .then(result => {
        res.status(200).send(resut)
        console.log(result);
    })
    .catch(err => {
        res.status(500);
        console.log(err);
    })

}

module.exports = {
    EuroPallet_details,
    create_EuroPallet,
    delete_EuroPallet,
};
