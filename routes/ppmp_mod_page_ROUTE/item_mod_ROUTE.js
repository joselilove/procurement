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
const mysql = require('mysql');
const mc = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    dateStrings:true
});


router.post('/fetch_item_route',(req, res) => {
    let query = 'SELECT * FROM `items_table` WHERE `items_table`.`Item_id_FIELD` NOT IN (SELECT `ppmpitem_mod`.`Item_id_FIELD` FROM `ppmpitem_mod` where `ppmpitem_mod`.`PPMP_id` = ?) AND `items_table`.`Item_type_FIELD` = ?';
    let data = [ req.body.PPMP_id_FIELD, req.body.Item_type_FIELD];
    mc.query(query, data, (err, rows, fields)=>{
        if(!err)
        {res.send(rows);}
        else
        {console.log(err);}
    });
});
   
router.post('/insert_item_ppmp_route', (req, res) => {
    let insert_query = "INSERT INTO `ppmpitem_mod` (`PPMP_id_mod` ,`Item_id_FIELD`, `PPMP_id`) VALUES ?";
    let data = [req.body.selected_item];
        mc.query(insert_query, data, (err, rows, fields)=>{
            if(err) { res.json({ success: false, data: null }); } 
            else { res.json({ success: true, data: rows }); }
            res.end();
        });
});

router.post('/fetch_your_ppmp_item', (req,res) => {
    let query = 'SELECT * FROM `ppmpitem_mod`, `items_table` WHERE `items_table`.`Item_id_FIELD` = `ppmpitem_mod`.`Item_id_FIELD` AND `ppmpitem_mod`.`PPMP_id` = ?';
    let data = [req.body.PPMP_id_FIELD];
    
    mc.query(query, data, (err, rows, fields) => {
        if(err){ res.json({ success:false, data:null }); }
        else{ res.json( { success: true, data: rows } );}
        res.end();
    });
});

router.post('/fetch_category', (req, res) => {
    let query = 'SELECT DISTINCT(`items_table`.`Item_category_FIELD`), `items_table`.`Item_category_FIELD`, `items_table`.`Item_subCategory_FIELD` FROM `ppmpitem_mod`, `items_table` WHERE `items_table`.`Item_id_FIELD` = `ppmpitem_mod`.`Item_id_FIELD` AND `ppmpitem_mod`.`PPMP_id` = ?';
    let data = [req.body.PPMP_id_FIELD];
    mc.query(query, data, (err, rows, fields) => {
        if(err){ res.json({ success:false, data:null }); }
        else{ res.json( { success: true, data: rows } );}
        res.end();
    })
}); 


router.delete('/delete_item_ppmp_route', (req,res)=>{
    let delete_query = 'DELETE FROM `ppmpitem_mod` WHERE `ppmpitem_mod`.`ppmpitem_mod_id` = ?';
    data = [req.body.PPMPItem_id_FIELD];

    mc.query(delete_query, data, (err, rows, fields) => {
        if(err){ res.json({ success:false, data:null }); }
        else{ res.json( { success: true, data: rows } );}
        res.end();
    });
});

router.put('/update_selected_item', (req, res) => {
    let update_query = "UPDATE `ppmpitem_mod` SET `PPMPItem_fstQtrQty_FIELD` = ?, PPMPItem_scdQtrQty_FIELD = ?, PPMPItem_trdQtrQty_FIELD = ?, PPMPItem_frtQtrQty_FIELD = ?, `PPMPItem_note` = ? WHERE `ppmpitem_mod`.`ppmpitem_mod_id` = ?";
    let data = [
                req.body.PPMPItem_fstQtrQty_FIELD,
                req.body.PPMPItem_scdQtrQty_FIELD,
                req.body.PPMPItem_trdQtrQty_FIELD,
                req.body.PPMPItem_frtQtrQty_FIELD,
                req.body.PPMPItem_noteOrRemarks_FIELD,
                req.body.PPMPItem_id_FIELD
                ];
    mc.query(update_query, data, (err, rows, fields) => {
        if(err){ res.json({ success: false, data:null }); }
        else{ res.json( { success: true, data:rows } ); }
        res.end();
    });
});



module.exports = router;