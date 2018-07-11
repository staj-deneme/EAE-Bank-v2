//kayit işlemleri
var express = require('express');
var router = express.Router();
var Member=require("../models/Members.js");
var need=require('./uretimZaman.js');

router.post('/satinAl',need.requireAuthentication,function(req, res, next) {
    var item=req.body.item;
    var aydi=req.session.account._id;

    switch(item){
        case"cow":
            if(req.session.account.resources.coin>=50){
                var yeniPara=parseInt(req.session.account.resources.coin)-50;
                req.session.account.resources.cow.push({cal: new Date(),death:new Date()});
                Member.findByIdAndUpdate(aydi,
                {
                    'resources.cow':req.session.account.resources.cow,
                    'resources.coin':yeniPara
                }
                ,function(err,data){
                    if(err){console.log("update hata"); throw err;}
                    else{
                        
                        res.json(data);
                    }        
                });
            }else{res.send("para yok"); }
            break;
        case"chicken":
                if(req.session.account.resources.coin>=20){
                    var yeniPara=parseInt(req.session.account.resources.coin)-20;
                    req.session.account.resources.chicken.push({cal: new Date(),death:new Date()});
                    Member.findByIdAndUpdate(aydi,
                    {
                        'resources.chicken':req.session.account.resources.chicken,
                        'resources.coin':yeniPara
                    }
                    ,function(err,data){
                        if(err){console.log("update hata"); throw err;}
                        else{
                            
                            res.json(data);
                        }        
                });
                    }else{res.send("para yok"); }
            break;
        case"bee":
                if(req.session.account.resources.coin>=5){
                    var yeniPara=parseInt(req.session.account.resources.coin)-5;
                    req.session.account.resources.bee.push({cal: new Date(),death:new Date()});
                    Member.findByIdAndUpdate(aydi,
                    {
                        'resources.bee':req.session.account.resources.bee,
                        'resources.coin':yeniPara
                    }
                    ,function(err,data){
                        if(err){console.log("update hata"); throw err;}
                        else{
                            
                            res.json(data);
                        }        
                    });
                }else{res.send("para yok"); }
            break;
        case"seed":
                if(req.session.account.resources.coin>=1){
                    var yeniPara=parseInt(req.session.account.resources.coin)-1;
                    var yem=parseInt(req.session.account.resources.seed)+100;
                    Member.findByIdAndUpdate(aydi,
                    {
                        'resources.seed':yem,
                        'resources.coin':yeniPara
                    }
                    ,function(err,data){
                        if(err){console.log("update hata"); throw err;}
                        else{
                            
                            res.json(data);
                        }        
                    });
                }else{res.send("para yok"); }
        break;                    
        default:
            break;
    }
    //res.render('index', { title: 'Express' });
  });

module.exports = router;