// jshint esversion:6
const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true}));

router.use('/assets', express.static('assets'));
router.use('/dist', express.static('dist'));

var sess;

router.get('/', (req, res) => {
    res.render('pages/announcements_view_PAGE.ejs');

});



module.exports = router;