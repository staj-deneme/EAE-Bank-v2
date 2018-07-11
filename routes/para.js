//kayit işlemleri
var express = require('express');
var router = express.Router();
var Member=require("../models/Members.js");
var need=require('./uretimZaman.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.put('/paraYukle',need.requireAuthentication,function(req, res, next) {
  
    var yeniPara=parseInt(req.session.account.resources.coin)+parseInt( req.body.miktar);
    var aydi=req.session.account._id;
    Member.findByIdAndUpdate(aydi,{'resources.coin':yeniPara},function(err,data){
        if(err){console.log("update hata"); throw err;}
        else{
            
            console.log(yeniPara);
            res.json(data);
        }        
    });
    //res.render('index', { title: 'Express' });
  });
  router.put('/paraCek',need.requireAuthentication,function(req, res, next) {
  
    var yeniPara=parseInt(req.session.account.resources.coin)-parseInt( req.body.miktar);
    var aydi=req.session.account._id;
    Member.findByIdAndUpdate(aydi,{'resources.coin':yeniPara},function(err,data){
        if(err){console.log("update hata"); throw err;}
        else{
            console.log(yeniPara);
            res.json(data);
        }        
    });
    //res.render('index', { title: 'Express' });
  });
module.exports = router;

