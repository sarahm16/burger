let express = require('express');
let burger = require('../models/burger');

let router = express.Router();

router.get('/', function(req, res) {
    burger.all(function(data) {
        let hbsObj = {
            burgers: data
        }
        console.log(hbsObj);
        res.render('index', hbsObj)
    })
})

router.post('/api/burgers', function(req, res) {
    let whatToInsert = {
        burger_name: req.body.name,
        devoured: 0
    }
    burger.create(whatToInsert, function(result) {
        console.log(result)
        res.json( {id: result.insertId})
    })
})

router.put('/api/burgers/:id', function(req, res) {
    console.log(req.params.id)
    let whatToUpdate = {
        devoured: 1
    }
    let condition = {
        id: req.params.id
    }
    //let condition = `id = ${req.params.id}`;
    burger.update(whatToUpdate, condition, function(result) {
        console.log(result);
        if(result.changedRows == 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    })
})

module.exports = router;