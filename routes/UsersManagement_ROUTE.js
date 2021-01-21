const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());


const dotenv = require('dotenv');
dotenv.config();
if (process.env.DEBUG === 'true') {
    const morgan = require('morgan');
    app.use(morgan('dev'));
}
const mysql = require('mysql');
const mc = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    dateStrings:true
});
router.get('/', function (req, res, next) {
	//mc.connect();
	mc.query('SELECT * FROM users_table', function (error, results, fields) {
		if (error) throw error;
		return res.send(results);
	});
	//mc.end();
});


router.post('/', function (req, res, next) {

	let name = req.body.name;
	let username = req.body.username;
	let password = req.body.password;
	let usertype = req.body.usertype;
	let position = req.body.position;
	let mainorgname = req.body.mainorgname;
	let suborgname = req.body.suborgname;
	let extorgname = req.body.extorgname;

	var query = {
        User_name_FIELD:name,
        User_username_FIELD:username,
        User_password_FIELD:password,
		User_usertype_FIELD:usertype,
		User_position_FIELD:position,
		User_entityBelongedMainOrganizationName_FIELD:mainorgname,
		User_entityBelongedSubOrganizationName_FIELD:suborgname,
		User_entityBelongedExtOrganizationName_FIELD:extorgname
	};
	//mc.connect();
	mc.query("INSERT INTO users_table SET ?", query, function (error, results, fields) {
		if (error) throw error;
		return res.send({
			error: false,
			data: results,
			message: 'New user has been added successfully.'
		});
	});
	//mc.end();
});


router.delete('/:userid', function (req, res, next) {
	let userid = req.params.userid;
	//mc.connect();
	mc.query('DELETE FROM users_table WHERE User_id_FIELD = ?',userid, function (error, results, fields) {
		if (error) throw error;
		res.send(results);
		res.end();
	});
	//mc.end();
});











router.put('/', function (req, res, next) {
	let userid = req.body.userid;
	let name = req.body.name;
	let username = req.body.username;
	let password = req.body.password;
	let usertype = req.body.usertype;
	let position = req.body.position;
	let mainorgname = req.body.mainorgname;
	let suborgname = req.body.suborgname;
	let extorgname = req.body.extorgname;


	var usertobeupdated = {
		User_id_FIELD: userid
	};
	var query = {
		User_name_FIELD: name,
		User_username_FIELD: username,
		User_password_FIELD: password,
		User_usertype_FIELD: usertype,
		User_position_FIELD:position,
		User_entityBelongedMainOrganizationName_FIELD:mainorgname,
		User_entityBelongedSubOrganizationName_FIELD:suborgname,
		User_entityBelongedExtOrganizationName_FIELD:extorgname
	};
	//mc.connect();
	mc.query("UPDATE users_table SET ? where ?;", [query, usertobeupdated],
		function (error, results, fields) {
			if (error) throw error;
				return res.send({
					error: false,
					data: results,
					message: 'Updated'
				});

		});
		//mc.end();

});



router.get('/getEndUsersOnly', function (req, res, next) {
	//mc.connect();
	mc.query("SELECT * FROM users_table where User_usertype_FIELD = 'End-user'", function (error, results, fields) {
		if (error) throw error;
		return res.send(results);
	});
	//mc.end();
});

module.exports = router;