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

router.get('/', (req, res) => {
	res.render('pages/ppmp_approval_PAGE.ejs');
});

router.post('/select_all_submitted_ppmp', (req, res) => {
	let query = "SELECT * FROM `ppmps_table` WHERE submitted = 'yes'";
	//mc.connect();
	mc.query(query,(err, rows,fields) => {
		if(err){ res.json({ success: false, data:null }); }
		else{ res.json( { success: true, data:rows } ); }
        res.end();
	});
	//mc.end();
});

router.post('/PPMP_request_response',(req, res)=>{
	let query = "UPDATE `ppmps_table` SET `PPMP_status` = ? WHERE `ppmps_table`.`PPMP_id_FIELD` = ?";
	let data = [
			req.body.PPMP_status,
			req.body.PPMP_id
		];
		//mc.connect();
		mc.query(query, data,(err, rows, fields) => {
			if(err){ res.json({success:false, data:null}); }
			else{ res.json({success: true, data:rows}); }
		});
		//mc.end();

});


module.exports = router;