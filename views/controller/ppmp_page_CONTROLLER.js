$(document).ready(function(){
    searchParams = new URLSearchParams(window.location.search);
    $(document).on('click','.editable-submit', function(e){
        setTimeout(update_ppmp_info, 0);
    });
    fetch_ppmp_table();
    
    $('.ppmp_type_title').text(searchParams.get('ppmp_type'));

});

function fetch_ppmp_table(){
    var data = {'PPMP_id_FIELD':searchParams.get('ppmp_id')};
    $.ajax({
        data: data,
        type:'post',
        url: '/ppmp_ROUTE/fetch_ppmp_table_route',
        success: function(data){
            display_ppmp_info(data);
        }
    });
}

function display_ppmp_info(ppmp){
    $('#inline-date').text(ppmp.data[0].PPMP_year_FIELD);
    $('#inline-trade-mark-1').text(ppmp.data[0].PPMP_entityFirstTradeMark_FIELD);
    $('#inline-trade-mark-2').text(ppmp.data[0].PPMP_entitySecondTradeMark_FIELD);
    $('#inline-trade-mark-3').text(ppmp.data[0].PPMP_entityThirdTradeMark_FIELD);
    $('#inline-fund').text(ppmp.data[0].PPMP_fund_FIELD);
    // $('#inline-paps').text(ppmp.data[0].PPMP_PAPs_FIELD);
    $('#inline-prepared-by').text(ppmp.data[0].PPMP_endUserName_FIELD);
    $('#inline-prepared-by-position').text(ppmp.data[0].PPMP_endUserPosition);
    $('#inline-recommending-approval').text(ppmp.data[0].PPMP_recomAprvlPerson_FIELD);
    $('#inline-recommending-approval-position').text(ppmp.data[0].PPMP_recomAprvlPersonPostn_FIELD);
    $('#inline-approved-by').text(ppmp.data[0].PPMP_aprvdByPerson_FIELD);
    $('#inline-approved-by-position').text(ppmp.data[0].PPMP_aprvdByPersonPostn_FIELD);
    
    if(ppmp.data[0].PPMP_year_FIELD == ''){
        $('#inline-date').text('Empty');
    }
    if(ppmp.data[0].PPMP_entityFirstTradeMark_FIELD == ''){
        $('#inline-trade-mark-1').text('Empty');
    }
    if(ppmp.data[0].PPMP_entitySecondTradeMark_FIELD == ''){
        $('#inline-trade-mark-2').text('Empty');
    }
    if(ppmp.data[0].PPMP_entityThirdTradeMark_FIELD == ''){
        $('#inline-trade-mark-3').text('Empty');
    }
    if(ppmp.data[0].PPMP_fund_FIELD == ''){
        $('#inline-fund').text('Empty');
    }
    if(ppmp.data[0].PPMP_endUserName_FIELD == ''){
        $('#inline-prepared-by').text('Empty');
    }
    if(ppmp.data[0].PPMP_endUserPosition == ''){
        $('#inline-prepared-by-position').text('Empty');
    }
    if(ppmp.data[0].PPMP_recomAprvlPerson_FIELD == ''){
        $('#inline-recommending-approval').text('Empty');
    }
    if(ppmp.data[0].PPMP_recomAprvlPersonPostn_FIELD == ''){
        $('#inline-recommending-approval-position').text('Empty');
    }
    if(ppmp.data[0].PPMP_aprvdByPerson_FIELD == ''){
        $('#inline-approved-by').text('Empty');
    }
    if(ppmp.data[0].PPMP_aprvdByPersonPostn_FIELD == ''){
        $('#inline-approved-by-position').text('Empty');
    }
}

function get_ppmp_info(){
    var ppmp_info = {
        'PPMP_year_FIELD'                 :$('#inline-date').text(),
        'PPMP_entityFirstTradeMark_FIELD' :$('#inline-trade-mark-1').text(),
        'PPMP_entitySecondTradeMark_FIELD':$('#inline-trade-mark-2').text(),
        'PPMP_entityThirdTradeMark_FIELD' :$('#inline-trade-mark-3').text(),
        'PPMP_fund_FIELD'                 :$('#inline-fund').text(),
        // 'PPMP_PAPs_FIELD'                 :$('#inline-paps').text(),
        'PPMP_endUserName_FIELD'          :$('#inline-prepared-by').text(),
        'PPMP_endUserPosition'            :$('#inline-prepared-by-position').text(),
        'PPMP_recomAprvlPerson_FIELD'     :$('#inline-recommending-approval').text(),
        'PPMP_recomAprvlPersonPostn_FIELD':$('#inline-recommending-approval-position').text(),
        'PPMP_aprvdByPerson_FIELD'        :$('#inline-approved-by').text(),
        'PPMP_aprvdByPersonPostn_FIELD'   :$('#inline-approved-by-position').text(),
        'PPMP_id_FIELD'                   :searchParams.get('ppmp_id')
        };
        return ppmp_info;
}
function update_ppmp_info(){
    console.log(get_ppmp_info());
    $.ajax({
        data: get_ppmp_info(),
        type: 'put',
        url: '/ppmp_ROUTE/update_ppmp_table_info_route',
        success:function(data){
            fetch_ppmp_table();
        },
        error: function(data){
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: 'Please try again'
              });
        }
    });
}



