function getmyParentPMRidAndPutInHiddenInput() {
    searchParams = new URLSearchParams(window.location.search);
    var pmrid = searchParams.get('pmrid');
    document.getElementById('PMRidPassedUsingURL').value = pmrid;
    getAndDisplayPMRdata(pmrid);
}
var timescopeglobalvar;

function getAndDisplayPMRdata(pmrid) {
    var data = "pmrid=" + pmrid;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            result = JSON.parse(xhr.responseText);

            document.getElementById('PMRdataHereinCardHeader').innerHTML = result[0].PMR_timeScope_FIELD + "-" + result[0].PMR_year_FIELD + "-" + result[0].PMR_program_FIELD;

            programantonym = "";
            program = result[0].PMR_program_FIELD;
            if (program.localeCompare("RET") == 0) {
                programantonym = "RESEARCH EXTENSION TRAINING";
            } else if (program.localeCompare("ACAD") == 0) {
                programantonym = "ACADEMIC DIVISION";
            } else if (program.localeCompare("Admin") == 0) {
                programantonym = "ADMINISTRATION DIVISION";
            } else if (program.localeCompare("UBAP") == 0) {
                programantonym = "UNIVERSITY BUSINESS AFFAIRS PROGRAM";
            } else {
                programantonym = "Yay";
            }


            timescope = result[0].PMR_timeScope_FIELD;
            if (timescope.localeCompare("1st Semester") == 0) {

                document.getElementById('SemesterOnPMRContentdisplayElement').innerHTML = "PROCUREMENT MONITORING REPORT 1ST SEMESTER";
                document.getElementById('PMRdateOnPMRContentDisplayElement').innerHTML = "JANUARY - JUNE 30, " + result[0].PMR_year_FIELD;
                document.getElementById('procActivityStatusDiv_id').style.display = "block";
                document.getElementById('UpdateprocActivityStatusDiv_id').style.display = "block";

            } else if (timescope.localeCompare("2nd Semester") == 0) {
                document.getElementById('SemesterOnPMRContentdisplayElement').innerHTML = "PROCUREMENT MONITORING REPORT 2ND SEMESTER";
                document.getElementById('PMRdateOnPMRContentDisplayElement').innerHTML = "JULY - DECEMBER 30, " + result[0].PMR_year_FIELD;
                document.getElementById('procActivityStatusDiv_id').style.display = "block";
                document.getElementById('UpdateprocActivityStatusDiv_id').style.display = "block";

            } else if (timescope.localeCompare("1st Quarter") == 0) {
                document.getElementById('PMRdateOnPMRContentDisplayElement').innerHTML = "January - March 30, " + result[0].PMR_year_FIELD;
                document.getElementById('ProgramLabelOnPmrContentDisplayElement2').innerHTML = programantonym;
                document.getElementById('ProgramLabelOnPmrContentDisplayElement1').style.display = "block";
            } else if (timescope.localeCompare("2nd Quarter") == 0) {
                document.getElementById('PMRdateOnPMRContentDisplayElement').innerHTML = "April 1 - June 30, " + result[0].PMR_year_FIELD;
                document.getElementById('ProgramLabelOnPmrContentDisplayElement2').innerHTML = programantonym;
                document.getElementById('ProgramLabelOnPmrContentDisplayElement1').style.display = "block";
            } else if (timescope.localeCompare("3rd Quarter") == 0) {
                document.getElementById('PMRdateOnPMRContentDisplayElement').innerHTML = "July 1 - September 30, " + result[0].PMR_year_FIELD;
                document.getElementById('ProgramLabelOnPmrContentDisplayElement2').innerHTML = programantonym;
                document.getElementById('ProgramLabelOnPmrContentDisplayElement1').style.display = "block";
            } else if (timescope.localeCompare("4th Quarter") == 0) {
                document.getElementById('PMRdateOnPMRContentDisplayElement').innerHTML = "October 1 - December 30, " + result[0].PMR_year_FIELD;
                document.getElementById('ProgramLabelOnPmrContentDisplayElement2').innerHTML = programantonym;
                document.getElementById('ProgramLabelOnPmrContentDisplayElement1').style.display = "block";
            } else {
                alert("Yay");
            }
            timescopeglobalvar = timescope;
            actualloadPMRContent_FNCTN(pmrid, timescope);
        }
    });

    xhr.open("POST", "/PMR1st_route/getTheDataOFThisPMR");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "8259fbf5-dce9-4c0e-aec3-e6bd1328d1b3");
    xhr.send(data);
}

var podatacurrentresponse;
function loadPMRContent_FNCTN() {
    getmyParentPMRidAndPutInHiddenInput();


}

function actualloadPMRContent_FNCTN(pmrid, timescope) {
    var data = null;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            if (timescope.localeCompare("1st Quarter") == 0 || timescope.localeCompare("2nd Quarter") == 0 || timescope.localeCompare("3rd Quarter") == 0 || timescope.localeCompare("4th Quarter") == 0) {
                var postblcontent = "";
                podatacurrentresponse = JSON.parse(xhr.responseText);
                postblcontent += "<tr><td class='certainelements'></td><td></td><td><strong>ALTERNATIVE MODE</strong></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
                for (var i in podatacurrentresponse) {
                    postblcontent += "<tr>";
                    
                    postblcontent += "<td class='certainelements'><div class='button-box'><button id='UpdateUserBtn1_id' type='button' class='btn btn-info' data-toggle='modal' data-target='#UpdatePOFormModal_id' onclick='loadCurrentInfoForUpdatePOForm_FNCTN(" + podatacurrentresponse[i].PMRpurchaseOrder_id_FIELD + "," + i + ")'><span class='ti-pencil'></span></button><button id='DeleteUserBtn1_id' type='button' class='btn btn-danger' onclick='beforeDeletePO_FNCTN(" + podatacurrentresponse[i].PMRpurchaseOrder_id_FIELD + ")'><span class='ti-trash'></span></button></div><input type='checkbox' name ='pocheckbox' value='"+podatacurrentresponse[i].PMRpurchaseOrder_id_FIELD+"' onclick=\"pushPOIDinarray()\"></td>";
                   
                    postblcontent += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_poNo_FIELD + "</td>";
                    postblcontent += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_procProgOrProj_FIELD + "</td>";
                    postblcontent += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_pmoOrEnduser_FIELD + "</td>";
                    postblcontent += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_procMode_FIELD + "</td>";
                    postblcontent += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_preProcConference_FIELD + "</td>";
                    postblcontent += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_adsOrPostOfIB_FIELD + "</td>";
                    postblcontent += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_preBidConf_FIELD + "</td>";
                    postblcontent += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_eligibilityCheck_FIELD + "</td>";
                    postblcontent += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_subOrOpenOfBids_FIELD + "</td>";
                    postblcontent += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_bidEvaluation_FIELD + "</td>";
                    postblcontent += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_postQual_FIELD + "</td>";
                    ponoticeofaward = podatacurrentresponse[i].PMRpurchaseOrder_noticeOfAward_FIELD;
                    poNOAsubstring = ponoticeofaward.substring(3, 5);
                    poNOAmonthEquiv = "";
                    if (poNOAsubstring.localeCompare("01") == 0) {
                        poNOAmonthEquiv = "-Jan-";
                    } else if (poNOAsubstring.localeCompare("02") == 0) {
                        poNOAmonthEquiv = "-Feb-";
                    } else if (poNOAsubstring.localeCompare("03") == 0) {
                        poNOAmonthEquiv = "-Mar-";
                    } else if (poNOAsubstring.localeCompare("04") == 0) {
                        poNOAmonthEquiv = "-Apr-";
                    } else if (poNOAsubstring.localeCompare("05") == 0) {
                        poNOAmonthEquiv = "-May-";
                    } else if (poNOAsubstring.localeCompare("06") == 0) {
                        poNOAmonthEquiv = "-Jun-";
                    } else if (poNOAsubstring.localeCompare("07") == 0) {
                        poNOAmonthEquiv = "-Jul-";
                    } else if (poNOAsubstring.localeCompare("08") == 0) {
                        poNOAmonthEquiv = "-Aug-";
                    } else if (poNOAsubstring.localeCompare("09") == 0) {
                        poNOAmonthEquiv = "-Sep-";
                    } else if (poNOAsubstring.localeCompare("10") == 0) {
                        poNOAmonthEquiv = "-Oct-";
                    } else if (poNOAsubstring.localeCompare("11") == 0) {
                        poNOAmonthEquiv = "-Nov-";
                    } else if (poNOAsubstring.localeCompare("12") == 0) {
                        poNOAmonthEquiv = "-Dec-";
                    }
                    poNOAsubstringDay = ponoticeofaward.substring(0, 2);
                    poNOAsubstringYear = ponoticeofaward.substring(8, 10);
                    if (ponoticeofaward.localeCompare("Invalid date") == 0) {
                        postblcontent += "<td style='font-size:11px'>---</td>";

                    } else {
                        postblcontent += "<td style='font-size:11px'>" + poNOAsubstringDay + poNOAmonthEquiv + poNOAsubstringYear + "</td>";

                    }
                    pocontractsigning = podatacurrentresponse[i].PMRpurchaseOrder_contractSigningOrApprovePO_FIELD;
                    poCSsubstring = pocontractsigning.substring(3, 5);
                    poCSmonthEquiv = "";
                    if (poCSsubstring.localeCompare("01") == 0) {
                        poCSmonthEquiv = "-Jan-";
                    } else if (poCSsubstring.localeCompare("02") == 0) {
                        poCSmonthEquiv = "-Feb-";
                    } else if (poCSsubstring.localeCompare("03") == 0) {
                        poCSmonthEquiv = "-Mar-";
                    } else if (poCSsubstring.localeCompare("04") == 0) {
                        poCSmonthEquiv = "-Apr-";
                    } else if (poCSsubstring.localeCompare("05") == 0) {
                        poCSmonthEquiv = "-May-";
                    } else if (poCSsubstring.localeCompare("06") == 0) {
                        poCSmonthEquiv = "-Jun-";
                    } else if (poCSsubstring.localeCompare("07") == 0) {
                        poCSmonthEquiv = "-Jul-";
                    } else if (poCSsubstring.localeCompare("08") == 0) {
                        poCSmonthEquiv = "-Aug-";
                    } else if (poCSsubstring.localeCompare("09") == 0) {
                        poCSmonthEquiv = "-Sep-";
                    } else if (poCSsubstring.localeCompare("10") == 0) {
                        poCSmonthEquiv = "-Oct-";
                    } else if (poCSsubstring.localeCompare("11") == 0) {
                        poCSmonthEquiv = "-Nov-";
                    } else if (poCSsubstring.localeCompare("12") == 0) {
                        poCSmonthEquiv = "-Dec-";
                    }
                    poCSsubstringDay = pocontractsigning.substring(0, 2);
                    poCSsubstringYear = pocontractsigning.substring(8, 10);
                    if (pocontractsigning.localeCompare("Invalid date") == 0) {
                        postblcontent += "<td style='font-size:11px'>---</td>";
                    } else {
                        postblcontent += "<td style='font-size:11px'>" + poCSsubstringDay + poCSmonthEquiv + poCSsubstringYear + "</td>";

                    }
                    postblcontent += "<td style='font-size:11px'>" + podatacurrentresponse[i].PMRpurchaseOrder_deliveryTerms_FIELD + " days</td>";

                    pocompletion = podatacurrentresponse[i].PMRpurchaseOrder_deliveryOrCompletion_FIELD;
                    poDOCsubstring = pocompletion.substring(3, 5);
                    poDOCmonthEquiv = "";
                    if (poDOCsubstring.localeCompare("01") == 0) {
                        poDOCmonthEquiv = "-Jan-";
                    } else if (poDOCsubstring.localeCompare("02") == 0) {
                        poDOCmonthEquiv = "-Feb-";
                    } else if (poDOCsubstring.localeCompare("03") == 0) {
                        poDOCmonthEquiv = "-Mar-";
                    } else if (poDOCsubstring.localeCompare("04") == 0) {
                        poDOCmonthEquiv = "-Apr-";
                    } else if (poDOCsubstring.localeCompare("05") == 0) {
                        poDOCmonthEquiv = "-May-";
                    } else if (poDOCsubstring.localeCompare("06") == 0) {
                        poDOCmonthEquiv = "-Jun-";
                    } else if (poDOCsubstring.localeCompare("07") == 0) {
                        poDOCmonthEquiv = "-Jul-";
                    } else if (poDOCsubstring.localeCompare("08") == 0) {
                        poDOCmonthEquiv = "-Aug-";
                    } else if (poDOCsubstring.localeCompare("09") == 0) {
                        poDOCmonthEquiv = "-Sep-";
                    } else if (poDOCsubstring.localeCompare("10") == 0) {
                        poDOCmonthEquiv = "-Oct-";
                    } else if (poDOCsubstring.localeCompare("11") == 0) {
                        poDOCmonthEquiv = "-Nov-";
                    } else if (poDOCsubstring.localeCompare("12") == 0) {
                        poDOCmonthEquiv = "-Dec-";
                    }
                    poDOCsubstringDay = pocompletion.substring(0, 2);
                    poDOCsubstringYear = pocompletion.substring(8, 10);
                    if(pocompletion.localeCompare("Invalid date")==0){
                        postblcontent += "<td style='font-size:11px'>---</td>";
                    }else{
                        postblcontent += "<td style='font-size:11px'>" + poDOCsubstringDay + poDOCmonthEquiv + poDOCsubstringYear + "</td>";

                    }
                    
                    postblcontent += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_paymentMode_FIELD + "</td>";
                    postblcontent += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_sourceOfFunds_FIELD + "</td>";
                    poabctotal = podatacurrentresponse[i].PMRpurchaseOrder_abcTotal_FIELD;
                    postblcontent += "<td>Php " + poabctotal.toFixed(2) + "</td>";
                    pocontractcosttotal = podatacurrentresponse[i].PMRpurchaseOrder_contractCostTotal_FIELD;
                    postblcontent += "<td>Php " + pocontractcosttotal.toFixed(2) + "</td>";
                    postblcontent += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_constructorOrSupplier_FIELD + "</td>";
                    postblcontent += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_itemPurchase_FIELD + "</td>";
                    if( podatacurrentresponse[i].PMRpurchaseOrder_remarks_FIELD.localeCompare("Awarded") == 0){
                        postblcontent += "<td  class='POremarksFieldDropdown'><select onchange=\"directupdatePORemark("+podatacurrentresponse[i].PMRpurchaseOrder_id_FIELD+",this.value,"+podatacurrentresponse[i].EndUser_id_FIELD+",'"+podatacurrentresponse[i].PMRpurchaseOrder_poNo_FIELD+"')\"><option value='Awarded' selected>Awarded</option><option value='Delivered'>Delivered</option></select></td>";
                    }else if( podatacurrentresponse[i].PMRpurchaseOrder_remarks_FIELD.localeCompare("Delivered") == 0){
                        postblcontent += "<td  class='POremarksFieldDropdown'><select onchange=\"directupdatePORemark("+podatacurrentresponse[i].PMRpurchaseOrder_id_FIELD+",this.value,"+podatacurrentresponse[i].EndUser_id_FIELD+",'"+podatacurrentresponse[i].PMRpurchaseOrder_poNo_FIELD+"')\"><option value='Awarded'>Awarded</option><option value='Delivered' selected>Delivered</option></select></td>";
                    }
                    postblcontent += "<td  style='display:none' class='POremarksFieldrawText'>" + podatacurrentresponse[i].PMRpurchaseOrder_remarks_FIELD + "</td>";
                    postblcontent += "<td class='certainelements'><div class='button-box'><button id='UpdateUserBtn1_id' type='button' class='btn btn-success' data-toggle='modal' data-target='#SetPOenduserModal_id' onclick=\"loadEndUsersData_FNCTN("+podatacurrentresponse[i].PMRpurchaseOrder_id_FIELD+",'"+podatacurrentresponse[i].PMRpurchaseOrder_poNo_FIELD+"')\"><span class='mdi mdi-account-star'></span></button></div></td>";
                    if(podatacurrentresponse[i].EndUser_id_FIELD === null){
                        postblcontent += "<td class='certainelements'><input type='button' class='btn btn-secondary' value='Empty' disabled></td>";
                    }else{
                        postblcontent += "<td class='certainelements'><input id='UpdateUserBtn1_id' type='button' class='btn btn-success' data-toggle='modal' data-target='#ViewPOenduserModal_id' onclick='loadEndUser_FNCTN("+podatacurrentresponse[i].EndUser_id_FIELD+")' value='End-user'></td>";
                    }
                    postblcontent += "</tr>";
                }

                document.getElementById('POsTableBody_id').innerHTML = postblcontent;
                // document.getElementById('QuarterSummary').style.display = "block";

            } else if (timescope.localeCompare("1st Semester") == 0 || timescope.localeCompare("2nd Semester") == 0) {
                var postblcontentCOMPLETED = "";
                var middleContent = "";
                var postblcontentONGOING = "";
                var bottomContent = "";
                var totalallotedbudget = 0;
                var totalcontractprice = 0;
                var totalsavings;
                var totalallotedbudgetongoing = 0;

                podatacurrentresponse = JSON.parse(xhr.responseText);
                postblcontentCOMPLETED = "<tr><td colspan='23' style='background-color:rgb(242, 242,242)'>COMPLETED PROCUREMENT ACTIVITIES</td></tr>";

                postblcontentONGOING = "<tr><td colspan='23' style='background-color:rgb(242, 242,242)'>0N-GOING PROCUREMENT ACTIVITIES</td></tr>";
                postblcontentOTHERPO = "<tr><td colspan='23' style='background-color:rgb(242, 242,242)'>OTHER Purchase Orders</td></tr>";
                for (var i in podatacurrentresponse) {
                    POprocActivityStatus = podatacurrentresponse[i].PMRpurchaseOrder_procActivityStatus_FIELD;
                    if(POprocActivityStatus != null && POprocActivityStatus != 'null'){
                        if (POprocActivityStatus.localeCompare("COMPLETED") == 0) {
                            postblcontentCOMPLETED += "<tr>";
                            postblcontentCOMPLETED += "<td class='certainelements'><div class='button-box'><button id='UpdateUserBtn1_id' type='button' class='btn btn-info' data-toggle='modal' data-target='#UpdatePOFormModal_id' onclick='loadCurrentInfoForUpdatePOForm_FNCTN(" + podatacurrentresponse[i].PMRpurchaseOrder_id_FIELD + "," + i + ")'><span class='ti-pencil'></span></button><button id='DeleteUserBtn1_id' type='button' class='btn btn-danger' onclick='beforeDeletePO_FNCTN(" + podatacurrentresponse[i].PMRpurchaseOrder_id_FIELD + ")'><span class='ti-trash'></span></button><button type='button' data-toggle=\"tooltip\" title=\"Set the status to ON-GOING\" class='btn btn-outline-dark' onclick='POdirectupdateProcActStatus(" + podatacurrentresponse[i].PMRpurchaseOrder_id_FIELD + ",\"ON-GOING\")'><span class='mdi mdi-loop'></span></button></div><input type='checkbox' name ='pocheckbox' value='"+podatacurrentresponse[i].PMRpurchaseOrder_id_FIELD+"' onclick=\"pushPOIDinarray()\"></td>";
                            
    
                            postblcontentCOMPLETED += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_poNo_FIELD + "</td>";
                            postblcontentCOMPLETED += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_procProgOrProj_FIELD + "</td>";
                            postblcontentCOMPLETED += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_pmoOrEnduser_FIELD + "</td>";
                            postblcontentCOMPLETED += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_procMode_FIELD + "</td>";
                            postblcontentCOMPLETED += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_preProcConference_FIELD + "</td>";
                            postblcontentCOMPLETED += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_adsOrPostOfIB_FIELD + "</td>";
                            postblcontentCOMPLETED += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_preBidConf_FIELD + "</td>";
                            postblcontentCOMPLETED += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_eligibilityCheck_FIELD + "</td>";
                            postblcontentCOMPLETED += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_subOrOpenOfBids_FIELD + "</td>";
                            postblcontentCOMPLETED += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_bidEvaluation_FIELD + "</td>";
                            postblcontentCOMPLETED += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_postQual_FIELD + "</td>";
                            ponoticeofaward = podatacurrentresponse[i].PMRpurchaseOrder_noticeOfAward_FIELD;
                            poNOAsubstring = ponoticeofaward.substring(3, 5);
                            poNOAmonthEquiv = "";
                            if (poNOAsubstring.localeCompare("01") == 0) {
                                poNOAmonthEquiv = "-Jan-";
                            } else if (poNOAsubstring.localeCompare("02") == 0) {
                                poNOAmonthEquiv = "-Feb-";
                            } else if (poNOAsubstring.localeCompare("03") == 0) {
                                poNOAmonthEquiv = "-Mar-";
                            } else if (poNOAsubstring.localeCompare("04") == 0) {
                                poNOAmonthEquiv = "-Apr-";
                            } else if (poNOAsubstring.localeCompare("05") == 0) {
                                poNOAmonthEquiv = "-May-";
                            } else if (poNOAsubstring.localeCompare("06") == 0) {
                                poNOAmonthEquiv = "-Jun-";
                            } else if (poNOAsubstring.localeCompare("07") == 0) {
                                poNOAmonthEquiv = "-Jul-";
                            } else if (poNOAsubstring.localeCompare("08") == 0) {
                                poNOAmonthEquiv = "-Aug-";
                            } else if (poNOAsubstring.localeCompare("09") == 0) {
                                poNOAmonthEquiv = "-Sep-";
                            } else if (poNOAsubstring.localeCompare("10") == 0) {
                                poNOAmonthEquiv = "-Oct-";
                            } else if (poNOAsubstring.localeCompare("11") == 0) {
                                poNOAmonthEquiv = "-Nov-";
                            } else if (poNOAsubstring.localeCompare("12") == 0) {
                                poNOAmonthEquiv = "-Dec-";
                            }
                            poNOAsubstringDay = ponoticeofaward.substring(0, 2);
                            poNOAsubstringYear = ponoticeofaward.substring(8, 10);
                            if(ponoticeofaward.localeCompare("Invalid date")==0){
                                postblcontentCOMPLETED += "<td style='font-size:11px'>---</td>";
                            }else{
                                postblcontentCOMPLETED += "<td style='font-size:11px'>" + poNOAsubstringDay + poNOAmonthEquiv + poNOAsubstringYear + "</td>";
    
                            }
                            pocontractsigning = podatacurrentresponse[i].PMRpurchaseOrder_contractSigningOrApprovePO_FIELD;
                            poCSsubstring = pocontractsigning.substring(3, 5);
                            poCSmonthEquiv = "";
                            if (poCSsubstring.localeCompare("01") == 0) {
                                poCSmonthEquiv = "-Jan-";
                            } else if (poCSsubstring.localeCompare("02") == 0) {
                                poCSmonthEquiv = "-Feb-";
                            } else if (poCSsubstring.localeCompare("03") == 0) {
                                poCSmonthEquiv = "-Mar-";
                            } else if (poCSsubstring.localeCompare("04") == 0) {
                                poCSmonthEquiv = "-Apr-";
                            } else if (poCSsubstring.localeCompare("05") == 0) {
                                poCSmonthEquiv = "-May-";
                            } else if (poCSsubstring.localeCompare("06") == 0) {
                                poCSmonthEquiv = "-Jun-";
                            } else if (poCSsubstring.localeCompare("07") == 0) {
                                poCSmonthEquiv = "-Jul-";
                            } else if (poCSsubstring.localeCompare("08") == 0) {
                                poCSmonthEquiv = "-Aug-";
                            } else if (poCSsubstring.localeCompare("09") == 0) {
                                poCSmonthEquiv = "-Sep-";
                            } else if (poCSsubstring.localeCompare("10") == 0) {
                                poCSmonthEquiv = "-Oct-";
                            } else if (poCSsubstring.localeCompare("11") == 0) {
                                poCSmonthEquiv = "-Nov-";
                            } else if (poCSsubstring.localeCompare("12") == 0) {
                                poCSmonthEquiv = "-Dec-";
                            }
                            poCSsubstringDay = pocontractsigning.substring(0, 2);
                            poCSsubstringYear = pocontractsigning.substring(8, 10);
                            if(pocontractsigning.localeCompare("Invalid date")==0){
                                postblcontentCOMPLETED += "<td style='font-size:11px'>---</td>";
                            }else{
                                postblcontentCOMPLETED += "<td style='font-size:11px'>" + poCSsubstringDay + poCSmonthEquiv + poCSsubstringYear + "</td>";
    
                            }
                            
                            postblcontentCOMPLETED += "<td style='font-size:11px'>" + podatacurrentresponse[i].PMRpurchaseOrder_deliveryTerms_FIELD + " days</td>";
                            pocompletion = podatacurrentresponse[i].PMRpurchaseOrder_deliveryOrCompletion_FIELD;
                            poDOCsubstring = pocompletion.substring(3, 5);
                            poDOCmonthEquiv = "";
                            if (poDOCsubstring.localeCompare("01") == 0) {
                                poDOCmonthEquiv = "-Jan-";
                            } else if (poDOCsubstring.localeCompare("02") == 0) {
                                poDOCmonthEquiv = "-Feb-";
                            } else if (poDOCsubstring.localeCompare("03") == 0) {
                                poDOCmonthEquiv = "-Mar-";
                            } else if (poDOCsubstring.localeCompare("04") == 0) {
                                poDOCmonthEquiv = "-Apr-";
                            } else if (poDOCsubstring.localeCompare("05") == 0) {
                                poDOCmonthEquiv = "-May-";
                            } else if (poDOCsubstring.localeCompare("06") == 0) {
                                poDOCmonthEquiv = "-Jun-";
                            } else if (poDOCsubstring.localeCompare("07") == 0) {
                                poDOCmonthEquiv = "-Jul-";
                            } else if (poDOCsubstring.localeCompare("08") == 0) {
                                poDOCmonthEquiv = "-Aug-";
                            } else if (poDOCsubstring.localeCompare("09") == 0) {
                                poDOCmonthEquiv = "-Sep-";
                            } else if (poDOCsubstring.localeCompare("10") == 0) {
                                poDOCmonthEquiv = "-Oct-";
                            } else if (poDOCsubstring.localeCompare("11") == 0) {
                                poDOCmonthEquiv = "-Nov-";
                            } else if (poDOCsubstring.localeCompare("12") == 0) {
                                poDOCmonthEquiv = "-Dec-";
                            }
                            poDOCsubstringDay = pocompletion.substring(0, 2);
                            poDOCsubstringYear = pocompletion.substring(8, 10);
                            if(pocompletion.localeCompare("Invalid date")==0){
                                postblcontentCOMPLETED += "<td style='font-size:11px'>---</td>";
                            }else{
                                postblcontentCOMPLETED += "<td style='font-size:11px'>" + poDOCsubstringDay + poDOCmonthEquiv + poDOCsubstringYear + "</td>";
    
                            }
                            
                            postblcontentCOMPLETED += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_paymentMode_FIELD + "</td>";
                            postblcontentCOMPLETED += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_sourceOfFunds_FIELD + "</td>";
    
                            poabctotal = podatacurrentresponse[i].PMRpurchaseOrder_abcTotal_FIELD;
                            postblcontentCOMPLETED += "<td>Php " + poabctotal.toFixed(2) + "</td>";
                            pocontractcosttotal = podatacurrentresponse[i].PMRpurchaseOrder_contractCostTotal_FIELD;
                            postblcontentCOMPLETED += "<td>Php " + pocontractcosttotal.toFixed(2) + "</td>";
    
    
                            totalallotedbudget += podatacurrentresponse[i].PMRpurchaseOrder_abcTotal_FIELD;
    
    
                            totalcontractprice += podatacurrentresponse[i].PMRpurchaseOrder_contractCostTotal_FIELD;
    
                            postblcontentCOMPLETED += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_constructorOrSupplier_FIELD + "</td>";
                            postblcontentCOMPLETED += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_itemPurchase_FIELD + "</td>";
                            if( podatacurrentresponse[i].PMRpurchaseOrder_remarks_FIELD.localeCompare("Awarded") == 0){
                                postblcontentCOMPLETED += "<td  class='POremarksFieldDropdown'><select onchange=\"directupdatePORemark("+podatacurrentresponse[i].PMRpurchaseOrder_id_FIELD+",this.value,"+podatacurrentresponse[i].EndUser_id_FIELD+",'"+podatacurrentresponse[i].PMRpurchaseOrder_poNo_FIELD+"')\"><option value='Awarded' selected>Awarded</option><option value='Delivered'>Delivered</option></select></td>";
                            }else if( podatacurrentresponse[i].PMRpurchaseOrder_remarks_FIELD.localeCompare("Delivered") == 0){
                                postblcontentCOMPLETED += "<td  class='POremarksFieldDropdown'><select onchange=\"directupdatePORemark("+podatacurrentresponse[i].PMRpurchaseOrder_id_FIELD+",this.value,"+podatacurrentresponse[i].EndUser_id_FIELD+",'"+podatacurrentresponse[i].PMRpurchaseOrder_poNo_FIELD+"')\"><option value='Awarded'>Awarded</option><option value='Delivered' selected>Delivered</option></select></td>";
                            }
                            postblcontentCOMPLETED += "<td  style='display:none' class='POremarksFieldrawText'>" + podatacurrentresponse[i].PMRpurchaseOrder_remarks_FIELD + "</td>";
                                postblcontentCOMPLETED += "<td class='certainelements'><div class='button-box'><button id='UpdateUserBtn1_id' type='button' class='btn btn-success' data-toggle='modal' data-target='#SetPOenduserModal_id' onclick=\"loadEndUsersData_FNCTN("+podatacurrentresponse[i].PMRpurchaseOrder_id_FIELD+",'"+podatacurrentresponse[i].PMRpurchaseOrder_poNo_FIELD+"')\"><span class='mdi mdi-account-star'></span></button></div></td>";                        
                            if(podatacurrentresponse[i].EndUser_id_FIELD === null){
                                postblcontentCOMPLETED += "<td class='certainelements'><input type='button' class='btn btn-secondary' value='Empty' disabled></td>";
                            }else{
                                postblcontentCOMPLETED += "<td class='certainelements'><input id='UpdateUserBtn1_id' type='button' class='btn btn-success' data-toggle='modal' data-target='#ViewPOenduserModal_id' onclick='loadEndUser_FNCTN("+podatacurrentresponse[i].EndUser_id_FIELD+")' value='End-user'></td>";
                            }
                            postblcontentCOMPLETED += "</tr>";
                        } else if (POprocActivityStatus.localeCompare("ON-GOING") == 0) {
                            postblcontentONGOING += "<tr>";
                            postblcontentONGOING += "<td class='certainelements'><div class='button-box'><button id='UpdateUserBtn1_id' type='button' class='btn btn-info' data-toggle='modal' data-target='#UpdatePOFormModal_id' onclick='loadCurrentInfoForUpdatePOForm_FNCTN(" + podatacurrentresponse[i].PMRpurchaseOrder_id_FIELD + "," + i + ")'><span class='ti-pencil'></span></button><button id='DeleteUserBtn1_id' type='button' class='btn btn-danger' onclick='beforeDeletePO_FNCTN(" + podatacurrentresponse[i].PMRpurchaseOrder_id_FIELD + ")'><span class='ti-trash'></span></button><button type='button' data-toggle=\"tooltip\" title=\"Set the status to COMPLETED\" class='btn btn-outline-dark' onclick='POdirectupdateProcActStatus(" + podatacurrentresponse[i].PMRpurchaseOrder_id_FIELD + ",\"COMPLETED\")'><span class='mdi mdi-bookmark-check'></span></button></div><input type='checkbox' name ='pocheckbox' value='"+podatacurrentresponse[i].PMRpurchaseOrder_id_FIELD+"' onclick=\"pushPOIDinarray()\"></td>";
                            
    
                            postblcontentONGOING += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_poNo_FIELD + "</td>";
                            postblcontentONGOING += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_procProgOrProj_FIELD + "</td>";
                            postblcontentONGOING += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_pmoOrEnduser_FIELD + "</td>";
                            postblcontentONGOING += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_procMode_FIELD + "</td>";
                            postblcontentONGOING += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_preProcConference_FIELD + "</td>";
                            postblcontentONGOING += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_adsOrPostOfIB_FIELD + "</td>";
                            postblcontentONGOING += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_preBidConf_FIELD + "</td>";
                            postblcontentONGOING += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_eligibilityCheck_FIELD + "</td>";
                            postblcontentONGOING += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_subOrOpenOfBids_FIELD + "</td>";
                            postblcontentONGOING += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_bidEvaluation_FIELD + "</td>";
                            postblcontentONGOING += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_postQual_FIELD + "</td>";
                            ponoticeofaward = podatacurrentresponse[i].PMRpurchaseOrder_noticeOfAward_FIELD;
                            poNOAsubstring = ponoticeofaward.substring(3, 5);
                            poNOAmonthEquiv = "";
                            if (poNOAsubstring.localeCompare("01") == 0) {
                                poNOAmonthEquiv = "-Jan-";
                            } else if (poNOAsubstring.localeCompare("02") == 0) {
                                poNOAmonthEquiv = "-Feb-";
                            } else if (poNOAsubstring.localeCompare("03") == 0) {
                                poNOAmonthEquiv = "-Mar-";
                            } else if (poNOAsubstring.localeCompare("04") == 0) {
                                poNOAmonthEquiv = "-Apr-";
                            } else if (poNOAsubstring.localeCompare("05") == 0) {
                                poNOAmonthEquiv = "-May-";
                            } else if (poNOAsubstring.localeCompare("06") == 0) {
                                poNOAmonthEquiv = "-Jun-";
                            } else if (poNOAsubstring.localeCompare("07") == 0) {
                                poNOAmonthEquiv = "-Jul-";
                            } else if (poNOAsubstring.localeCompare("08") == 0) {
                                poNOAmonthEquiv = "-Aug-";
                            } else if (poNOAsubstring.localeCompare("09") == 0) {
                                poNOAmonthEquiv = "-Sep-";
                            } else if (poNOAsubstring.localeCompare("10") == 0) {
                                poNOAmonthEquiv = "-Oct-";
                            } else if (poNOAsubstring.localeCompare("11") == 0) {
                                poNOAmonthEquiv = "-Nov-";
                            } else if (poNOAsubstring.localeCompare("12") == 0) {
                                poNOAmonthEquiv = "-Dec-";
                            }
                            poNOAsubstringDay = ponoticeofaward.substring(0, 2);
                            poNOAsubstringYear = ponoticeofaward.substring(8, 10);
                            if(ponoticeofaward.localeCompare("Invalid date")==0){
                                postblcontentONGOING += "<td style='font-size:11px'>---</td>";
                            }else{
                                postblcontentONGOING += "<td style='font-size:11px'>" + poNOAsubstringDay + poNOAmonthEquiv + poNOAsubstringYear + "</td>";
    
                            }
                            pocontractsigning = podatacurrentresponse[i].PMRpurchaseOrder_contractSigningOrApprovePO_FIELD;
                            poCSsubstring = pocontractsigning.substring(3, 5);
                            poCSmonthEquiv = "";
                            if (poCSsubstring.localeCompare("01") == 0) {
                                poCSmonthEquiv = "-Jan-";
                            } else if (poCSsubstring.localeCompare("02") == 0) {
                                poCSmonthEquiv = "-Feb-";
                            } else if (poCSsubstring.localeCompare("03") == 0) {
                                poCSmonthEquiv = "-Mar-";
                            } else if (poCSsubstring.localeCompare("04") == 0) {
                                poCSmonthEquiv = "-Apr-";
                            } else if (poCSsubstring.localeCompare("05") == 0) {
                                poCSmonthEquiv = "-May-";
                            } else if (poCSsubstring.localeCompare("06") == 0) {
                                poCSmonthEquiv = "-Jun-";
                            } else if (poCSsubstring.localeCompare("07") == 0) {
                                poCSmonthEquiv = "-Jul-";
                            } else if (poCSsubstring.localeCompare("08") == 0) {
                                poCSmonthEquiv = "-Aug-";
                            } else if (poCSsubstring.localeCompare("09") == 0) {
                                poCSmonthEquiv = "-Sep-";
                            } else if (poCSsubstring.localeCompare("10") == 0) {
                                poCSmonthEquiv = "-Oct-";
                            } else if (poCSsubstring.localeCompare("11") == 0) {
                                poCSmonthEquiv = "-Nov-";
                            } else if (poCSsubstring.localeCompare("12") == 0) {
                                poCSmonthEquiv = "-Dec-";
                            }
                            poCSsubstringDay = pocontractsigning.substring(0, 2);
                            poCSsubstringYear = pocontractsigning.substring(8, 10);
                            if(pocontractsigning.localeCompare("Invalid date")==0){
                                postblcontentONGOING += "<td style='font-size:11px'>---</td>";
                            }else{
                                postblcontentONGOING += "<td style='font-size:11px'>" + poCSsubstringDay + poCSmonthEquiv + poCSsubstringYear + "</td>";
    
                            }
                                                   postblcontentONGOING += "<td style='font-size:11px'>" + podatacurrentresponse[i].PMRpurchaseOrder_deliveryTerms_FIELD + " days</td>";
                            pocompletion = podatacurrentresponse[i].PMRpurchaseOrder_deliveryOrCompletion_FIELD;
                            poDOCsubstring = pocompletion.substring(3, 5);
                            poDOCmonthEquiv = "";
                            if (poDOCsubstring.localeCompare("01") == 0) {
                                poDOCmonthEquiv = "-Jan-";
                            } else if (poDOCsubstring.localeCompare("02") == 0) {
                                poDOCmonthEquiv = "-Feb-";
                            } else if (poDOCsubstring.localeCompare("03") == 0) {
                                poDOCmonthEquiv = "-Mar-";
                            } else if (poDOCsubstring.localeCompare("04") == 0) {
                                poDOCmonthEquiv = "-Apr-";
                            } else if (poDOCsubstring.localeCompare("05") == 0) {
                                poDOCmonthEquiv = "-May-";
                            } else if (poDOCsubstring.localeCompare("06") == 0) {
                                poDOCmonthEquiv = "-Jun-";
                            } else if (poDOCsubstring.localeCompare("07") == 0) {
                                poDOCmonthEquiv = "-Jul-";
                            } else if (poDOCsubstring.localeCompare("08") == 0) {
                                poDOCmonthEquiv = "-Aug-";
                            } else if (poDOCsubstring.localeCompare("09") == 0) {
                                poDOCmonthEquiv = "-Sep-";
                            } else if (poDOCsubstring.localeCompare("10") == 0) {
                                poDOCmonthEquiv = "-Oct-";
                            } else if (poDOCsubstring.localeCompare("11") == 0) {
                                poDOCmonthEquiv = "-Nov-";
                            } else if (poDOCsubstring.localeCompare("12") == 0) {
                                poDOCmonthEquiv = "-Dec-";
                            }
                            poDOCsubstringDay = pocompletion.substring(0, 2);
                            poDOCsubstringYear = pocompletion.substring(8, 10);
                            if(pocompletion.localeCompare("Invalid date")==0){
                                postblcontentONGOING += "<td style='font-size:11px'>---</td>";
                            }else{
                                postblcontentONGOING += "<td style='font-size:11px'>" + poDOCsubstringDay + poDOCmonthEquiv + poDOCsubstringYear + "</td>";
                            }
                            
                            postblcontentONGOING += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_paymentMode_FIELD + "</td>";
                            postblcontentONGOING += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_sourceOfFunds_FIELD + "</td>";
    
                            poabctotal = podatacurrentresponse[i].PMRpurchaseOrder_abcTotal_FIELD;
                            postblcontentONGOING += "<td>Php " + poabctotal.toFixed(2) + "</td>";
                            pocontractcosttotal = podatacurrentresponse[i].PMRpurchaseOrder_contractCostTotal_FIELD;
                            postblcontentONGOING += "<td>Php " + pocontractcosttotal.toFixed(2) + "</td>";
    
                            totalallotedbudgetongoing += podatacurrentresponse[i].PMRpurchaseOrder_abcTotal_FIELD;
    
                            postblcontentONGOING += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_constructorOrSupplier_FIELD + "</td>";
                            postblcontentONGOING += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_itemPurchase_FIELD + "</td>";
                            if( podatacurrentresponse[i].PMRpurchaseOrder_remarks_FIELD.localeCompare("Awarded") == 0){
                                postblcontentONGOING += "<td  class='POremarksFieldDropdown'><select onchange=\"directupdatePORemark("+podatacurrentresponse[i].PMRpurchaseOrder_id_FIELD+",this.value,"+podatacurrentresponse[i].EndUser_id_FIELD+",'"+podatacurrentresponse[i].PMRpurchaseOrder_poNo_FIELD+"')\"><option value='Awarded' selected>Awarded</option><option value='Delivered'>Delivered</option></select></td>";
                            }else if( podatacurrentresponse[i].PMRpurchaseOrder_remarks_FIELD.localeCompare("Delivered") == 0){
                                postblcontentONGOING += "<td  class='POremarksFieldDropdown'><select onchange=\"directupdatePORemark("+podatacurrentresponse[i].PMRpurchaseOrder_id_FIELD+",this.value,"+podatacurrentresponse[i].EndUser_id_FIELD+",'"+podatacurrentresponse[i].PMRpurchaseOrder_poNo_FIELD+"')\"><option value='Awarded'>Awarded</option><option value='Delivered' selected>Delivered</option></select></td>";
                            }
                            postblcontentONGOING += "<td  style='display:none' class='POremarksFieldrawText'>" + podatacurrentresponse[i].PMRpurchaseOrder_remarks_FIELD + "</td>";
                            postblcontentONGOING += "<td class='certainelements'><div class='button-box'><button id='UpdateUserBtn1_id' type='button' class='btn btn-success' data-toggle='modal' data-target='#SetPOenduserModal_id' onclick=\"loadEndUsersData_FNCTN("+podatacurrentresponse[i].PMRpurchaseOrder_id_FIELD+",'"+podatacurrentresponse[i].PMRpurchaseOrder_poNo_FIELD+"')\"><span class='mdi mdi-account-star'></span></button></div></td>";                        
                            if(podatacurrentresponse[i].EndUser_id_FIELD === null){
                                postblcontentONGOING += "<td class='certainelements'><input type='button' class='btn btn-secondary' value='Empty' disabled></td>";
                            }else{
                                postblcontentONGOING += "<td class='certainelements'><input id='UpdateUserBtn1_id' type='button' class='btn btn-success' data-toggle='modal' data-target='#ViewPOenduserModal_id' onclick='loadEndUser_FNCTN("+podatacurrentresponse[i].EndUser_id_FIELD+")' value='End-user'></td>";
                            }
                            postblcontentONGOING += "</tr>";
    
                        }
                    }
                    
                    else{
                        postblcontentOTHERPO += "<tr>";
                        postblcontentOTHERPO += "<td class='certainelements'><div class='button-box'><button id='UpdateUserBtn1_id' type='button' class='btn btn-info' data-toggle='modal' data-target='#UpdatePOFormModal_id' onclick='loadCurrentInfoForUpdatePOForm_FNCTN(" + podatacurrentresponse[i].PMRpurchaseOrder_id_FIELD + "," + i + ")'><span class='ti-pencil'></span></button><button id='DeleteUserBtn1_id' type='button' class='btn btn-danger' onclick='beforeDeletePO_FNCTN(" + podatacurrentresponse[i].PMRpurchaseOrder_id_FIELD + ")'><span class='ti-trash'></span></button><button type='button' data-toggle=\"tooltip\" title=\"Set the status to COMPLETED\" class='btn btn-outline-dark' onclick='POdirectupdateProcActStatus(" + podatacurrentresponse[i].PMRpurchaseOrder_id_FIELD + ",\"COMPLETED\")'><span class='mdi mdi-bookmark-check'></span></button></div><input type='checkbox' name ='pocheckbox' value='"+podatacurrentresponse[i].PMRpurchaseOrder_id_FIELD+"' onclick=\"pushPOIDinarray()\"></td>";
                        

                        postblcontentOTHERPO += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_poNo_FIELD + "</td>";
                        postblcontentOTHERPO += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_procProgOrProj_FIELD + "</td>";
                        postblcontentOTHERPO += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_pmoOrEnduser_FIELD + "</td>";
                        postblcontentOTHERPO += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_procMode_FIELD + "</td>";
                        postblcontentOTHERPO += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_preProcConference_FIELD + "</td>";
                        postblcontentOTHERPO += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_adsOrPostOfIB_FIELD + "</td>";
                        postblcontentOTHERPO += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_preBidConf_FIELD + "</td>";
                        postblcontentOTHERPO += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_eligibilityCheck_FIELD + "</td>";
                        postblcontentOTHERPO += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_subOrOpenOfBids_FIELD + "</td>";
                        postblcontentOTHERPO += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_bidEvaluation_FIELD + "</td>";
                        postblcontentOTHERPO += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_postQual_FIELD + "</td>";
                        ponoticeofaward = podatacurrentresponse[i].PMRpurchaseOrder_noticeOfAward_FIELD;
                        poNOAsubstring = ponoticeofaward.substring(3, 5);
                        poNOAmonthEquiv = "";
                        if (poNOAsubstring.localeCompare("01") == 0) {
                            poNOAmonthEquiv = "-Jan-";
                        } else if (poNOAsubstring.localeCompare("02") == 0) {
                            poNOAmonthEquiv = "-Feb-";
                        } else if (poNOAsubstring.localeCompare("03") == 0) {
                            poNOAmonthEquiv = "-Mar-";
                        } else if (poNOAsubstring.localeCompare("04") == 0) {
                            poNOAmonthEquiv = "-Apr-";
                        } else if (poNOAsubstring.localeCompare("05") == 0) {
                            poNOAmonthEquiv = "-May-";
                        } else if (poNOAsubstring.localeCompare("06") == 0) {
                            poNOAmonthEquiv = "-Jun-";
                        } else if (poNOAsubstring.localeCompare("07") == 0) {
                            poNOAmonthEquiv = "-Jul-";
                        } else if (poNOAsubstring.localeCompare("08") == 0) {
                            poNOAmonthEquiv = "-Aug-";
                        } else if (poNOAsubstring.localeCompare("09") == 0) {
                            poNOAmonthEquiv = "-Sep-";
                        } else if (poNOAsubstring.localeCompare("10") == 0) {
                            poNOAmonthEquiv = "-Oct-";
                        } else if (poNOAsubstring.localeCompare("11") == 0) {
                            poNOAmonthEquiv = "-Nov-";
                        } else if (poNOAsubstring.localeCompare("12") == 0) {
                            poNOAmonthEquiv = "-Dec-";
                        }
                        poNOAsubstringDay = ponoticeofaward.substring(0, 2);
                        poNOAsubstringYear = ponoticeofaward.substring(8, 10);
                        if(ponoticeofaward.localeCompare("Invalid date")==0){
                            postblcontentOTHERPO += "<td style='font-size:11px'>---</td>";
                        }else{
                            postblcontentOTHERPO += "<td style='font-size:11px'>" + poNOAsubstringDay + poNOAmonthEquiv + poNOAsubstringYear + "</td>";

                        }
                        pocontractsigning = podatacurrentresponse[i].PMRpurchaseOrder_contractSigningOrApprovePO_FIELD;
                        poCSsubstring = pocontractsigning.substring(3, 5);
                        poCSmonthEquiv = "";
                        if (poCSsubstring.localeCompare("01") == 0) {
                            poCSmonthEquiv = "-Jan-";
                        } else if (poCSsubstring.localeCompare("02") == 0) {
                            poCSmonthEquiv = "-Feb-";
                        } else if (poCSsubstring.localeCompare("03") == 0) {
                            poCSmonthEquiv = "-Mar-";
                        } else if (poCSsubstring.localeCompare("04") == 0) {
                            poCSmonthEquiv = "-Apr-";
                        } else if (poCSsubstring.localeCompare("05") == 0) {
                            poCSmonthEquiv = "-May-";
                        } else if (poCSsubstring.localeCompare("06") == 0) {
                            poCSmonthEquiv = "-Jun-";
                        } else if (poCSsubstring.localeCompare("07") == 0) {
                            poCSmonthEquiv = "-Jul-";
                        } else if (poCSsubstring.localeCompare("08") == 0) {
                            poCSmonthEquiv = "-Aug-";
                        } else if (poCSsubstring.localeCompare("09") == 0) {
                            poCSmonthEquiv = "-Sep-";
                        } else if (poCSsubstring.localeCompare("10") == 0) {
                            poCSmonthEquiv = "-Oct-";
                        } else if (poCSsubstring.localeCompare("11") == 0) {
                            poCSmonthEquiv = "-Nov-";
                        } else if (poCSsubstring.localeCompare("12") == 0) {
                            poCSmonthEquiv = "-Dec-";
                        }
                        poCSsubstringDay = pocontractsigning.substring(0, 2);
                        poCSsubstringYear = pocontractsigning.substring(8, 10);
                        if(pocontractsigning.localeCompare("Invalid date")==0){
                            postblcontentOTHERPO += "<td style='font-size:11px'>---</td>";
                        }else{
                            postblcontentOTHERPO += "<td style='font-size:11px'>" + poCSsubstringDay + poCSmonthEquiv + poCSsubstringYear + "</td>";

                        }
                        postblcontentOTHERPO += "<td style='font-size:11px'>" + podatacurrentresponse[i].PMRpurchaseOrder_deliveryTerms_FIELD + " days</td>";
                        pocompletion = podatacurrentresponse[i].PMRpurchaseOrder_deliveryOrCompletion_FIELD;
                        poDOCsubstring = pocompletion.substring(3, 5);
                        poDOCmonthEquiv = "";
                        if (poDOCsubstring.localeCompare("01") == 0) {
                            poDOCmonthEquiv = "-Jan-";
                        } else if (poDOCsubstring.localeCompare("02") == 0) {
                            poDOCmonthEquiv = "-Feb-";
                        } else if (poDOCsubstring.localeCompare("03") == 0) {
                            poDOCmonthEquiv = "-Mar-";
                        } else if (poDOCsubstring.localeCompare("04") == 0) {
                            poDOCmonthEquiv = "-Apr-";
                        } else if (poDOCsubstring.localeCompare("05") == 0) {
                            poDOCmonthEquiv = "-May-";
                        } else if (poDOCsubstring.localeCompare("06") == 0) {
                            poDOCmonthEquiv = "-Jun-";
                        } else if (poDOCsubstring.localeCompare("07") == 0) {
                            poDOCmonthEquiv = "-Jul-";
                        } else if (poDOCsubstring.localeCompare("08") == 0) {
                            poDOCmonthEquiv = "-Aug-";
                        } else if (poDOCsubstring.localeCompare("09") == 0) {
                            poDOCmonthEquiv = "-Sep-";
                        } else if (poDOCsubstring.localeCompare("10") == 0) {
                            poDOCmonthEquiv = "-Oct-";
                        } else if (poDOCsubstring.localeCompare("11") == 0) {
                            poDOCmonthEquiv = "-Nov-";
                        } else if (poDOCsubstring.localeCompare("12") == 0) {
                            poDOCmonthEquiv = "-Dec-";
                        }
                        poDOCsubstringDay = pocompletion.substring(0, 2);
                        poDOCsubstringYear = pocompletion.substring(8, 10);
                        if(pocompletion.localeCompare("Invalid date")==0){
                            postblcontentOTHERPO += "<td style='font-size:11px'>---</td>";
                        }else{
                            postblcontentOTHERPO += "<td style='font-size:11px'>" + poDOCsubstringDay + poDOCmonthEquiv + poDOCsubstringYear + "</td>";
                        }
                        
                        postblcontentOTHERPO += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_paymentMode_FIELD + "</td>";
                        postblcontentOTHERPO += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_sourceOfFunds_FIELD + "</td>";

                        poabctotal = podatacurrentresponse[i].PMRpurchaseOrder_abcTotal_FIELD;
                        postblcontentOTHERPO += "<td>Php " + poabctotal.toFixed(2) + "</td>";
                        pocontractcosttotal = podatacurrentresponse[i].PMRpurchaseOrder_contractCostTotal_FIELD;
                        postblcontentOTHERPO += "<td>Php " + pocontractcosttotal.toFixed(2) + "</td>";

                        totalallotedbudgetongoing += podatacurrentresponse[i].PMRpurchaseOrder_abcTotal_FIELD;

                        postblcontentOTHERPO += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_constructorOrSupplier_FIELD + "</td>";
                        postblcontentOTHERPO += "<td>" + podatacurrentresponse[i].PMRpurchaseOrder_itemPurchase_FIELD + "</td>";
                        if( podatacurrentresponse[i].PMRpurchaseOrder_remarks_FIELD.localeCompare("Awarded") == 0){
                            postblcontentOTHERPO += "<td  class='POremarksFieldDropdown'><select onchange=\"directupdatePORemark("+podatacurrentresponse[i].PMRpurchaseOrder_id_FIELD+",this.value,"+podatacurrentresponse[i].EndUser_id_FIELD+",'"+podatacurrentresponse[i].PMRpurchaseOrder_poNo_FIELD+"')\"><option value='Awarded' selected>Awarded</option><option value='Delivered'>Delivered</option></select></td>";
                        }else if( podatacurrentresponse[i].PMRpurchaseOrder_remarks_FIELD.localeCompare("Delivered") == 0){
                            postblcontentOTHERPO += "<td  class='POremarksFieldDropdown'><select onchange=\"directupdatePORemark("+podatacurrentresponse[i].PMRpurchaseOrder_id_FIELD+",this.value,"+podatacurrentresponse[i].EndUser_id_FIELD+",'"+podatacurrentresponse[i].PMRpurchaseOrder_poNo_FIELD+"')\"><option value='Awarded'>Awarded</option><option value='Delivered' selected>Delivered</option></select></td>";
                        }
                        postblcontentOTHERPO += "<td  style='display:none' class='POremarksFieldrawText'>" + podatacurrentresponse[i].PMRpurchaseOrder_remarks_FIELD + "</td>";
                        postblcontentOTHERPO += "<td class='certainelements'><div class='button-box'><button id='UpdateUserBtn1_id' type='button' class='btn btn-success' data-toggle='modal' data-target='#SetPOenduserModal_id' onclick=\"loadEndUsersData_FNCTN("+podatacurrentresponse[i].PMRpurchaseOrder_id_FIELD+",'"+podatacurrentresponse[i].PMRpurchaseOrder_poNo_FIELD+"')\"><span class='mdi mdi-account-star'></span></button></div></td>";                        
                        if(podatacurrentresponse[i].EndUser_id_FIELD === null){
                            postblcontentOTHERPO += "<td class='certainelements'><input type='button' class='btn btn-secondary' value='Empty' disabled></td>";
                        }else{
                            postblcontentOTHERPO += "<td class='certainelements'><input id='UpdateUserBtn1_id' type='button' class='btn btn-success' data-toggle='modal' data-target='#ViewPOenduserModal_id' onclick='loadEndUser_FNCTN("+podatacurrentresponse[i].EndUser_id_FIELD+")' value='End-user'></td>";
                        }
                        postblcontentOTHERPO += "</tr>";

                    }
                }
                totalsavings = totalallotedbudget - totalcontractprice;
                middleContent += "<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
                middleContent += "<tr><td colspan='18' style='text-align:right'> Total Alloted Budget of Procurement Activities</td><td>Php " + totalallotedbudget.toFixed(2) + "</td><td></td><td></td><td></td><td></td></tr>";
                middleContent += "<tr><td colspan='18' style='text-align:right'>Total Contract Price of Procurement Actitvites Conducted</td><td>Php " + totalcontractprice.toFixed(2) + "</td><td></td><td></td><td></td><td></td></tr>";
                middleContent += "<tr><td colspan='18' style='text-align:right'>Total Savings (Total Alloted Budget - Total Contract Price)</td><td>Php " + totalsavings.toFixed(2) + "</td><td></td><td></td><td></td><td></td></tr>";
                middleContent += "<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
                bottomContent += "<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
                bottomContent += "<tr><td colspan='18' style='text-align:right'>Total Alloted Budget of On-going Procurement Activities</td><td>Php " + totalallotedbudgetongoing.toFixed(2) + "</td><td></td></tr>";
                document.getElementById('POsTableBody_id').innerHTML = postblcontentCOMPLETED + middleContent + postblcontentONGOING + postblcontentOTHERPO + bottomContent;
            
            }
        }

    });

    xhr.open("GET", "/PMR1st_route/ViewPOs/" + pmrid);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "8259fbf5-dce9-4c0e-aec3-e6bd1328d1b3");
    xhr.send(data);
}

function addNewPO_FNCTN() {
    var poNo = document.getElementById('poNoInput_id').value;
    var procProgOrProj = document.getElementById('procProgOrProjTextarea_id').value;
    var pmoOrEnduser = document.getElementById('pmoOrEnduserTextarea_id').value;
    var procMode = document.getElementById('procModeInput_id').value;
    var preProcConference = document.getElementById('preProcConferenceInput_id').value;
    var adsOrPostOfIB = document.getElementById('adsOrPostOfIBInput_id').value;
    var preBidConf = document.getElementById('preBidConfInput_id').value;
    var eligibilityCheck = document.getElementById('eligibilityCheckInput_id').value;
    var subOrOpenOfBids = document.getElementById('subOrOpenOfBidsInput_id').value;
    var bidEvaluation = document.getElementById('bidEvaluationInput_id').value;
    var postQual = document.getElementById('postQualInput_id').value;
    var noticeOfAward = document.getElementById('noticeOfAwardInput_id').value;
    var contractSigningOrApprovePO = document.getElementById('contractSigningOrApprovePOInput_id').value;
    var deliveryTerms = document.getElementById('deliveryTermsInput_id').value;
    var deliveryOrCompletion = document.getElementById('deliveryOrCompletionInput_id').value;
    var paymentMode = document.getElementById('paymentModeInput_id').value;
    var sourceOfFunds = document.getElementById('sourceOfFundsInput_id').value;
    var abcTotal = document.getElementById('abcTotalInput_id').value;
    var contractCostTotal = document.getElementById('contractCostTotalInput_id').value;
    var constructorOrSupplier = document.getElementById('constructorOrSupplierTextarea_id').value;
    var itemPurchase = document.getElementById('itemPurchaseTextarea_id').value;
    var remarks = document.getElementById('remarksSelect_id').value;
    var pmrid = document.getElementById('PMRidPassedUsingURL').value;
    var procActStatus;
    if (timescopeglobalvar.localeCompare("1st Semester") == 0 || timescopeglobalvar.localeCompare("2nd Semester") == 0) {
        procActStatus = document.getElementById('procActivityStatusSelect_id').value;
    } else {
        procActStatus = null;
    }

    var data = "poNo=" + poNo + "&procProgOrProj=" + procProgOrProj + "&pmoOrEnduser=" + pmoOrEnduser + "&procMode=" + procMode + "&preProcConference=" + preProcConference;
    data += "&adsOrPostOfIB=" + adsOrPostOfIB + "&preBidConf=" + preBidConf + "&eligibilityCheck=" + eligibilityCheck + "&subOrOpenOfBids=" + subOrOpenOfBids + "&bidEvaluation=" + bidEvaluation;
    data += "&postQual=" + postQual + "&noticeOfAward=" + noticeOfAward + "&contractSigningOrApprovePO=" + contractSigningOrApprovePO + "&deliveryTerms=" + deliveryTerms + "&deliveryOrCompletion=" + deliveryOrCompletion;
    data += "&paymentMode=" + paymentMode + "&sourceOfFunds=" + sourceOfFunds + "&abcTotal=" + abcTotal + "&contractCostTotal=" + contractCostTotal + "&constructorOrSupplier=" + constructorOrSupplier;
    data += "&itemPurchase=" + itemPurchase + "&remarks=" + remarks + "&pmrid=" + pmrid + "&procActStatus=" + procActStatus;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            message = JSON.parse(xhr.responseText);
            resetAddPOForm_FNCTN();
            loadPMRContent_FNCTN();
            $('#AddpmrPOFormModal_id').modal('hide');
            triggerAutoCloseAlert(message.message, "");
        }
    });

    xhr.open("POST", "/PMR1st_route/AddPO");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "1710d6a9-82c0-4e70-83d2-5f3eb8efafc3");

    xhr.send(data);
}



function updatePO_FNCTN() {
    var poid = document.getElementById("POToBeUpdated_id").value;

    var poNo = document.getElementById('UpdatepoNoInput_id').value;
    var procProgOrProj = document.getElementById('UpdateprocProgOrProjTextarea_id').value;
    var pmoOrEnduser = document.getElementById('UpdatepmoOrEnduserTextarea_id').value;
    var procMode = document.getElementById('UpdateprocModeInput_id').value;
    var preProcConference = document.getElementById('UpdatepreProcConferenceInput_id').value;
    var adsOrPostOfIB = document.getElementById('UpdateadsOrPostOfIBInput_id').value;
    var preBidConf = document.getElementById('UpdatepreBidConfInput_id').value;
    var eligibilityCheck = document.getElementById('UpdateeligibilityCheckInput_id').value;
    var subOrOpenOfBids = document.getElementById('UpdatesubOrOpenOfBidsInput_id').value;
    var bidEvaluation = document.getElementById('UpdatebidEvaluationInput_id').value;
    var postQual = document.getElementById('UpdatepostQualInput_id').value;
    var noticeOfAward = document.getElementById('UpdatenoticeOfAwardInput_id').value;
    var contractSigningOrApprovePO = document.getElementById('UpdatecontractSigningOrApprovePOInput_id').value;
    var deliveryTerms = document.getElementById('UpdatedeliveryTermsInput_id').value;
    var deliveryOrCompletion = document.getElementById('UpdatedeliveryOrCompletionInput_id').value;
    var paymentMode = document.getElementById('UpdatepaymentModeInput_id').value;
    var sourceOfFunds = document.getElementById('UpdatesourceOfFundsInput_id').value;
    var abcTotal = document.getElementById('UpdateabcTotalInput_id').value;
    var contractCostTotal = document.getElementById('UpdatecontractCostTotalInput_id').value;
    var constructorOrSupplier = document.getElementById('UpdateconstructorOrSupplierTextarea_id').value;
    var itemPurchase = document.getElementById('UpdateitemPurchaseTextarea_id').value;
    var remarks = document.getElementById('UpdateremarksSelect_id').value;
    var procActStatus;
    if (timescopeglobalvar.localeCompare("1st Semester") == 0 || timescopeglobalvar.localeCompare("2nd Semester") == 0) {
        procActStatus = document.getElementById('UpdateprocActivityStatusSelect_id').value;
    } else {
        procActStatus = null;
    }


    var data = "poNo=" + poNo + "&procProgOrProj=" + procProgOrProj + "&pmoOrEnduser=" + pmoOrEnduser + "&procMode=" + procMode + "&preProcConference=" + preProcConference;
    data += "&adsOrPostOfIB=" + adsOrPostOfIB + "&preBidConf=" + preBidConf + "&eligibilityCheck=" + eligibilityCheck + "&subOrOpenOfBids=" + subOrOpenOfBids + "&bidEvaluation=" + bidEvaluation;
    data += "&postQual=" + postQual + "&noticeOfAward=" + noticeOfAward + "&contractSigningOrApprovePO=" + contractSigningOrApprovePO + "&deliveryTerms=" + deliveryTerms + "&deliveryOrCompletion=" + deliveryOrCompletion;
    data += "&paymentMode=" + paymentMode + "&sourceOfFunds=" + sourceOfFunds + "&abcTotal=" + abcTotal + "&contractCostTotal=" + contractCostTotal + "&constructorOrSupplier=" + constructorOrSupplier;
    data += "&itemPurchase=" + itemPurchase + "&remarks=" + remarks + "&poid=" + poid + "&procActStatus=" + procActStatus;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            loadPMRContent_FNCTN();
            $('#UpdatePOFormModal_id').modal('hide');
            triggerAutoCloseAlert("PO Successfully Updated", "");
        }
    });
    xhr.open("PUT", "/PMR1st_route/UpdatePO");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "811b86e5-77fd-49ed-b5a9-fecc3a7dc610");
    xhr.send(data);
}



function deletePO_FNCTN(poid) {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;


    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            loadPMRContent_FNCTN();
            triggerAutoCloseAlert("PO Successfully Deleted", "");
        }
    });

    xhr.open("DELETE", "/PMR1st_route/DeletePO/" + poid);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "322a129f-a62a-459b-bb9f-ce39f5a1620b");

    xhr.send();
}








function resetAddPOForm_FNCTN() {
    document.getElementById('poNoInput_id').value = "";
    document.getElementById('procProgOrProjTextarea_id').value = "";
    document.getElementById('pmoOrEnduserTextarea_id').value = "";
    document.getElementById('procModeInput_id').value = "";
    document.getElementById('preProcConferenceInput_id').value = "";
    document.getElementById('adsOrPostOfIBInput_id').value = "";
    document.getElementById('preBidConfInput_id').value = "";
    document.getElementById('eligibilityCheckInput_id').value = "";
    document.getElementById('subOrOpenOfBidsInput_id').value = "";
    document.getElementById('bidEvaluationInput_id').value = "";
    document.getElementById('postQualInput_id').value = "";
    document.getElementById('noticeOfAwardInput_id').value = "";
    document.getElementById('contractSigningOrApprovePOInput_id').value = "";
    document.getElementById('deliveryTermsInput_id').value = "";
    document.getElementById('deliveryOrCompletionInput_id').value = "";
    document.getElementById('paymentModeInput_id').value = "";
    document.getElementById('sourceOfFundsInput_id').value = "";
    document.getElementById('abcTotalInput_id').value = "";
    document.getElementById('contractCostTotalInput_id').value = "";
    document.getElementById('constructorOrSupplierTextarea_id').value = "";
    document.getElementById('itemPurchaseTextarea_id').value = "";
    document.getElementById('remarksSelect_id').selectedIndex = 0;
}


function beforeDeletePO_FNCTN(poid) {
    if (confirm("Are you sure you want to delete this PO?") == true) {
        deletePO_FNCTN(poid);
    }
}






function loadCurrentInfoForUpdatePOForm_FNCTN(poid, poindex) {

    document.getElementById('POToBeUpdated_id').value = poid;
    document.getElementById('UpdatepoNoInput_id').value = podatacurrentresponse[poindex].PMRpurchaseOrder_poNo_FIELD;
    document.getElementById('UpdateprocProgOrProjTextarea_id').value = podatacurrentresponse[poindex].PMRpurchaseOrder_procProgOrProj_FIELD;
    document.getElementById('UpdatepmoOrEnduserTextarea_id').value = podatacurrentresponse[poindex].PMRpurchaseOrder_pmoOrEnduser_FIELD;
    document.getElementById('UpdateprocModeInput_id').value = podatacurrentresponse[poindex].PMRpurchaseOrder_procMode_FIELD;
    document.getElementById('UpdatepreProcConferenceInput_id').value = podatacurrentresponse[poindex].PMRpurchaseOrder_preProcConference_FIELD;
    document.getElementById('UpdateadsOrPostOfIBInput_id').value = podatacurrentresponse[poindex].PMRpurchaseOrder_adsOrPostOfIB_FIELD;
    document.getElementById('UpdatepreBidConfInput_id').value = podatacurrentresponse[poindex].PMRpurchaseOrder_preBidConf_FIELD;
    document.getElementById('UpdateeligibilityCheckInput_id').value = podatacurrentresponse[poindex].PMRpurchaseOrder_eligibilityCheck_FIELD;
    document.getElementById('UpdatesubOrOpenOfBidsInput_id').value = podatacurrentresponse[poindex].PMRpurchaseOrder_subOrOpenOfBids_FIELD;
    document.getElementById('UpdatebidEvaluationInput_id').value = podatacurrentresponse[poindex].PMRpurchaseOrder_bidEvaluation_FIELD;
    document.getElementById('UpdatepostQualInput_id').value = podatacurrentresponse[poindex].PMRpurchaseOrder_postQual_FIELD;
    document.getElementById('UpdatenoticeOfAwardInput_id').value = podatacurrentresponse[poindex].PMRpurchaseOrder_noticeOfAward_FIELD;
    document.getElementById('UpdatecontractSigningOrApprovePOInput_id').value = podatacurrentresponse[poindex].PMRpurchaseOrder_contractSigningOrApprovePO_FIELD;
    document.getElementById('UpdatedeliveryTermsInput_id').value = podatacurrentresponse[poindex].PMRpurchaseOrder_deliveryTerms_FIELD;
    document.getElementById('UpdatedeliveryOrCompletionInput_id').value = podatacurrentresponse[poindex].PMRpurchaseOrder_deliveryOrCompletion_FIELD;
    document.getElementById('UpdatepaymentModeInput_id').value = podatacurrentresponse[poindex].PMRpurchaseOrder_paymentMode_FIELD;
    document.getElementById('UpdatesourceOfFundsInput_id').value = podatacurrentresponse[poindex].PMRpurchaseOrder_sourceOfFunds_FIELD;
    document.getElementById('UpdateabcTotalInput_id').value = podatacurrentresponse[poindex].PMRpurchaseOrder_abcTotal_FIELD;
    document.getElementById('UpdatecontractCostTotalInput_id').value = podatacurrentresponse[poindex].PMRpurchaseOrder_contractCostTotal_FIELD;
    document.getElementById('UpdateconstructorOrSupplierTextarea_id').value = podatacurrentresponse[poindex].PMRpurchaseOrder_constructorOrSupplier_FIELD;
    document.getElementById('UpdateitemPurchaseTextarea_id').value = podatacurrentresponse[poindex].PMRpurchaseOrder_itemPurchase_FIELD;
    document.getElementById('UpdateremarksSelect_id').value = podatacurrentresponse[poindex].PMRpurchaseOrder_remarks_FIELD;
}









// function yeah(){
//     var yeahhh = "";
//     var yeahhhh = null;

//     var data = "yeahhh="+yeahhh+"&yeahhhh="+yeahhhh;

//     var xhr = new XMLHttpRequest();
//     xhr.withCredentials = true;

//     xhr.addEventListener("readystatechange", function () {
//         if (this.readyState === 4) {
//             alert("yay");        }
//       });

//     xhr.open("POST", "/PMR1st_route/yeah");
//     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     xhr.setRequestHeader("Cache-Control", "no-cache");
//     xhr.setRequestHeader("Postman-Token", "1710d6a9-82c0-4e70-83d2-5f3eb8efafc3");

//     xhr.send(data);

// }