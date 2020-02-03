// jshint esversion:6
$(document).ready(function () {
    searchParams = new URLSearchParams(window.location.search);
    modification = false;

    fetch_item();
    fetch_your_ppmp_item_table();
    $("#search-item").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#ppmp_item option").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            $('#ppmp_item').multiSelect('refresh');
            return false;
        });
    });

    $(document).on('click', '#sumbmit-item', function (e) {
        var item = [];
        $.each($("#ppmp_item option:selected"), function () {
            item.push([$(this).val(), searchParams.get('ppmp_id')]);
        });
		console.log(item);
        insert_ppmp_item(item);
        fetch_item();
        item = [];
        $('#ppmp_item').multiSelect('refresh');
    });

});


function fetch_item() {
    data = {
        'Item_type_FIELD': searchParams.get('ppmp_type'),
        'PPMP_id_FIELD': searchParams.get('ppmp_id')
    };  
    $.ajax({
        data: data,
        type: 'post',
        url: '/item_ROUTE/fetch_item_route',
        success: function (data) {
            display_item(data);
        }
    });
}

function display_item(data) {
    var display = '';
    for (var count = 0; count < data.length; count++) {
        display += "<option value='" + data[count].Item_id_FIELD + "'>" + data[count].Item_generalDescription_FIELD + "</option>";
    }
    $('#ppmp_item').html(display);
    $('#ppmp_item').multiSelect('refresh');
    return false;
}

function insert_ppmp_item(item) {
    data = {
        'selected_item': item
    };

    $.ajax({
        data: data,
        type: 'post',
        url: '/item_ROUTE/insert_item_ppmp_route',
        success: function (result) {
            Swal.fire(
                'Submitted!',
                'Item has been added to your PPMP.',
                'success'
            );
            fetch_your_ppmp_item_table();
            fetch_item();
        },
        error: function (result) {
            Swal.fire({
                type: 'error',
                title: 'Oops.aaa..',
                text: 'Something went wrong!',
                footer: 'Please try again'
            });

        }
    });
}

function fetch_your_ppmp_item_table() {
    var data = {
        'PPMP_id_FIELD': searchParams.get('ppmp_id')
    };
    $.ajax({
        data: data,
        type: 'post',
        url: '/item_ROUTE/fetch_your_ppmp_item',
        success: function (result) {
            console.log('------------------------------');
            console.log(result.data.length);
            console.log('------------------------------');
            arrange_item(result);
        }
    });
}


function getCategory() {
    $.ajax({
        type: 'get',
        url: '/item_ROUTE/fetch_category',
        success: function (result) {
            data_category = result;
            return result;
        }
    });

}

function delete_item_ppmp(data_id) {
    data = {
        'PPMPItem_id_FIELD': data_id
    };
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.value) {
            $.ajax({
                data: data,
                type: 'delete',
                url: '/item_ROUTE/delete_item_ppmp_route',
                success: function (result) {
                    Swal.fire(
                        'Deleted!',
                        'Your item has been deleted.',
                        'success'
                    );
                    fetch_your_ppmp_item_table();
                    fetch_item();
                },
                error: function (result) {
                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        footer: 'Please try again'
                    });
                }
            });
        };
    });
}

function arrange_item(data) {
    count = 0;
    temp_data = new Array();
    for (x = 0; x < data.data.length; x++) {
        for (y = 0; y < data.data.length; y++) {
            if (data.data[x].Item_category_FIELD == data.data[y].Item_category_FIELD) {
                if (x > y) {
                    break;
                }
                temp_data[count] = {
                    'PPMPItem_id_FIELD': data.data[y].PPMPItem_id_FIELD,
                    'Item_id_FIELD': data.data[y].Item_id_FIELD,
                    'PPMPItem_fstQtrQty_FIELD': data.data[y].PPMPItem_fstQtrQty_FIELD,
                    'PPMPItem_scdQtrQty_FIELD': data.data[y].PPMPItem_scdQtrQty_FIELD,
                    'PPMPItem_trdQtrQty_FIELD': data.data[y].PPMPItem_trdQtrQty_FIELD,
                    'PPMPItem_frtQtrQty_FIELD': data.data[y].PPMPItem_frtQtrQty_FIELD,
                    'PPMPItem_noteOrRemarks_FIELD': data.data[y].PPMPItem_noteOrRemarks_FIELD,
                    'PPMP_id_FIELD': data.data[y].PPMP_id_FIELD,
                    'Item_type_FIELD': data.data[y].Item_type_FIELD,
                    'Item_category_FIELD': data.data[y].Item_category_FIELD,
                    'Item_subCategory_FIELD': data.data[y].Item_subCategory_FIELD,
                    'Item_generalDescription_FIELD': data.data[y].Item_generalDescription_FIELD,
                    'Item_units_FIELD': data.data[y].Item_units_FIELD,
                    'Item_unitPrice_FIELD': data.data[y].Item_unitPrice_FIELD,
                    'Item_procMode_FIELD': data.data[y].Item_procMode_FIELD,
                };
                count++;
            }
        }
    }
    // var skip = 0;
    // var count = 0;

    // temp_category = new Array();
    // for(a = 0; a < temp_data.length; a++){
    //     if(skip < a){
    //         for(b = 0; b < temp_data.length; b++){
    //             // if(skip < b){
    //                 if(temp_data[a].Item_category_FIELD != temp_data[b].Item_category_FIELD){
    //                     temp_category[count] = {
    //                         'Item_category_FIELD':temp_data[a].Item_category_FIELD
    //                     };count++;
    //                     skip = b-1;
    //                     break;
    //                 }else{

    //                 }
    //             // }
    //         }
    //     }
    // }

    // console.log(temp_category);
    console.log(temp_data);
    display_item_in_table(temp_data);
}

function display_item_in_table(data) {
    var subcategorysubtotal;
    var ppmpsummarytotalbudget = 0;
    var ppmpsummaryprovforinflation;
    var ppmpsummarycontingency;
    var ppmpsummarytotalestimbud;
    // console.log(getCategory());
    // var data_category =new Array();
    id = {
        'PPMP_id_FIELD': searchParams.get('ppmp_id')
    }
    $.ajax({
        data: id,
        type: 'post',
        url: '/item_ROUTE/fetch_category',
        success: function (result_cat) {

            // console.log(result_cat.data);
            // console.log(data_category);
            display = '';
            same_category_skip = 0;
            console.log('+++++');
            console.log(result_cat.data);
            for (x = 0; x < result_cat.data.length; x++) {
                //  if(same_category_skip < x){
                //Category showing start
                display += `<tr>
                                         <td class="bg-warning text-white"></td>
                                         <td class="bg-warning text-white">` + result_cat.data[x].Item_category_FIELD + `</td>`;
                for (i = 0; i < 11; i++) {
                    display += `<td class="bg-warning text-white"></td>`;
                }

                if (result_cat.data[x].Item_subCategory_FIELD != '') {
                    display += `<tr>
                                 <td class="bg-success text-white"></td>
                                 <td class="bg-success text-white">` + result_cat.data[x].Item_subCategory_FIELD + `</td>`;
                    for (i = 0; i < 11; i++) {
                        display += `<td class="bg-success text-white"></td>`;
                    }
                }
                //Category showing end
                subcategorysubtotal = 0;

                for (y = 0; y < data.length; y++) {
                    if (result_cat.data[x].Item_category_FIELD == data[y].Item_category_FIELD) {
                        itemestimatedbudget = getEstimate_budget(getItem_Size(data[y]), data[y].Item_unitPrice_FIELD);
                        display += `<tr>` +
                            `<td></td>` +
                            `<td>` + data[y].Item_generalDescription_FIELD + `</td>` +
                            `<td>` + data[y].Item_units_FIELD + `</td>` +
                            `<td>` + data[y].Item_unitPrice_FIELD + `</td>` +
                            `<td>` + getItem_Size(data[y]) + `</td>` +
                            `<td>` + itemestimatedbudget + `</td>` +
                            `<td>` + data[y].Item_procMode_FIELD + `</td>` +
                            `<td>` + data[y].PPMPItem_fstQtrQty_FIELD + `</td>` +
                            `<td>` + data[y].PPMPItem_scdQtrQty_FIELD + `</td>` +
                            `<td>` + data[y].PPMPItem_trdQtrQty_FIELD + `</td>` +
                            `<td>` + data[y].PPMPItem_frtQtrQty_FIELD + `</td>`;
                        if(data[y].PPMPItem_noteOrRemarks_FIELD == null){
                            display += `<td></td>`;    
                        }else{
                            display += `<td>` + data[y].PPMPItem_noteOrRemarks_FIELD + `</td>`;
                        }
                    
                        display += `<td><a onclick="delete_item_ppmp(` + data[y].PPMPItem_id_FIELD + `)" href="#" class="ti-trash"></a>` +
                            `<a data-toggle="modal" data-target="#update-ppmp" onclick="show_to_be_edit(`+data[y].PPMPItem_id_FIELD+`, `+data[y].PPMPItem_fstQtrQty_FIELD+`, `+data[y].PPMPItem_scdQtrQty_FIELD+`, `+data[y].PPMPItem_trdQtrQty_FIELD+`, `+data[y].PPMPItem_frtQtrQty_FIELD+`, '`+data[y].PPMPItem_noteOrRemarks_FIELD+`')" href="#" class="ti-pencil px-2"></a></td>` +
                            `</tr>`;
                        subcategorysubtotal += itemestimatedbudget;
                    }

                    //  else if(data[x].Item_category_FIELD != data[y].Item_category_FIELD){
                    //      same_category_skip = y - 1;
                    //      // break;
                    //  }
                    //  }
                }

                ppmpsummarytotalbudget += subcategorysubtotal;
                display += "<tr style='background-color: rgb(217,217,217)'><td colspan='6' style='text-align:right'>SUB TOTAL</td><td colspan='7' style='text-align:center'>" + subcategorysubtotal.toFixed(2) + "</td></tr>";
            }
            $('#pppmp-item-content').html(display);
            ppmpsummaryprovforinflation = ppmpsummarytotalbudget * 0.1;
            ppmpsummarycontingency = ppmpsummarytotalbudget * 0.1;
            ppmpsummarytotalestimbud = ppmpsummarytotalbudget + ppmpsummaryprovforinflation + ppmpsummarycontingency;
            document.getElementById('ppmpTotalBudgetTabledata_id').innerHTML = ppmpsummarytotalbudget.toFixed(2);
            document.getElementById('ppmpProvisionForInflationTabledata_id').innerHTML = ppmpsummaryprovforinflation.toFixed(2);
            document.getElementById('ppmpContingencyTabledata_id').innerHTML = ppmpsummarycontingency.toFixed(2);
            document.getElementById('ppmpTotalEstimBudTabledata_id').innerHTML = ppmpsummarytotalestimbud.toFixed(2);




        }
    });
}

function getItem_Size(data) {
    total = data.PPMPItem_fstQtrQty_FIELD + data.PPMPItem_scdQtrQty_FIELD + data.PPMPItem_trdQtrQty_FIELD + data.PPMPItem_frtQtrQty_FIELD;
    return total;
}

function getEstimate_budget(item_size, price) {
    total = price * item_size;
    return total;
}

function show_to_be_edit(PPMPItem_id_FIELD, PPMPItem_fstQtrQty_FIELD, PPMPItem_scdQtrQty_FIELD, PPMPItem_trdQtrQty_FIELD, PPMPItem_frtQtrQty_FIELD, PPMPItem_noteOrRemarks_FIELD){
    $('#ppmp-id').val(PPMPItem_id_FIELD);
    $('#1st-quarter').val(PPMPItem_fstQtrQty_FIELD);
    $('#2nd-quarter').val(PPMPItem_scdQtrQty_FIELD);
    $('#3rd-quarter').val(PPMPItem_trdQtrQty_FIELD);
    $('#4th-quarter').val(PPMPItem_frtQtrQty_FIELD);
    $('#note-remarks').val(PPMPItem_noteOrRemarks_FIELD);
}

function update_ppmp_item_qty(){
    data= {
        'PPMPItem_fstQtrQty_FIELD'  : $('#1st-quarter').val(),
        'PPMPItem_scdQtrQty_FIELD'  : $('#2nd-quarter').val(),
        'PPMPItem_trdQtrQty_FIELD'  : $('#3rd-quarter').val(),
        'PPMPItem_frtQtrQty_FIELD'  : $('#4th-quarter').val(),
        'PPMPItem_noteOrRemarks_FIELD':$('#note-remarks').val(),
        'PPMPItem_id_FIELD'         : $('#ppmp-id').val()
            };
    
    $.ajax({
        data:data,
        type:'put',
        url:'/item_ROUTE/update_selected_item',
        success:function(result){
            Swal.fire(
                'Success!',
                'Your item has been updated.',
                'success'
              );
              fetch_your_ppmp_item_table();
        }
    });
}