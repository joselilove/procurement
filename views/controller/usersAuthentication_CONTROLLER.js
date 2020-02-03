
function userLogin_FNCTN(){
    var username,password;
    username = document.getElementById("UsernameInput_id").value;
    password = document.getElementById("PasswordInput_id").value;

    var xhr = new XMLHttpRequest();
    destination = "userAuthentication_route";

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            response = JSON.parse(xhr.responseText);
            
            if(response.message == 'Not Found/Wrong Cred'){
                invalid_login();
            }else{
                
                if(response.position == 'Administrator'){
                    window.location.href="/dashboardPage_route";
                }
                if(response.position == 'End-user'){
                    window.location.href="/end_user_dashboard_ROUTE";

                }
                
            }
        }
    }
    xhr.open("POST", destination, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "1710d6a9-82c0-4e70-83d2-5f3eb8efafc3");
    xhr.send("username=" + username + "&password=" + password);
    
}




$(document).ready(function(){
    $('#pagebuddy').keypress(function(e) {
        if(e.which == 13) {
            userLogin_FNCTN();
        }
});

});
