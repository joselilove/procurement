// jshint esversion:6
const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 
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
var sess;

router.post('/create_ppmp_route', (req, res)=>{
    sess = req.session;
    let insert_query = "INSERT INTO `ppmps_table` (`PPMP_id_FIELD`, `User_id_FIELD` ,`PPMP_defaultItemsType_FIELD`, `PPMP_year_FIELD`, `PPMP_fund_FIELD`, `PPMP_recomAprvlPerson_FIELD`, `PPMP_recomAprvlPersonPostn_FIELD`, `PPMP_aprvdByPerson_FIELD`, `PPMP_aprvdByPersonPostn_FIELD`, `submitted` ,`created_at`, `updated_at`, `PPMP_entityFirstTradeMark_FIELD`, `PPMP_entitySecondTradeMark_FIELD`, `PPMP_entityThirdTradeMark_FIELD`, `PPMP_endUserName_FIELD`, `PPMP_endUserPosition`) VALUES (NULL,?,?, YEAR(CURRENT_TIMESTAMP), 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs' , 'TERESO A. ABELLA','University President', 'no', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, ?, ?, ?, ?, ?);";
    let data = [
                sess.USER_ID,
                req.body.item_type,
                sess.FIRST_T,
                sess.SECOND_T,
                sess.THIRD_T,
                sess.NAME,
                sess.POSITION,
            ];
            //mc.connect();
    mc.query(insert_query, data,(err, rows, fields)=>{
        if(err) { res.json({ success: false, data: null }); } 
        else { res.json({ success: true, data: rows }); }
        res.end();  
    });
    //mc.end();
});

router.get('/fetch_current_work_route', (req,res)=>{
    sess = req.session;
    let fetch_query = "SELECT * FROM `ppmps_table` WHERE submitted = 'no' AND `User_id_FIELD` LIKE ? ORDER by `ppmps_table`.`created_at` DESC";
        id = sess.USER_ID;
    if(sess.USER_TYPE == 'Administrator'){
        id = '%%';
    }
    let data = [id];
    //mc.connect();
    mc.query(fetch_query,data, (err, rows, fields)=>{
        if(err) { res.json({ success: false, data: null }); } 
        else { res.json({ success: true, data: rows }); }
        res.end();
    });
    //mc.end();
});

router.get('/fetch_submitted_ppmp_route', (req,res)=>{
    sess = req.session;
    let fetch_query = "SELECT * FROM `ppmps_table` WHERE submitted = 'yes' AND `User_id_FIELD` LIKE ? ORDER by `ppmps_table`.`created_at` DESC ";
        id = sess.USER_ID;
    if(sess.USER_TYPE == 'Administrator'){
        id = '%%';
    }
    let data = [id];
    //mc.connect();
    mc.query(fetch_query,data,(err, rows, fields)=>{
        if(err){ res.jsonp({success: false, data: null}); }
        else { res.jsonp({success: true, data: rows}); }
        res.end();
    });
    //mc.end();
});

router.post('/fetch_ppmp_table_route',(req,res)=>{
    sess = req.session;
    let select_query = "SELECT * FROM `ppmps_table` WHERE `PPMP_id_FIELD` = ? AND `User_id_FIELD` LIKE ?";
        id = sess.USER_ID;
    if(sess.USER_TYPE == 'Administrator'){
        id = '%%';
    }
    let data = [
        req.body.PPMP_id_FIELD,
        id
        ];
        //mc.connect();
    mc.query(select_query, data, (err, rows, fields)=>{
        if(err){ res.json({ success: false, data:null});}
        else{ res.json({ success:true, data: rows });}
        res.end();
    });
    //mc.end();
});

router.put('/update_ppmp_table_info_route',(req,res)=>{
    let update_query = "UPDATE `ppmps_table` set `PPMP_year_FIELD` = ?, `PPMP_fund_FIELD` = ?, `PPMP_recomAprvlPerson_FIELD` = ?, `PPMP_recomAprvlPersonPostn_FIELD` = ?, `PPMP_aprvdByPerson_FIELD` = ?, `PPMP_aprvdByPersonPostn_FIELD` = ?, `PPMP_entityFirstTradeMark_FIELD` = ?, `PPMP_entitySecondTradeMark_FIELD` = ?, `PPMP_entityThirdTradeMark_FIELD` = ?, `PPMP_endUserName_FIELD` = ?, `PPMP_endUserPosition` = ? WHERE 	`PPMP_id_FIELD` = ?";
    let data = [
        req.body.PPMP_year_FIELD,
        req.body.PPMP_fund_FIELD,
        req.body.PPMP_recomAprvlPerson_FIELD,
        req.body.PPMP_recomAprvlPersonPostn_FIELD,
        req.body.PPMP_aprvdByPerson_FIELD,
        req.body.PPMP_aprvdByPersonPostn_FIELD,
        req.body.PPMP_entityFirstTradeMark_FIELD,
        req.body.PPMP_entitySecondTradeMark_FIELD,
        req.body.PPMP_entityThirdTradeMark_FIELD,
        req.body.PPMP_endUserName_FIELD,
        req.body.PPMP_endUserPosition,
        req.body.PPMP_id_FIELD,  
        ];
        //mc.connect();
        mc.query(update_query, data, (err, rows, fields)=>{
            if(err){ res.json({ success: false, data:null});}
            else{ res.json({ success:true, data: rows });}
            res.end();
        });
        //mc.end();
});

router.delete('/delete_ppmp_route', (req,res)=>{
    let delete_query = "DELETE FROM `ppmps_table` WHERE `ppmps_table`.`PPMP_id_FIELD` = ?";
    let data = [req.body.PPMP_id_FIELD];
    //mc.connect();
    mc.query(delete_query, data, ( err, rows, fields )=> {
            if(err){ res.json({ success: false, data:null});}
            else{ res.json({ success:true, data: rows });}
            res.end();
    });
    //mc.end();
});

router.put('/submit_ppmp_route', (req, res)=>{
    let submit_ppmp = "UPDATE `ppmps_table` SET `submitted` = 'yes' WHERE `ppmps_table`.`PPMP_id_FIELD` = ?";
    let data = [req.body.PPMP_id_FIELD];
    //mc.connect();
    mc.query(submit_ppmp, data, (err, rows, fields)=>{
        if(err){res.json({ success: false, data:null});}
        else{ res.json({ success: true, data:rows });}
        res.end();
    });
    //mc.end();
});

router.put('/reverse_submit_ppmp_route', (req, res)=>{
    let submit_ppmp = "UPDATE `ppmps_table` SET `submitted` = 'no' WHERE `ppmps_table`.`PPMP_id_FIELD` = ?";
    let data = [req.body.PPMP_id_FIELD];
    //mc.connect();
    mc.query(submit_ppmp, data, (err, rows, fields)=>{
        if(err){res.json({ success: false, data:null});}
        else{ res.json({ success: true, data:rows });}
        res.end();
    });
    //mc.end();
});

router.post('/submitted_ppmp', (req, res) => {
    sess = req.session;
    let query = "SELECT * FROM `ppmps_table` WHERE `ppmps_table`.`submitted` = 'yes' AND `User_id_FIELD` LIKE ?";
    id = sess.USER_ID;
    if(sess.USER_TYPE == 'Administrator'){
        id = '%%';
    }
    let data = [id];
    //mc.connect();
    mc.query(query, data,(err ,rows, fields) => {
        if(err){ res.json( {success: false, data:null} ); }
        else{ res.json( {success: true, data: rows} ); }
    });
    //mc.end();
});

router.post('/filter_submitted_ppmp', (req, res) => {
        sess = req.session;
        id = sess.USER_ID;
    if(sess.USER_TYPE == 'Administrator'){
        id = '%%';
    }
    let data = [
        id,
        req.body.ppmp_end_user,
        req.body.ppmp_program,
        req.body.ppmp_sub_office,
        req.body.ppmp_third_t,
        req.body.ppmp_year,
        req.body.ppmp_status
        ];
        end_user    = 'AND';
        sub_office  = 'AND';
        ppmp_year   = 'AND';
        ppmp_program= 'AND';
        ppmp_third_t= 'AND';
        ppmp_status = 'AND';
        
    if(req.body.ppmp_end_user == undefined){
        end_user = 'OR';
    }
    if(req.body.ppmp_sub_office == undefined){
        sub_office = 'OR';
    }
    if(req.body.ppmp_year == undefined){
        ppmp_year   = 'OR';
    }
    if(req.body.ppmp_program == undefined){
        ppmp_program   = 'OR';
    }
    if(req.body.ppmp_third_t == undefined){
        ppmp_third_t    = 'OR';
    }
    if(req.body.ppmp_status == undefined){
        ppmp_status = 'OR';
    }
    //mc.connect();
    let query = "SELECT * FROM `ppmps_table` WHERE `ppmps_table`.`submitted` = 'yes' AND `User_id_FIELD` LIKE ? AND (`ppmps_table`.`PPMP_endUserName_FIELD` LIKE '%%' "+end_user+" `ppmps_table`.`PPMP_endUserName_FIELD` IN (?)) AND (`ppmps_table`.`PPMP_entityFirstTradeMark_FIELD` LIKE '%%' "+ppmp_program+" `ppmps_table`.`PPMP_entityFirstTradeMark_FIELD` IN (?)) AND (`ppmps_table`.`PPMP_entitySecondTradeMark_FIELD` LIKE '%%' "+sub_office+" `ppmps_table`.`PPMP_entitySecondTradeMark_FIELD` IN (?)) AND (`ppmps_table`.`PPMP_entityThirdTradeMark_FIELD` LIKE '%%' "+ppmp_third_t+" `ppmps_table`.`PPMP_entityThirdTradeMark_FIELD` IN (?)) AND (`ppmps_table`.`PPMP_year_FIELD` LIKE '%%' "+ppmp_year+" `ppmps_table`.`PPMP_year_FIELD` IN (?)) AND (`ppmps_table`.`PPMP_status` LIKE '%%' "+ppmp_status+" `ppmps_table`.`PPMP_status` IN (?))";
    mc.query(query, data, (err, rows, fields) => {
        if(err){res.json({ success: false, data:null});}
        else{ res.json({ success: true, data:rows });}
        res.end();
    });
    //mc.end();
});

router.post('/filter_current_ppmp', (req, res) => {
        sess = req.session;
        id = sess.USER_ID;
    if(sess.USER_TYPE == 'Administrator'){
        id = '%%';
    }
    let data = [
        id,
        req.body.ppmp_end_user,
        req.body.ppmp_program,
        req.body.ppmp_sub_office,
        req.body.ppmp_third_t,
        req.body.ppmp_year,
        req.body.ppmp_status
        ];
        end_user    = 'AND';
        sub_office  = 'AND';
        ppmp_year   = 'AND';
        ppmp_program= 'AND';
        ppmp_third_t= 'AND';
        ppmp_status = 'AND';
    if(req.body.ppmp_end_user == undefined){
        end_user        = 'OR';
    }
    if(req.body.ppmp_sub_office == undefined){
        sub_office      = 'OR';
    }
    if(req.body.ppmp_year == undefined){
        ppmp_year       = 'OR';
    }
    if(req.body.ppmp_program == undefined){
        ppmp_program    = 'OR';
    }
    if(req.body.ppmp_third_t == undefined){
        ppmp_third_t    = 'OR';
    }
    if(req.body.ppmp_status == undefined){
        ppmp_status = 'OR';
    }
    let query = "SELECT * FROM `ppmps_table` WHERE `ppmps_table`.`submitted` = 'no' AND `User_id_FIELD` LIKE ? AND (`ppmps_table`.`PPMP_endUserName_FIELD` LIKE '%%' "+end_user+" `ppmps_table`.`PPMP_endUserName_FIELD` IN (?)) AND (`ppmps_table`.`PPMP_entityFirstTradeMark_FIELD` LIKE '%%' "+ppmp_program+" `ppmps_table`.`PPMP_entityFirstTradeMark_FIELD` IN (?)) AND (`ppmps_table`.`PPMP_entitySecondTradeMark_FIELD` LIKE '%%' "+sub_office+" `ppmps_table`.`PPMP_entitySecondTradeMark_FIELD` IN (?)) AND (`ppmps_table`.`PPMP_entityThirdTradeMark_FIELD` LIKE '%%' "+ppmp_third_t+" `ppmps_table`.`PPMP_entityThirdTradeMark_FIELD` IN (?)) AND (`ppmps_table`.`PPMP_year_FIELD` LIKE '%%' "+ppmp_year+" `ppmps_table`.`PPMP_year_FIELD` IN (?)) AND (`ppmps_table`.`PPMP_status` LIKE '%%' "+ppmp_status+" `ppmps_table`.`PPMP_status` IN (?))";
    //mc.connect();
    mc.query(query, data, (err, rows, fields) => {
        if(err){res.json({ success: false, data:null});}
        else{ res.json({ success: true, data:rows });}
        res.end();
    });
    //mc.end();
});

router.get('/get_all_year', (req, res) => {
    let query = "SELECT DISTINCT `ppmps_table`.`PPMP_year_FIELD` FROM `ppmps_table`";
    //mc.connect();
    mc.query(query, (err, rows, fields) => {
        if(err){ res.json( {success: false, data:null} ); }
        else{ res.json( {success: true, data: rows} ); }
    });
    //mc.end();
});

router.get('/get_all_end_user', (req, res) => {
    let query = "SELECT DISTINCT `ppmps_table`.`PPMP_endUserName_FIELD` FROM `ppmps_table`";
    //mc.connect();
    mc.query(query, (err, rows, fields) => {
        if(err){ res.json( {success: false, data:null} ); }
        else{ res.json( {success: true, data: rows} ); }
    });
    //mc.end();
});

router.get('/get_all_second_trademark', (req, res) => {
    let query = "SELECT DISTINCT `ppmps_table`.`PPMP_entitySecondTradeMark_FIELD` FROM `ppmps_table`";
    //mc.connect();
    mc.query(query, (err,rows, fields) => {
        if(err){ res.json( {success:false, data:null} ); }
        else{ res.json( {success:true, data: rows} ); }
    });
    //mc.end();
});

router.get('/get_all_first_trademark', (req, res) => {
    let query = "SELECT DISTINCT `ppmps_table`.`PPMP_entityFirstTradeMark_FIELD` FROM `ppmps_table`";
    //mc.connect();
    mc.query(query, (err,rows, fields) => {
        if(err){ res.json( {success:false, data:null} ); }
        else{ res.json( {success:true, data: rows} ); }
    });
    //mc.end();
});

router.get('/get_all_third_trademark', (req, res) => {
    let query = "SELECT DISTINCT `ppmps_table`.`PPMP_entityThirdTradeMark_FIELD` FROM `ppmps_table`";
    //mc.connect();
    mc.query(query, (err,rows, fields) => {
        if(err){ res.json( {success:false, data:null} ); }
        else{ res.json( {success:true, data: rows} ); }
    });
    //mc.end();
});

module.exports = router;    