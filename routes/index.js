var express = require('express');
var router = express.Router();

const Members = require("../models/Members");

// Kullanıcı Session Kontrolünün Yapıldığı Ara Katman
var middleware = {
  requireAuthentication: function (req, res, next) {
    next();
  }
}

// Ana Sayfa Yönlendirmesi
router.get('/', middleware.requireAuthentication, function (req, res, next) {
  /* var i = req.session.account.indis; */

  /* olum(i).then(function (params) {
    uretimKaynak(i).then(function (params) {
      tuketimKaynak(i).then(function (params) {
        res.render('index');
      });
    });
  }); */
  res.render('index');


});
// Hayvan Ve Yem Alma Sayfasına Yönlendirme
router.get('/hayvan-yem-al', middleware.requireAuthentication, function (req, res, next) {
  var data = {
    hata: null
  }
  res.render('hayvan-al', { viewData: data });
});

// Hayvan Ve Yem Aldırma İşlemleri
router.post('/hayvan-yem-al', middleware.requireAuthentication, function (req, res, next) {



});

// Login İşleminin Yapıldığı Post İşlemi
router.post('/', function (req, res, next) {

});

//Kullanıcı Kayıt İşleminin Yapıldığı Post İşlemi
router.post('/login', function (req, res, next) {
  const member = new Members({
    name: "qwe asd",
    surName: "qwe asd",
    userName: "qwe asd",
    password: "qwe asd",
    eMail: "qwe asd",
    resources: [
      { message: "qweeqwqwe" },
      { message: "asdasdas" }
    ],
    published: true
  });

  book.save((err, data) => {
    if (err) {
      res.json(err);
    }
    else {
      res.json(data);
    }
  });
});

// Login Sayfası Yönlendirme
router.get('/login', function (req, res, next) {
  var data = {
    hata: false,
    kayitSuccess: null
  };
  res.render('page-login', { viewData: data });
});

//Boş Demo Sayfa Yönlendirme
router.get('/blank', middleware.requireAuthentication, function (req, res, next) {
  res.render('blank-page');
});

// Session öldürme işlemi ve oturumu sonlandırma
router.get('/logout', function (req, res, next) {
  req.session.destroy();
  res.redirect('/login');
});

//Altın Satma ve Alma İşlemlerinin Yapıldığı Sayfaya Yönlendirme
router.get('/altin-islem', middleware.requireAuthentication, function (req, res, next) {
  var viewData = {
    success: null
  }
  res.render('sat-satinal', { viewData: viewData });
});

//Altın Satma ve Alma İşlemlerinin Yapıldığı Kısım
router.post('/altin-islem-al', function (req, res, next) {


});

router.post('/altin-islem-sat', function (req, res, next) {

});

module.exports = router;
