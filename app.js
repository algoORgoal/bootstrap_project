const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
res.sendFile(path.join(__dirname + '/index.html'));
//__dirname : It will resolve to your project folder.
});

//static links for Byeolchan
router.get('/bootstrap01_byeolchan', function (req, res) {
res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/bootstrap01.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/bootstrap02_byeolchan', function (req, res) {
res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/bootstrap02.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/bootstrap03_byeolchan', function (req, res) {
res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/bootstrap03.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/bootstrap04_byeolchan', function (req, res) {
res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/bootstrap04.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/bootstrap05_byeolchan', function (req, res) {
res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/bootstrap05.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/bootstrap06_byeolchan', function (req, res) {
res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/bootstrap06.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/bootstrap07_byeolchan', function (req, res) {
res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/bootstrap07.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/bootstrap08_byeolchan', function (req, res) {
res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/bootstrap08.html'));
//__dirname : It will resolve to your project folder.
});
    
router.get('/bootstrap09_byeolchan', function (req, res) {
res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/bootstrap09.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/bootstra10_byeolchan', function (req, res) {
res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/bootstrap10.html'));
//__dirname : It will resolve to your project folder.
});


//static links for Junguk
//Your code goes here...
router.get('/colors-images', function (req, res) {
res.sendFile(path.join(__dirname + '../views/bootstrap_junguk/colors-images.html'));
//__dirname : It will resolve to your project folder.
});


    

app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))