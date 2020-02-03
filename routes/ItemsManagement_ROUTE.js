const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
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
	mc.query('SELECT * FROM items_table', function (error, results, fields) {
		if (error) throw error;
		return res.send(results);
	});
});











router.post('/', function (req, res, next) {

	let type = req.body.type;
	let category = req.body.category;
	let subcategory = req.body.subcategory;
	let gendes = req.body.gendes;
	let units = req.body.units;
	let unitprice = req.body.unitprice;
	let procmode = req.body.procmode;

	var query = {
        Item_type_FIELD:type,
		Item_category_FIELD:category,
		Item_subCategory_FIELD:subcategory,
        Item_generalDescription_FIELD:gendes,
		Item_units_FIELD:units,
		Item_unitPrice_FIELD:unitprice,
		Item_procMode_FIELD:procmode
	};
	//mc.connect();
	mc.query("INSERT INTO items_table SET ?", query, function (error, results, fields) {
		if (error) throw error;
		return res.send({
			error: false,
			data: results,
			message: 'New item has been added successfully.'
		});
	});
	//mc.end();
});



router.put('/', function (req, res, next) {
	let itemid = req.body.itemid;
	let type = req.body.type;
	let category = req.body.category;
	let subcategory = req.body.subcategory;
	let gendes = req.body.gendes;
	let units = req.body.units;
	let unitprice = req.body.unitprice;
	let procmode = req.body.procmode;

	var itemtobeupdated = {
		Item_id_FIELD: itemid
	};
	var query = {
		Item_type_FIELD:type,
        Item_category_FIELD:category,
		Item_subCategory_FIELD:subcategory,
		Item_generalDescription_FIELD:gendes,
		Item_units_FIELD:units,
		Item_unitPrice_FIELD:unitprice,
		Item_procMode_FIELD:procmode
	};
	//mc.connect();
	mc.query("UPDATE items_table SET ? where ?;", [query, itemtobeupdated],
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

router.delete('/:itemid', function (req, res, next) {
	let itemid = req.params.itemid;
	//mc.connect();
	mc.query('DELETE FROM items_table WHERE Item_id_FIELD = ?',itemid, function (error, results, fields) {
		if (error) throw error;
		res.send(results);
		res.end();
	});
	//mc.end();
});









module.exports = router;