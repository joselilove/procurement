var userdatacurrentresponse;
function loadUsersData_FNCTN() {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {

            var userstblcontent = "<thead><tr><th>Name of the User</th><th>Email</th><th>Username</th><th>Password</th><th>User Type</th><th>Position</th><th>Main Organization Name</th><th>Sub Organization Name</th><th>Ext Organization Name</th><th colspan=\"2\">Action</th></tr></thead>";
            userdatacurrentresponse = JSON.parse(xhr.responseText);
            userstblcontent += "<tbody>";
            for (var i in userdatacurrentresponse) {    
                userstblcontent += "<tr>";
                userstblcontent += "<td>" + userdatacurrentresponse[i].User_name_FIELD + "</td>";
                userstblcontent += "<td>" + userdatacurrentresponse[i].email + "</td>";
                
                userstblcontent += "<td>" + userdatacurrentresponse[i].User_username_FIELD + "</td>";
                userstblcontent += "<td>" + userdatacurrentresponse[i].User_password_FIELD + "</td>";
                userstblcontent += "<td>" + userdatacurrentresponse[i].User_usertype_FIELD + "</td>";
                userstblcontent += "<td>" + userdatacurrentresponse[i].User_position_FIELD + "</td>";
                userstblcontent += "<td>" + userdatacurrentresponse[i].User_entityBelongedMainOrganizationName_FIELD + "</td>";
                userstblcontent += "<td>" + userdatacurrentresponse[i].User_entityBelongedSubOrganizationName_FIELD + "</td>";
                userstblcontent += "<td>" + userdatacurrentresponse[i].User_entityBelongedExtOrganizationName_FIELD + "</td>";
                userstblcontent += "<td><div class='button-box'><button id='UpdateUserBtn1_id' type='button' class='btn btn-info' data-toggle='modal' data-target='#UpdateUserFormModal_id' onclick='loadCurrentInfoForUpdateUserForm_FNCTN(" + userdatacurrentresponse[i].User_id_FIELD + "," + i + ")'>UPDATE</button></div></td>";
                userstblcontent += "<td><div class='button-box'><button id='DeleteUserBtn1_id' type='button' class='btn btn-danger' onclick='beforeDeleteUser_FNCTN(" + userdatacurrentresponse[i].User_id_FIELD + ")'>DELETE</button></div></td>";
                userstblcontent += "</tr>";
            }
            userstblcontent += "</tbody>";

            document.getElementById('UsersDataTable_id').innerHTML = userstblcontent;
        }

    });

xhr.open("GET", "/usersManagement_route/");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("Cache-Control", "no-cache");
xhr.setRequestHeader("Postman-Token", "8259fbf5-dce9-4c0e-aec3-e6bd1328d1b3");
xhr.send(data);
}








function addNewUser_FNCTN() {
    var name = document.getElementById('NameInput_id').value;
    var email = document.getElementById('EmailInput_id').value;
    var username = document.getElementById('UsernameInput_id').value;
    var password = document.getElementById('PasswordInput_id').value;
    var usertype = document.getElementById('usertypeSelect_id').value;
    var position = document.getElementById('PositionTextarea_id').value;
    var mainorgname = document.getElementById('MainOrgNameTextarea_id').value;
    var suborgname = document.getElementById('SubOrgNameTextarea_id').value;
    var extorgname = document.getElementById('ExtOrgNameTextarea_id').value;
    
    var data = "name="+name+"&username="+username+"&password="+password+"&usertype="+usertype;
    data += "&position="+position+"&mainorgname="+mainorgname+"&suborgname="+suborgname+"&extorgname="+extorgname+"&email="+email;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            resetAddUserForm_FNCTN();
            loadUsersData_FNCTN();
            $('#AddUserFormModal_id').modal('hide');
            triggerAutoCloseAlert("User Successfully Added","");
        }
      });

    xhr.open("POST", "/usersManagement_route/");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "1710d6a9-82c0-4e70-83d2-5f3eb8efafc3");

    xhr.send(data);
}








function deleteUser_FNCTN(userid) {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            loadUsersData_FNCTN();
            triggerAutoCloseAlert("User Successfully Deleted","");
        }
      });

    xhr.open("DELETE", "/usersManagement_route/"+userid);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "322a129f-a62a-459b-bb9f-ce39f5a1620b");

    xhr.send();
}



function updateUser_FNCTN() {
    var userid = document.getElementById("UserToBeUpdated_id").value;
    var name = document.getElementById('UpdateNameInput_id').value;
    var email = document.getElementById('UpdateEmailInput_id').value;
    var username = document.getElementById('UpdateUsernameInput_id').value;
    var password = document.getElementById('UpdatePasswordInput_id').value;
    var usertype = document.getElementById('UpdateusertypeSelect_id').value;
    var position = document.getElementById('UpdatePositionTextarea_id').value;
    var mainorgname = document.getElementById('UpdateMainOrgNameTextarea_id').value;
    var suborgname = document.getElementById('UpdateSubOrgNameTextarea_id').value;
    var extorgname = document.getElementById('UpdateExtOrgNameTextarea_id').value;
    

    var data = "name="+name+"&username="+username+"&password="+password+"&usertype="+usertype+"&userid="+userid;
    data += "&position="+position+"&mainorgname="+mainorgname+"&suborgname="+suborgname+"&extorgname="+extorgname+"&email="+email;
    
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            loadUsersData_FNCTN();
            $('#UpdateUserFormModal_id').modal('hide');
            triggerAutoCloseAlert("User Successfully Updated","");
        }
      });
            xhr.open("PUT", "/usersManagement_route/");
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("Cache-Control", "no-cache");
            xhr.setRequestHeader("Postman-Token", "811b86e5-77fd-49ed-b5a9-fecc3a7dc610");
xhr.send(data);
}