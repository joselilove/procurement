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


router.post('/fetch_item_route',(req, res) => {
    let query = 'SELECT * FROM `items_table` WHERE `items_table`.`Item_id_FIELD` NOT IN (SELECT `ppmpitems_table`.`Item_id_FIELD` FROM `ppmpitems_table` where `ppmpitems_table`.`PPMP_id_FIELD` = ?) AND `items_table`.`Item_type_FIELD` = ?';
    let data = [ req.body.PPMP_id_FIELD, req.body.Item_type_FIELD];
    //mc.connect();
    mc.query(query, data, (err, rows, fields)=>{
        if(!err)
        {res.send(rows);}
        else
        {console.log(err);}
    });
    //mc.end();
});
   
router.post('/insert_item_ppmp_route', (req, res) => {
    let insert_query = "INSERT INTO `ppmpitems_table` (`Item_id_FIELD`, `PPMP_id_FIELD`) VALUES ?";
    let data = [req.body.selected_item];
    //mc.connect();    
    mc.query(insert_query, data, (err, rows, fields)=>{
            if(err) { res.json({ success: false, data: null }); } 
            else { res.json({ success: true, data: rows }); }
            res.end();
    });
    //mc.end();
});

router.post('/fetch_your_ppmp_item', (req,res) => {
    let query = 'SELECT * FROM `ppmpitems_table`, `items_table` WHERE `items_table`.`Item_id_FIELD` = `ppmpitems_table`.`Item_id_FIELD` AND `ppmpitems_table`.`PPMP_id_FIELD` = ?';
    let data = [req.body.PPMP_id_FIELD];
    //mc.connect();
    mc.query(query, data, (err, rows, fields) => {
        if(err){ res.json({ success:false, data:null }); }
        else{ res.json( { success: true, data: rows } );}
        res.end();
    });
    //mc.end();
});

router.post('/fetch_category', (req, res) => {
    let query = 'SELECT DISTINCT(`items_table`.`Item_category_FIELD`), `items_table`.`Item_category_FIELD`, `items_table`.`Item_subCategory_FIELD` FROM `ppmpitems_table`, `items_table` WHERE `items_table`.`Item_id_FIELD` = `ppmpitems_table`.`Item_id_FIELD` AND `ppmpitems_table`.`PPMP_id_FIELD` = ?';
    let data = [req.body.PPMP_id_FIELD];
    //mc.connect();
    mc.query(query, data, (err, rows, fields) => {
        if(err){ res.json({ success:false, data:null }); }
        else{ res.json( { success: true, data: rows } );}
        res.end();
    })
    //mc.end();
}); 


router.delete('/delete_item_ppmp_route', (req,res)=>{
    let delete_query = 'DELETE FROM `ppmpitems_table` WHERE `ppmpitems_table`.`PPMPItem_id_FIELD` = ?';
    data = [req.body.PPMPItem_id_FIELD];
    //mc.connect();
    mc.query(delete_query, data, (err, rows, fields) => {
        if(err){ res.json({ success:false, data:null }); }
        else{ res.json( { success: true, data: rows } );}
        res.end();
    });
    //mc.end();
});

router.put('/update_selected_item', (req, res) => {
    let update_query = "UPDATE `ppmpitems_table` SET `PPMPItem_fstQtrQty_FIELD` = ?, PPMPItem_scdQtrQty_FIELD = ?, PPMPItem_trdQtrQty_FIELD = ?, PPMPItem_frtQtrQty_FIELD = ?, `PPMPItem_noteOrRemarks_FIELD` = ? WHERE `ppmpitems_table`.`PPMPItem_id_FIELD` = ?";
    let data = [
                req.body.PPMPItem_fstQtrQty_FIELD,
                req.body.PPMPItem_scdQtrQty_FIELD,
                req.body.PPMPItem_trdQtrQty_FIELD,
                req.body.PPMPItem_frtQtrQty_FIELD,
                req.body.PPMPItem_noteOrRemarks_FIELD,
                req.body.PPMPItem_id_FIELD
                ];
                //mc.connect();
    mc.query(update_query, data, (err, rows, fields) => {
        if(err){ res.json({ success: false, data:null }); }
        else{ res.json( { success: true, data:rows } ); }
        res.end();
    });
    //mc.end();
});



module.exports = router;