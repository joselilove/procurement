// jshint esversion:6
const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true}));
// for design purpose
router.use('/assets', express.static('assets'));
router.use('/dist', express.static('dist'));
// end design


// const mysql = require('mysql');
// const mc = mysql.createConnection({
//     host: 'remotemysql.com',
//     port: 3306,
// 	user: 'vo6Y22GxMl',
// 	password: 'MJLRm98c18',
//     dateStrings:true,
// 	database: 'vo6Y22GxMl'
// });

// mc.connect();
var sess;

router.get('/get_current_user_name', (req, res) => {
    sess = req.session;
    res.send(sess.NAME);
});

router.get('/get_user_type', (req, res) => {
    sess = req.session;
    res.send(sess.USER_TYPE);
});


module.exports = router;