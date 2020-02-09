const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());




const mysql = require('mysql');
const mc = mysql.createConnection({
    host: 'remotemysql.com',
    port: 3306,
	user: '06mRCeMcht',
	password: 'fG9fFHhXpL',
    database: '06mRCeMcht',
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