$(document).ready(function(e){
    searchParams = new URLSearchParams(window.location.search);
    var title = searchParams.get('program')+' '+searchParams.get('year');
    var type = searchParams.get('type');
    if(type == '%%'){
        type = 'CSE AND NON-CSE';
    }
    $('.program').html(`${title} ${type} `);
    fetch_data();
});
var item;
var all_data;
var table_field = ['Item', 'Unit', 'Price per unit', 'Total quantity', 'Total Amount'];

function fetch_data(){
    fetch_table_field();
    fetch_all_item();
    fetch_ppmp_consolidation();
}

function fetch_ppmp_consolidation(){
    data = {
            'program':searchParams.get('program'),
            'year':searchParams.get('year'),
            'ppmp_type':searchParams.get('type')
            };
    $.ajax({
        data: data,
        type:'post',
        url:'/app_ROUTE/select_ppmp_consolidated',
        async: false,
        success:function(result){
            console.log(result);
            all_data = result;
        }
    });
}


function fetch_table_field(){
    data = {
        'program':searchParams.get('program'),
        'year':searchParams.get('year'),
        'ppmp_type':searchParams.get('type')
            };
    $.ajax({
        data: data,
        type:'post',
        url:'/app_ROUTE/get_table_field',
        success:function(result){
            console.log(result);
            display_table_field(result);
        }
    });       
}

function fetch_all_item(){
    data = {'item_type':searchParams.get('type')};
    $.ajax({
        data: data,
        type:'post',
        url:'/app_ROUTE/fetch_all_item',
        success:function(result){
            item = result;
            arrange_data_1st();
            arrange_data_2nd();
            arrange_data_3rd();
            arrange_data_4th();
        }
    });
}
function display_table_field(info){
    display = `<tr>
                    <th>Item</th>
                    <th>Unit</th>
                    <th>Price per Unit</th>
                    <th>Total Quantity</th>
                    <th>Total Amount</th>`;
    for(x = 0; x < info.data.length; x++){
        display += `<th> ${info.data[x].PPMP_entitySecondTradeMark_FIELD} </th>`;
        table_field.push(info.data[x].PPMP_entitySecondTradeMark_FIELD);
    }
        display += `</tr>`;
        $('.1st_quarter_sub_office').html(display);
        $('.2nd_quarter_sub_office').html(display);
        $('.3rd_quarter_sub_office').html(display);
        $('.4th_quarter_sub_office').html(display);

    
}

function arrange_data_1st(){
    table_data = [];
    department = [];
    for(x = 0; x < item.data.length; x++){
        department = [];
        for(y = 5; y < table_field.length; y++){
            department.push(getSub_total_quantity(item.data[x].Item_id_FIELD, table_field[y], 'PPMPItem_fstQtrQty_FIELD'));
        }
        table_data[x] = {   'Department'    : department,
                            'Item_id'       : item.data[x].Item_id_FIELD,     
                            'Item'          : item.data[x].Item_generalDescription_FIELD,
                            'Unit'          : item.data[x].Item_units_FIELD, 
                            'Price_per_unit': item.data[x].Item_unitPrice_FIELD, 
                            'Total_quantity': total_quantity, 
                            'Total_Amount'  : (total_quantity * item.data[x].Item_unitPrice_FIELD).toFixed(2)
                        };
                        total_quantity = 0;
    }
    console.log(table_data);
    display_table_data_1st(table_data);
}
function arrange_data_2nd(){
    table_data = [];
    department = [];
    for(x = 0; x < item.data.length; x++){
        department = [];
        for(y = 5; y < table_field.length; y++){
            department.push(getSub_total_quantity(item.data[x].Item_id_FIELD, table_field[y], 'PPMPItem_scdQtrQty_FIELD'));
        }
        table_data[x] = {   'Department'    : department,
                            'Item_id'       : item.data[x].Item_id_FIELD,     
                            'Item'          : item.data[x].Item_generalDescription_FIELD,
                            'Unit'          : item.data[x].Item_units_FIELD, 
                            'Price_per_unit': item.data[x].Item_unitPrice_FIELD, 
                            'Total_quantity': total_quantity, 
                            'Total_Amount'  : (total_quantity * item.data[x].Item_unitPrice_FIELD).toFixed(2)
                        };
                        total_quantity = 0;
    }
    display_table_data_2nd(table_data);
}

function arrange_data_3rd(){
    table_data = [];
    department = [];
    for(x = 0; x < item.data.length; x++){
        department = [];
        for(y = 5; y < table_field.length; y++){
            department.push(getSub_total_quantity(item.data[x].Item_id_FIELD, table_field[y], 'PPMPItem_trdQtrQty_FIELD'));
        }
        table_data[x] = {   'Department'    : department,
                            'Item_id'       : item.data[x].Item_id_FIELD,     
                            'Item'          : item.data[x].Item_generalDescription_FIELD,
                            'Unit'          : item.data[x].Item_units_FIELD, 
                            'Price_per_unit': item.data[x].Item_unitPrice_FIELD, 
                            'Total_quantity': total_quantity, 
                            'Total_Amount'  : (total_quantity * item.data[x].Item_unitPrice_FIELD).toFixed(2)
                        };
                        total_quantity = 0;
    }
    display_table_data_3rd(table_data);
}

function arrange_data_4th(){
    table_data = [];
    department = [];
    for(x = 0; x < item.data.length; x++){
        department = [];
        for(y = 5; y < table_field.length; y++){
            department.push(getSub_total_quantity(item.data[x].Item_id_FIELD, table_field[y], 'PPMPItem_frtQtrQty_FIELD'));
        }
        table_data[x] = {   'Department'    : department,
                            'Item_id'       : item.data[x].Item_id_FIELD,     
                            'Item'          : item.data[x].Item_generalDescription_FIELD,
                            'Unit'          : item.data[x].Item_units_FIELD, 
                            'Price_per_unit': item.data[x].Item_unitPrice_FIELD, 
                            'Total_quantity': total_quantity, 
                            'Total_Amount'  : (total_quantity * item.data[x].Item_unitPrice_FIELD).toFixed(2)
                        };
                        total_quantity = 0;
    }
    display_table_data_4th(table_data);
}

function getTotal_quantity(department){
    total = 0;
    for(x = 0; x < department.length; x++){
        total = total + department[x];
    }
    return total;

}

function getTotal_amount(quantity, price){
    total = quantity * price;
    return price;
}

total_quantity = 0;
function getSub_total_quantity(item_id, department, quarter){
    total = 0;
try {
    for(w = 0; w < all_data.data.length; w++){
        if(all_data.data[w].PPMP_entitySecondTradeMark_FIELD == department){
            if(item_id == all_data.data[w].Item_id_FIELD){
                if(quarter == 'PPMPItem_fstQtrQty_FIELD'){
                    total +=  all_data.data[w].PPMPItem_fstQtrQty_FIELD;
                }
                if(quarter == 'PPMPItem_scdQtrQty_FIELD'){
                    total +=  all_data.data[w].PPMPItem_scdQtrQty_FIELD;
                }
                if(quarter == 'PPMPItem_trdQtrQty_FIELD'){
                    total +=  all_data.data[w].PPMPItem_trdQtrQty_FIELD;
                }
                if(quarter == 'PPMPItem_frtQtrQty_FIELD'){
                    total +=  all_data.data[w].PPMPItem_frtQtrQty_FIELD;
                }
            }
        }
    }
} catch (error) {
    console.log(error);
}
   
    total_quantity += total;
    return total;
}
function getTotal_quarter(info){
    var total = 0;
    for(a = 0; a < info.length; a++){
        total = total + parseFloat(info[a].Total_Amount);
    }
    return total;
}
function display_table_data_1st(info){
    display = ``;
    for(x = 0; x < info.length; x++){
        display += `<tr>
                        <td> ${info[x].Item} </td>
                        <td> ${info[x].Unit} </td>
                        <td> ${info[x].Price_per_unit} </td>
                        <td> ${info[x].Total_quantity} </td>
                        <td> ${info[x].Total_Amount} </td>`;
        for(y = 0; y < info[0].Department.length; y++){
            display +=`<td> ${info[x].Department[y]} </td>`;
        }
            display += `</tr>`;
    }
    
    display += show_per_quarter_total(info, '1st Quarter');
    
    $('#1st_quarter_content').html(display);

    $('#1st_quarter_table').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });
    $('.buttons-copy, .buttons-csv, .buttons-print, .buttons-pdf, .buttons-excel').addClass('btn btn-primary mr-1');
}

function show_per_quarter_total(info, quarter){
    app_type = searchParams.get('type');
    if(app_type == '%%'){
        app_type = 'CSE AND NON-CSE';
    }
            display_total = `<tr>
                    <td class="font-weight-bold">Total ${app_type} ${quarter}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="font-weight-bold">${getTotal_quarter(info).toFixed(2)}</td>`;
                    for(z = 0; z < info[0].Department.length; z++){
                        display_total +=`<td></td>`;
                    }       
                    display_total += `</tr>`;
            return display_total;
}

function display_table_data_2nd(info){
    display = ``;

    for(x = 0; x < info.length; x++){
        display += `<tr>
                        <td> ${info[x].Item} </td>
                        <td> ${info[x].Unit} </td>
                        <td> ${info[x].Price_per_unit} </td>
                        <td> ${info[x].Total_quantity} </td>
                        <td> ${info[x].Total_Amount} </td>`;
        for(y = 0; y < info[0].Department.length; y++){
            display +=`<td> ${info[x].Department[y]} </td>`;
        }
            display += `</tr>`;
    }
    display += show_per_quarter_total(info, '2nd Quarter');
    $('#2nd_quarter_content').html(display);
    $('#2nd_quarter_table').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });
    $('.buttons-copy, .buttons-csv, .buttons-print, .buttons-pdf, .buttons-excel').addClass('btn btn-primary mr-1');
}

function display_table_data_3rd(info){
    display = ``;

    for(x = 0; x < info.length; x++){
        display += `<tr>
                        <td> ${info[x].Item} </td>
                        <td> ${info[x].Unit} </td>
                        <td> ${info[x].Price_per_unit} </td>
                        <td> ${info[x].Total_quantity} </td>
                        <td> ${info[x].Total_Amount} </td>`;
        for(y = 0; y < info[0].Department.length; y++){
            display +=`<td> ${info[x].Department[y]} </td>`;
        }
            display += `</tr>`;
    }
    display += show_per_quarter_total(info, '3rd Quarter');
    $('#3rd_quarter_content').html(display);
    $('#3rd_quarter_table').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });
    $('.buttons-copy, .buttons-csv, .buttons-print, .buttons-pdf, .buttons-excel').addClass('btn btn-primary mr-1');
}

function display_table_data_4th(info){
    display = ``;

    for(x = 0; x < info.length; x++){
        display += `<tr>
                        <td> ${info[x].Item} </td>
                        <td> ${info[x].Unit} </td>
                        <td> ${info[x].Price_per_unit} </td>
                        <td> ${info[x].Total_quantity} </td>
                        <td> ${info[x].Total_Amount} </td>`;
        for(y = 0; y < info[0].Department.length; y++){
            display +=`<td> ${info[x].Department[y]} </td>`;
        }
            display += `</tr>`;
    }
    display += show_per_quarter_total(info, '4th Quarter');
    $('#4th_quarter_content').html(display);
    $('#4th_quarter_table').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });
    $('.buttons-copy, .buttons-csv, .buttons-print, .buttons-pdf, .buttons-excel').addClass('btn btn-primary mr-1');
}
