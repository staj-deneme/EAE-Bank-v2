//kayit işlemleri
var express = require('express');
var router = express.Router();
var Member=require("../models/Members.js");
var fonk = require("./uretimZaman.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

function uretimKaynak(i) {
  return new Promise(function (resolve, reject) {
    //req.session.accout.resources.cow[i];
      //inek
      {
        if (req.session.account.resources.cow == null) {

        } else {
          for (var j = 0; j <req.session.account.resources.cow.length; j++) {
            if (req.session.account.resources.seed >= 50) {
              var aydi=req.session.account._id;
              var btime = new Date(req.session.account.resources.cow[j].cal);
              var now = new Date();
              var dif = fonk.diffMin(now, btime);
              var milkU = parseInt(fonk.cowMilk(dif))+parseInt(req.session.account.resources.milk);
              
              Member.findByIdAndUpdate(aydi,{'resources.milk':milkU}
                ,function(err,data){
                    if(err){console.log("update hata"); throw err;}
                    else{
                        
                        res.json(data);
                    }        
                });  
            }
          }
        }
      }
    resolve("Herşey Tamam");
  });

}
function tuketimKaynak(i) {
  return new Promise(function (resolve, reject) {
      //inek
      {
        if (dizi.members[i].resources.cow == null) {

        } else {
          for (var j = 0; j < dizi.members[i].resources.cow.length; j++) {
            var btime = new Date(dizi.members[i].resources.cow[j].boughtTime);
            var now = new Date();
            var dif = fonk.diffMin(now, btime);
            if (dizi.members[i].resources.seed >= fonk.eatSeedCow(dif)) {
              dizi.members[i].resources.seed -= fonk.eatSeedCow(dif);
            }
          }
        }
      }
    resolve("Herşey Tamam");
  });
}
function olum(i) {
  return new Promise(function (resolve, reject) {
   

        //inek
        {
          if (dizi.members[i].cow == null) {
            //alert("inek yok");  console.log("inek yok");
          } else {
            for (var j = 0; j < dizi.members[i].cow.length; j++) {

              var btime = new Date(dizi.members[i].cow[j].boughtTime);
              var now = new Date();
              var dif = fonk.diffMin(now, btime);
              if (dif >= 30) {
                var del = dizi.members[i].cow.splice(j, 1);
                var del2 = dizi2.members[i].resources.cow.splice(j, 1);
              }
            }
          }
        }       

    resolve("Herşey Tamam");
  });
}

// Ana Sayfa Yönlendirmesi
router.get('/', middleware.requireAuthentication, function (req, res, next) {
  var i = req.session.account.indis;

  olum(i).then(function (params) {
    uretimKaynak(i).then(function (params) {
      tuketimKaynak(i).then(function (params) {
        res.render('index');
      });
    });
  });
});
module.exports = router;