function searchItem_FNCTN(){
    var filterby = document.getElementById('FilterBySelect_id').value;
    var searchdata = document.getElementById('SearchBarInput_id').value;
    var data = null;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {

            var itemstblcontent = "<tr><th>Item Type</th><th>Category</th><th>Sub Category</th><th>General Description</th><th>Units</th><th>Unit Price</th><th>Mode of Procurement</th><th colspan=\"2\">Action</th></tr>";
            itemdatacurrentresponse = JSON.parse(xhr.responseText);

            for (var i in itemdatacurrentresponse) {    
                itemstblcontent += "<tr>";
                itemstblcontent += "<td>" + itemdatacurrentresponse[i].Item_type_FIELD + "</td>";
                itemstblcontent += "<td>" + itemdatacurrentresponse[i].Item_category_FIELD + "</td>";
                itemstblcontent += "<td>" + itemdatacurrentresponse[i].Item_subCategory_FIELD + "</td>";
                itemstblcontent += "<td>" + itemdatacurrentresponse[i].Item_generalDescription_FIELD + "</td>";
                itemstblcontent += "<td>" + itemdatacurrentresponse[i].Item_units_FIELD + "</td>";
                itemstblcontent += "<td>" + itemdatacurrentresponse[i].Item_unitPrice_FIELD + "</td>";
                itemstblcontent += "<td>" + itemdatacurrentresponse[i].Item_procMode_FIELD + "</td>";
               
                itemstblcontent += "<td><div class='button-box'><button id='UpdateUserBtn1_id' type='button' class='btn btn-info' data-toggle='modal' data-target='#UpdateItemFormModal_id' onclick='loadCurrentInfoForUpdateItemForm_FNCTN(" + itemdatacurrentresponse[i].Item_id_FIELD + "," + i + ")'>UPDATE</button></div></td>";
                itemstblcontent += "<td><div class='button-box'><button id='DeleteUserBtn1_id' type='button' class='btn btn-danger' onclick='beforeDeleteItem_FNCTN(" + itemdatacurrentresponse[i].Item_id_FIELD + ")'>DELETE</button></div></td>";
                itemstblcontent += "</tr>";
            }

            document.getElementById('ItemsDataTable_id').innerHTML = itemstblcontent;
        }

    });

xhr.open("GET", "/itemsManagementSearchFunctions_route/SearchbarSearch/"+filterby+"/"+searchdata);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("Cache-Control", "no-cache");
xhr.setRequestHeader("Postman-Token", "8259fbf5-dce9-4c0e-aec3-e6bd1328d1b3");
xhr.send(data);
}



function filterItemUsingItemType_FNCTN(){
    var itemtypeselected = document.getElementById('FilterByItemTypeSelect_id').value;
    //if(itemtypeselected != "Select Item Type"){
        
    var data = null;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {

            var itemstblcontent = "<tr><th>Item Type</th><th>Category</th><th>Sub Category</th><th>General Description</th><th>Units</th><th>Unit Price</th><th>Mode of Procurement</th><th colspan=\"2\">Action</th></tr>";
            itemdatacurrentresponse = JSON.parse(xhr.responseText);

            for (var i in itemdatacurrentresponse) {    
                itemstblcontent += "<tr>";
                itemstblcontent += "<td>" + itemdatacurrentresponse[i].Item_type_FIELD + "</td>";
                itemstblcontent += "<td>" + itemdatacurrentresponse[i].Item_category_FIELD + "</td>";
                itemstblcontent += "<td>" + itemdatacurrentresponse[i].Item_subCategory_FIELD + "</td>";
                itemstblcontent += "<td>" + itemdatacurrentresponse[i].Item_generalDescription_FIELD + "</td>";
                itemstblcontent += "<td>" + itemdatacurrentresponse[i].Item_units_FIELD + "</td>";
                itemstblcontent += "<td>" + itemdatacurrentresponse[i].Item_unitPrice_FIELD + "</td>";
                itemstblcontent += "<td>" + itemdatacurrentresponse[i].Item_procMode_FIELD + "</td>";
               
                itemstblcontent += "<td><div class='button-box'><button id='UpdateUserBtn1_id' type='button' class='btn btn-info' data-toggle='modal' data-target='#UpdateItemFormModal_id' onclick='loadCurrentInfoForUpdateItemForm_FNCTN(" + itemdatacurrentresponse[i].Item_id_FIELD + "," + i + ")'>UPDATE</button></div></td>";
                itemstblcontent += "<td><div class='button-box'><button id='DeleteUserBtn1_id' type='button' class='btn btn-danger' onclick='beforeDeleteItem_FNCTN(" + itemdatacurrentresponse[i].Item_id_FIELD + ")'>DELETE</button></div></td>";
                itemstblcontent += "</tr>";
            }

            document.getElementById('ItemsDataTable_id').innerHTML = itemstblcontent;
        }

    });

xhr.open("GET", "/itemsManagementSearchFunctions_route/ItemTypeFilter/"+itemtypeselected);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("Cache-Control", "no-cache");
xhr.setRequestHeader("Postman-Token", "8259fbf5-dce9-4c0e-aec3-e6bd1328d1b3");
xhr.send(data);
    //}
}



function filterItemUsingUnitPrice_FNCTN(){
    var inputtedminprice = document.getElementById('UnitPriceMinInput_id').value;
    var inputtedmaxprice = document.getElementById('UnitPriceMaxInput_id').value;
    
    //if(itemtypeselected != "Select Item Type"){
        
    var data = null;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {

            var itemstblcontent = "<tr><th>Item Type</th><th>Category</th><th>Sub Category</th><th>General Description</th><th>Units</th><th>Unit Price</th><th>Mode of Procurement</th><th colspan=\"2\">Action</th></tr>";
            itemdatacurrentresponse = JSON.parse(xhr.responseText);

            for (var i in itemdatacurrentresponse) {    
                itemstblcontent += "<tr>";
                itemstblcontent += "<td>" + itemdatacurrentresponse[i].Item_type_FIELD + "</td>";
                itemstblcontent += "<td>" + itemdatacurrentresponse[i].Item_category_FIELD + "</td>";
                itemstblcontent += "<td>" + itemdatacurrentresponse[i].Item_subCategory_FIELD + "</td>";
                itemstblcontent += "<td>" + itemdatacurrentresponse[i].Item_generalDescription_FIELD + "</td>";
                itemstblcontent += "<td>" + itemdatacurrentresponse[i].Item_units_FIELD + "</td>";
                itemstblcontent += "<td>" + itemdatacurrentresponse[i].Item_unitPrice_FIELD + "</td>";
                itemstblcontent += "<td>" + itemdatacurrentresponse[i].Item_procMode_FIELD + "</td>";
               
                itemstblcontent += "<td><div class='button-box'><button id='UpdateUserBtn1_id' type='button' class='btn btn-info' data-toggle='modal' data-target='#UpdateItemFormModal_id' onclick='loadCurrentInfoForUpdateItemForm_FNCTN(" + itemdatacurrentresponse[i].Item_id_FIELD + "," + i + ")'>UPDATE</button></div></td>";
                itemstblcontent += "<td><div class='button-box'><button id='DeleteUserBtn1_id' type='button' class='btn btn-danger' onclick='beforeDeleteItem_FNCTN(" + itemdatacurrentresponse[i].Item_id_FIELD + ")'>DELETE</button></div></td>";
                itemstblcontent += "</tr>";
            }

            document.getElementById('ItemsDataTable_id').innerHTML = itemstblcontent;
        }

    });

xhr.open("GET", "/itemsManagementSearchFunctions_route/UnitPriceFilter/"+inputtedminprice+"/"+inputtedmaxprice);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("Cache-Control", "no-cache");
xhr.setRequestHeader("Postman-Token", "8259fbf5-dce9-4c0e-aec3-e6bd1328d1b3");
xhr.send(data);
    //}
}