$(document).ready(function(e){
    fetch_current_work();
    fetch_submitted_ppmp();
    display_ppmp_year_filter();
    display_ppmp_third_t();
    display_ppmp_end_user_filter();
    display_ppmp_sub_office();
    display_ppmp_program();
    $('body').tooltip({
        selector: '[rel=tooltip]'
      });
});

function update_ppmp(ppmp_id, ppmp_type){
    var u_ppmp_window = window.open(`/ppmpPage_route?ppmp_id=${ppmp_id}&ppmp_type=${ppmp_type}`,'','postwindow');
    u_ppmp_window.resizeTo( 500, 500);
    u_ppmp_window.moveTo(800,300);
    u_ppmp_window.focus();
}

function view_ppmp(ppmp_id, ppmp_type){
    var v_ppmp_window = window.open(`/ppmpPage_view_route?ppmp_id=${ppmp_id}&ppmp_type=${ppmp_type}`,'','postwindow');
    v_ppmp_window.resizeTo( 500, 500);
    v_ppmp_window.moveTo(800,300);
    v_ppmp_window.focus();
}
function print_ppmp(ppmp_id, ppmp_type){
    v_ppmp_window = window.open(`/print_ppmp?ppmp_id=${ppmp_id}&ppmp_type=${ppmp_type}`,'','postwindow');
    v_ppmp_window.resizeTo( 500, 500);
    v_ppmp_window.moveTo(800,300);
    v_ppmp_window.focus();
}

function create_ppmp(item_type){
    var data = {'item_type':item_type};
    $.ajax({
        data: data,
        type: 'post',
        url: '/ppmp_ROUTE/create_ppmp_route',
        success: function(result){
            Swal.fire(
                'Successfully created!',
                'Update your PPMP below!',
                'success'
              );  
              fetch_current_work();          
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

function fetch_current_work(){
    $.ajax({
        type:'get',
        url:'/ppmp_ROUTE/fetch_current_work_route',
        success: function(result){
            display_current_work(result);
        }
    })
}

function display_current_work(info){    
    var display = ['',''];
    for(var x = 0; x < info.data.length; x++){
            iden = 1;
        if(info.data[x].PPMP_defaultItemsType_FIELD == 'CSE'){iden = 0;}
        
      display[iden] +='<div class="toast" data-autohide="false">'
                    +'<div role="alert" aria-live="assertive" aria-atomic="true">'
                    +'<div class="toast-header">'
                    +'<svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect fill="#03a9f3" width="100%" height="100%"></rect></svg>'
                    +'<strong class="mr-auto">'+info.data[x].PPMP_year_FIELD+'<span><i class="fas fa-minus"></i></span>'+info.data[x].PPMP_id_FIELD+'</strong>'
                    +'<small>'+info.data[x].created_at+'</small>'
                    +'<button type="button" class="ml-2 mb-1 close" aria-label="Close" onclick="delete_ppmp('+info.data[x].PPMP_id_FIELD+')">'
                    +'<span aria-hidden="true">&times;</span>'
                    +'</button>'
                    +'</div>'
                    +'<div class="toast-body">'
                    +'<div class="button-group text-center">'
                    // +`<a onclick="update_ppmp(${info.data[x].PPMP_id_FIELD},'${info.data[x].PPMP_defaultItemsType_FIELD}')" href="javascript:void(0)"><button type="button" class="btn waves-effect waves-light btn-rounded btn-xs btn-success" data-toggle="tooltip" data-placement="top" title="Use previous PPMP">Update</button></a>`
                    +`<a rel="tooltip" data-toggle="tooltip" data-placement="top" title="Update PPMP" onclick="update_ppmp(${info.data[x].PPMP_id_FIELD},'${info.data[x].PPMP_defaultItemsType_FIELD}')" class="nav-link waves-effect waves-dark" href="javascript:void(0)"> <i class="fas fa-pencil-alt text-dark fa-lg"></i></a>`
                    +`<a rel="tooltip" data-toggle="tooltip" data-placement="top" title="Submit PPMP" onclick="submit_ppmp(${info.data[x].PPMP_id_FIELD})" class="nav-link waves-effect waves-dark" href="javascript:void(0)"> <i class="fas fa-check text-dark fa-lg"></i></a>`
                    // +'<button type="button" class="btn waves-effect waves-light btn-rounded btn-xs btn-success" value="'+info.data[x].PPMP_id_FIELD+'" onclick="submit_ppmp(this.value)">Submit</button>'
                    +'<br>'
                    +'<span style="font-size:10px; font-weight:bold;">'+info.data[x].PPMP_endUserName_FIELD+'</span>'
                    +'<hr>'
                    +'<center>'
                    +'<span class="float-left">'+info.data[x].PPMP_entityFirstTradeMark_FIELD+'</span>'
                    +'<span class="float-right">'+info.data[x].PPMP_entitySecondTradeMark_FIELD+'</span></center>'
                    +'<br>'
                    +'</div>' 
                    +'</div>'
                    +'</div>'
                    +'</div>'
                    +'<br>';
    }
    $('#total_current_work').html(info.data.length);
    $('#cse-current').html(display[0]);
    $('#non-cse-current').html(display[1]);
    $('.toast').toast('show');
}

function delete_ppmp(PPMP_id_FIELD){
    data = {'PPMP_id_FIELD':PPMP_id_FIELD};
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
                data:data,
                type:'delete',
                url:'/ppmp_ROUTE/delete_ppmp_route',
                success: function(result){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      ); 
                      fetch_current_work();          
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

function submit_ppmp(PPMP_id_FIELD){
    data = {'PPMP_id_FIELD':PPMP_id_FIELD};
    Swal.fire({
        title: 'Are you sure?',
        // text: "You won't be ab/le to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, submit it!'
      }).then((result) => {
        if (result.value) {
            $.ajax({
                data:data,
                type:'put',
                url:'/ppmp_ROUTE/submit_ppmp_route',
                success:function(result){
                    Swal.fire(
                        'Submitted!',
                        'Your file has been submitted.',
                        'success'
                      );
                      insert_notification(PPMP_id_FIELD, '');
                      fetch_current_work();
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

function insert_notification(PPMP_id, remarks){
    $('#remarks_submit').val('');
    
    data = {
        'notif_type'    : 'ppmp request',
        'notif_content' :' submitted a PPMP id no '+PPMP_id,
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

function reverse_submitted_ppmp(PPMP_id_FIELD){
    data = {'PPMP_id_FIELD':PPMP_id_FIELD};
    Swal.fire({
        title: 'Are you sure?',
        text: "You wish to revert this submittion!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.value) {
            $.ajax({
                data:data,
                type:'put',
                url:'/ppmp_ROUTE/reverse_submit_ppmp_route',
                success:function(result){
                    Swal.fire(
                        'Submitted!',
                        'Your file has been submitted.',
                        'success'
                      );
                      fetch_current_work();
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


function fetch_submitted_ppmp(){
    $.ajax({
        type:'post',
        url:'/ppmp_ROUTE/submitted_ppmp',
        success:function(result){
            display_submitted_ppmp(result);
        }
    });
}
var submitted_ppmp_data;
function display_submitted_ppmp(info){
    submitted_ppmp_data = info;
    color_status = '#fec107';
    var display = ['',''];
    for(var x = 0; x < info.data.length; x++){
            iden = 1;
    if(info.data[x].PPMP_defaultItemsType_FIELD == 'CSE'){iden = 0;}
        if(info.data[x].PPMP_status == 'pending'){
            color_status = '#fec107';
        }
        if(info.data[x].PPMP_status == 'approved'){
            color_status = '#00c292';
        }
        if(info.data[x].PPMP_status == 'declined'){
            color_status = '#e46a76';
        }
      display[iden] +=`<div class="toast" role="alert" data-autohide="false" aria-live="assertive" aria-atomic="true">
                            <div class="toast-header">
                                <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect fill="${color_status}" width="100%" height="100%"></rect></svg>
                                <strong class="mr-auto">`+info.data[x].PPMP_year_FIELD+`<span><i class="fas fa-minus"></i></span> `+info.data[x].PPMP_id_FIELD+`</strong>
                                <small>`+info.data[x].PPMP_date_submitted+`</small>
                                <button type="button" class="admin ml-2 mb-1 close" aria-label="Close" value="`+info.data[x].PPMP_id_FIELD+`" onclick="reverse_submitted_ppmp(this.value)">
                                <span aria-hidden="true">&times;</span>
                                </button>
                                </button>
                            </div>
                            <div class="toast-body">
                                <div class="button-group text-center">
                                <a rel="tooltip" data-toggle="tooltip" data-placement="top" title="Update PPMP" onclick="update_ppmp(${info.data[x].PPMP_id_FIELD},'${info.data[x].PPMP_defaultItemsType_FIELD}')" class="admin nav-link waves-effect waves-dark" href="javascript:void(0)"> <i class="fas fa-pencil-alt text-dark fa-lg"></i></a>
                                <a rel="tooltip" data-toggle="tooltip" data-placement="top" title="View" onclick="view_ppmp(${info.data[x].PPMP_id_FIELD}, '${info.data[x].PPMP_defaultItemsType_FIELD}')" class="nav-link waves-effect waves-dark" href="javascript:void(0)"> <i class="fas fa-eye text-dark fa-lg"></i></a>
                                <a rel="tooltip" data-toggle="tooltip" data-placement="top" title="Print" onclick="print_ppmp(${info.data[x].PPMP_id_FIELD}, '${info.data[x].PPMP_defaultItemsType_FIELD}')" class="nav-link waves-effect waves-dark" href="javascript:void(0)"> <i class="fas fa-print text-dark fa-lg"></i></a>
                                <br>
                                <span style="font-size:10px; font-weight:bold;">`+info.data[x].PPMP_endUserName_FIELD+`</span>
                                <hr>
                                <center>
                                <span class='float-left'>`+info.data[x].PPMP_entityFirstTradeMark_FIELD.substring(0, 7)+`..</span> 
                                <span>`+info.data[x].PPMP_entitySecondTradeMark_FIELD.substring(0, 7)+`..</span>
                                <span class='float-right'>`+info.data[x].PPMP_entityThirdTradeMark_FIELD.substring(0, 7)+`..</span>
                                </center>
                                <br>
                                </div>
                            </div>
                        </div>
                        </div> 
                        <br>`;
    }
    // <button type="button" class="btn waves-effect waves-light btn-rounded btn-xs btn-secondary" data-toggle="tooltip" data-placement="bottom" data-original-title="Use this to create PPMP">Use it</button>
    $('#cse-submitted').html(display[0]);
    $('#total_submitted').html(info.data.length);
    $('#non-cse-submitted').html(display[1]);
    users_sidebar();
    $('.toast').toast('show');
}
    
function getPPMPyear(){
    var ppmp_year       = [];
    $.each($("#ppmp_year option:selected"), function () {
        ppmp_year.push([$(this).val()]);
    });
    return ppmp_year;
}

function getEnduser(){
    var ppmp_end_user   = [];
    $.each($("#ppmp_end_user option:selected"), function () {
        ppmp_end_user.push([$(this).val()]);
    });
    return ppmp_end_user;
}

function getSubOffice(){
    var ppmp_sub_office = [];
    $.each($("#ppmp_sub_office option:selected"), function () {
        ppmp_sub_office.push([$(this).val()]);
    });
    return ppmp_sub_office;
}

function getProgram(){
    var ppmp_program = [];
    $.each($("#ppmp_program option:selected"), function () {
        ppmp_program.push([$(this).val()]);
    });
    return ppmp_program;
}

function getPPMP_status(){
    var ppmp_status = [];
    $.each($("#ppmp_status option:selected"), function () {
        ppmp_status.push([$(this).val()]);
    });
    return ppmp_status;
}

function getThird_t(){
    var ppmp_third_t = [];
    $.each($("#ppmp_third_t option:selected"), function () {
        ppmp_third_t.push([$(this).val()]);
    });
    return ppmp_third_t;
}

$(document).on('click', '#submitted-work-filter, #filter-all', function (e) {
     data = {
        'ppmp_end_user'  :getEnduser(),
        'ppmp_sub_office':getSubOffice(),
        'ppmp_year'      :getPPMPyear(),
        'ppmp_program'   :getProgram(),
        'ppmp_third_t'   :getThird_t(),
        'ppmp_status'    :getPPMP_status()
    };
    $.ajax({
        type:'post',
        data: data,
        url:'/ppmp_ROUTE/filter_submitted_ppmp',
        success:function(result){
            display_submitted_ppmp(result);
        }
    });
});

$(document).on('click', '#current-work-filter, #filter-all', function (e) {
    data = {
        'ppmp_end_user'  :getEnduser(),
        'ppmp_sub_office':getSubOffice(),
        'ppmp_year'      :getPPMPyear(),
        'ppmp_program'   :getProgram(),
        'ppmp_third_t'   :getThird_t(),
        'ppmp_status'    :getPPMP_status()
    };
    console.log(getProgram());
    $.ajax({
        type:'post',
        data: data,
        url:'/ppmp_ROUTE/filter_current_ppmp',
        success:function(result){
            display_current_work(result);
        }
    });
});

$(document).on('click', '#reset-filter', function (e) {
    $('.select2-selection__rendered').html('');

    $.each($("#ppmp_year option:selected"), function() {
        $(this).prop('selected', false);
     });

     $.each($("#ppmp_end_user option:selected"), function() {
        $(this).prop('selected', false);
     });

     $.each($("#ppmp_sub_office option:selected"), function() {
        $(this).prop('selected', false);
     });
    
    fetch_current_work();
    fetch_submitted_ppmp();
     
});

function display_ppmp_year_filter(){
    $.ajax({
        type:'get',
        url:'/ppmp_ROUTE/get_all_year',
        success:function(result){
            display = "";
            for (var count = 0; count < result.data.length; count++) {
                display += "<option value='" + result.data[count].PPMP_year_FIELD + "'>" + result.data[count].PPMP_year_FIELD + "</option>";
            }
            $('#ppmp_year').html(display);
        }
    });
}

function display_ppmp_end_user_filter(){
    $.ajax({
        type:'get',
        url:'/ppmp_ROUTE/get_all_end_user',
        success:function(result){
            display = "";
            for (var count = 0; count < result.data.length; count++) {
                display += "<option value='" + result.data[count].PPMP_endUserName_FIELD + "'>" + result.data[count].PPMP_endUserName_FIELD + "</option>";
            }
            $('#ppmp_end_user').html(display);
        }
    });
}

function display_ppmp_sub_office(){
    $.ajax({
        type:'get',
        url:'/ppmp_ROUTE/get_all_second_trademark',
        success:function(result){
            display = "";
            for (var count = 0; count < result.data.length; count++) {
                display += "<option value='" + result.data[count].PPMP_entitySecondTradeMark_FIELD + "'>" + result.data[count].PPMP_entitySecondTradeMark_FIELD + "</option>";
            }
            $('#ppmp_sub_office').html(display);
        }
    });
}

function display_ppmp_program(){
    $.ajax({
        type:'get',
        url:'/ppmp_ROUTE/get_all_first_trademark',
        success:function(result){
            display = "";
            for (var count = 0; count < result.data.length; count++) {
                display += "<option value='" + result.data[count].PPMP_entityFirstTradeMark_FIELD + "'>" + result.data[count].PPMP_entityFirstTradeMark_FIELD + "</option>";
            }
            $('#ppmp_program').html(display);
        }
    });
}

function display_ppmp_third_t(){
    $.ajax({
        type:'get',
        url:'/ppmp_ROUTE/get_all_third_trademark',
        success:function(result){
            display = "";
            for (var count = 0; count < result.data.length; count++) {
                display += "<option value='" + result.data[count].PPMP_entityThirdTradeMark_FIELD + "'>" + result.data[count].PPMP_entityThirdTradeMark_FIELD + "</option>";
            }
            $('#ppmp_third_t').html(display);
        }
    });
}