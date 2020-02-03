var pocurrentresponse;
function loadEnduserPO() {
    
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var enduserpotblcontent ="";
            pocurrentresponse = JSON.parse(xhr.responseText);
           
            if(pocurrentresponse == ""){
                document.getElementById('End-userPOsTeble_id').innerHTML = "<tr><td colspan='4'>You have no PO assigned to you</td></tr>";
            }else{
                for (var i in pocurrentresponse) {
                    var postatus = pocurrentresponse[i].PMRpurchaseOrder_remarks_FIELD;
                    var rowcolor = "";
                        if(postatus.localeCompare("Awarded") == 0){
                            rowcolor = "#4db8ff";
                        }else if(postatus.localeCompare("Delivered") == 0){
                            rowcolor = "#66ffb3";
                        }
                       enduserpotblcontent += "<tr style='background-color: "+rowcolor+"'>";
                       enduserpotblcontent += "<td>"+pocurrentresponse[i].PMRpurchaseOrder_poNo_FIELD+"</td>";
                       enduserpotblcontent += "<td>"+pocurrentresponse[i].PMRpurchaseOrder_itemPurchase_FIELD+"</td>";
                       enduserpotblcontent += "<td>"+pocurrentresponse[i].PMRpurchaseOrder_procProgOrProj_FIELD+"</td>";
                       enduserpotblcontent += "<td><button type='button' data-toggle='modal' data-target='#EnduserPOdetailsmodal' onclick='loadEnduserPOdetails("+pocurrentresponse[i].PMRpurchaseOrder_id_FIELD+")' class='btn btn-outline-dark'> <i class='icon icon-eyeglass'></i></button></td>";
                       enduserpotblcontent += "</tr>";
                }
                
    
                document.getElementById('End-userPOsTeble_id').innerHTML = enduserpotblcontent;
               
            }
            
        }

    });

xhr.open("POST", "/PMR1st_route/fetchEnduserPO");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("Cache-Control", "no-cache");
xhr.setRequestHeader("Postman-Token", "8259fbf5-dce9-4c0e-aec3-e6bd1328d1b3");
xhr.send(data);
}



function loadEnduserPOdetails(poid){
    var data = "poid="+poid;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var result = JSON.parse(xhr.responseText);

            var text = "";
            document.getElementById('POlabelOnModal').innerHTML = "PO# "+ result[0].PMRpurchaseOrder_poNo_FIELD+" details";
            text += "<tr>";
                text += "<td style='text-align:right'>Procurement Program/Project:</td>";
                text += "<td style='text-align:left'>"+result[0].PMRpurchaseOrder_procProgOrProj_FIELD+"</td>";
            text += "</tr>";

            text += "<tr>";
                text += "<td style='text-align:right'>PMO/End-User:</td>";
                text += "<td style='text-align:left'>"+result[0].PMRpurchaseOrder_pmoOrEnduser_FIELD+"</td>";
            text += "</tr>";

            text += "<tr>";
                text += "<td style='text-align:right'>Mode of Procurement:</td>";
                text += "<td style='text-align:left'>"+result[0].PMRpurchaseOrder_procMode_FIELD+"</td>";
            text += "</tr>";

            text += "<tr>";
                text += "<td style='text-align:right'>Pre-Proc Conference:</td>";
                text += "<td style='text-align:left'>"+result[0].PMRpurchaseOrder_preProcConference_FIELD+"</td>";
            text += "</tr>";
            
            text += "<tr>";
                text += "<td style='text-align:right'>Ads/Post of IB:</td>";
                text += "<td style='text-align:left'>"+result[0].PMRpurchaseOrder_adsOrPostOfIB_FIELD+"</td>";
            text += "</tr>";

            text += "<tr>";
                text += "<td style='text-align:right'>Pre-bid Conf:</td>";
                text += "<td style='text-align:left'>"+result[0].PMRpurchaseOrder_preBidConf_FIELD+"</td>";
            text += "</tr>";

            text += "<tr>";
                text += "<td style='text-align:right'>Eligibility Check:</td>";
                text += "<td style='text-align:left'>"+result[0].PMRpurchaseOrder_eligibilityCheck_FIELD+"</td>";
            text += "</tr>";

            text += "<tr>";
                text += "<td style='text-align:right'>Sub/Open of Bids:</td>";
                text += "<td style='text-align:left'>"+result[0].PMRpurchaseOrder_subOrOpenOfBids_FIELD+"</td>";
            text += "</tr>";

            text += "<tr>";
                text += "<td style='text-align:right'>Bid Evaluation:</td>";
                text += "<td style='text-align:left'>"+result[0].PMRpurchaseOrder_bidEvaluation_FIELD+"</td>";
            text += "</tr>";

            text += "<tr>";
                text += "<td style='text-align:right'>Post Qual:</td>";
                text += "<td style='text-align:left'>"+result[0].PMRpurchaseOrder_postQual_FIELD+"</td>";
            text += "</tr>";

            text += "<tr>";
                text += "<td style='text-align:right'>Notice of Award:</td>";
                text += "<td style='text-align:left'>"+result[0].PMRpurchaseOrder_noticeOfAward_FIELD+"</td>";
            text += "</tr>";

            text += "<tr>";
                text += "<td style='text-align:right'>Contract Signing / Approve Purchase Order:</td>";
                text += "<td style='text-align:left'>"+result[0].PMRpurchaseOrder_contractSigningOrApprovePO_FIELD+"</td>";
            text += "</tr>";

            text += "<tr>";
                text += "<td style='text-align:right'>delivery terms (days):</td>";
                text += "<td style='text-align:left'>"+result[0].PMRpurchaseOrder_deliveryTerms_FIELD+"</td>";
            text += "</tr>";

            text += "<tr>";
                text += "<td style='text-align:right'>Delivery/ Completion:</td>";
                text += "<td style='text-align:left'>"+result[0].PMRpurchaseOrder_deliveryOrCompletion_FIELD+"</td>";
            text += "</tr>";

            text += "<tr>";
                text += "<td style='text-align:right'>mode of payment:</td>";
                text += "<td style='text-align:left'>"+result[0].PMRpurchaseOrder_paymentMode_FIELD+"</td>";
            text += "</tr>";

            text += "<tr>";
                text += "<td style='text-align:right'>Source of Funds:</td>";
                text += "<td style='text-align:left'>"+result[0].PMRpurchaseOrder_sourceOfFunds_FIELD+"</td>";
            text += "</tr>";

            text += "<tr>";
                text += "<td style='text-align:right'>ABC (PhP) Total:</td>";
                text += "<td style='text-align:left'>"+result[0].PMRpurchaseOrder_abcTotal_FIELD+"</td>";
            text += "</tr>";

            text += "<tr>";
                text += "<td style='text-align:right'>Contract Cost (PhP) Total:</td>";
                text += "<td style='text-align:left'>"+result[0].PMRpurchaseOrder_contractCostTotal_FIELD+"</td>";
            text += "</tr>";

            text += "<tr>";
                text += "<td style='text-align:right'>Constructor / Supplier:</td>";
                text += "<td style='text-align:left'>"+result[0].PMRpurchaseOrder_constructorOrSupplier_FIELD+"</td>";
            text += "</tr>";

            text += "<tr>";
                text += "<td style='text-align:right'>ITEM PURCHASE:</td>";
                text += "<td style='text-align:left'>"+result[0].PMRpurchaseOrder_itemPurchase_FIELD+"</td>";
            text += "</tr>";

            text += "<tr>";
                text += "<td style='text-align:right'>Remarks (Explaining changes from the APP):</td>";
                text += "<td style='text-align:left'>"+result[0].PMRpurchaseOrder_remarks_FIELD+"</td>";
            text += "</tr>";

            document.getElementById('EnduserPOdetailstable').innerHTML = text;
        }

    });

xhr.open("POST", "/POenduserSelection_route/getTheEnduserPOdetails");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("Cache-Control", "no-cache");
xhr.setRequestHeader("Postman-Token", "8259fbf5-dce9-4c0e-aec3-e6bd1328d1b3");
xhr.send(data);
}