$(document).ready(function(){
    fetch_submitted_ppmp();
    // list_of_response();
});

function fetch_submitted_ppmp(){
    $.ajax({
        type:'post',
        url:'/ppmp_approval_ROUTE/select_all_submitted_ppmp',
        success:function(result){
            display_submitted_content(result.data);
        }
    });
}

function display_submitted_content(info){
    display = ``;
    color_status = '';
    pending = 0;
    for(var x = 0; x < info.length; x++){
        if(info[x].PPMP_status == 'pending'){
            color_status = 'label label-warning';
            pending++;
        }
        if(info[x].PPMP_status == 'approved'){
            color_status = 'label label-success';
        }
        if(info[x].PPMP_status == 'declined'){
            color_status = 'label label-danger';
        }
        display += `<tr>
                        <th> ${info[x].PPMP_endUserName_FIELD} </th>
                        <th> ${info[x].PPMP_entityFirstTradeMark_FIELD} </th>
                        <th> ${info[x].PPMP_entitySecondTradeMark_FIELD} </th>
                        <th> ${info[x].PPMP_year_FIELD} </th>
                        <th> ${info[x].PPMP_defaultItemsType_FIELD} </th>
                        <th> ${info[x].PPMP_date_submitted} </th>
                        <th>
                            <div class="${color_status}"> ${info[x].PPMP_status} </div>
                        </th>
                        <th>
                            <div class="btn-group">
                                <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="ti-settings"></i>
                                </button>
                                <div class="dropdown-menu animated">`;
                        if(info[x].PPMP_status == 'approved' || info[x].PPMP_status == 'declined'){
                            display += `<a data-toggle="modal" data-target=".bs-example-modal-sm" class="pending dropdown-item" href="javascript:void(0)" onclick="declare_var_approval(${info[x].User_id_FIELD}, ${info[x].PPMP_id_FIELD}, 'pending')">Reverse</a>`;
                        }
                        if(info[x].PPMP_status == 'pending'){
                            display += `<a data-toggle="modal" data-target=".bs-example-modal-sm" class="approved dropdown-item" href="javascript:void(0)" onclick="declare_var_approval(${info[x].User_id_FIELD}, ${info[x].PPMP_id_FIELD}, 'approved')">Approved</a>`;
                            display += `<a data-toggle="modal" data-target=".bs-example-modal-sm" class="declined dropdown-item" href="javascript:void(0)" onclick="declare_var_approval(${info[x].User_id_FIELD}, ${info[x].PPMP_id_FIELD}, 'declined')">Declined</a>`;
                        }

                        display += `<a class="dropdown-item" onclick="view_ppmp(${info[x].User_id_FIELD}, ${info[x].PPMP_id_FIELD}, '${info[x].PPMP_defaultItemsType_FIELD}')" href="javascript:void(0)">View</a>
                                </div>
                            </div>
                        </th>
                    </tr>`;
    }

    $('#ppmp_req_content').html(display);
    $('#pending_req').html(pending);
    declare_datatable();
}

function view_ppmp(user_id, ppmp_id, ppmp_type){
    window.open(`/ppmpPage_view_route?ppmp_id=`+ppmp_id+`&ppmp_type=`+ppmp_type);
}
var user_id, PPMP_id, PPMP_status;

function declare_var_approval(user_id_temp, PPMP_id_temp, PPMP_status_temp){
    user_id     = user_id_temp;
    PPMP_id     = PPMP_id_temp;
    PPMP_status = PPMP_status_temp;
}

function approval_action(){
    // alert();
    alert = PPMP_status;
    if('pending' == PPMP_status){
        alert = 'reverse';
    }
    Swal.fire({
        title: 'Are you sure?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, '+alert+' it!'
      }).then((result) => {
        if (result.value) {
            data = {
                'PPMP_status':PPMP_status,
                'PPMP_id'    :PPMP_id,
            };
            $.ajax({
                data: data,
                type: 'post',
                url: '/ppmp_approval_ROUTE/PPMP_request_response',
                success:function(result){
                  Swal.fire(
                      'Successfully!',
                      'Check the request below!',
                      'success'
                    );
                    insert_notification(user_id, PPMP_id, PPMP_status, $('#remarks').val());
                    $("#ppmp_req").DataTable().destroy();
                    fetch_submitted_ppmp();
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
        };
      });
}

function insert_notification(user_id, PPMP_id, PPMP_status, remarks){
    $('#remarks').val('');
    data = {
        'user_id_to'    : user_id,
        'notif_type'    : PPMP_status,
        'notif_content' :'Your submitted PPMP id no '+PPMP_id+' has been '+PPMP_status+' by ',
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

var d_table;
function declare_datatable(){
    d_table =  $('#ppmp_req').DataTable({
        "order": [[ 5, "desc" ]]
    });
}
