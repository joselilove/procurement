function loadVouchers_FNCTN() {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {

            var voucherstblcontent = "<thead><tr><th>CODE</th><th>Action</th></tr></thead>";
            var result = JSON.parse(xhr.responseText);
            voucherstblcontent += "<tbody>";
            for (var i in result) {    
                voucherstblcontent += "<tr>";
                voucherstblcontent += "<td>" + result[i].Voucher_code_FIELD + "</td>";
                voucherstblcontent += "<td><div class='button-box'><button id='DeleteUserBtn1_id' type='button' class='btn btn-danger' onclick='beforeDeleteVoucher_FNCTN(" + result[i].Voucher_id_FIELD + ")'>DELETE</button></div></td>";
                voucherstblcontent += "</tr>";
            }
            voucherstblcontent += "</tbody>";

            document.getElementById('VouchersDataTable_id').innerHTML = voucherstblcontent;
        }

    });

xhr.open("POST", "/vouchersMngmt_route/");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("Cache-Control", "no-cache");
xhr.setRequestHeader("Postman-Token", "8259fbf5-dce9-4c0e-aec3-e6bd1328d1b3");
xhr.send(data);
}








function addNewVoucher_FNCTN() {
    var code = document.getElementById('CodeInput_id').value;
    if(code == ""){
        swal({   
            title: "Empty Field",   
            text: "Please fill up the field",   
            timer: 2000,   
            showConfirmButton: false 
        });
    }else{
        var data = "code="+code;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            document.getElementById('CodeInput_id').value = "";
            loadVouchers_FNCTN();
            $('#AddVoucherFormModal_id').modal('hide');
            triggerAutoCloseAlert("Voucher Successfully Added","");
        }
      });

    xhr.open("POST", "/vouchersMngmt_route/AddVouch");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "1710d6a9-82c0-4e70-83d2-5f3eb8efafc3");

    xhr.send(data);
    }
}








function deleteVoucher_FNCTN(vouchid) {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            loadVouchers_FNCTN();
            triggerAutoCloseAlert("Voucher Successfully Deleted","");
        }
      });

    xhr.open("DELETE", "/vouchersMngmt_route/DelVouch/"+vouchid);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "322a129f-a62a-459b-bb9f-ce39f5a1620b");

    xhr.send();
}



function beforeDeleteVoucher_FNCTN(vouchid) {
    if (confirm("Are you sure you want to delete this voucher?") == true) {
        deleteVoucher_FNCTN(vouchid);
    }
}