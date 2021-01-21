const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());




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


router.post('/', function (req, res, next) {
	mc.query('SELECT * FROM vouchers_table', function (error, results, fields) {
		if (error) throw error;
		return res.send(results);
	});
});






router.post('/AddVouch', function (req, res, next) {

	let code = req.body.code;
	

	var query = {
        Voucher_code_FIELD:code
	};

	mc.query("INSERT INTO vouchers_table SET ?", query, function (error, results, fields) {
		if (error) throw error;
		return res.send({
			error: false,
			data: results,
			message: 'New voucher has been added successfully.'
		});
	});
});




router.delete('/DelVouch/:vouchid', function (req, res, next) {
	let vouchid = req.params.vouchid;
	console.log(vouchid);
	mc.query('DELETE FROM vouchers_table WHERE Voucher_id_FIELD = ?',vouchid, function (error, results, fields) {
		if (error) throw error;
		res.send(results);
		res.end();
	});
});

module.exports = router;