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
    host: 'remotemysql.com',
    port: 3306,
	user: '06mRCeMcht',
	password: 'fG9fFHhXpL',
    database: '06mRCeMcht',
    dateStrings:true
});

router.get('/', (req, res) => {
	res.render('pages/ppmp_mod_approval_PAGE.ejs');
});

router.post('/select-submitted-req', (req, res) => {
	//mod_req_join
	let query = "select `ppmps_mod_request`.`PPMP_id_mod` AS `PPMP_id_mod`,`ppmps_mod_request`.`PPMP_id` AS `PPMP_id`,`ppmps_mod_request`.`user_id` AS `user_id`,`ppmps_mod_request`.`PPMP_req_status` AS `PPMP_req_status`,`ppmps_mod_request`.`req_submitted` AS `req_submitted`,`ppmps_mod_request`.`ppmps_mod_remark` AS `ppmps_mod_remark`,`ppmps_mod_request`.`updated_at` AS `updated_at`,`users_table`.`User_name_FIELD` AS `User_name_FIELD`,`ppmps_table`.`PPMP_defaultItemsType_FIELD` AS `PPMP_defaultItemsType_FIELD`,`ppmps_table`.`PPMP_year_FIELD` AS `PPMP_year_FIELD`,`ppmps_table`.`PPMP_entityFirstTradeMark_FIELD` AS `PPMP_entityFirstTradeMark_FIELD`,`ppmps_table`.`PPMP_entitySecondTradeMark_FIELD` AS `PPMP_entitySecondTradeMark_FIELD` from `ppmps_mod_request` join `users_table` join `ppmps_table` where ((`ppmps_mod_request`.`PPMP_id` = `ppmps_table`.`PPMP_id_FIELD`) and (`ppmps_mod_request`.`user_id` = `users_table`.`User_id_FIELD`)) AND req_submitted = 'yes'";
	//mc.connect();
	mc.query(query, (err, rows, fields) => {
		if(err){ res.jsonp({ success:false, data:null }); }
		else{ res.jsonp({ success:true, data:rows }); }
	});
	//mc.end();
});

router.delete('/delete-current-submitted-ppmp', (req, res) => {
	let query = "DELETE FROM `ppmpitems_table` WHERE `ppmpitems_table`.`PPMP_id_FIELD` = ?";
	let data = [req.body.ppmp_id];
	//mc.connect();
	mc.query(query, data,(err, rows, fields) => {
		if(err){ res.jsonp({ success:false, data:null }); }
		else{ res.jsonp({ success:true, data:rows }); }
	});
	//mc.end();
});
router.post('/insert-approved-mod-req', (req, res) => {
	let query = "INSERT INTO `ppmpitems_table` (`ppmpitems_table`.`Item_id_FIELD`, `ppmpitems_table`.`PPMPItem_fstQtrQty_FIELD`, `ppmpitems_table`.`PPMPItem_scdQtrQty_FIELD`, `ppmpitems_table`.`PPMPItem_trdQtrQty_FIELD`,`ppmpitems_table`.`PPMPItem_frtQtrQty_FIELD`, `ppmpitems_table`.`PPMPItem_noteOrRemarks_FIELD`, `ppmpitems_table`.`PPMP_id_FIELD`) SELECT `ppmpitem_mod`.`Item_id_FIELD`, `ppmpitem_mod`.`PPMPItem_fstQtrQty_FIELD`, `ppmpitem_mod`.`PPMPItem_scdQtrQty_FIELD`, `ppmpitem_mod`.`PPMPItem_trdQtrQty_FIELD`, `ppmpitem_mod`.`PPMPItem_frtQtrQty_FIELD`, `ppmpitem_mod`.`PPMPItem_note`, `ppmpitem_mod`.`PPMP_id` FROM `ppmpitem_mod` WHERE `ppmpitem_mod`.`PPMP_id_mod` = ? AND `ppmpitem_mod`.`PPMP_id` = ?";
	let data = [
				req.body.mod_id,
				req.body.ppmp_id
				];
				//mc.connect();
	mc.query(query, data,(err, rows, fields) => {
		if(err){ res.jsonp({ success:false, data:null }); }
		else{ res.jsonp({ success:true, data:rows }); }
	});
	//mc.end();
});

router.post('/response-mod-req', (req, res) => {
	let query = "UPDATE `ppmps_mod_request` SET `PPMP_req_status` = ? WHERE `ppmps_mod_request`.`PPMP_id_mod` = ?";
	let data = [req.body.mod_status,
				req.body.mod_id];
				//mc.connect();
	mc.query(query, data,(err, rows, fields) => {
		if(err){ res.jsonp({ success:false, data:null }); }
		else{ res.jsonp({ success:true, data:rows }); }
	});
	//mc.end();
});
router.post('/update-date-submitted', (req, res) => {
	let query = "UPDATE `ppmps_table` SET PPMP_date_submitted = CURRENT_TIMESTAMP WHERE `ppmps_table`.`PPMP_id_FIELD` = ?";
	let data = [req.body.ppmp_id];
	//mc.connect();
	mc.query(query, data, (err, rows, fields) => {
		if(err){ res.jsonp({ success: false, data: rows }); }
		else{ res.jsonp({ success: true, data: rows }); }
	});
	//mc.end();
});

router.delete('/delete_mod_item', (req, res) => {
	let query = "DELETE FROM `ppmpitem_mod` WHERE `ppmpitem_mod`.`PPMP_id` = ?";
	let data = [req.body.ppmp_id];
	//mc.connect();
	mc.query(query, data, (err, rows, fields) => {
		if(err){ res.jsonp({ success: false, data: rows }); }
		else{ res.jsonp({ success: true, data: rows }); }
	});
	//mc.end();
});

router.post('/set-remark-mod',(req,res) => {
	let query = "UPDATE `ppmps_mod_request` SET `ppmps_mod_remark` = ? WHERE `ppmps_mod_request`.`PPMP_id_mod` = ?";
	let data = [req.body.remark, req.body.mod_id];
	//mc.connect();
	mc.query(query, data, (err, rows, fields) => {
		if(err){ res.jsonp({ success: false, data: rows }); }
		else{ res.jsonp({ success: true, data: rows }); }
	});
	//mc.end();
});

module.exports = router;