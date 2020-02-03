var pmrdatacurrentresponse;
function loadPMRs_FNCTN() {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {

            var pmrstblcontent = "<tr><th>PMR timescope</th><th>Year</th><th>PROGRAM</th><th colspan=\"3\">Action</th></tr>";
            pmrdatacurrentresponse = JSON.parse(xhr.responseText);

            for (var i in pmrdatacurrentresponse) {    
                pmrstblcontent += "<tr>";
                pmrstblcontent += "<td>" + pmrdatacurrentresponse[i].PMR_timeScope_FIELD + "</td>";
                pmrstblcontent += "<td>" + pmrdatacurrentresponse[i].PMR_year_FIELD + "</td>";
                pmrstblcontent += "<td>" + pmrdatacurrentresponse[i].PMR_program_FIELD + "</td>";
                pmrstblcontent += "<td><div class='button-box'><button id='UpdateUserBtn1_id' type='button' class='btn btn-info' data-toggle='modal' data-target='#UpdatePMRFormModal_id' onclick='loadCurrentInfoForUpdatePMRForm_FNCTN(" + pmrdatacurrentresponse[i].PMR_id_FIELD + "," + i + ")'>UPDATE</button></div></td>";
                pmrstblcontent += "<td><div class='button-box'><button id='DeleteUserBtn1_id' type='button' class='btn btn-danger' onclick='beforeDeletePMR_FNCTN(" + pmrdatacurrentresponse[i].PMR_id_FIELD + ")'>DELETE</button></div></td>";
                pmrstblcontent += "<td><div class='button-box'><a href='/PMRgenerationPage_route?pmrid=" + pmrdatacurrentresponse[i].PMR_id_FIELD + "'><button id='DeleteUserBtn1_id' type='button' class='btn btn-success'>PMR Content</button></a></div></td>";
                pmrstblcontent += "</tr>";
            }

            document.getElementById('PMRsTable_id').innerHTML = pmrstblcontent;
            
        }

    });

xhr.open("GET", "/PMR1st_route/");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("Cache-Control", "no-cache");
xhr.setRequestHeader("Postman-Token", "8259fbf5-dce9-4c0e-aec3-e6bd1328d1b3");
xhr.send(data);
}




function addNewPMR_FNCTN() {
    var pmrtimescope = document.getElementById('PMRtimescopeSelect_id').value;
    var year = document.getElementById('yearSelect_id').value;
    var program = document.getElementById('programSelect_id').value;
    
    var data = "pmrtimescope="+pmrtimescope+"&year="+year+"&program="+program;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            // resetAddPMRForm_FNCTN();
            loadPMRs_FNCTN();
            $('#AddPMRFormModal_id').modal('hide');
            triggerAutoCloseAlert("PMR Successfully Added","");
        }
      });

    xhr.open("POST", "/PMR1st_route/");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "1710d6a9-82c0-4e70-83d2-5f3eb8efafc3");

    xhr.send(data);
}


function updatePMR_FNCTN() {
    var pmrid = document.getElementById("PMRToBeUpdated_id").value;
    var pmrtimescope = document.getElementById('UpdatePMRtimescopeSelect_id').value;
    var year = document.getElementById('UpdateyearSelect_id').value;
    var program = document.getElementById('UpdateprogramSelect_id').value;
   
    var data = "pmrtimescope="+pmrtimescope+"&year="+year+"&program="+program+"&pmrid="+pmrid;
    
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            loadPMRs_FNCTN();
            $('#UpdatePMRFormModal_id').modal('hide');
            triggerAutoCloseAlert("PMR Successfully Updated","");
        }
      });
            xhr.open("PUT", "/PMR1st_route/");
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("Cache-Control", "no-cache");
            xhr.setRequestHeader("Postman-Token", "811b86e5-77fd-49ed-b5a9-fecc3a7dc610");
            xhr.send(data);
}





function deletePMR_FNCTN(pmrid) {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            loadPMRs_FNCTN();
            triggerAutoCloseAlert("PMR Successfully Deleted","");
        }
      });

    xhr.open("DELETE", "/PMR1st_route/"+pmrid);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "322a129f-a62a-459b-bb9f-ce39f5a1620b");

    xhr.send();
}





function searchPOoutside_FNCTN() {
    var searchdata = document.getElementById('POSearchBarInput_id').value;
    var data = "searchdata="+searchdata;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {

            var pmrstblcontent = "<tr><th>PMR timescope</th><th>Year</th><th>PROGRAM</th><th colspan=\"1\">Action</th></tr>";
            if(xhr.responseText == "POnotExist"){
                triggerAutoCloseAlert("PO not exist","");
            }else{
                result = JSON.parse(xhr.responseText);
                for (var i in result) {    
                    pmrstblcontent += "<tr style='background-color: gray'>";
                    pmrstblcontent += "<td>" + result[i].PMR_timeScope_FIELD + "</td>";
                    pmrstblcontent += "<td>" + result[i].PMR_year_FIELD + "</td>";
                    pmrstblcontent += "<td>" + result[i].PMR_program_FIELD + "</td>";
                    pmrstblcontent += "<td><div class='button-box'><a href='/PMRgenerationPage_route?pmrid=" + result[i].PMR_id_FIELD + "'><button id='DeleteUserBtn1_id' type='button' class='btn btn-success'>PMR Content</button></a></div></td>";
                    pmrstblcontent += "</tr>";
                }
    
                document.getElementById('PMRsTable_id').innerHTML = pmrstblcontent;
            }
           
            
           
            
        }

    });

xhr.open("POST", "/PMR1st_route/filterPOoutside");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("Cache-Control", "no-cache");
xhr.setRequestHeader("Postman-Token", "8259fbf5-dce9-4c0e-aec3-e6bd1328d1b3");
xhr.send(data);
}



function searchPMR_FNCTN(){
    var keyword = document.getElementById('PMRSearchBarInput_id').value;
    var data = "keyword="+keyword;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {

            var pmrstblcontent = "<tr><th>PMR timescope</th><th>Year</th><th>PROGRAM</th><th colspan=\"3\">Action</th></tr>";
            pmrdatacurrentresponse = JSON.parse(xhr.responseText);

            for (var i in pmrdatacurrentresponse) {    
                pmrstblcontent += "<tr>";
                pmrstblcontent += "<td>" + pmrdatacurrentresponse[i].PMR_timeScope_FIELD + "</td>";
                pmrstblcontent += "<td>" + pmrdatacurrentresponse[i].PMR_year_FIELD + "</td>";
                pmrstblcontent += "<td>" + pmrdatacurrentresponse[i].PMR_program_FIELD + "</td>";
                pmrstblcontent += "<td><div class='button-box'><button id='UpdateUserBtn1_id' type='button' class='btn btn-info' data-toggle='modal' data-target='#UpdatePMRFormModal_id' onclick='loadCurrentInfoForUpdatePMRForm_FNCTN(" + pmrdatacurrentresponse[i].PMR_id_FIELD + "," + i + ")'>UPDATE</button></div></td>";
                pmrstblcontent += "<td><div class='button-box'><button id='DeleteUserBtn1_id' type='button' class='btn btn-danger' onclick='beforeDeletePMR_FNCTN(" + pmrdatacurrentresponse[i].PMR_id_FIELD + ")'>DELETE</button></div></td>";
                pmrstblcontent += "<td><div class='button-box'><a href='/PMRgenerationPage_route?pmrid=" + pmrdatacurrentresponse[i].PMR_id_FIELD + "'><button id='DeleteUserBtn1_id' type='button' class='btn btn-success'>PMR Content</button></a></div></td>";
                pmrstblcontent += "</tr>";
            }

            document.getElementById('PMRsTable_id').innerHTML = pmrstblcontent;
            
        }

    });

xhr.open("POST", "/PMR1st_route/searchPMR");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("Cache-Control", "no-cache");
xhr.setRequestHeader("Postman-Token", "8259fbf5-dce9-4c0e-aec3-e6bd1328d1b3");
xhr.send(data);
}