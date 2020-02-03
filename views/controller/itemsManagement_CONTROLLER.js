var itemdatacurrentresponse;
function loadItemsData_FNCTN() {
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

xhr.open("GET", "/itemsManagement_route");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("Cache-Control", "no-cache");
xhr.setRequestHeader("Postman-Token", "8259fbf5-dce9-4c0e-aec3-e6bd1328d1b3");
xhr.send(data);
}

















function addNewItem_FNCTN() {
    var type = document.getElementById('itemtypeSelect_id').value;
    var category = document.getElementById('CategoryTextarea_id').value;
    var subcategory = document.getElementById('SubCategoryTextarea_id').value;
    var gendes = document.getElementById('GenDesTextarea_id').value;
    var units = document.getElementById('UnitsInput_id').value;
    var unitprice = document.getElementById('UnitPriceInput_id').value;
    var procmode = document.getElementById('ProcModeTextarea_id').value;
    
    if(category == "" || subcategory == "" || gendes == "" || units == "" || unitprice == "" || procmode == ""){
        swal({   
            title: "There are empty field/s",   
            text: "Please fill up all the fields",   
            timer: 2000,   
            showConfirmButton: false 
        });
    }else{
        var data = "type="+type+"&category="+category+"&subcategory="+subcategory+"&gendes="+gendes+"&units="+units+"&unitprice="+unitprice+"&procmode="+procmode;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            resetAddItemForm_FNCTN();
            loadItemsData_FNCTN();
            $('#AddItemFormModal_id').modal('hide');
            triggerAutoCloseAlert("Item Successfully Added","");
        }
      });

    xhr.open("POST", "/itemsManagement_route/");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "1710d6a9-82c0-4e70-83d2-5f3eb8efafc3");

    xhr.send(data);
    }
}








function updateItem_FNCTN() {
    var itemid = document.getElementById("ItemToBeUpdated_id").value;
    var type = document.getElementById('UpdateitemtypeSelect_id').value;
    var category = document.getElementById('UpdateCategoryTextarea_id').value;
    var subcategory = document.getElementById('UpdateSubCategoryTextarea_id').value;
    var gendes = document.getElementById('UpdateGenDesTextarea_id').value;
    var units = document.getElementById('UpdateUnitsInput_id').value;
    var unitprice = document.getElementById('UpdateUnitPriceInput_id').value;
    var procmode = document.getElementById('UpdateProcModeTextarea_id').value;
    

    var data = "type="+type+"&category="+category+"&subcategory="+subcategory+"&gendes="+gendes+"&units="+units+"&unitprice="+unitprice+"&procmode="+procmode+"&itemid="+itemid;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            loadItemsData_FNCTN();
            $('#UpdateItemFormModal_id').modal('hide');
            triggerAutoCloseAlert("Item Successfully Updated","");
        }
      });
            xhr.open("PUT", "/itemsManagement_route");
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("Cache-Control", "no-cache");
            xhr.setRequestHeader("Postman-Token", "811b86e5-77fd-49ed-b5a9-fecc3a7dc610");
            xhr.send(data);
}





function deleteItem_FNCTN(itemid) {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            loadItemsData_FNCTN();
            triggerAutoCloseAlert("Item Successfully Deleted","");
        }
      });

    xhr.open("DELETE", "/itemsManagement_route/"+itemid);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "322a129f-a62a-459b-bb9f-ce39f5a1620b");

    xhr.send();
}








