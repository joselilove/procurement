const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
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


router.get('/SearchbarSearch/:filterby/:searchdata', function (req, res, next) {
    let filterby = req.params.filterby;
    let searchdata = req.params.searchdata;

    var querystring = "";
    if(filterby == 'All'){
        querystring = "SELECT * FROM items_table where Item_type_FIELD LIKE '%"+searchdata+"%' OR Item_category_FIELD LIKE '%"+searchdata+"%' OR Item_generalDescription_FIELD LIKE '%"+searchdata+"%' OR Item_units_FIELD LIKE '%"+searchdata+"%' OR Item_unitPrice_FIELD LIKE '%"+searchdata+"%' OR Item_procMode_FIELD LIKE '%"+searchdata+"%'";
    }else if(filterby == 'Item Type'){
        querystring = "SELECT * FROM items_table where Item_type_FIELD LIKE '%"+searchdata+"%'";
    }else if(filterby == 'Category'){
        querystring = "SELECT * FROM items_table where Item_category_FIELD LIKE '%"+searchdata+"%'";    
    }else if(filterby == 'Sub Category'){
        querystring = "SELECT * FROM items_table where Item_subCategory_FIELD LIKE '%"+searchdata+"%'";    
    }else if(filterby == 'General Description'){
        querystring = "SELECT * FROM items_table where Item_generalDescription_FIELD LIKE '%"+searchdata+"%'";    
    }else if(filterby == 'Units'){
        querystring = "SELECT * FROM items_table where Item_units_FIELD LIKE '%"+searchdata+"%'";    
    }else if(filterby == 'Unit Price'){
        querystring = "SELECT * FROM items_table where Item_unitPrice_FIELD LIKE '%"+searchdata+"%'";    
    }else if(filterby == 'Mode of Procurement'){
        querystring = "SELECT * FROM items_table where Item_procMode_FIELD LIKE '%"+searchdata+"%'";    
    }
    
    //mc.connect();
	mc.query(querystring, function (error, results, fields) {
		if (error) throw error;
		return res.send(results);
    });
    //mc.end();
});

router.get('/ItemTypeFilter/:itemtypeselected', function (req, res, next) {
    let itemtypeselected = req.params.itemtypeselected;
    //mc.connect();
	mc.query("SELECT * FROM items_table where Item_type_FIELD = '"+itemtypeselected+"'", function (error, results, fields) {
		if (error) throw error;
		return res.send(results);
    });
    //mc.end();
});


router.get('/UnitPriceFilter/:inputtedminprice/:inputtedmaxprice', function (req, res, next) {
    let inputtedminprice = req.params.inputtedminprice;
    let inputtedmaxprice = req.params.inputtedmaxprice;
    //mc.connect();
	mc.query("SELECT * FROM items_table where Item_unitPrice_FIELD BETWEEN '"+inputtedminprice+"' AND '"+inputtedmaxprice+"'", function (error, results, fields) {
		if (error) throw error;
		return res.send(results);
    });
    //mc.end();
});


module.exports = router;