const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const moment = require('moment');
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

router.post('/getEndUser', function (req, res, next) {
	//mc.connect();
	mc.query("SELECT * FROM users_table where User_usertype_FIELD = 'End-user'", function (error, results, fields) {
		if (error) throw error;
		return res.send(results);
	});
	//mc.end();
});

router.post('/getThePOEndUser', function (req, res, next) {
	let enduserid = req.body.enduserid;
	//mc.connect();
	mc.query("SELECT * FROM users_table where User_id_FIELD = ?",enduserid, function (error, results, fields) {
		if (error) throw error;
		return res.send(results);
	});
	//mc.end();
});

router.post('/searchEndUser', function (req, res, next) {
	let searchdata = req.body.searchdata;
	//mc.connect();
	mc.query("SELECT * FROM users_table where User_usertype_FIELD = 'End-user' and (User_name_FIELD LIKE '%"+searchdata+"%' OR User_username_FIELD LIKE '%"+searchdata+"%' OR User_position_FIELD LIKE '%"+searchdata+"%' OR User_entityBelongedMainOrganizationName_FIELD LIKE '%"+searchdata+"%' OR User_entityBelongedSubOrganizationName_FIELD LIKE '%"+searchdata+"%' OR User_entityBelongedExtOrganizationName_FIELD LIKE '%"+searchdata+"%')", function (error, results, fields) {
		if (error) throw error;
		return res.send(results);
	});
	//mc.end();
});






router.put('/setPOenduser', function (req, res, next) {
    let poid = req.body.poid;
    let enduserid = req.body.enduserid;


	var potobeassigned = {
		PMRpurchaseOrder_id_FIELD: poid
	};
	var query = {
		EndUser_id_FIELD: enduserid
	};
	//mc.connect();
	mc.query("UPDATE pmrpurchaseorders_table SET ? where ?", [query, potobeassigned],
		function (error, results, fields) {
			if (error) throw error;
				return res.send({
					error: false,
					data: results,
					message: 'Assigned'
				});

		});
		//mc.end();
});



router.post('/getTheEnduserPOdetails', function (req, res, next) {
	let poid = req.body.poid;
	//mc.connect();
	mc.query("SELECT * FROM pmrpurchaseorders_table where PMRpurchaseOrder_id_FIELD = ?",poid, function (error, results, fields) {
		if (error) throw error;
		for (var i in results) {
			results[i].PMRpurchaseOrder_noticeOfAward_FIELD = moment(results[i].PMRpurchaseOrder_noticeOfAward_FIELD).format('DD/MM/YYYY');
			results[i].PMRpurchaseOrder_contractSigningOrApprovePO_FIELD = moment(results[i].PMRpurchaseOrder_contractSigningOrApprovePO_FIELD).format('DD/MM/YYYY');
			results[i].PMRpurchaseOrder_deliveryOrCompletion_FIELD = moment(results[i].PMRpurchaseOrder_deliveryOrCompletion_FIELD).format('DD/MM/YYYY');
		}
		return res.send(results);
	});
	//mc.end();
});
module.exports = router;