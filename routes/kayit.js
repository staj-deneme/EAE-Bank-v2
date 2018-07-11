//kayit işlemleri
var express = require('express');
var router = express.Router();
var Member=require("../models/Members.js");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
    var m=new Member({
        name: req.body.name,
        surName: req.body.surName,
        userName:req.body.userName,       
        password: req.body.password,
        eMail:req.body.eMail,
        resources: {
            coin: 15,
            milk: 0,
            egg: 0,
            honey: 0,
            seed: 0,
            cow: [],
            chicken: [],
            bee: []
        }
    });
     m.save(function(err,data){
        if(err)console.log("save hata");

        res.json(data);
    });
   // res.render('index', { title: 'Express' });
  });

module.exports = router;

