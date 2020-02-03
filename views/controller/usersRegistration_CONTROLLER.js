




function userSignup_FNCTN(){
    var regname = document.getElementById('SignupNameInput_id').value;
    var regemail = document.getElementById('SignupEmailInput_id').value;
    var regusername = document.getElementById('SignupUsernameInput_id').value;
    var regpassword = document.getElementById('SignupPasswordInput_id').value;
    var regconfpass = document.getElementById('SignupConfirmPasswordInput_id').value;
    var regposition = document.getElementById('SignupPositionTextarea_id').value;
    var regmainorgname = document.getElementById('SignupMainOrgNameTextarea_id').value;
    var regsuborgname = document.getElementById('SignupSubOrgNameTextarea_id').value;
    var regextorgname = document.getElementById('SignupExtOrgNameTextarea_id').value;
    var regvoucher = document.getElementById('SignupVoucherInput_id').value;
    


    if(regname == "" || regusername == "" || regpassword == "" || regconfpass == "" || regposition == "" || regmainorgname == "" || regsuborgname == "" || regextorgname == "" || regvoucher == "" || regemail == ""){
        swal({   
            title: "There are empty field/s",   
            text: "Please fill up all the fields",   
            timer: 2000,   
            showConfirmButton: false 
        });
    }else{
        var emailspancontent = document.getElementById("emailExistence").innerHTML;
        var usernamespancontent = document.getElementById("usernameExistence").innerHTML;
        var passwordspancontent = document.getElementById("passwordExistence").innerHTML;
        if(emailspancontent == "" && usernamespancontent == "" && passwordspancontent == ""){
            var password_strength = document.getElementById("password_strength").innerHTML;
        if(password_strength.localeCompare("Weak") == 0){
            swal({   
                title: "Weak Password",   
                text: "",   
                timer: 2000,   
                showConfirmButton: false 
            });
        }else{
            if(regpassword === regconfpass){    
                var data = "regname="+regname+"&regusername="+regusername+"&regpassword="+regpassword;
                data += "&regposition="+regposition+"&regmainorgname="+regmainorgname+"&regsuborgname="+regsuborgname+"&regextorgname="+regextorgname+"&regemail="+regemail+"&regvoucher="+regvoucher;
                var xhr = new XMLHttpRequest();
                xhr.withCredentials = true;
            
                xhr.addEventListener("readystatechange", function () {
                    if (this.readyState === 4) {
                        response = JSON.parse(xhr.responseText);
                
                if(response.message == 'You are Registered'){
                    triggerUserRegisteredAlert();
                    window.location.href="/usersAuthenticationPage_route";
                }else if(response.message == "Voucher Problem"){
                    swal({   
                        title: "Voucher Problem",   
                        text: "Either Voucher Not Found / Mistyped Voucher, you can get a voucher on the CLSU Procurement Agency",   
                        timer: 2000,   
                        showConfirmButton: false 
                    });
                }
                        
                    }
                  });
            
                xhr.open("POST", "/userRegistration_route");
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhr.setRequestHeader("Cache-Control", "no-cache");
                xhr.setRequestHeader("Postman-Token", "1710d6a9-82c0-4e70-83d2-5f3eb8efafc3");
            
                xhr.send(data);
                }
                else{
                    swal({   
                        title: "Password Not Matched",   
                        text: "Please check your password",   
                        timer: 2000,   
                        showConfirmButton: false 
                    });
                    
                }
        }
        }else{
            swal({   
                title: "Attribute/s taken",   
                text: "Check your Email/Username/Password",   
                timer: 2000,   
                showConfirmButton: false 
            });
        }
        
    }
   
    }


    function  triggerUserRegisteredAlert(){
        swal({   
            title: "You are Registered!",   
            text: "",   
            timer: 2000,   
            showConfirmButton: false 
        });
    }





    function CheckPasswordStrength(password) {
        var password_strength = document.getElementById("password_strength");
        
        //TextBox left blank.
        if (password.length == 0) {
            password_strength.innerHTML = "";
            return;
        }
 
        //Regular Expressions.
        var regex = new Array();
        regex.push("[A-Z]"); //Uppercase Alphabet.
        regex.push("[a-z]"); //Lowercase Alphabet.
        regex.push("[0-9]"); //Digit.
        regex.push("[$@$!%*#?&]"); //Special Character.
 
        var passed = 0;
 
        //Validate for each Regular Expression.
        for (var i = 0; i < regex.length; i++) {
            if (new RegExp(regex[i]).test(password)) {
                passed++;
            }
        }
 
        //Validate for length of Password.
        if (passed > 2 && password.length > 8) {
            passed++;
        }
 
        //Display status.
        var color = "";
        var strength = "";
        switch (passed) {
            case 0:
            case 1:
                strength = "Weak";
                color = "red";
                break;
            case 2:
                strength = "Good";
                color = "darkorange";
                break;
            case 3:
            case 4:
                strength = "Strong";
                color = "green";
                break;
            case 5:
                strength = "Very Strong";
                color = "darkgreen";
                break;
        }
        password_strength.innerHTML = strength;
        password_strength.style.color = color;
        checkUserAttributeExistence(password,'password');
    }




    function checkUserAttributeExistence(keywordtyped,attribute){

    var data = "keywordtyped="+keywordtyped+"&attribute="+attribute;
    
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            result = JSON.parse(xhr.responseText);
            if(attribute == 'email'){
                document.getElementById("emailExistence").innerHTML = result.message;
            }else if(attribute == 'username'){
                document.getElementById("usernameExistence").innerHTML = result.message;
            }else if(attribute == 'password'){
                document.getElementById("passwordExistence").innerHTML = result.message;
            }
            
        }
      });

    xhr.open("POST", "/checkUserAttributeExistence");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "1710d6a9-82c0-4e70-83d2-5f3eb8efafc3");

    xhr.send(data);
    }