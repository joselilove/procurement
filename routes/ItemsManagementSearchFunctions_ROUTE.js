const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());


const mysql = require('mysql');
const mc = mysql.createConnection({
    host: 'remotemysql.com',
    port: 3306,
	user: '06mRCeMcht',
	password: 'fG9fFHhXpL',
    database: '06mRCeMcht',
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