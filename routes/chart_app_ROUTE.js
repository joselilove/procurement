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

// //mc.connect();

router.get('/fetch_all_item', (req, res) => {
	let query = "SELECT Item_id_FIELD ,Item_generalDescription_FIELD, Item_units_FIELD, Item_unitPrice_FIELD, Item_type_FIELD FROM `items_table` WHERE `items_table`.`Item_type_FIELD` LIKE '%%' ";
	//mc.connect();
	mc.query(query,(err, rows,fields) => {
		if(err){ res.json({ success: false, data:null }); }
		else{ res.json( { success: true, data:rows } ); }
        res.end();
	});
	//mc.end();
});

router.get('/select_ppmp_consolidated', (req, res)=>{
	//ppmp consolidation
	let query = "select `ppmpitems_table`.`PPMP_id_FIELD` AS `PPMP_id_FIELD`,`ppmpitems_table`.`PPMPItem_id_FIELD` AS `PPMPItem_id_FIELD`,`ppmpitems_table`.`Item_id_FIELD` AS `Item_id_FIELD`,`ppmpitems_table`.`PPMPItem_fstQtrQty_FIELD` AS `PPMPItem_fstQtrQty_FIELD`,`ppmpitems_table`.`PPMPItem_scdQtrQty_FIELD` AS `PPMPItem_scdQtrQty_FIELD`,`ppmpitems_table`.`PPMPItem_trdQtrQty_FIELD` AS `PPMPItem_trdQtrQty_FIELD`,`ppmpitems_table`.`PPMPItem_frtQtrQty_FIELD` AS `PPMPItem_frtQtrQty_FIELD`,`ppmps_table`.`PPMP_year_FIELD` AS `PPMP_year_FIELD`,`ppmps_table`.`PPMP_entityFirstTradeMark_FIELD` AS `PPMP_entityFirstTradeMark_FIELD`,`ppmps_table`.`PPMP_entitySecondTradeMark_FIELD` AS `PPMP_entitySecondTradeMark_FIELD`,`ppmps_table`.`PPMP_entityThirdTradeMark_FIELD` AS `PPMP_entityThirdTradeMark_FIELD`,`ppmps_table`.`PPMP_defaultItemsType_FIELD` AS `PPMP_defaultItemsType_FIELD`,`ppmps_table`.`submitted` AS `submitted`,`ppmps_table`.`User_id_FIELD` AS `User_id_FIELD`,`ppmps_table`.`PPMP_status` AS `PPMP_status` from (`ppmpitems_table` join `ppmps_table` on((`ppmps_table`.`PPMP_id_FIELD` = `ppmpitems_table`.`PPMP_id_FIELD`))) WHERE submitted = 'yes' AND PPMP_status = 'approved'";
	//mc.connect();
	mc.query(query,(err, rows, fields)=>{
		if(err){ res.json( {success:false, data:null} ); }
		else{ res.jsonp( {success:true, data: rows} ); }
	});
	//mc.end();
});

router.get('/select_year_available', (req, res) => {
	//mixed app - no bugs
    let query = "select DISTINCT(PPMP_year_FIELD) from `ppmps_table` WHERE submitted = 'yes' ORDER BY `PPMP_year_FIELD` ASC";
	//mc.connect();
    mc.query(query, (err, rows, fields) => {
        if(err){ res.json( {success:false, data:null} ); }
		else{ res.jsonp( {success:true, data: rows} ); }
	});
	//mc.end();
});

router.post('/select-filter_year_available', (req, res) => {
	//mixed app - no bugs
    let query = "SELECT DISTINCT(PPMP_year_FIELD) FROM `ppmps_table` WHERE submitted = 'yes' AND PPMP_year_FIELD >= ? AND PPMP_year_FIELD <= ? ORDER BY `PPMP_year_FIELD` ASC";
    let data = [
            req.body.start,
            req.body.end
    ];
    //mc.connect();
    mc.query(query,data,(err, rows, fields) => {
        if(err){ res.json( {success:false, data:null} ); }
		else{ res.jsonp( {success:true, data: rows} ); }
	});
	//mc.end();
});


router.post('/count-cse-submitted-ppmp', (req, res) => {
	let query = "SELECT COUNT(*) as total_cse FROM `ppmps_table` WHERE submitted = 'yes' AND PPMP_status = 'approved' AND PPMP_defaultItemsType_FIELD = 'CSE' AND PPMP_year_FIELD = YEAR(CURRENT_TIMESTAMP)";
	//mc.connect();
	mc.query(query, (err, rows, fields) => {
		if(err){ res.json( {success:false, data:null} ); }
		else{ res.send( rows[0] ); }
	});
	//mc.end();
});

router.post('/count-non-cse-submitted-ppmp', (req, res) => {
	let query = "SELECT COUNT(*) as total_non_cse FROM `ppmps_table` WHERE submitted = 'yes' AND PPMP_status = 'approved' AND PPMP_defaultItemsType_FIELD = 'Non-CSE' AND PPMP_year_FIELD = YEAR(CURRENT_TIMESTAMP)";
	//mc.connect();
	mc.query(query, (err, rows, fields) => {
		if(err){ res.json( {success:false, data:null} ); }
		else{ res.send( rows[0] ); }
	});
	//mc.end();
});

router.post('/count-non-cse-item', (req, res) => {
	let query = "SELECT COUNT(*) as total_item_non_cse FROM `items_table` WHERE Item_type_FIELD = 'Non-CSE'";
	//mc.connect();
	mc.query(query, (err, rows, fields) => {
		if(err){ res.json( {success:false, data:null} ); }
		else{ res.send( rows[0] ); }
	});
	//mc.end();
});

router.post('/count-cse-item', (req, res) => {
	let query = "SELECT COUNT(*) as total_item_cse FROM `items_table` WHERE Item_type_FIELD = 'CSE'";
	//mc.connect();
	mc.query(query, (err, rows, fields) => {
		if(err){ res.json( {success:false, data:null} ); }
		else{ res.send( rows[0] ); }
	});
	//mc.end();
});


module.exports = router;