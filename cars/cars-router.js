const express = require('express');

// any other router that needs it, can use same *import*
const db = require('../data/connections');

const router = express.Router();
// ALL THE WRONG ROUTES
// MUST ADDRESS

router.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.json(cars);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to retrieve cars' });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    db('cars')
        .where({ id }).first()
        .then(car => {
            res.json(car);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to retrieve fruit' });
        });
});

router.post('/', (req, res) => {
    const carData = req.body;

    db('cars')
        .insert(carData, 'id')
        .then(ids => {
            db('cars')
                .where({ id: ids[0] })
                .then(newCarEntry => {
                    res.status(201).json(newCarEntry);
                });
        })
        .catch(err => {
            console.log('POST error', err);
            res.status(500).json({ message: "Failed to store data" });
        });
});


router.put('/:id', (req, res) => {
    const changes = req.body;
    db('cars')
        .where({ id: req.params.id })
        .update(changes) // needs two arguments
        .then(count => {
            if (count > 0) {
                res.status(200).json({ message: "update success" })
            } else {
                res.status(404).json({ message: "account not found" })
            }
        })
        .catch(error => {
            res.status(500).json({ message: "argh error" })
        })
});

router.delete('/:id', (req, res) => {
    db('cars')
        .where({ id: req.params.id })
        .del() // delete the records
        .then(count => {
            if (count > 0) {
                res.status(200).json({ message: "delete success" })
            } else {
                res.status(404).json({ message: "account not found" })
            }
        })
        .catch(error => {
            res.status(500).json({ message: "argh error" })
        })
});


// Add a query string option to your GET /api/accounts endpoint. 
// The query string may contain limit, sortby and sortdir keys. 
// If these keys are provided, use these values to limit and sort 
// the accounts which are selected from the database. 
// Reference the docs for sorting and limiting in knex.


module.exports = router;