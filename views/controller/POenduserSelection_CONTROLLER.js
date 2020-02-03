var POtobesettedbyanEnduser;
var POnotobesettedbyanEnduser;

function loadEndUsersData_FNCTN(poid,pono) {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {

            var enduserstblcontent = "<thead><tr><th>Name of the User</th><th>Username</th><th>Position</th><th colspan='3'>Agency</th><th>Action</th></tr></thead>";
            var result = JSON.parse(xhr.responseText);
            enduserstblcontent += "<tbody>";
            for (var i in result) {    
                enduserstblcontent += "<tr>";
                enduserstblcontent += "<td>" + result[i].User_name_FIELD + "</td>";
                enduserstblcontent += "<td>" + result[i].User_username_FIELD + "</td>";
                enduserstblcontent += "<td>" + result[i].User_position_FIELD + "</td>";
                enduserstblcontent += "<td>" + result[i].User_entityBelongedMainOrganizationName_FIELD + "</td>";
                enduserstblcontent += "<td>" + result[i].User_entityBelongedSubOrganizationName_FIELD + "</td>";
                enduserstblcontent += "<td>" + result[i].User_entityBelongedExtOrganizationName_FIELD + "</td>";
                enduserstblcontent += "<td><div class='button-box'><button id='DeleteUserBtn1_id' type='button' class='btn btn-outline-dark' onclick='selectPOenduser_FNCTN(" + result[i].User_id_FIELD + ")'><i class='mdi mdi-check'></i></button></div></td>";
                enduserstblcontent += "</tr>";
            }
            enduserstblcontent += "</tbody>";

            document.getElementById('End-UsersTable').innerHTML = enduserstblcontent;
           POtobesettedbyanEnduser = poid;
           POnotobesettedbyanEnduser = pono;
        }

    });

xhr.open("POST", "/POenduserSelection_route/getEndUser");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("Cache-Control", "no-cache");
xhr.setRequestHeader("Postman-Token", "8259fbf5-dce9-4c0e-aec3-e6bd1328d1b3");
xhr.send(data);
}



function selectPOenduser_FNCTN(enduserid) {

    var data = "poid="+POtobesettedbyanEnduser+"&enduserid="+enduserid;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            $('#SetPOenduserModal_id').modal('hide');
            triggerAutoCloseAlert("End-User Successfully Assigned","");
            loadPMRContent_FNCTN();
            notifcontent = "The respective Purchase Order of your Purchase Request has assigned to you by ";
            var notif = {
                user_id_to: enduserid,
                notification_type: "PO-assigned",
                notification_content: notifcontent,
                remarks: "PO# "+POnotobesettedbyanEnduser
            };

            createNewNotif(notif);

        }
      });
            xhr.open("PUT", "/POenduserSelection_route/setPOenduser");
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("Cache-Control", "no-cache");
            xhr.setRequestHeader("Postman-Token", "811b86e5-77fd-49ed-b5a9-fecc3a7dc610");
xhr.send(data);
}



function filterEndUser_FNCTN(){
    var searchdata = document.getElementById('SearchEndUserSearchBar').value;
    var data = "searchdata="+searchdata;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {

            var enduserstblcontent = "<thead><tr><th>Name of the User</th><th>Username</th><th>Position</th><th colspan='3'>Agency</th><th>Action</th></tr></thead>";
            var result = JSON.parse(xhr.responseText);
            enduserstblcontent += "<tbody>";
            for (var i in result) {    
                enduserstblcontent += "<tr>";
                enduserstblcontent += "<td>" + result[i].User_name_FIELD + "</td>";
                enduserstblcontent += "<td>" + result[i].User_username_FIELD + "</td>";
                enduserstblcontent += "<td>" + result[i].User_position_FIELD + "</td>";
                enduserstblcontent += "<td>" + result[i].User_entityBelongedMainOrganizationName_FIELD + "</td>";
                enduserstblcontent += "<td>" + result[i].User_entityBelongedSubOrganizationName_FIELD + "</td>";
                enduserstblcontent += "<td>" + result[i].User_entityBelongedExtOrganizationName_FIELD + "</td>";
                enduserstblcontent += "<td><div class='button-box'><button id='DeleteUserBtn1_id' type='button' class='btn btn-outline-dark' onclick='selectPOenduser_FNCTN(" + result[i].User_id_FIELD + ")'><i class='mdi mdi-check'></i></button></div></td>";
                enduserstblcontent += "</tr>";
            }
            enduserstblcontent += "</tbody>";

            document.getElementById('End-UsersTable').innerHTML = enduserstblcontent;
        }

    });

xhr.open("POST", "/POenduserSelection_route/searchEndUser");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("Cache-Control", "no-cache");
xhr.setRequestHeader("Postman-Token", "8259fbf5-dce9-4c0e-aec3-e6bd1328d1b3");
xhr.send(data);
}


function loadEndUser_FNCTN(enduserid){
    var data = "enduserid="+enduserid;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {

            var result = JSON.parse(xhr.responseText);

            document.getElementById('ViewPOenduserName').innerHTML = result[0].User_name_FIELD;
            document.getElementById('ViewPOenduserPosition').innerHTML = result[0].User_position_FIELD;
            document.getElementById('ViewPOenduserMain').innerHTML = result[0].User_entityBelongedMainOrganizationName_FIELD;
            document.getElementById('ViewPOenduserSub').innerHTML = result[0].User_entityBelongedSubOrganizationName_FIELD;
            document.getElementById('ViewPOenduserExt').innerHTML = result[0].User_entityBelongedExtOrganizationName_FIELD;
            
            
        }

    });

xhr.open("POST", "/POenduserSelection_route/getThePOEndUser");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("Cache-Control", "no-cache");
xhr.setRequestHeader("Postman-Token", "8259fbf5-dce9-4c0e-aec3-e6bd1328d1b3");
xhr.send(data);
}
