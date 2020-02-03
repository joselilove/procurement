var CURRENTUSERID;
function getUserProfileData() {
    var data = null;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            userprofiledata = JSON.parse(xhr.responseText);
            
            document.getElementById('user-name').innerHTML = userprofiledata[0].User_name_FIELD;
            document.getElementById('UAsettingNameInput_id').value = userprofiledata[0].User_name_FIELD;
            document.getElementById('UAsettingEmailInput_id').value = userprofiledata[0].email;
            document.getElementById('UAsettingUsernameInput_id').value = userprofiledata[0].User_username_FIELD;
            document.getElementById('UAsettingPasswordInput_id').value = userprofiledata[0].User_password_FIELD;
            document.getElementById('UAsettingPositionTextarea_id').value = userprofiledata[0].User_position_FIELD;
            document.getElementById('UAsettingProgramBelongedTextarea_id').value = userprofiledata[0].User_entityBelongedMainOrganizationName_FIELD;
            document.getElementById('UAsettingDeptNameTextarea_id').value = userprofiledata[0].User_entityBelongedSubOrganizationName_FIELD;
            document.getElementById('UAsettingSubextTextarea_id').value = userprofiledata[0].User_entityBelongedExtOrganizationName_FIELD;
            CURRENTUSERID = userprofiledata[0].User_id_FIELD;
        }
    });

    xhr.open("POST", "/getUserProfileData");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "1710d6a9-82c0-4e70-83d2-5f3eb8efafc3");

    xhr.send(data);
}


function showPassword_FNCTN(){
    document.getElementById('UAsettingPasswordInput_id').type = 'text';
}
function hidePassword_FNCTN(){
    document.getElementById('UAsettingPasswordInput_id').type = 'password';
}

function setUserProfileDataUpdateForm(){
            document.getElementById('UAsettingNameInput_id').disabled = false;
            document.getElementById('UAsettingEmailInput_id').disabled = false;
            document.getElementById('UAsettingUsernameInput_id').disabled = false;
            document.getElementById('UAsettingPasswordInput_id').disabled = false;
            document.getElementById('UAsettingPositionTextarea_id').disabled = false;
            document.getElementById('UAsettingProgramBelongedTextarea_id').disabled = false;
            document.getElementById('UAsettingDeptNameTextarea_id').disabled = false;
            document.getElementById('UAsettingSubextTextarea_id').disabled = false;
            document.getElementById('form-actionsYeah').style.display = 'block';
            document.getElementById('setUPDupdateformButton').style.visibility = 'hidden';
}

function undosetUserProfileDataUpdateForm(){
    document.getElementById('UAsettingNameInput_id').disabled = true;
    document.getElementById('UAsettingEmailInput_id').disabled = true;
    document.getElementById('UAsettingUsernameInput_id').disabled = true;
    document.getElementById('UAsettingPasswordInput_id').disabled = true;
    document.getElementById('UAsettingPositionTextarea_id').disabled = true;
    document.getElementById('UAsettingProgramBelongedTextarea_id').disabled = true;
    document.getElementById('UAsettingDeptNameTextarea_id').disabled = true;
    document.getElementById('UAsettingSubextTextarea_id').disabled = true;
    document.getElementById('form-actionsYeah').style.display = 'none';
    document.getElementById('setUPDupdateformButton').style.visibility = 'visible';
}

function updateMyCredentials_FNCTN() {
    var name = document.getElementById('UAsettingNameInput_id').value;
    var email = document.getElementById('UAsettingEmailInput_id').value
    var username = document.getElementById('UAsettingUsernameInput_id').value;
    var password = document.getElementById('UAsettingPasswordInput_id').value;
    var position = document.getElementById('UAsettingPositionTextarea_id').value;
    var mainorgname = document.getElementById('UAsettingProgramBelongedTextarea_id').value;
    var suborgname = document.getElementById('UAsettingDeptNameTextarea_id').value;
    var extorgname = document.getElementById('UAsettingSubextTextarea_id').value;
    

    var data = "name="+name+"&username="+username+"&password="+password+"&userid="+CURRENTUSERID;
    data += "&position="+position+"&mainorgname="+mainorgname+"&suborgname="+suborgname+"&extorgname="+extorgname+"&email="+email;
    
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            // getUserProfileData();
            // undosetUserProfileDataUpdateForm();
            swal({   
                title: "Account Updated Successfully",   
                text: "",   
                timer: 2000,   
                showConfirmButton: false 
            });
            window.location.href = "/userLogout_route";
        }
      });
            xhr.open("PUT", "/UpdateUserUsingAccountSetting");
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("Cache-Control", "no-cache");
            xhr.setRequestHeader("Postman-Token", "811b86e5-77fd-49ed-b5a9-fecc3a7dc610");
xhr.send(data);
}