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

router.get('/', (req, res) => {
	res.render('pages/PPMP_consolidation.ejs');
});

router.post('/fetch_all_item', (req, res) => {
	let query = "SELECT Item_id_FIELD ,Item_generalDescription_FIELD, Item_units_FIELD, Item_unitPrice_FIELD, Item_type_FIELD FROM `items_table` WHERE `items_table`.`Item_type_FIELD` LIKE ? ";
	let data = [req.body.item_type];
	//mc.connect();
	mc.query(query,data, (err, rows,fields) => {
		if(err){ res.json({ success: false, data:null }); }
		else{ res.json( { success: true, data:rows } ); }
        res.end();
	});
	//mc.end();
});

router.get('/fetch_all_1st_trade_mark', (req, res) => {
	let query = "SELECT DISTINCT `ppmps_table`.`PPMP_entityFirstTradeMark_FIELD` FROM `ppmps_table` WHERE `ppmps_table`.`submitted` = 'yes'";
	//mc.connect();
	mc.query(query, (err, rows,fields) => {
		if(err){ res.json( {success: false, data:null} ); }
		else{ res.json( {success:true, data: rows} ); }
		res.end();
	});
	//mc.end();
});


router.get('/select_cse_app_list', (req, res) => {
	let query = "select distinct `ppmps_table`.`PPMP_entityFirstTradeMark_FIELD` AS `PPMP_entityFirstTradeMark_FIELD`,`ppmps_table`.`PPMP_year_FIELD` AS `PPMP_year_FIELD`,`ppmps_table`.`PPMP_defaultItemsType_FIELD` AS `PPMP_defaultItemsType_FIELD`,`ppmps_table`.`submitted` AS `submitted` from `ppmps_table` WHERE PPMP_defaultItemsType_FIELD = 'CSE' AND submitted = 'yes' order by `ppmps_table`.`PPMP_year_FIELD` desc";
	//mc.connect();
	mc.query(query, (err, rows, fields) => {
		if(err){ res.json( {success:false, data:null} ); }
		else{ res.json( {success:true, data: rows} ); }
	});
	//mc.end();
});

router.post('/filter_cse_app_list', (req, res) => {
	let data = [
			req.body.ppmp_program,
			req.body.ppmp_year
	];
	year 	= 'AND';
	program = 'AND';
	if(req.body.ppmp_year == undefined){
		year 	= 'OR';
	}
	if(req.body.ppmp_program == undefined){
		program = 'OR';
	}
	let query = "select distinct `ppmps_table`.`PPMP_entityFirstTradeMark_FIELD` AS `PPMP_entityFirstTradeMark_FIELD`,`ppmps_table`.`PPMP_year_FIELD` AS `PPMP_year_FIELD`,`ppmps_table`.`PPMP_defaultItemsType_FIELD` AS `PPMP_defaultItemsType_FIELD`,`ppmps_table`.`submitted` AS `submitted` from `ppmps_table` WHERE PPMP_defaultItemsType_FIELD = 'CSE' AND submitted = 'yes' AND (PPMP_entityFirstTradeMark_FIELD LIKE '%%' "+program+" PPMP_entityFirstTradeMark_FIELD IN (?)) AND (PPMP_year_FIELD LIKE '%%' "+year+" PPMP_year_FIELD IN (?)) order by `ppmps_table`.`PPMP_year_FIELD` desc";
	//mc.connect();
	mc.query(query, data, (err, rows, fields) => {
		if(err){ res.json( {success:false, data:null} ); }
		else{ res.json( {success:true, data: rows} ); }
	});
	//mc.end();
});

router.get('/select_non_cse_app_list', (req, res) => {
	let query = "select distinct `ppmps_table`.`PPMP_entityFirstTradeMark_FIELD` AS `PPMP_entityFirstTradeMark_FIELD`,`ppmps_table`.`PPMP_year_FIELD` AS `PPMP_year_FIELD`,`ppmps_table`.`PPMP_defaultItemsType_FIELD` AS `PPMP_defaultItemsType_FIELD`,`ppmps_table`.`submitted` AS `submitted` from `ppmps_table` WHERE PPMP_defaultItemsType_FIELD = 'Non-CSE' AND submitted = 'yes' order by `ppmps_table`.`PPMP_year_FIELD` desc";
	//mc.connect();
	mc.query(query, (err, rows, fields) => {
		if(err){ res.json( {success:false, data:null} ); }
		else{ res.json( {success:true, data: rows} ); }
	});
	//mc.end();
});

router.post('/filter_non_cse_app_list', (req, res) => {
	let data = [
			req.body.ppmp_program,
			req.body.ppmp_year
	];
	year 	= 'AND';
	program = 'AND';
	if(req.body.ppmp_year == undefined){
		year 	= 'OR';
	}
	if(req.body.ppmp_program == undefined){
		program = 'OR';
	}
	let query = "select distinct `ppmps_table`.`PPMP_entityFirstTradeMark_FIELD` AS `PPMP_entityFirstTradeMark_FIELD`,`ppmps_table`.`PPMP_year_FIELD` AS `PPMP_year_FIELD`,`ppmps_table`.`PPMP_defaultItemsType_FIELD` AS `PPMP_defaultItemsType_FIELD`,`ppmps_table`.`submitted` AS `submitted` from `ppmps_table` WHERE PPMP_defaultItemsType_FIELD = 'Non-CSE' AND submitted = 'yes' AND (PPMP_entityFirstTradeMark_FIELD LIKE '%%' "+program+" PPMP_entityFirstTradeMark_FIELD IN (?)) AND (PPMP_year_FIELD LIKE '%%' "+year+" PPMP_year_FIELD IN (?)) order by `ppmps_table`.`PPMP_year_FIELD` desc";
	//mc.connect();
	mc.query(query, data, (err, rows, fields) => {
		if(err){ res.json( {success:false, data:null} ); }
		else{ res.json( {success:true, data: rows} ); }
	});
	//mc.end();
});

router.get('/select_app_list', (req, res) => {
	//mixed app
	let query = "select DISTINCT(concat(`ppmps_table`.`PPMP_entityFirstTradeMark_FIELD`,`ppmps_table`.`PPMP_year_FIELD`)) AS `ppmp_con`,`ppmps_table`.`PPMP_entityFirstTradeMark_FIELD` AS `PPMP_entityFirstTradeMark_FIELD`,`ppmps_table`.`PPMP_year_FIELD` AS `PPMP_year_FIELD`,`ppmps_table`.`submitted` AS `submitted` from ppmps_table WHERE submitted = 'yes' order by `ppmps_table`.`PPMP_year_FIELD` desc";
	//mc.connect();
	mc.query(query, (err, rows, fields) => {
		if(err){ res.json( {success:false, data:null} ); }
		else{ res.json( {success:true, data: rows} ); }
	});
	//mc.end();
});

router.post('/filter_app_list', (req, res) => {
	let data = [
			req.body.ppmp_program,
			req.body.ppmp_year
	];
	year 	= 'AND';
	program = 'AND';

	if(req.body.ppmp_year == undefined){
		year 	= 'OR';
	}
	if(req.body.ppmp_program == undefined){
		program = 'OR';
	}
	//mixed app
	let query = "select DISTINCT(concat(`ppmps_table`.`PPMP_entityFirstTradeMark_FIELD`,`ppmps_table`.`PPMP_year_FIELD`)) AS `ppmp_con`,`ppmps_table`.`PPMP_entityFirstTradeMark_FIELD` AS `PPMP_entityFirstTradeMark_FIELD`,`ppmps_table`.`PPMP_year_FIELD` AS `PPMP_year_FIELD`,`ppmps_table`.`submitted` AS `submitted` from ppmps_table WHERE submitted = 'yes' AND (PPMP_entityFirstTradeMark_FIELD LIKE '%%' "+program+" PPMP_entityFirstTradeMark_FIELD IN (?)) AND (PPMP_year_FIELD LIKE '%%' "+year+" PPMP_year_FIELD IN (?)) order by `ppmps_table`.`PPMP_year_FIELD` desc";
	//mc.connect();
	mc.query(query, data, (err, rows, fields) => {
		if(err){ res.json( {success:false, data:null} ); }
		else{ res.json( {success:true, data: rows} ); }
	});
	//mc.end();
});

router.post('/select_ppmp_consolidated', (req, res)=>{
	let data = [
				req.body.program,
				req.body.year,
				req.body.ppmp_type
				];
	//ppmp consolidation
	let query = "select `ppmpitems_table`.`PPMP_id_FIELD` AS `PPMP_id_FIELD`,`ppmpitems_table`.`PPMPItem_id_FIELD` AS `PPMPItem_id_FIELD`,`ppmpitems_table`.`Item_id_FIELD` AS `Item_id_FIELD`,`ppmpitems_table`.`PPMPItem_fstQtrQty_FIELD` AS `PPMPItem_fstQtrQty_FIELD`,`ppmpitems_table`.`PPMPItem_scdQtrQty_FIELD` AS `PPMPItem_scdQtrQty_FIELD`,`ppmpitems_table`.`PPMPItem_trdQtrQty_FIELD` AS `PPMPItem_trdQtrQty_FIELD`,`ppmpitems_table`.`PPMPItem_frtQtrQty_FIELD` AS `PPMPItem_frtQtrQty_FIELD`,`ppmps_table`.`PPMP_year_FIELD` AS `PPMP_year_FIELD`,`ppmps_table`.`PPMP_entityFirstTradeMark_FIELD` AS `PPMP_entityFirstTradeMark_FIELD`,`ppmps_table`.`PPMP_entitySecondTradeMark_FIELD` AS `PPMP_entitySecondTradeMark_FIELD`,`ppmps_table`.`PPMP_entityThirdTradeMark_FIELD` AS `PPMP_entityThirdTradeMark_FIELD`,`ppmps_table`.`PPMP_defaultItemsType_FIELD` AS `PPMP_defaultItemsType_FIELD`,`ppmps_table`.`submitted` AS `submitted`,`ppmps_table`.`User_id_FIELD` AS `User_id_FIELD`,`ppmps_table`.`PPMP_status` AS `PPMP_status` from (`ppmpitems_table` join `ppmps_table` on((`ppmps_table`.`PPMP_id_FIELD` = `ppmpitems_table`.`PPMP_id_FIELD`))) WHERE submitted = 'yes' AND PPMP_status = 'approved' AND `PPMP_entityFirstTradeMark_FIELD` = ? AND `PPMP_year_FIELD` = ? AND `PPMP_defaultItemsType_FIELD` LIKE ?";
	//mc.connect();
	mc.query(query, data,(err, rows, fields)=>{
		if(err){ res.json( {success:false, data:null} ); }
		else{ res.jsonp( {success:true, data: rows} ); }
	});
	//mc.end();
});

router.post('/get_table_field', (req, res)=>{
	let data = [
		req.body.program,
		req.body.year,
		req.body.ppmp_type
		];
		//ppmp consolidation
		//mc.connect();
		let query = "select DISTINCT(PPMP_entitySecondTradeMark_FIELD) from (`ppmpitems_table` join `ppmps_table` on((`ppmps_table`.`PPMP_id_FIELD` = `ppmpitems_table`.`PPMP_id_FIELD`))) WHERE submitted = 'yes' AND `PPMP_entityFirstTradeMark_FIELD` = ? AND `PPMP_year_FIELD` = ? AND `PPMP_defaultItemsType_FIELD` LIKE ?";
		mc.query(query, data,(err, rows, fields)=>{
			if(err){ res.json( {success:false, data:null} ); }
			else{ res.json( {success:true, data: rows} ); }
		});
		//mc.end();
});

module.exports = router;