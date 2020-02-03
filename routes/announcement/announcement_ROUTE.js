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


const mysql = require('mysql');
const mc = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
	user: 'root',
	password: '',
    database: 'clsupss_v2',
    dateStrings:true
});

var sess;
router.post('/insert-announcement', (req, res) => {
	sess = req.session;
	let query = "INSERT INTO `announcement` (`announcement_id`, `announcement_from`, `announcement_title`, `announcement_content`, `category`, `announcement_start_date`, `announcement_end_date`) VALUES (NULL, ?, ?, ?, ?, ?, ?)";
	let data = [
					sess.USER_ID,
					req.body.title,
					req.body.content,
					req.body.category,
					req.body.start,
					req.body.end
				];

	mc.query(query, data, (err, rows, fields) => {
		if(err){ res.json({ success:false, data:null }); }
		else{ res.jsonp({ success:true, data:rows }); }
	});

});

router.put('/update-announcement', (req, res) => {
	let query = "UPDATE `announcement` SET `announcement_content` = ?,announcement_title = ?, category = ?, announcement_start_date = ?, announcement_end_date = ? WHERE `announcement`.`announcement_id` = ?";
	let data = [
			req.body.content,
			req.body.title,
			req.body.category,
			req.body.start,
			req.body.end,
			req.body.a_id
	];
	mc.query(query, data, (err, rows, fields) => {
		if(err){ res.json({ success:false, data:null }); }
		else{ res.jsonp({ success:true, data:rows }); }
	});
});

router.delete('/delete-announcement', (req, res) => {
	let query = "DELETE FROM `announcement` WHERE `announcement`.`announcement_id` = ?";
	let data = [req.body.a_id];
	mc.query(query, data, (err, rows, fields) => {
		if(err){ res.json({ success:false, data:null }); }
		else{ res.jsonp({ success:true, data:rows }); }
	});
});

router.post('/fetch-announcement', (req, res) => {
	let query = "SELECT `users_table`.`User_name_FIELD`,`announcement`.* FROM `announcement`, `users_table` WHERE `announcement`.`announcement_from` = `users_table`.`User_id_FIELD`";

	mc.query(query, (err, rows, fields) =>{
		if(err){ res.json({ success:false, data:null }); }
		else{ res.jsonp({ success:true, data:rows }); }
	});
});

router.post('/fetch-previous-announcement', (req, res) => {
	let query = "select `users_table`.`User_name_FIELD` AS `User_name_FIELD`,`announcement`.`announcement_id` AS `announcement_id`,`announcement`.`announcement_from` AS `announcement_from`,`announcement`.`announcement_title` AS `announcement_title`,`announcement`.`announcement_content` AS `announcement_content`,`announcement`.`category` AS `category`,`announcement`.`announcement_start_date` AS `announcement_start_date`,`announcement`.`announcement_end_date` AS `announcement_end_date` from (`announcement` join `users_table`) where (`announcement`.`announcement_from` = `users_table`.`User_id_FIELD`) ORDER BY announcement_id DESC LIMIT 30";
	let data = [req.session.USER_ID];
	mc.query(query,data, (err, rows, fields) => {
		if(err){ res.json({ success:false, data:null }); }
		else{ res.jsonp({ success:true, data:rows }); }
	});

});

router.post('/fetch-notif-announcement', (req,res) => {
	//user_notif
	let query = "select DISTINCT(notification_id), `users_table`.`User_name_FIELD` AS `User_name_FIELD`,`notification_table`.`notification_id` AS `notification_id`,`notification_table`.`user_id_from` AS `user_id_from`,`notification_table`.`user_id_to` AS `user_id_to`,`notification_table`.`notification_type` AS `notification_type`,`notification_table`.`notification_content` AS `notification_content`,`notification_table`.`is_seen` AS `is_seen`,`notification_table`.`remarks` AS `remarks`,`notification_table`.`push_notif` AS `push_notif`,`notification_table`.`created_at` AS `created_at`,`notification_table`.`updated_at` AS `updated_at`,`notification_table`.`is_deleted` AS `is_deleted` from `notification_table` join `users_table` ON (`notification_table`.`user_id_from` = `users_table`.`User_id_FIELD`) LEFT JOIN `seen_announcement` ON `seen_announcement`.`notif_id` = `notification_table`.`notification_id` AND `seen_announcement`.`user_id` = ? ORDER BY notification_id DESC";
	let data = [req.session.USER_ID];
	mc.query(query,data,(err, rows, fields) => {
		if(err){ res.json({ success:false, data:null }); }
		else{ res.jsonp({ success:true, data:rows }); }
	});
});

router.post('/insert-seen-notif-an',(req, res) => {
	let query = "INSERT INTO `seen_announcement` (`seen_id`, `notif_id`, `user_id`, `unique_user_notif`) VALUES (NULL, ?, ?, CONCAT(?,?));";
	let data = [req.body.notif_id,
				req.session.USER_ID,
				req.body.notif_id,
				req.session.USER_ID
				];
			
	mc.query(query,data, (err, rows, fields) => {
		if(err){ res.json({ success:false, data:null }); }
		else{ res.jsonp({ success:true, data:rows }); }
	});
});

module.exports = router;