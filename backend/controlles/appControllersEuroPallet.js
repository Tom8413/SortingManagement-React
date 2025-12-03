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
        })
        .catch((err) => {
            res.status(500);
            conosle.log(err);
        })
};

const delete_EuroPallet = (req, res) => {
    const id = req.params.id;
    EuroPallets.findByIdAndDelete(id)
    .then(result => {
        res.status(200);
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
