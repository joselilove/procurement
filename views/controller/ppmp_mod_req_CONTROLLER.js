$(document).ready(function(){
    call_start();
});

function call_start(){
    fetch_submitted_ppmp();
    fetch_mod_req();
    fetch_submitted_mod_req();
    $('body').tooltip({
        selector: '[rel=tooltip]'
      });
}
function fetch_submitted_ppmp(){
    $.ajax({
        type: 'post',
        url: '/ppmp_mod_req_ROUTE/submitted-ppmp',
        success:function(result){
            display_submitted_ppmp(result.data); 
        },error:function(result){
            console.log(result);
        }
    });
}

function fetch_submitted_mod_req(){
    $.ajax({
        type: 'post',
        url: '/ppmp_mod_req_ROUTE/select-submitted-modification-request',
        success:function(result){
            console.log(result);
            display_submitted_req(result.data);
        }
    });
}

function fetch_mod_req(){
    $.ajax({
        type:'post',
        url:'/ppmp_mod_req_ROUTE/select-modification-request',
        success:function(result){
            display_current_req_work(result.data);
        }
    });
}

function display_submitted_ppmp(info){
    display = ``;
    for(var x = 0; x < info.length; x++){
        display += `<tr>
                        <td>${info[x].PPMP_year_FIELD}</td>
                        <td>${info[x].PPMP_date_submitted}</td>
                        <td>`;
        if(info[x].PPMP_status=='approved'){
            display += `<span class="badge badge-pill badge-success">approved</span>`;
        }
        if(info[x].PPMP_status=='pending'){
            display += `<span class="badge badge-pill badge-warning">pending</span>`;
        }
        if(info[x].PPMP_status=='declined'){
            display += `<span class="badge badge-pill badge-danger">declined</span>`;
        }
        display += `</td>
                        <td>${info[x].PPMP_defaultItemsType_FIELD}</td>
                        <td>
                        <div class="btn-group">
                            <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="ti-settings"></i>
                            </button>
                            <div class="dropdown-menu animated">
                                <a onclick="create_mod_work_request(${info[x].PPMP_id_FIELD})" class="dropdown-item" href="javascript:void(0)">Select</a>
                                <a onclick="view_ppmp(${info[x].PPMP_id_FIELD}, '${info[x].PPMP_defaultItemsType_FIELD}')" class="dropdown-item" href="javascript:void(0)">View</a>
                            </div>
                        </div>

                        </td>
                    </tr>`;
    }
    $('.select-ppmp-content').html(display);
        declare_data_table();
}

function display_submitted_req(info){
    display = ``;
    for(var x = 0; x < info.length; x++){
        display += `<div class="col-md-6">
                        <div class="toast" role="alert" data-autohide="false" aria-live="assertive" aria-atomic="true">
                            <div class="toast-header">
                                <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect fill="#03a9f3" width="100%" height="100%"></rect></svg>
                                <strong class="mr-auto">${info[x].PPMP_year_FIELD} <span><i class="fas fa-minus"></i></span>${info[x].PPMP_id}</strong>
                                <small>${info[x].created_at}</small>
                                <button type="button" class="ml-2 mb-1 close" aria-label="Close" value="111" onclick="cancel_submitted_req(${info[x].PPMP_id_mod})">
                                <span aria-hidden="true">&times;</span>
                                </button>
                                </button>
                            </div>
                            <div class="toast-body">
                                <div class="button-group text-center">
                                <a onclick="view_ppmp_mod(${info[x].PPMP_id_mod},${info[x].PPMP_id}, '${info[x].PPMP_defaultItemsType_FIELD}', ${info[x].PPMP_year_FIELD})" class="nav-link waves-effect waves-dark" href="javascript:void(0)" rel="tooltip" data-toggle="tooltip" data-placement="top" title="View"> <i class=" fas fa-eye fa-lg text-dark"></i></a>
                                <a rel="tooltip" data-toggle="tooltip" data-placement="top" title="Previous PPMP" onclick="view_ppmp(${info[x].PPMP_id}, '${info[x].PPMP_defaultItemsType_FIELD}')" class="nav-link waves-effect waves-dark" href="javascript:void(0)"> <i class="fas fa-eye text-dark fa-lg"></i></a>
                                <br>
                                <span style="font-size:10px; font-weight:bold;">${info[x].PPMP_endUserName_FIELD}</span><br>
                                <span style="font-size:10px; font-weight:bold;">${info[x].PPMP_defaultItemsType_FIELD}</span>
                                <hr>
                                <center>
                                <span class='float-left'>${info[x].PPMP_entityFirstTradeMark_FIELD}</span> 
                                <span>${info[x].PPMP_entitySecondTradeMark_FIELD}</span>
                                </center>
                                <br>
                                </div>
                            </div>
                        </div>
                        <br>
                    </div>`;
        }
        $('.submitted-request').html(display);
        $('.toast').toast('show');
}

function display_current_req_work(info){
    console.log(info);
    display = ``;
    for(var x = 0; x < info.length; x++){
    display += `<div class="col-md-6">
                    <div class="toast" role="alert" data-autohide="false" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header">
                            <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect fill="#03a9f3" width="100%" height="100%"></rect></svg>
                            <strong class="mr-auto">${info[x].PPMP_year_FIELD} <span><i class="fas fa-minus"></i></span>${info[x].PPMP_id}</strong>
                            <small>${info[x].created_at}</small>
                            <button type="button" class="ml-2 mb-1 close" aria-label="Close" value="111" onclick="cancel_current_req(${info[x].PPMP_id_mod})">
                            <span aria-hidden="true">&times;</span>
                            </button>
                            </button>
                        </div>
                        <div class="toast-body">
                            <div class="button-group text-center">`;
                if(info[x].choose_insertion == 'true'){
                    display +=`<a onclick="use_previous_ppmp_for_mod(${info[x].PPMP_id}, ${info[x].PPMP_id_mod}); choose_insertion_status(${info[x].PPMP_id_mod});" class="nav-link waves-effect waves-dark" href="javascript:void(0)" rel="tooltip" data-toggle="tooltip" data-placement="top" title="Use previous PPMP"> <i class="fas fa-clone fa-lg text-dark"></i></a>
                            <a onclick="create_blank_ppmp(${info[x].PPMP_id_mod})" class="nav-link waves-effect waves-dark" href="javascript:void(0)" rel="tooltip" data-toggle="tooltip" data-placement="top" title="Create blank PPMP"> <i class="fas fa-play fa-lg text-dark"></i></a>`;
                }else{
                    display +=`<a onclick="edit_ppmp_mod(${info[x].PPMP_id_mod},${info[x].PPMP_id}, '${info[x].PPMP_defaultItemsType_FIELD}', ${info[x].PPMP_year_FIELD})" class="nav-link waves-effect waves-dark" href="javascript:void(0)" rel="tooltip" data-toggle="tooltip" data-placement="top" title="Update Requeste PPMP"> <i class="fas fa-pencil-alt fa-lg text-dark"></i></a>`;
                    display +=`<a data-toggle="modal" data-target=".mod_req" onclick="declare_var_for_submit(${info[x].PPMP_id_mod},${info[x].PPMP_id} ,${info[x].user_id})" class="nav-link waves-effect waves-dark" href="javascript:void(0)" rel="tooltip" data-toggle="tooltip" data-placement="top" title="Submit PPMP"> <i class="fas fa-check fa-lg text-dark"></i></a>`;
                }                
                display +=`<a rel="tooltip" data-toggle="tooltip" data-placement="top" title="Previous PPMP" onclick="view_ppmp(${info[x].PPMP_id}, '${info[x].PPMP_defaultItemsType_FIELD}')" class="nav-link waves-effect waves-dark" href="javascript:void(0)"> <i class="fas fa-eye text-dark fa-lg"></i></a>
                            <br>
                            <span style="font-size:10px; font-weight:bold;">${info[x].PPMP_endUserName_FIELD}</span><br>
                            <span style="font-size:10px; font-weight:bold;">${info[x].PPMP_defaultItemsType_FIELD}</span>
                            <hr>
                            <center>
                            <span class='float-left'>${info[x].PPMP_entityFirstTradeMark_FIELD}</span> 
                            <span>${info[x].PPMP_entitySecondTradeMark_FIELD}</span>
                            </center>
                            <br>
                            </div>
                        </div>
                    </div>  
                    <br>
                </div>`;
    }
    $('.current-work').html(display);
    $('.toast').toast('show');
}
var mod_id, user_id, PPMP_id;
function declare_var_for_submit(mod_id_temp, user_id_temp, PPMP_id_temp){
    mod_id = mod_id_temp;
    user_id = user_id_temp;
    PPMP_id = PPMP_id_temp;
}

function create_mod_work_request(ppmp_id){
    Swal.fire({
        title: 'Are you sure?',
        text: "You wish to modify this PPMP!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, use it!'
      }).then((result) => {
        if (result.value) {  
            data = {'ppmp_id': ppmp_id};
            $.ajax({
               data: data,
               type:'post',
               url:'/ppmp_mod_req_ROUTE/create-mod-req',
               success:function(result){
                Swal.fire(
                    'Successfully!',
                    'Check your data below.',
                    'success'
                  ); 
                    console.log(result);
                    $("#myTable").DataTable().destroy();
                    call_start();
               },
               error: function(result){
                console.log(result);
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: 'Please try again'
                  });
            }
           }); 
        }
      });
}

function create_blank_ppmp(ppmp_id_mod){
    Swal.fire({
        title: 'Are you sure?',
        text: "You wish to use blank PPMP!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, use it!'
      }).then((result) => {
        if (result.value) {  
            data = {'ppmp_id_mod':ppmp_id_mod};
            $.ajax({
                data:data,
                type:'post',
                url:'/ppmp_mod_req_ROUTE/choose_insertion_status',
                success:function(result){
                Swal.fire(
                    'Successfully!',
                    'Check your data below.',
                    'success'
                  ); 
                    console.log(result);
                    $("#myTable").DataTable().destroy();
                    call_start();
               },
               error: function(result){
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: 'Please try again'
                  });
            }
           }); 
        }
      });
}

function use_previous_ppmp_for_mod(ppmp_id, mod_id){
    Swal.fire({
        title: 'Are you sure?',
        text: "You wish to use previous PPMP!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, use it!'
      }).then((result) => {
        if (result.value) {  
            data = {'ppmp_id':ppmp_id,
                    'mod_id':mod_id};
            $.ajax({
                data:data,
                type:'post',
                url:'/ppmp_mod_req_ROUTE/use_previous_ppmp_for_mod',
               success:function(result){
                Swal.fire(
                    'Successfully!',
                    'Check your data below.',
                    'success'
                  ); 
                    console.log(result);
                    $("#myTable").DataTable().destroy();
                    call_start();
               },
               error: function(result){
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: 'Please try again'
                  });
            }
           }); 
        }
      });

}

function choose_insertion_status(ppmp_id_mod){
    data = {'ppmp_id_mod':ppmp_id_mod}
    $.ajax({
        data:data,
        type:'post',
        url:'/ppmp_mod_req_ROUTE/choose_insertion_status',
        success:function(result){
            console.log(result);
        }
    });
}

function cancel_submitted_req(mod_id){
    Swal.fire({
        title: 'Are you sure?',
        text: "You wish to reverse this request?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, reverse it!'
      }).then((result) => {
        if (result.value) {  
            data= {'mod_id':mod_id};
            $.ajax({
                data:data,
                type:'post',
                url:'/ppmp_mod_req_ROUTE/reverse-submit-mod-req',
               success:function(result){
                Swal.fire(
                    'Reverse successfully!',
                    'Check your data below.',
                    'success'
                  ); 
                    console.log(result);
                    $("#myTable").DataTable().destroy();
                    call_start();
               },
               error: function(result){
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: 'Please try again'
                  });
            }
           }); 
        }
      });     
}
function cancel_current_req(mod_id){
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
            data= {'mod_id':mod_id};
            $.ajax({
                data:data,
                type:'delete',
                url:'/ppmp_mod_req_ROUTE/delete-current-req-work',
               success:function(result){
                Swal.fire(
                    'Successfully deleted!',
                    'Check your data below.',
                    'success'
                  ); 
                    console.log(result);
                    $("#myTable").DataTable().destroy();
                    call_start();
               },
               error: function(result){
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: 'Please try again'
                  });
            }
           }); 
        }
      });    
}

function submit_request(){
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
            data= {'mod_id':mod_id};
            $.ajax({
                data:data,
                type:'post',
                url:'/ppmp_mod_req_ROUTE/submit-mod-req',
               success:function(result){
                Swal.fire(
                    'Successfully submitted!',
                    'Check your data below.',
                    'success'
                  ); 
                    console.log(result);
                    $("#myTable").DataTable().destroy();
                    call_start();
                    insert_notification(PPMP_id, $('#remarks_submit').val());
               },
               error: function(result){
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: 'Please try again'
                  });
            }
           });

        }
      });
}

function declare_data_table(){
    $('#myTable').DataTable();
}

function view_ppmp(ppmp_id, ppmp_type){
    mod_v = window.open(`/ppmpPage_view_route?ppmp_id=${ppmp_id}&ppmp_type=${ppmp_type}`,'','postwindow');
    mod_v.resizeTo( 500, 500);
    mod_v.moveTo(800,300);
    mod_v.focus();
}

function edit_ppmp_mod(ppmp_id_mod,ppmp_id, ppmp_type, ppmp_year){
    mod_e = window.open(`/ppmp_mod_page_ROUTE?ppmp_id_mod=${ppmp_id_mod}&ppmp_id=${ppmp_id}&ppmp_type=${ppmp_type}&ppmp_year=${ppmp_year}`,'','postwindow');
    mod_e.resizeTo( 500, 500);
    mod_e.moveTo(800,300);
    mod_e.focus();
}

function view_ppmp_mod(ppmp_id_mod,ppmp_id, ppmp_type, ppmp_year){
    mod_e = window.open(`/modification-request-view?ppmp_id_mod=${ppmp_id_mod}&ppmp_id=${ppmp_id}&ppmp_type=${ppmp_type}&ppmp_year=${ppmp_year}`,'','postwindow');
    mod_e.resizeTo( 500, 500);
    mod_e.moveTo(800,300);
    mod_e.focus();
}

function insert_notification(PPMP_id, remarks){
    $('#remarks_submit').val('');
    
    data = {
        'notif_type'    : 'modification request',
        'notif_content' :' submitted a modification request for PPMP id no '+PPMP_id,
        'remarks'       : remarks
    };

    $.ajax({
        data: data,
        type:'post',
        url : '/notification_ROUTE/insert_notification_to_admin',
        success:function(result){
            console.log(result);
        },
        error: function(result){
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: 'Please try again'
              });
        }
    });
}