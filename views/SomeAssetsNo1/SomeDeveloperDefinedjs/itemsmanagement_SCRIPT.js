// function showhideAddItemForm_FNCTN(){
//     if(document.getElementById("AddItemForm_id").style.display == "none"){
//         document.getElementById("AddItemForm_id").style.display = "block";
//     }else{
//         document.getElementById("AddItemForm_id").style.display = "none";
//         resetAddItemForm_FNCTN();
//     }
// }

function resetAddItemForm_FNCTN() {
    document.getElementById('CategoryTextarea_id').value = "";
    document.getElementById('SubCategoryTextarea_id').value = "";
    document.getElementById('GenDesTextarea_id').value = "";
    document.getElementById('UnitsInput_id').value = "";
    document.getElementById('UnitPriceInput_id').value = "";
    document.getElementById('ProcModeTextarea_id').value = "";
    document.getElementById('itemtypeSelect_id').selectedIndex = 0;
}




function loadCurrentInfoForUpdateItemForm_FNCTN(itemid, itemindex) {
       
    document.getElementById('ItemToBeUpdated_id').value = itemid;
    document.getElementById('UpdateitemtypeSelect_id').value = itemdatacurrentresponse[itemindex].Item_type_FIELD;
    document.getElementById('UpdateCategoryTextarea_id').value = itemdatacurrentresponse[itemindex].Item_category_FIELD;
    document.getElementById('UpdateSubCategoryTextarea_id').value = itemdatacurrentresponse[itemindex].Item_subCategory_FIELD;
    document.getElementById('UpdateGenDesTextarea_id').value = itemdatacurrentresponse[itemindex].Item_generalDescription_FIELD;
    document.getElementById('UpdateUnitsInput_id').value = itemdatacurrentresponse[itemindex].Item_units_FIELD;
    document.getElementById('UpdateUnitPriceInput_id').value = itemdatacurrentresponse[itemindex].Item_unitPrice_FIELD;
    document.getElementById('UpdateProcModeTextarea_id').value = itemdatacurrentresponse[itemindex].Item_procMode_FIELD;
} 

 



function beforeDeleteItem_FNCTN(itemid) {
    if (confirm("Are you sure you want to delete this item?") == true) {
        deleteItem_FNCTN(itemid);
    }
}