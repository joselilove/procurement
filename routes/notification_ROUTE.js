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


const dotenv = require('dotenv');
dotenv.config();
const mysql = require('mysql');
const mc = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    dateStrings:true
});

router.post('/insert_notification', (req, res) => {
    sess = req.session;
    user_id_from = sess.USER_ID;
    user_name = sess.NAME;
    let query = "INSERT INTO `notification_table` (`notification_id`, `user_id_from`, `user_id_to`, `notification_type`, `notification_content`, `is_seen`, `remarks` ,`created_at`, `updated_at`, `is_deleted`) VALUES (NULL, ?, ?, ?, ?, '0',? ,CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '0')";
    let data = [
                user_id_from,
                parseInt(req.body.user_id_to),
                req.body.notif_type,
                req.body.notif_content+user_name,
                req.body.remarks
                ];
                //mc.connect();
    mc.query(query, data,(err, rows, fields) => {
        if(err){ res.json({ success:false, data:null }); }
        else{ res.json({ success:true, data: rows }); }
    });
    //mc.end();
});

router.post('/insert_notification_announce', (req, res) => {
    sess = req.session;
    user_id_from = sess.USER_ID;
    user_name = sess.NAME;
    let query = "INSERT INTO `notification_table` (`notification_id`, `user_id_from`, `user_id_to`, `notification_type`, `notification_content`, `is_seen`, `remarks` ,`created_at`, `updated_at`, `is_deleted`) VALUES (NULL, ?, ?, ?, ?, '0',? ,CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '0')";
    let data = [
                user_id_from,
                parseInt(req.body.user_id_to),
                req.body.notif_type,
                req.body.notif_content,
                req.body.remarks
                ];
                //mc.connect();
    mc.query(query, data,(err, rows, fields) => {
        if(err){ res.json({ success:false, data:null }); }
        else{ res.json({ success:true, data: rows }); }
    });
    //mc.end();
});

router.post('/insert_notification_to_admin', (req, res) => {
    sess = req.session;
    user_id_from = sess.USER_ID;
    user_name = sess.NAME;
    let query = "INSERT INTO `notification_table` (`notification_id`, `user_id_from`, `user_id_to`, `notification_type`, `notification_content`, `is_seen`, `remarks` ,`created_at`, `updated_at`, `is_deleted`) VALUES (NULL, ?, NULL, ?, ?, '0',? ,CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '0')";
    let data = [
                user_id_from,
                req.body.notif_type,
                user_name+req.body.notif_content,
                req.body.remarks
                ];
                //mc.connect();
    mc.query(query, data,(err, rows, fields) => {
        if(err){ res.json({ success:false, data:null }); }
        else{ res.json({ success:true, data: rows }); }
    });
    //mc.end();
});

router.post('/fetch_user_notification', (req, res) =>{
    sess = req.session;
    let query;
    if(sess.USER_TYPE == 'Administrator'){
        query = "SELECT * FROM `notification_table` WHERE user_id_to is NULL ORDER BY notification_id DESC";
    }else{
        query = "SELECT * FROM `notification_table` WHERE user_id_to = ?  ORDER BY notification_id DESC";
    }
    let data = [sess.USER_ID];
    //mc.connect();
    mc.query(query, data, (err, rows, fields) => {
        if(err){ res.json({ success: false, data: null }); }
        else{ res.json({ success: true, data: rows }); }
    });
    //mc.end();
});

router.post('/seen_notif', (req, res) => {
    let query = "UPDATE `notification_table` SET `is_seen` = '1' WHERE `notification_table`.`notification_id` = ?";
    let data = [req.body.notif_id];
    //mc.connect();
    mc.query(query, data, (err, rows, fields) => {
        if(err){ res.json({ success: false, data: null }); }
        else{ res.json({ success: true, data: rows }); }
    });
    //mc.end();
});

module.exports = router;