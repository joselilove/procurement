$(document).ready(function(e){
    fetch();
    display_ppmp_year_filter();
    display_ppmp_program();
    $('body').tooltip({
        selector: '[rel=tooltip]'
      });
});

function fetch(){
    fecth_cse_app();
    fetch_non_cse_app();
    fetch_app_list();
}

function fecth_cse_app(){
    $.ajax({
        type:'get',
        url:'/app_ROUTE/select_cse_app_list',
        success:function(result){
            display_cse_app(result);
        }
    });
}

function fetch_non_cse_app(){
    $.ajax({
        type:'get',
        url:'/app_ROUTE/select_non_cse_app_list',
        success:function(result){
           display_non_cse_app(result);
        }
    });
}

function fetch_app_list(){
    $.ajax({
        type:'get',
        url:'/app_ROUTE/select_app_list',
        success:function(result){
            display_mixed_app(result);
        }
    });
}

function display_cse_app(info){
    var display = ``;
    for(x = 0; x < info.data.length; x++){
        display += `<div class="toast" role="alert" data-autohide="false" aria-live="assertive" aria-atomic="true" style="margin-left:15%">
                    <div class="toast-header">
                        <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect fill="#00c292" width="100%" height="100%"></rect></svg>
                        <strong class="mr-auto"> ${info.data[x].PPMP_year_FIELD} </strong>
                        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                        </button>
                    </div>
                    <div class="toast-body">
                        <div class="button-group text-center">
                        <a onclick="view_app('${info.data[x].PPMP_entityFirstTradeMark_FIELD}', ${info.data[x].PPMP_year_FIELD},'${info.data[x].PPMP_defaultItemsType_FIELD}')" rel="tooltip" data-toggle="tooltip" data-placement="top" title="View consolidated ${info.data[x].PPMP_entityFirstTradeMark_FIELD}" class="nav-link waves-effect waves-dark" href="javascript:void(0)"> <i class="fas fa-eye text-dark fa-lg"></i></a>
                        <br><hr>
                        <center> ${info.data[x].PPMP_entityFirstTradeMark_FIELD} </center>
                        </div>
                    </div>
                </div>`;
    }
    $('#cse-consolidated').html(display);
    $('#total_cse').html(info.data.length)
    $('.toast').toast('show');
}

function display_non_cse_app(info){
    var display = ``;
    for(x = 0; x < info.data.length; x++){
        display += `<div class="toast" role="alert" data-autohide="false" aria-live="assertive" aria-atomic="true" style="margin-left:15%">
                    <div class="toast-header">
                        <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect fill="#00c292" width="100%" height="100%"></rect></svg>
                        <strong class="mr-auto"> ${info.data[x].PPMP_year_FIELD} </strong>
                        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                        </button>
                    </div>
                    <div class="toast-body">
                        <div class="button-group text-center">
                        <a rel="tooltip" data-toggle="tooltip" data-placement="top" title="View consolidated ${info.data[x].PPMP_entityFirstTradeMark_FIELD}" onclick="view_app('${info.data[x].PPMP_entityFirstTradeMark_FIELD}', ${info.data[x].PPMP_year_FIELD},'${info.data[x].PPMP_defaultItemsType_FIELD}')" class="nav-link waves-effect waves-dark" href="javascript:void(0)"> <i class="fas fa-eye text-dark fa-lg"></i></a>
                        <br><hr>
                        <center> ${info.data[x].PPMP_entityFirstTradeMark_FIELD} </center>
                        </div>
                    </div>
                </div>`;
    }
    $('#non-cse-consolidated').html(display);
    $('#total_non_cse').html(info.data.length)
    $('.toast').toast('show');
}

function display_mixed_app(info){
    var display = ``;
    var l = "'";
    for(x = 0; x < info.data.length; x++){
        display += `<div class="toast" role="alert" data-autohide="false" aria-live="assertive" aria-atomic="true" style="margin-left:15%">
                    <div class="toast-header">
                        <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect fill="#00c292" width="100%" height="100%"></rect></svg>
                        <strong class="mr-auto"> ${info.data[x].PPMP_year_FIELD} </strong>
                        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                        </button>
                    </div>
                    <div class="toast-body">
                        <div class="button-group text-center">
                        <a rel="tooltip" data-toggle="tooltip" data-placement="top" title="View consolidated ${info.data[x].PPMP_entityFirstTradeMark_FIELD}" onclick="view_app('${info.data[x].PPMP_entityFirstTradeMark_FIELD}', ${info.data[x].PPMP_year_FIELD},'%%')" class="nav-link waves-effect waves-dark" href="javascript:void(0)"> <i class="fas fa-eye text-dark fa-lg"></i></a>
                        <br><hr>
                        <center> ${info.data[x].PPMP_entityFirstTradeMark_FIELD} </center>
                        </div>
                    </div>
                </div>`;
    }
    $('#total_mixed').html(info.data.length)
    $('#mixed-consolidated').html(display);
    $('.toast').toast('show');
}

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

function getProgram(){
    var ppmp_program = [];
    $.each($("#ppmp_program option:selected"), function () {
        ppmp_program.push([$(this).val()]);
    });
    return ppmp_program;
}

function getPPMPyear(){
    var ppmp_year       = [];
    $.each($("#ppmp_year option:selected"), function () {
        ppmp_year.push([$(this).val()]);
    });
    return ppmp_year;
}

$(document).on('click', '#filter-all', function(e){
    filter_cse_app_list();
    filter_non_cse_app_list();
    filter_app_list();
});

function filter_cse_app_list(){
    data = {
        'ppmp_year'   : getPPMPyear() ,
        'ppmp_program': getProgram()
    };
    $.ajax({
        data: data,
        type: 'post',
        url: '/app_ROUTE/filter_cse_app_list',
        success:function(result){
            display_cse_app(result);
        }
    });
}

function filter_non_cse_app_list(){
    data = {
        'ppmp_year'   : getPPMPyear() ,
        'ppmp_program': getProgram()
    };
    $.ajax({
        data: data,
        type: 'post',
        url: '/app_ROUTE/filter_non_cse_app_list',
        success:function(result){
            display_non_cse_app(result);
        }
    });
}

function filter_app_list(){
    data = {
        'ppmp_year'   : getPPMPyear() ,
        'ppmp_program': getProgram()
    };
    $.ajax({
        data: data,
        type: 'post',
        url: '/app_ROUTE/filter_app_list',
        success:function(result){
            display_mixed_app(result);
        }
    });
}

function view_app(PPMP_entityFirstTradeMark_FIELD, PPMP_year_FIELD,PPMP_defaultItemsType_FIELD){
    app_window = window.open(`/app_ROUTE?program=${PPMP_entityFirstTradeMark_FIELD}&year=${PPMP_year_FIELD}&type=${PPMP_defaultItemsType_FIELD}`,'','postwindow');
    app_window.resizeTo( 500, 500);
    app_window.moveTo(800,300);
    app_window.focus();
}