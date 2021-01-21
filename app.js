// jshint esversion:6
const express = require('express');
var session = require('express-session');
const app = express();
const nodeMailer = require('nodemailer');
const port = ( process.env.PORT || 8000 );
const dotenv = require('dotenv');
dotenv.config();
if (process.env.DEBUG === 'true') {
    const morgan = require('morgan');
    app.use(morgan('dev'));
}
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


var sessionMiddleware = session({
    secret: 'ssshhhhh',
    expires: new Date(Date.now() + (30 * 86400 * 1000)),
    cookie: {expires: new Date(253402300000000)},
    resave: false,
    saveUninitialized: false,
  });

app.use(sessionMiddleware);
// for design purpose
app.use('/assets', express.static('assets'));
app.use('/dist', express.static('dist'));

app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'ejs');

const routeUsersManagement                  = require('./routes/UsersManagement_ROUTE');
const routeItemsManagement                  = require('./routes/ItemsManagement_ROUTE');
const routeItemsManagementSearchFunctions   = require('./routes/ItemsManagementSearchFunctions_ROUTE');
const routePMR1st                           = require('./routes/PMR1st_ROUTE');
const item_ROUTE                            = require('./routes/item_ROUTE');
const ppmp_ROUTE                            = require('./routes/ppmp_ROUTE');
const app_ROUTE                             = require('./routes/app_ROUTE');
const chart_app_ROUTE                       = require('./routes/chart_app_ROUTE');
const sidebar_ROUTE                         = require('./routes/sidebar_ROUTE');
const ppmp_mod_approval_ROUTE               = require('./routes/ppmp_mod_approval_ROUTE');
const ppmp_approval_ROUTE                   = require('./routes/ppmp_approval_ROUTE');
const notification_ROUTE                    = require('./routes/notification_ROUTE');
const ppmp_mod_req_ROUTE                    = require('./routes/ppmp_mod_req_ROUTE');
const ppmp_mod_page_ROUTE                   = require('./routes/ppmp_mod_page_ROUTE');
const item_mod_ROUTE                        = require('./routes/ppmp_mod_page_ROUTE/item_mod_ROUTE');
const routePOenduserSelection               = require('./routes/POenduserSelection_ROUTE');
const announcement_ROUTE                    = require('./routes/announcement/announcement_ROUTE');
const end_user_dashboard_ROUTE              = require('./routes/end_user_dashboard_ROUTE');
const routeVouchersMngmt                    = require('./routes/VouchersMngmt_ROUTE');


app.use('/usersManagement_route',                   checkUserSession,sessionMiddleware,routeUsersManagement);
app.use('/itemsManagement_route',                   checkUserSession,sessionMiddleware,routeItemsManagement);
app.use('/itemsManagementSearchFunctions_route',    checkUserSession,sessionMiddleware,routeItemsManagementSearchFunctions);
app.use('/PMR1st_route',                            checkUserSession,sessionMiddleware,routePMR1st);
app.use('/item_ROUTE',                              checkUserSession,sessionMiddleware,item_ROUTE);
app.use('/ppmp_ROUTE',                              checkUserSession,sessionMiddleware,ppmp_ROUTE);
app.use('/app_ROUTE',                               checkUserSession,sessionMiddleware,app_ROUTE);
app.use('/chart_app_ROUTE',                         checkUserSession, sessionMiddleware,chart_app_ROUTE);
app.use('/sidebar_ROUTE',                           checkUserSession,sessionMiddleware,sidebar_ROUTE);
app.use('/ppmp_mod_approval_ROUTE',                 checkUserSession, sessionMiddleware,ppmp_mod_approval_ROUTE);
app.use('/ppmp_approval_ROUTE',                     checkUserSession, sessionMiddleware,ppmp_approval_ROUTE);
app.use('/notification_ROUTE',                      checkUserSession, sessionMiddleware,notification_ROUTE);
app.use('/ppmp_mod_req_ROUTE',                      checkUserSession,sessionMiddleware,ppmp_mod_req_ROUTE);
app.use('/ppmp_mod_page_ROUTE',                     checkUserSession,sessionMiddleware,ppmp_mod_page_ROUTE);
app.use('/item_mod_ROUTE',                          checkUserSession,sessionMiddleware,item_mod_ROUTE);
app.use('/POenduserSelection_route',                checkUserSession, sessionMiddleware,routePOenduserSelection);
app.use('/announcement_ROUTE',                      checkUserSession,sessionMiddleware,announcement_ROUTE);
app.use('/end_user_dashboard_ROUTE',                checkUserSession,sessionMiddleware,end_user_dashboard_ROUTE);
app.use('/vouchersMngmt_route',                   checkUserSession,sessionMiddleware,routeVouchersMngmt);

const mysql = require('mysql');
const mc = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    dateStrings:true
});
var sess;

// for IP address only-----------------------------------------------------------
console.log(`------------------------------------------------------------------------`);
'use strict';

var os = require('os');
var ifaces = os.networkInterfaces();
var sample_ip;
Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      console.log(ifname + ':' + alias, iface.address);
    } else {
      // this interface has only one ipv4 adress
      console.log(ifname + ':', iface.address);
      sample_ip = iface.address;
    }
    ++alias;
  });
});
console.log(`------------------------------------------------------------------------`);
// for ip address only ----------------------------------------------------

app.post('/send-email', function (req, res) {
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'clsu.procurement.service@gmail.com',
              pass: '123456admins'
        }
    });
    let new_pass = makeid(15);
    let mailOptions = {
        from: '"CLSU Procurement" <xx@gmail.com>', // sender address
        to: req.body.to, 
        subject: 'Password', 
        text: '', 
        html: `<body style="margin:0px; background: #f8f8f8; ">
        <div width="100%" style="background: #f8f8f8; padding: 0px 0px; font-family:arial; line-height:28px; height:100%;  width: 100%; color: #514d6a;">
          <div style="max-width: 700px; padding:50px 0;  margin: 0px auto; font-size: 14px">
            <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; margin-bottom: 20px">
            <tbody>
          </tbody>
    
            </table>
            <div style="padding: 40px; background: #fff;">
              <table border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
                <tbody>
                  <tr>
                    <td style="border-bottom:1px solid #f6f6f6;"><h1 style="font-size:14px; font-family:arial; margin:0px; font-weight:bold;">Dear Sir/Madam,</h1>
                      <p style="margin-top:0px; color:#bbbbbb;">Here are your password reset instructions.</p></td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0 30px 0;"><p>A request to reset your account password has been made. Your new password is:</p>
                      <center>
                        <a style="display: inline-block; padding: 11px 30px; margin: 20px 0px 30px; font-size: 15px; color: #fff; background: #00c0c8; border-radius: 60px; text-decoration:none;">${new_pass}</a>
                      </center>
                      <b>- Thanks (Admin)</b> </td>
                  </tr>
                  <tr>
                    <td  style="border-top:1px solid #f6f6f6; padding-top:20px; color:#777">If the password above does not work, try sending another recovery password
                        . If you continue to have problems, please feel free to contact us at clsu.procurement.service@gmail.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style="text-align: center; font-size: 12px; color: #b2b2b5; margin-top: 20px">
              <p> © 2019 - CLSU Procurement | Private and Confidential <br> </p>
            </div>
          </div>
        </div>
        </body>
        ` // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        let query = "UPDATE `users_table` SET `User_password_FIELD` = ? WHERE `users_table`.`email` = ? ";
        let data = [new_pass,
            req.body.to];
            //mc.connect();
        mc.query(query, data,(err, rows, fields) => {
            if(err){ res.json( {success:false, data:null} ); }
            else{ res.send( rows[0] ); }
        });
        //mc.end();
        console.log('Message %s sent: %s', info.messageId, info.response);
            res.redirect('/usersAuthenticationPage_route');
        });
    });

    function makeid(length) {
     var result           = '';
     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
     var charactersLength = characters.length;
     for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
     }
     return result;
  }

function checkUserSession( req, res, next )
{
    if( req.session.NAME )
    {
        next();
    }
    else
    {
        // res.redirect('/usersAuthenticationPage_route');
        res.render('pages/UsersAuthentication_PAGE.ejs');

    }
}

app.get('/modification-request-view', checkUserSession,sessionMiddleware,(req, res) => {
    res.render('pages/ppmp_view_mod_PAGE.ejs');
});
app.get('/print_ppmp', checkUserSession,sessionMiddleware,(req,res) => {
    res.render('pages/print_PPMP_PAGE.ejs');    
});
app.get('/view-announcement', checkUserSession,sessionMiddleware,(req, res) => {
    res.render('pages/announcements_view_PAGE.ejs');
});



app.get('/',  checkUserSession,sessionMiddleware,(req, res) => {
        res.redirect('/dashboardPage_route');
});


app.get('/usersManagementPage_route', checkUserSession,sessionMiddleware,(req, res) => {
    res.render('pages/UsersManagement_PAGE');
});

app.get('/VouchersPage_route', checkUserSession,sessionMiddleware,(req, res) => {
    
    
        res.render('pages/Vouchers_PAGE');
    
});

app.get('/itemsManagementPage_route',checkUserSession,sessionMiddleware, (req, res) => {
    res.render('pages/ItemsManagement_PAGE');
});


app.get('/notFoundPage_route', (req, res) => {
    res.render('pages/Pages_error400.ejs');
});


app.get('/ppmpPage_route',checkUserSession, sessionMiddleware,(req, res) => {
    res.render('pages/Ppmp_PAGE.ejs');
});
app.get('/ppmpPage_view_route', checkUserSession,sessionMiddleware,(req, res) => {
    res.render('pages/ppmp_view_PAGE.ejs');
});
app.get('/select_ppmpPage_route', checkUserSession,sessionMiddleware,(req, res) => {
    res.render('pages/Select_ppmp_PAGE.ejs');
});
app.get('/select_appPage_route',checkUserSession,sessionMiddleware, (req, res) => {
    res.render('pages/select_app_PAGE.ejs');
});




app.get('/EnduserPOPage_route', checkUserSession,sessionMiddleware, (req, res) => {
    res.render('pages/EnduserPO_PAGE');
});

app.get('/dashboardPage_route', checkUserSession,sessionMiddleware, (req, res) => {
        res.render('pages/Dashboard_PAGE',  {Greetings: "Welcome "+sess.USERNAME+"!"});
});



app.get('/usersAuthenticationPage_route',  checkUserSession, sessionMiddleware, (req, res) => {
    res.redirect('/dashboardPage_route');
});

app.get('/usersRegistrationPage_route',sessionMiddleware, (req, res) => {
    // res.redirect('/dashboardPage_route');
    res.render('pages/UsersSignup_PAGE.ejs');
});

app.get('/PPMPconsolidationPage_route', checkUserSession,sessionMiddleware,(req, res) => {
    res.render('pages/PPMPConsolidation_PAGE_NOT');
});

app.get('/PMRgenerationPage_route',checkUserSession, sessionMiddleware,(req, res) => {
    res.render('pages/PMRgeneration_PAGE');
});

app.get('/PMRselectionPage_route',checkUserSession, sessionMiddleware,(req, res) => {
    res.render('pages/PMRselection_PAGE');
});

app.post('/userAuthentication_route', sessionMiddleware,(req,res)=>{
    let username = req.body.username;
    let password = req.body.password;
    //mc.connect();
    mc.query('SELECT * FROM users_table where BINARY User_username_FIELD = ? and BINARY User_password_FIELD = ?',[username,password], function (error, results, fields) {
		if (error) throw error;
		if(results[0] == null){
            return res.send({message:"Not Found/Wrong Cred"});
        }else{
            sess = req.session;
            sess.USER_ID   = results[0].User_id_FIELD;
            sess.NAME      = results[0].User_name_FIELD;
            sess.PASSWORD  = results[0].User_password_FIELD;
            sess.USERNAME  = username;
            sess.USER_TYPE = results[0].User_usertype_FIELD;
            sess.POSITION  = results[0].User_position_FIELD;
            sess.FIRST_T   = results[0].User_entityBelongedMainOrganizationName_FIELD;
            sess.SECOND_T  = results[0].User_entityBelongedSubOrganizationName_FIELD;
            sess.THIRD_T   = results[0].User_entityBelongedExtOrganizationName_FIELD;
            return res.send({message:"Found/Authenticated", position:results[0].User_usertype_FIELD});
        } 
    });
//mc.end();
});


app.get('/userLogout_route', (req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(error);
        }else{
            res.redirect('/usersAuthenticationPage_route');
        }
    });
});







app.post('/userRegistration_route', sessionMiddleware,function (req, res, next) {

	let regname = req.body.regname;
	let regusername = req.body.regusername;
	let regpassword = req.body.regpassword;
	let regposition = req.body.regposition;
	let regmainorgname = req.body.regmainorgname;
	let regsuborgname = req.body.regsuborgname;
    let regextorgname = req.body.regextorgname;
    let regemail = req.body.regemail;
    let regvoucher = req.body.regvoucher;

	var query = {
        email:regemail,
        User_name_FIELD:regname,
        User_username_FIELD:regusername,
        User_password_FIELD:regpassword,
		User_usertype_FIELD:"End-user",
		User_position_FIELD:regposition,
		User_entityBelongedMainOrganizationName_FIELD:regmainorgname,
		User_entityBelongedSubOrganizationName_FIELD:regsuborgname,
		User_entityBelongedExtOrganizationName_FIELD:regextorgname
	};

    mc.query("SELECT * FROM vouchers_table where Voucher_code_FIELD = ?", regvoucher, function (error, results, fields) {
        if (error) throw error;
        else{
            if(results[0] == null){
                return res.send({
                    error: true,
                    data: results,
                    message: 'Voucher Problem'
                });
            }else{
                mc.query("INSERT INTO users_table SET ?", query, function (error, results, fields) {
                    if (error) throw error;
                    else{
                        mc.query("DELETE FROM vouchers_table where Voucher_code_FIELD = ?", regvoucher, function (error,   results, fields) {
                            if (error) throw error;
                            else{
                    
                            return res.send({
                                error: false,
                                data: results,
                                message: 'You are Registered'
                            });
                            }
                    
                        });
                    }
            
                });
            }
        }

	});
	
});

app.post('/checkUserAttributeExistence', sessionMiddleware,function(req,res){
    let keywordtyped = req.body.keywordtyped;
    let attribute = req.body.attribute;
    let qstring = "";
    if(attribute.localeCompare("email") == 0){
        qstring = "SELECT * FROM users_table where BINARY email = ?";
    }else if(attribute.localeCompare("username") == 0){
        qstring = "SELECT * FROM users_table where BINARY User_username_FIELD = ?";
    }else if(attribute.localeCompare("password") == 0){
        qstring = "SELECT * FROM users_table where BINARY User_password_FIELD = ?";
    }
    mc.query(qstring,keywordtyped, function (error, results, fields) {
        if (error) throw error;
        else{
            if(results[0] != null){
                if(attribute.localeCompare("email") == 0){
                    return res.send({message:"Email already taken"});
                }else if(attribute.localeCompare("username") == 0){
                    return res.send({message:"Username already taken"});
                }
                else if(attribute.localeCompare("password") == 0){
                    return res.send({message:"Password already taken"});
                }
            }else{
                return res.send({message:""});
            }
        }
	});
});

app.put('/UpdateUserUsingAccountSetting', checkUserSession,sessionMiddleware, (req, res, next) => {

	let userid = req.body.userid;
    let name = req.body.name;
    let email = req.body.email;
	let username = req.body.username;
	let password = req.body.password;
	let position = req.body.position;
	let mainorgname = req.body.mainorgname;
	let suborgname = req.body.suborgname;
	let extorgname = req.body.extorgname;


	var usertobeupdated = {
		User_id_FIELD: userid
	};
	var query = {
        User_name_FIELD: name,
        email:email,
		User_username_FIELD: username,
		User_password_FIELD: password,
		User_position_FIELD:position,
		User_entityBelongedMainOrganizationName_FIELD:mainorgname,
		User_entityBelongedSubOrganizationName_FIELD:suborgname,
		User_entityBelongedExtOrganizationName_FIELD:extorgname
    };
    //mc.connect();
	mc.query("UPDATE users_table SET ? where ?;", [query, usertobeupdated],
		function (error, results, fields) {
            if (error) throw error;
            else{
                sess = req.session;
            sess.USERNAME = username;
            sess.PASSWORD = password;

				return res.send({
					error: false,
					data: results,
					message: 'Updated'
				});
            }


        });
    //mc.end();

});


app.get('/userAccountSettingPage_route', checkUserSession,sessionMiddleware,(req, res) => {
    res.render('pages/UserAccountSetting_PAGE');
});
app.get('/AnnouncementsPage_route', checkUserSession,sessionMiddleware,(req, res) => {
    res.render('pages/Announcements_PAGE');
});


app.post('/getUserProfileData', checkUserSession,sessionMiddleware,function (req, res, next) {
    sess = req.session;

    let username = sess.USERNAME;
    let password = sess.PASSWORD;
    //mc.connect();
        mc.query("SELECT * FROM users_table where BINARY User_username_FIELD = ? and BINARY User_password_FIELD = ?",[username,password], function (error, results, fields) {
            if (error) throw error;
            return res.send(results);
        });
    //mc.end();
    });

app.listen((process.env.PORT || 8000), (err) => {
    if(err) throw err;
    console.log(`Port:${port}`);
    console.log(`------------------------------------------------------------------------`);
    console.log(`Hostname : ${sample_ip}:${port}`);
});