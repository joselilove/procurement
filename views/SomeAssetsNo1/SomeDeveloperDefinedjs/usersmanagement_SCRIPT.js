// function showhideAddUserForm_FNCTN(){
//     if(document.getElementById("AddUserForm_id").style.display == "none"){
//         document.getElementById("AddUserForm_id").style.display = "block";
//     }else{
//         document.getElementById("AddUserForm_id").style.display = "none";
//         resetAddUserForm_FNCTN();
//     }
// }

// function resetAddUserForm_FNCTN() {
//     document.getElementById('NameInput_id').value = "";
//     document.getElementById('UsernameInput_id').value = "";
//     document.getElementById('PasswordInput_id').value = "";
//     document.getElementById('usertypeSelect_id').selectedIndex = 0;
// }



function beforeDeleteUser_FNCTN(userid) {
    if (confirm("Are you sure you want to delete this user?") == true) {
        deleteUser_FNCTN(userid);
    }
}


function  resetAddUserForm_FNCTN(){
    document.getElementById('NameInput_id').value = "";
    document.getElementById('EmailInput_id').value = "";
    document.getElementById('UsernameInput_id').value = "";
    document.getElementById('PasswordInput_id').value = "";
    document.getElementById('usertypeSelect_id').selectedIndex = 0;
    document.getElementById('PositionTextarea_id').value = ""; 
    document.getElementById('MainOrgNameTextarea_id').value = ""; 
    document.getElementById('SubOrgNameTextarea_id').value = "";
    document.getElementById('ExtOrgNameTextarea_id').value = "";

}


function loadCurrentInfoForUpdateUserForm_FNCTN(userid, userindex) {
       
        document.getElementById('UserToBeUpdated_id').value = userid;
        document.getElementById('UpdateNameInput_id').value = userdatacurrentresponse[userindex].User_name_FIELD;
        document.getElementById('UpdateEmailInput_id').value = userdatacurrentresponse[userindex].email;
        document.getElementById('UpdateUsernameInput_id').value = userdatacurrentresponse[userindex].User_username_FIELD;
        document.getElementById('UpdatePasswordInput_id').value = userdatacurrentresponse[userindex].User_password_FIELD;
        document.getElementById('UpdateusertypeSelect_id').value = userdatacurrentresponse[userindex].User_usertype_FIELD; 
        document.getElementById('UpdatePositionTextarea_id').value = userdatacurrentresponse[userindex].User_position_FIELD; 
        document.getElementById('UpdateMainOrgNameTextarea_id').value = userdatacurrentresponse[userindex].User_entityBelongedMainOrganizationName_FIELD; 
        document.getElementById('UpdateSubOrgNameTextarea_id').value = userdatacurrentresponse[userindex].User_entityBelongedSubOrganizationName_FIELD; 
        document.getElementById('UpdateExtOrgNameTextarea_id').value = userdatacurrentresponse[userindex].User_entityBelongedExtOrganizationName_FIELD;    
}   


function showUpdateformPassword_FNCTN(){
    document.getElementById('UpdatePasswordInput_id').type = 'text';
}
function hideUpdateformPassword_FNCTN(){
    document.getElementById('UpdatePasswordInput_id').type = 'password';
}