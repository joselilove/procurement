var POidarray = Array();
function directupdatePORemark(poid,newvalue,enduserid,pono){



    var data = "poid="+poid+"&newvalue="+newvalue;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            notifcontent = "Your Purchase Order Status has been updated to '"+newvalue+"' by ";
            var notif = {
                user_id_to: enduserid,
                notification_type: "PO-remarks updated",
                notification_content: notifcontent,
                remarks: "PO# "+pono
            };

            createNewNotif(notif);
        }
      });
            xhr.open("PUT", "/PMR1st_route/UpdatePOremark");
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("Cache-Control", "no-cache");
            xhr.setRequestHeader("Postman-Token", "811b86e5-77fd-49ed-b5a9-fecc3a7dc610");
xhr.send(data);
}


function POdirectupdateProcActStatus(poid,newvalue){
   
    var data = "poid="+poid+"&newvalue="+newvalue;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            loadPMRContent_FNCTN();
        }
      });
            xhr.open("PUT", "/PMR1st_route/UpdatePOprocActStatus");
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("Cache-Control", "no-cache");
            xhr.setRequestHeader("Postman-Token", "811b86e5-77fd-49ed-b5a9-fecc3a7dc610");
xhr.send(data);
}



function createNewNotif(notif){
    
    var data = "user_id_to="+notif.user_id_to+"&notif_type="+notif.notification_type+"&notif_content="+notif.notification_content+"&remarks="+notif.remarks;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    // xhr.addEventListener("readystatechange", function () {
    //     if (this.readyState === 4) {
            
    //     }
    //   });

    xhr.open("POST", "/notification_ROUTE/insert_notification");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "1710d6a9-82c0-4e70-83d2-5f3eb8efafc3");

    xhr.send(data);
}







function pushPOIDinarray(){
    POidarray = [];
    $("input:checkbox[name=pocheckbox]:checked").each(function(){
        POidarray.push($(this).val());
    });
}



function checkCheckedBoxes(){
    if(POidarray.length == 0){
        
        document.getElementById('pmrsTableforPOtransfer').innerHTML ="";

        triggerAutoCloseAlert("No PO selected","");
    }else{
        loadPMRsforPOtransfer();
    }
}




function loadPMRsforPOtransfer() {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {

            var pmrstblcontent = "<tr><th>PMR timescope</th><th>Year</th><th>PROGRAM</th><th>Action</th></tr>";
            result = JSON.parse(xhr.responseText);

            for (var i in result) {    
                pmrstblcontent += "<tr>";
                pmrstblcontent += "<td>" + result[i].PMR_timeScope_FIELD + "</td>";
                pmrstblcontent += "<td>" + result[i].PMR_year_FIELD + "</td>";
                pmrstblcontent += "<td>" + result[i].PMR_program_FIELD + "</td>";
                pmrstblcontent += "<td><div class='button-box'><button type='button' class='btn btn-outline-info' onclick='transferPO(" + result[i].PMR_id_FIELD + ")'><i class='mdi mdi-transfer'></i></button></div></td>";
                pmrstblcontent += "</tr>";
            }

            document.getElementById('pmrsTableforPOtransfer').innerHTML = pmrstblcontent;
            
        }

    });

xhr.open("GET", "/PMR1st_route/");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("Cache-Control", "no-cache");
xhr.setRequestHeader("Postman-Token", "8259fbf5-dce9-4c0e-aec3-e6bd1328d1b3");
xhr.send(data);
}








function transferPO(destpmrid){

    var data = "destpmrid="+destpmrid+"&potobetransferred="+POidarray;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            $('#TransmitPOwindow').modal('hide');
            triggerAutoCloseAlert("PO Successfully Transferred","");
            loadPMRContent_FNCTN();
        }
      });
            xhr.open("PUT", "PMR1st_route/transferPO");
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("Cache-Control", "no-cache");
            xhr.setRequestHeader("Postman-Token", "811b86e5-77fd-49ed-b5a9-fecc3a7dc610");
xhr.send(data);
}