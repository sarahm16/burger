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
    burger.create([
        'burger_name', 'devoured'
    ],[
        req.body.name, req.body.devoured
    ], function(result) {
        res.json( {id: result.insertId})
    })
})

router.put('/api/burgers/:id', function(req, res) {
    let condition = `id = ${req.params.id}`;
    burger.update({
        'devoured': req.body.devoured
    }, condition, function(result) {
        if(result.changedRows == 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    })
})

module.exports = router;