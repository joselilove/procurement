// jshint esversion:6
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const moment = require('moment');
const app = express();
app.use(bodyParser.json());


const mysql = require('mysql');
const mc = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
	user: 'root',
	password: '',
    database: 'clsupss_v2',
    dateStrings:true
});


router.get('/', function (req, res, next) {
	//mc.connect();
	mc.query('SELECT * FROM pmrs_table', function (error, results, fields) {
		if (error) throw error;
		return res.send(results);
	});
	//mc.end();
});

router.post('/searchPMR', function (req, res, next) {
	let keyword =  req.body.keyword;
	//mc.connect();
	mc.query("SELECT * FROM pmrs_table where PMR_timeScope_FIELD LIKE '%"+keyword+"%' OR PMR_year_FIELD LIKE '%"+keyword+"%' OR PMR_program_FIELD LIKE '%"+keyword+"%'", function (error, results, fields) {
		if (error) throw error;
		return res.send(results);
	});
	//mc.end();
});

router.post('/', function (req, res, next) {

	let pmrtimescope = req.body.pmrtimescope;
	let year = req.body.year;
	let program = req.body.program;
	
	var query = {
        PMR_timeScope_FIELD:pmrtimescope,
		PMR_year_FIELD:year,
		PMR_program_FIELD:program
	};
	//mc.connect();
	mc.query("INSERT INTO pmrs_table SET ?", query, function (error, results, fields) {
		if (error) throw error;
		return res.send({
			error: false,
			data: results,
			message: 'New PMR has been added successfully.'
		});
	});
	//mc.end();
});



router.put('/', function (req, res, next) {
	let pmrid = req.body.pmrid;
	let pmrtimescope = req.body.pmrtimescope;
	let year = req.body.year;
	let program = req.body.program;

	var pmrtobeupdated = {
		PMR_id_FIELD: pmrid
	};
	var query = {
		PMR_timeScope_FIELD:pmrtimescope,
		PMR_year_FIELD:year,
		PMR_program_FIELD:program
	};
	//mc.connect();
	mc.query("UPDATE pmrs_table SET ? where ?;", [query, pmrtobeupdated],
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






router.delete('/:pmrid', function (req, res, next) {
	let pmrid = req.params.pmrid;
	//mc.connect();
	mc.query('DELETE FROM pmrs_table WHERE PMR_id_FIELD = ?',pmrid, function (error, results, fields) {
		if (error) throw error;
		mc.query('DELETE FROM pmrpurchaseorders_table WHERE PMR_id_FIELD = ?',pmrid, function (error, results, fields) {
			if (error) throw error;
			
			res.send(results);
			res.end();
		});
	});
	//mc.end();
});















router.get('/ViewPOs/:pmrid', function (req, res, next) {
	let pmrid = req.params.pmrid;
	//mc.connect();
	mc.query('SELECT * FROM pmrpurchaseorders_table where PMR_id_FIELD = ?',pmrid, function (error, results, fields) {
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


router.post('/AddPO', function (req, res, next) {

	let poNo = req.body.poNo;
	let procProgOrProj = req.body.procProgOrProj;
	let pmoOrEnduser = req.body.pmoOrEnduser;
	let procMode = req.body.procMode;
	let preProcConference = req.body.preProcConference;
	let adsOrPostOfIB = req.body.adsOrPostOfIB;
	let preBidConf = req.body.preBidConf;
	let eligibilityCheck = req.body.eligibilityCheck;
	let subOrOpenOfBids = req.body.subOrOpenOfBids;
	let bidEvaluation = req.body.bidEvaluation;
	let postQual = req.body.postQual;
	let noticeOfAward = req.body.noticeOfAward;
	let contractSigningOrApprovePO = req.body.contractSigningOrApprovePO;
	let deliveryTerms = req.body.deliveryTerms;
	let deliveryOrCompletion = req.body.deliveryOrCompletion;
	let paymentMode = req.body.paymentMode;
	let sourceOfFunds = req.body.sourceOfFunds;
	let abcTotal = req.body.abcTotal;
	let contractCostTotal = req.body.contractCostTotal;
	let constructorOrSupplier = req.body.constructorOrSupplier;
	let itemPurchase = req.body.itemPurchase;
	let remarks = req.body.remarks;
	let pmrid = req.body.pmrid;
	let procActStatus = req.body.procActStatus;
	
	var query = {
        PMRpurchaseOrder_poNo_FIELD:poNo,
		PMRpurchaseOrder_procProgOrProj_FIELD:procProgOrProj,
		PMRpurchaseOrder_pmoOrEnduser_FIELD:pmoOrEnduser,
		PMRpurchaseOrder_procMode_FIELD:procMode,
		PMRpurchaseOrder_preProcConference_FIELD:preProcConference,
		PMRpurchaseOrder_adsOrPostOfIB_FIELD:adsOrPostOfIB,
		PMRpurchaseOrder_preBidConf_FIELD:preBidConf,
		PMRpurchaseOrder_eligibilityCheck_FIELD:eligibilityCheck,
		PMRpurchaseOrder_subOrOpenOfBids_FIELD:subOrOpenOfBids,
		PMRpurchaseOrder_bidEvaluation_FIELD:bidEvaluation,
		PMRpurchaseOrder_postQual_FIELD:postQual,
		PMRpurchaseOrder_noticeOfAward_FIELD:noticeOfAward,
		PMRpurchaseOrder_contractSigningOrApprovePO_FIELD:contractSigningOrApprovePO,
		PMRpurchaseOrder_deliveryTerms_FIELD:deliveryTerms,
		PMRpurchaseOrder_deliveryOrCompletion_FIELD:deliveryOrCompletion,
		PMRpurchaseOrder_paymentMode_FIELD:paymentMode,
		PMRpurchaseOrder_sourceOfFunds_FIELD:sourceOfFunds,
		PMRpurchaseOrder_abcTotal_FIELD:abcTotal,
		PMRpurchaseOrder_contractCostTotal_FIELD:contractCostTotal,
		PMRpurchaseOrder_constructorOrSupplier_FIELD:constructorOrSupplier,
		PMRpurchaseOrder_itemPurchase_FIELD:itemPurchase,
		PMRpurchaseOrder_remarks_FIELD:remarks,
		PMR_id_FIELD:pmrid,
		PMRpurchaseOrder_procActivityStatus_FIELD:procActStatus
	};
	//mc.connect();
	mc.query('SELECT * FROM pmrpurchaseorders_table where PMRpurchaseOrder_poNo_FIELD = ?',poNo, function (error, results, fields) {
		if (error) throw error;
		if(results[0] == null){
			mc.query("INSERT INTO pmrpurchaseorders_table SET ?", query, function (error, results, fields) {
				if (error) throw error;
				return res.send({
					error: false,
					data: results,
					message: 'New PO has been added successfully.'
				});
			});
        }else{
            return res.send({
				error: true,
				data: results,
				message: 'This PO exists.'
			});
        }
	});
	//mc.end();
});



router.put('/UpdatePO', function (req, res, next) {
	let poid = req.body.poid;
	let poNo = req.body.poNo;
	let procProgOrProj = req.body.procProgOrProj;
	let pmoOrEnduser = req.body.pmoOrEnduser;
	let procMode = req.body.procMode;
	let preProcConference = req.body.preProcConference;
	let adsOrPostOfIB = req.body.adsOrPostOfIB;
	let preBidConf = req.body.preBidConf;
	let eligibilityCheck = req.body.eligibilityCheck;
	let subOrOpenOfBids = req.body.subOrOpenOfBids;
	let bidEvaluation = req.body.bidEvaluation;
	let postQual = req.body.postQual;
	let noticeOfAward = req.body.noticeOfAward;
	let contractSigningOrApprovePO = req.body.contractSigningOrApprovePO;
	let deliveryTerms = req.body.deliveryTerms;
	let deliveryOrCompletion = req.body.deliveryOrCompletion;
	let paymentMode = req.body.paymentMode;
	let sourceOfFunds = req.body.sourceOfFunds;
	let abcTotal = req.body.abcTotal;
	let contractCostTotal = req.body.contractCostTotal;
	let constructorOrSupplier = req.body.constructorOrSupplier;
	let itemPurchase = req.body.itemPurchase;
	let remarks = req.body.remarks;
	let procActStatus = req.body.procActStatus;


	var potobeupdated = {
		PMRpurchaseOrder_id_FIELD: poid
	};
	var query = {
		PMRpurchaseOrder_poNo_FIELD:poNo,
		PMRpurchaseOrder_procProgOrProj_FIELD:procProgOrProj,
		PMRpurchaseOrder_pmoOrEnduser_FIELD:pmoOrEnduser,
		PMRpurchaseOrder_procMode_FIELD:procMode,
		PMRpurchaseOrder_preProcConference_FIELD:preProcConference,
		PMRpurchaseOrder_adsOrPostOfIB_FIELD:adsOrPostOfIB,
		PMRpurchaseOrder_preBidConf_FIELD:preBidConf,
		PMRpurchaseOrder_eligibilityCheck_FIELD:eligibilityCheck,
		PMRpurchaseOrder_subOrOpenOfBids_FIELD:subOrOpenOfBids,
		PMRpurchaseOrder_bidEvaluation_FIELD:bidEvaluation,
		PMRpurchaseOrder_postQual_FIELD:postQual,
		PMRpurchaseOrder_noticeOfAward_FIELD:noticeOfAward,
		PMRpurchaseOrder_contractSigningOrApprovePO_FIELD:contractSigningOrApprovePO,
		PMRpurchaseOrder_deliveryTerms_FIELD:deliveryTerms,
		PMRpurchaseOrder_deliveryOrCompletion_FIELD:deliveryOrCompletion,
		PMRpurchaseOrder_paymentMode_FIELD:paymentMode,
		PMRpurchaseOrder_sourceOfFunds_FIELD:sourceOfFunds,
		PMRpurchaseOrder_abcTotal_FIELD:abcTotal,
		PMRpurchaseOrder_contractCostTotal_FIELD:contractCostTotal,
		PMRpurchaseOrder_constructorOrSupplier_FIELD:constructorOrSupplier,
		PMRpurchaseOrder_itemPurchase_FIELD:itemPurchase,
		PMRpurchaseOrder_remarks_FIELD:remarks,
		PMRpurchaseOrder_procActivityStatus_FIELD:procActStatus
	};
	//mc.connect();
	mc.query("UPDATE pmrpurchaseorders_table SET ? where ?", [query, potobeupdated],
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



router.delete('/DeletePO/:poid', function (req, res, next) {
	let poid = req.params.poid;
	//mc.connect();
	mc.query('DELETE FROM pmrpurchaseorders_table WHERE pmrpurchaseorder_id_FIELD = ?',poid, function (error, results, fields) {
		if (error) throw error;

		res.send(results);
		res.end();
	});
	//mc.end();
});


router.post('/getTheDataOFThisPMR', function (req, res, next) {
	let pmrid = req.body.pmrid;
	//mc.connect();
	mc.query('SELECT * FROM pmrs_table where PMR_id_FIELD = ?',pmrid, function (error, results, fields) {
		if (error) throw error;
		return res.send(results);
	});
	//mc.end();
});


// router.post('/yeah', function (req, res, next) {
// 	let yeahhh = req.body.yeahhh;
// 	let yeahhhh = req.body.yeahhhh;
// 	var query = {
// 		yeahhh:yeahhh,
// 		yeahhhh:yeahhhh
// 	};
// 	mc.query("INSERT INTO yeah SET ?", query, function (error, results, fields) {
// 		if (error) throw error;
// 		return res.send({
// 			error: false,
// 			data: results,
// 			message: 'New PMR has been added successfully.'
// 		});
// 	});
// });

router.put('/UpdatePOremark', function (req, res, next) {
	let poid = req.body.poid;
	let newvalue = req.body.newvalue;

	var potobeupdated = {
		PMRpurchaseOrder_id_FIELD: poid
	};

	var query = {
		PMRpurchaseOrder_remarks_FIELD:newvalue
	};
	//mc.connect();
	mc.query("UPDATE pmrpurchaseorders_table SET ? where ?;", [query, potobeupdated],
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

router.put('/UpdatePOprocActStatus', function (req, res, next) {
	let poid = req.body.poid;
	let newvalue = req.body.newvalue;

	var potobeupdated = {
		PMRpurchaseOrder_id_FIELD: poid
	};

	var query = {
		PMRpurchaseOrder_procActivityStatus_FIELD:newvalue
	};
	//mc.connect();
	mc.query("UPDATE pmrpurchaseorders_table SET ? where ?;", [query, potobeupdated],
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

router.put('/transferPO', function (req, res, next) {
	let destpmrid = req.body.destpmrid;
	let potobetransferred = req.body.potobetransferred;
	let querystring = "UPDATE pmrpurchaseorders_table SET ? where PMRpurchaseOrder_id_FIELD IN (";
	
	var query = {
		PMR_id_FIELD:destpmrid
	};

	for(var i in potobetransferred){
		querystring+=potobetransferred[i];
	}
	querystring+=")";
	//mc.connect();
	mc.query(querystring, query,function (error, results, fields) {
			if (error) throw error;
				return res.send({
					error: false,
					data: results,
					message: 'Updated'
				});

		});
		//mc.end();
});



router.post('/fetchEnduserPO', function (req, res, next) {

	sess = req.session;
	let enduserid = sess.USER_ID;

	//mc.connect();
	mc.query('SELECT * FROM pmrpurchaseorders_table where EndUser_id_FIELD = ?',enduserid, function (error, results, fields) {
		
		for (var i in results) {
			results[i].PMRpurchaseOrder_noticeOfAward_FIELD = moment(results[i].PMRpurchaseOrder_noticeOfAward_FIELD).format('DD/MM/YYYY');
			results[i].PMRpurchaseOrder_contractSigningOrApprovePO_FIELD = moment(results[i].PMRpurchaseOrder_contractSigningOrApprovePO_FIELD).format('DD/MM/YYYY');
			results[i].PMRpurchaseOrder_deliveryOrCompletion_FIELD = moment(results[i].PMRpurchaseOrder_deliveryOrCompletion_FIELD).format('DD/MM/YYYY');
		}
		return res.send(results);
	});
	//mc.end();
});



router.post('/filterPOoutside', function (req, res, next) {
	let pono = req.body.searchdata;
	//mc.connect();
	mc.query('SELECT * FROM pmrpurchaseorders_table where PMRpurchaseOrder_poNo_FIELD = ?',pono, function (error, results, fields) {
		if (error) throw error;
		if(results[0] == null){
			return res.send("POnotExist");
		}else{
			pmrid = results[0].PMR_id_FIELD;
			mc.query('SELECT * FROM pmrs_table where PMR_id_FIELD = ?',pmrid, function (error, results, fields) {
				if (error) throw error;
				return res.send(results);
			});
		}
	});
	//mc.end();
});



module.exports = router;