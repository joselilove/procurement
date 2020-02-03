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
router.get('/', (req, res) => {
	res.render('pages/ppmp_mod_req_PAGE.ejs');
});

router.post('/submitted-ppmp', (req, res) =>{
	sess = req.session;
	let query = "SELECT `ppmps_table`.* FROM `ppmps_table` WHERE `ppmps_table`.`PPMP_id_FIELD` NOT IN ( SELECT `ppmps_mod_request`.`PPMP_id` FROM `ppmps_mod_request`  WHERE `ppmps_mod_request`.`PPMP_req_status` = 'pending') AND `ppmps_table`.`User_id_FIELD` = ? AND `ppmps_table`.`submitted` = 'yes'";
	let data = [sess.USER_ID];
	//mc.connect();
	mc.query(query, data, (err, rows, fields) => {
		if(err){ res.jsonp({ success:false, data:null }); }
		else{ res.jsonp({ success:true, data: rows }); }
	});
	//mc.end();
});

router.post('/create-mod-req', (req, res) => {
	sess = req.session;
	let query = "INSERT INTO `ppmps_mod_request` (`PPMP_id_mod`, `PPMP_id`,`user_id` ,`PPMP_req_status`, `req_submitted`, `ppmps_mod_remark`, `created_at`, `updated_at`) VALUES (NULL, ?, ? ,'pending', 'no', '', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);";
	let data = [req.body.ppmp_id,
				sess.USER_ID];
		//mc.connect();
	mc.query(query, data, (err, rows, fields) => {
		if(err){ res.jsonp({ success:false, data:null }); }
		else{ res.jsonp({ success:true, data: rows }); }
	});
	//mc.end();
});

router.post('/select-modification-request', (req, res) => {
	sess = req.session;
	//modification request
	let query = "select `ppmps_table`.`PPMP_defaultItemsType_FIELD` AS `PPMP_defaultItemsType_FIELD`,`ppmps_mod_request`.`choose_insertion` AS `choose_insertion`,`ppmps_mod_request`.`PPMP_id_mod` AS `PPMP_id_mod`,`ppmps_mod_request`.`req_submitted` AS `req_submitted`,`ppmps_mod_request`.`PPMP_req_status` AS `PPMP_req_status`,`ppmps_mod_request`.`PPMP_id` AS `PPMP_id`,`ppmps_mod_request`.`user_id` AS `user_id`,`ppmps_table`.`PPMP_year_FIELD` AS `PPMP_year_FIELD`,`ppmps_table`.`PPMP_endUserName_FIELD` AS `PPMP_endUserName_FIELD`,`ppmps_table`.`PPMP_entityFirstTradeMark_FIELD` AS `PPMP_entityFirstTradeMark_FIELD`,`ppmps_table`.`PPMP_entitySecondTradeMark_FIELD` AS `PPMP_entitySecondTradeMark_FIELD`,`ppmps_mod_request`.`created_at` AS `created_at` from `ppmps_table` join `ppmps_mod_request` where (`ppmps_mod_request`.`PPMP_id` = `ppmps_table`.`PPMP_id_FIELD`) AND user_id = ? AND req_submitted = 'no'";
	let data = [sess.USER_ID];
	//mc.connect();
	mc.query(query, data, (err, rows,fields) => {
		if(err){ res.jsonp({ success: false, data: rows }); }
		else{ res.jsonp({ success: true, data: rows }); }
	});
	//mc.end();
});

router.post('/select-submitted-modification-request', (req, res) => {
	sess = req.session;
	let query = "select `ppmps_table`.`PPMP_defaultItemsType_FIELD` AS `PPMP_defaultItemsType_FIELD`,`ppmps_mod_request`.`choose_insertion` AS `choose_insertion`,`ppmps_mod_request`.`PPMP_id_mod` AS `PPMP_id_mod`,`ppmps_mod_request`.`req_submitted` AS `req_submitted`,`ppmps_mod_request`.`PPMP_req_status` AS `PPMP_req_status`,`ppmps_mod_request`.`PPMP_id` AS `PPMP_id`,`ppmps_mod_request`.`user_id` AS `user_id`,`ppmps_table`.`PPMP_year_FIELD` AS `PPMP_year_FIELD`,`ppmps_table`.`PPMP_endUserName_FIELD` AS `PPMP_endUserName_FIELD`,`ppmps_table`.`PPMP_entityFirstTradeMark_FIELD` AS `PPMP_entityFirstTradeMark_FIELD`,`ppmps_table`.`PPMP_entitySecondTradeMark_FIELD` AS `PPMP_entitySecondTradeMark_FIELD`,`ppmps_mod_request`.`created_at` AS `created_at` from `ppmps_table` join `ppmps_mod_request` where (`ppmps_mod_request`.`PPMP_id` = `ppmps_table`.`PPMP_id_FIELD`) AND user_id = ? AND req_submitted = 'yes' AND `PPMP_req_status` = 'pending'";
	let data = [sess.USER_ID];
	//mc.connect();
	mc.query(query, data, (err, rows,fields) => {
		if(err){ res.jsonp({ success: false, data: rows }); }
		else{ res.jsonp({ success: true, data: rows }); }
	});
	//mc.end();
});

router.delete('/delete-current-req-work', (req,res) => {
	let query = "DELETE FROM `ppmps_mod_request` WHERE `ppmps_mod_request`.`PPMP_id_mod` = ?";
	let data = [req.body.mod_id];
	delete_item_current_req_work(data);
	//mc.connect();
	mc.query(query, data, (err, rows, fields) => {
		if(err){ res.jsonp({ success: false, data: rows }); }
		else{ res.jsonp({ success: true, data: rows }); }
	});
	//mc.end();
});

function delete_item_current_req_work(data){
	let query = "DELETE FROM `ppmpitem_mod` WHERE `ppmpitem_mod`.`PPMP_id_mod` = ?";
	//mc.connect();
	mc.query(query,data, (err, rows, fields)=>{});
	//mc.end();
}

router.post('/submit-mod-req', (req, res) => {
	let query = "UPDATE `ppmps_mod_request` SET `req_submitted` = 'yes' WHERE `ppmps_mod_request`.`PPMP_id_mod` = ?";
	let data = [req.body.mod_id];
	//mc.connect();
	mc.query(query, data, (err, rows, fields) => {
		if(err){ res.jsonp({ success: false, data: rows }); }
		else{ res.jsonp({ success: true, data: rows }); }
	});
	//mc.end();
});

router.post('/reverse-submit-mod-req', (req, res) => {
	let query = "UPDATE `ppmps_mod_request` SET `req_submitted` = 'no' WHERE `ppmps_mod_request`.`PPMP_id_mod` = ?";
	let data = [req.body.mod_id];
	//mc.connect();
	mc.query(query, data, (err, rows, fields) => {
		if(err){ res.jsonp({ success: false, data: rows }); }
		else{ res.jsonp({ success: true, data: rows }); }
	});
	//mc.end();
});

router.post('/use_previous_ppmp_for_mod', (req, res) => {
	let query = "INSERT INTO `ppmpitem_mod` (`ppmpitem_mod`.`PPMP_id_mod`, `ppmpitem_mod`.`PPMP_id`, `ppmpitem_mod`.`Item_id_FIELD`, `ppmpitem_mod`.`PPMPItem_fstQtrQty_FIELD`, `ppmpitem_mod`.`PPMPItem_scdQtrQty_FIELD`, `ppmpitem_mod`.`PPMPItem_trdQtrQty_FIELD`, `ppmpitem_mod`.`PPMPItem_frtQtrQty_FIELD`, `ppmpitem_mod`.`PPMPItem_note`) select `ppmps_mod_request`.`PPMP_id_mod` AS `PPMP_id_mod`,`ppmpitems_table`.`PPMP_id_FIELD` AS `PPMP_id_FIELD`,`ppmpitems_table`.`Item_id_FIELD` AS `Item_id_FIELD`,`ppmpitems_table`.`PPMPItem_fstQtrQty_FIELD` AS `PPMPItem_fstQtrQty_FIELD`,`ppmpitems_table`.`PPMPItem_scdQtrQty_FIELD` AS `PPMPItem_scdQtrQty_FIELD`,`ppmpitems_table`.`PPMPItem_trdQtrQty_FIELD` AS `PPMPItem_trdQtrQty_FIELD`,`ppmpitems_table`.`PPMPItem_frtQtrQty_FIELD` AS `PPMPItem_frtQtrQty_FIELD`,`ppmpitems_table`.`PPMPItem_noteOrRemarks_FIELD` AS `PPMPItem_noteOrRemarks_FIELD` from (`ppmpitems_table` join `ppmps_mod_request` on((`ppmpitems_table`.`PPMP_id_FIELD` = `ppmps_mod_request`.`PPMP_id`))) WHERE `ppmpitems_table`.`PPMP_id_FIELD` = ? AND `ppmps_mod_request`.`PPMP_id_mod` = ?";
	let data = [req.body.ppmp_id,
				req.body.mod_id];
				//mc.connect();
	mc.query(query, data, (err, rows, fields) => {
		if(err){ res.jsonp({ success: false, data: rows }); }
		else{ res.jsonp({ success: true, data: rows }); }
	});
	//mc.end();
});

router.post('/choose_insertion_status', (req, res) => {
	let query = "UPDATE `ppmps_mod_request` SET `choose_insertion` = 'false' WHERE `ppmps_mod_request`.`PPMP_id_mod` = ?";
	let data = [req.body.ppmp_id_mod];
	//mc.connect();
	mc.query(query, data, (err, rows, fields) => {
		if(err){ res.jsonp({ success: false, data: rows }); }
		else{ res.jsonp({ success: true, data: rows }); }
	});
	//mc.end();
});	

module.exports = router;