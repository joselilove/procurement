$(document).ready(function(){
    searchParams = new URLSearchParams(window.location.search);
    $(document).on('click','.editable-submit', function(e){
        setTimeout(update_ppmp_info, 1);
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
    // loadPPMPendUserData_FNCTN();
}
