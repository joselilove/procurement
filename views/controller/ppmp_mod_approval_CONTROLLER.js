$(document).ready(function(e){
    fetch_submitted_mod_req();
});

function fetch_submitted_mod_req(){
    $.ajax({
        type:'post',
        url: '/ppmp_mod_approval_ROUTE/select-submitted-req',
        success:function(result){
            console.log(result);
            display_submitted_mod_req(result.data);
        }
    });
}

function display_submitted_mod_req(info){
    display = ``;
    for(var x = 0; x < info.length; x++){
        display += `<tr>
                        <th>${info[x].User_name_FIELD}</th>
                        <th>${info[x].PPMP_entityFirstTradeMark_FIELD}</th>
                        <th>${info[x].PPMP_entitySecondTradeMark_FIELD}</th>
                        <th>${info[x].PPMP_year_FIELD}</th>
                        <th>${info[x].PPMP_defaultItemsType_FIELD}</th>
                        <th>${info[x].updated_at}</th>
                        <th>`; 
                    if(info[x].PPMP_req_status == 'pending'){
                        display += `<div class="label label-table label-warning">Pending</div>`;
                    }
                    if(info[x].PPMP_req_status == 'approved'){
                        display += `<div class="label label-table label-success">Approved</div>`;
                    }
                    if(info[x].PPMP_req_status == 'declined'){
                        display += `<div class="label label-table label-danger">Declined</div>`;
                    }    
                       
        display +=`</th>
                        <th>
                            <div class="btn-group">
                                <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="ti-settings"></i>
                                </button>
                                <div class="dropdown-menu animated">`;
                                if(info[x].PPMP_req_status == 'pending'){
                                    display +=`<a data-toggle="modal" data-target=".bs-example-modal-sm1" onclick="declare_var_for_approved(${info[x].PPMP_id_mod}, ${info[x].PPMP_id}, 'approved', ${info[x].user_id});" class="dropdown-item" href="javascript:void(0)">Approved</a>
                                            <a data-toggle="modal" data-target=".bs-example-modal-sm2" onclick="declare_var_for_approved(${info[x].PPMP_id_mod}, ${info[x].PPMP_id}, 'declined', ${info[x].user_id});" class="dropdown-item" href="javascript:void(0)">Declined</a>`;
                                    display +=`<a onclick="edit_ppmp_mod(${info[x].PPMP_id_mod},${info[x].PPMP_id},'${info[x].PPMP_defaultItemsType_FIELD}', ${info[x].PPMP_year_FIELD})" class="dropdown-item" href="javascript:void(0)">View Requested change</a>
                                    <a onclick="view_previous_ppmp(${info[x].PPMP_id}, '${info[x].PPMP_defaultItemsType_FIELD}')" class="dropdown-item" href="javascript:void(0)">View previous PPMP</a>`;
                                }  else{
                                    display +=`<a onclick="view_previous_ppmp(${info[x].PPMP_id}, '${info[x].PPMP_defaultItemsType_FIELD}')" class="dropdown-item" href="javascript:void(0)">View PPMP</a>`;
                                }
                                
                                display +=`</div>
                            </div>
                        </th>
                    </tr>`;
    }

    $('.submitted-content').html(display);
    declare_datatable();
}

function declare_datatable(){
    $('#myTable').DataTable({
        "order": [[ 5, "desc" ]]
    });
}
var mod_id, ppmp_id, mod_status, user_id;
function declare_var_for_approved(mod_id_temp, ppmp_id_temp, mod_status_temp, user_id_temp){
    mod_id      = mod_id_temp;
    ppmp_id     = ppmp_id_temp;
    mod_status  =mod_status_temp;
    user_id     = user_id_temp;
}

function approved_mod_req(){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, submit it!'
      }).then((result) => {
        if (result.value) {
            Swal.fire(
                'Submitted!',
                'Your file has been submitted.',
                'success'
              );
            delete_current_submitted_ppmp(ppmp_id);
            replaced_by_approved_req(mod_id, ppmp_id);
            response_mod_req_stat(mod_id,mod_status);
            set_remark($('#remarks_approved').val());
            update_date_submitted(ppmp_id);
            delete_modification_item(ppmp_id);
            insert_notification(user_id, ppmp_id, mod_status, $('#remarks_approved').val());
            $("#myTable").DataTable().destroy();
            fetch_submitted_mod_req();
        };
      });
}

function declined_mod_req(){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, submit it!'
      }).then((result) => {
        if (result.value) {
            Swal.fire(
                'Submitted!',
                'Your file has been submitted.',
                'success'
              );
            response_mod_req_stat(mod_id,mod_status);
            set_remark($('#remarks_declined').val());
            delete_modification_item(ppmp_id);
            insert_notification(user_id, ppmp_id, mod_status, $('#remarks_declined').val());
            $("#myTable").DataTable().destroy();
            fetch_submitted_mod_req();
        };
      });
}

function set_remark(remark){
    data = {'remark':remark, 'mod_id':mod_id};
    $.ajax({
        data:data,
        type:'post',
        url:'/ppmp_mod_approval_ROUTE/set-remark-mod',
        error:function(result){
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: 'Please try again'
              });
        }
    });
}

function delete_current_submitted_ppmp(ppmp_id){
    data = {'ppmp_id':ppmp_id};
    $.ajax({
        data:data,
        url:'/ppmp_mod_approval_ROUTE/delete-current-submitted-ppmp',
        type: 'delete',
        success:function(result){
            console.log('deleted----');
            console.log(result);
        },
        error:function(result){
                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        footer: 'Please try again'
                      });
                }
    });
}
function replaced_by_approved_req(mod_id, ppmp_id){
    data = {'mod_id':mod_id,
            'ppmp_id':ppmp_id};
    $.ajax({
        data:data,
        url:'/ppmp_mod_approval_ROUTE/insert-approved-mod-req',
        type: 'post',
        success:function(result){
            console.log('replace----');
            console.log(result);
        },
        error:function(result){
                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        footer: 'Please try again'
                      });
                }
    });
}

function response_mod_req_stat(mod_id,mod_status){
    data = {'mod_status':mod_status,'mod_id':mod_id};
    $.ajax({
        data:data,
        type:'post',
        url:'/ppmp_mod_approval_ROUTE/response-mod-req',
        success:function(result){
            console.log('approved----');
            console.log(result);
        },
        error:function(result){
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: 'Please try again'
              });
        }
    });
}

function update_date_submitted(ppmp_id){
    data = {'ppmp_id':ppmp_id};
    $.ajax({
        type:'post',
        data:data,
        url:'/ppmp_mod_approval_ROUTE/update-date-submitted',
        error:function(result){
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: 'Please try again'
              });
        }
    });
}

function delete_modification_item(ppmp_id){
    data = {'ppmp_id':ppmp_id};
    $.ajax({
        data:data,
        type:'delete',
        url:'/ppmp_mod_approval_ROUTE/delete_mod_item',
        error:function(result){
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: 'Please try again'
              });
        }
    });
}

function view_previous_ppmp(ppmp_id, ppmp_type){
    v_ppmp_window = window.open(`/ppmpPage_view_route?ppmp_id=${ppmp_id}&ppmp_type=${ppmp_type}`,'','postwindow');
    v_ppmp_window.resizeTo( 500, 500);
    v_ppmp_window.moveTo(800,300);
    v_ppmp_window.focus();
}
function edit_ppmp_mod(ppmp_id_mod,ppmp_id, ppmp_type, ppmp_year){
    mod_e = window.open(`/modification-request-view?ppmp_id_mod=${ppmp_id_mod}&ppmp_id=${ppmp_id}&ppmp_type=${ppmp_type}&ppmp_year=${ppmp_year}`,'','postwindow');
    mod_e.resizeTo( 500, 500);
    mod_e.moveTo(800,300);
    mod_e.focus();
}

function insert_notification(user_id, PPMP_id, PPMP_status, remarks){
    $('#remarks_declined').val('');
    $('#remarks_approved').val('');
    data = {
        'user_id_to'    : user_id,
        'notif_type'    : PPMP_status,
        'notif_content' :'Your submitted modification request for PPMP id no '+PPMP_id+' has been '+PPMP_status+' by ',
        'remarks'       : remarks
    };

    $.ajax({
        data: data,
        type:'post',
        url : '/notification_ROUTE/insert_notification',
        success:function(result){
            console.log(result);
        }
    });

}
// <a class="dropdown-item" href="javascript:void(0)">Reverse</a>