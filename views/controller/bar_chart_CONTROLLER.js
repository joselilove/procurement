$(document).ready(function(e){
    fetch_available_year();
    call_start();
    $(document).on('click', '#1st', function(e) {
        declare_data('PPMPItem_fstQtrQty_FIELD');
    });

    $(document).on('click', '#2nd', function(e) {
        declare_data('PPMPItem_scdQtrQty_FIELD');
    });

    $(document).on('click', '#3rd', function(e) {
        declare_data('PPMPItem_trdQtrQty_FIELD');
    });

    $(document).on('click', '#4th', function(e) {
        declare_data('PPMPItem_frtQtrQty_FIELD');
    });

    $(document).on('click', '#filter-year', function(e){
        start = $('#1st-year option:selected').val();
        end   = $('#2nd-year option:selected').val();
        if(start >end ){
            Swal.fire({
                type: 'error',
                title: 'Invalid year inputed',
                text: 'Please check the inputed year!',
                footer: 'Please try again'
              });
        }else{
            data = {
                'start':start,
                'end'  :end
            };
            $.ajax({
                data:data,
                type:'post',
                url:'/chart_app_ROUTE/select-filter_year_available',
                asycn: true,
                success:function(result){
                    available_year = result.data;
                    $('#morris-bar-chart').empty();
                    $('#extra-area-chart').empty();
                    $('#morris-area-chart').empty();
                    $('#morris-area-chart2').empty();
                    
                    call_start();
                }
            });
        }
    });
});
var chart;
var area_chart, line_chart, line_chart_2,line_chart_3;
var item, all_data, available_year;

function call_start(){
    declare_app_chart();
    fetch_all_item();
    fetch_ppmp_consolidation();
    display_total_cse();
    display_total_non_cse();
    display_total_cse_item();
    display_total_non_cse_item();
}
function declare_app_chart(){
    chart = new Morris.Bar({
        element: 'morris-bar-chart',
        data: [{}],
        xkey: 'year',
        ykeys: ['ACAD', 'ADMIN', 'UBAP', 'RET'],
        labels: ['ACAD', 'ADMIN', 'UBAP', 'RET'],
        barColors:['#55ce63', '#2f3d4a', '#009efb', '#aa9efb'],
        hideHover: 'auto',
        gridLineColor: '#eef0f2',
        resize: true
    });
    area_chart = new Morris.Area({
        element: 'extra-area-chart',
        data: [],
                lineColors: ['#55ce63', '#2f3d4a', '#009efb', '#aa9efb'],
                xkey: 'year',
                ykeys: ['ACAD', 'ADMIN', 'UBAP', 'RET'],
                labels: ['ACAD', 'ADMIN', 'UBAP', 'RET'],
                pointSize: 0,
                lineWidth: 0,
                resize:true,
                fillOpacity: 0.8,
                behaveLikeLine: true,
                gridLineColor: '#e0e0e0',
                hideHover: 'auto'
        
    });
    line_chart = new Morris.Area({
            element: 'morris-area-chart',
            data: [],
            xkey: 'year',
            ykeys: ['ACAD', 'ADMIN', 'UBAP', 'RET'],
            labels: ['ACAD', 'ADMIN', 'UBAP', 'RET'],
            pointSize: 3,
            fillOpacity: 0,
            pointStrokeColors:['#55ce63', '#2f3d4a', '#009efb', '#aa9efb'],
            behaveLikeLine: true,
            gridLineColor: '#e0e0e0',
            lineWidth: 3,
            hideHover: 'auto',
            lineColors: ['#55ce63', '#2f3d4a', '#009efb', '#aa9efb'],
            resize: true
            
        });
        
    line_chart_3 = new Morris.Area({
        element: 'morris-area-chart2',
        data: [],
        xkey: 'year',
        ykeys: ['ACAD', 'ADMIN', 'UBAP', 'RET'],
        labels: ['ACAD', 'ADMIN', 'UBAP', 'RET'],
        pointSize: 0,
        fillOpacity: 0.4,
        pointStrokeColors:['#b4becb', '#009efb'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 0,
        smooth: false,
        hideHover: 'auto',
        lineColors: ['#55ce63', '#2f3d4a', '#009efb', '#aa9efb'],
        resize: true
        
    });

    
}

function get_total_money_used(program, year, quarter){
    total = 0;
    for(y = 0; y < item.length; y++){
        for(z = 0; z < all_data.length; z++){
            if(all_data[z].PPMP_entityFirstTradeMark_FIELD == program && all_data[z].PPMP_year_FIELD  == year){
                if(item[y].Item_id_FIELD == all_data[z].Item_id_FIELD){
                    if(quarter == 'PPMPItem_fstQtrQty_FIELD'){
                        total +=  (item[y].Item_unitPrice_FIELD * all_data[z].PPMPItem_fstQtrQty_FIELD);
                    }
                    if(quarter == 'PPMPItem_scdQtrQty_FIELD'){
                        total +=  (item[y].Item_unitPrice_FIELD * all_data[z].PPMPItem_scdQtrQty_FIELD);
                    }
                    if(quarter == 'PPMPItem_trdQtrQty_FIELD'){
                        total +=  (item[y].Item_unitPrice_FIELD * all_data[z].PPMPItem_trdQtrQty_FIELD);
                    }
                    if(quarter == 'PPMPItem_frtQtrQty_FIELD'){
                        total +=  (item[y].Item_unitPrice_FIELD * all_data[z].PPMPItem_frtQtrQty_FIELD);
                    }
                }
            }
        }
    }
    return (total).toFixed(2);
}

function declare_data(quarter){
    app_data = new Array();
        for(x = 0; x < available_year.length; x++){
                app_data.push({
                    year    : available_year[x].PPMP_year_FIELD,
                    ACAD    : get_total_money_used('ACAD', available_year[x].PPMP_year_FIELD, quarter),
                    ADMIN   : get_total_money_used('ADMIN', available_year[x].PPMP_year_FIELD, quarter),
                    UBAP    : get_total_money_used('UBAP', available_year[x].PPMP_year_FIELD, quarter),
                    RET     : get_total_money_used('RET', available_year[x].PPMP_year_FIELD, quarter)
                });
        }
        console.log(app_data);
    set_chart_data(app_data);
}
function set_chart_data(app_data){
    chart.setData(app_data);
    line_chart.setData(app_data);
    line_chart_3.setData(app_data);
    area_chart.setData(app_data);
}
function fetch_all_item(){
    $.ajax({
        type:'get',
        url:'/chart_app_ROUTE/fetch_all_item',
        asycn: false,
        success:function(result){
            item = result.data;   
        }
    });
}

function fetch_ppmp_consolidation(){
    $.ajax({
        type:'get',
        url:'/chart_app_ROUTE/select_ppmp_consolidated',
        success:function(result){
            all_data = result.data;
            declare_data('PPMPItem_fstQtrQty_FIELD');
        }
    });
}

function fetch_available_year(){
    $.ajax({
        type:'get',
        url:'/chart_app_ROUTE/select_year_available',
        asycn: false,
        success:function(result){
            available_year = result.data;
            display = ``;
            for (var count = 0; count < result.data.length; count++) {
                
                display += `<option value="${result.data[count].PPMP_year_FIELD}">${result.data[count].PPMP_year_FIELD}</option>`;
            }
            $('#1st-year').html(display);
            $('#2nd-year').html(display);
        }
    });
}

function display_total_cse(){
    $.ajax({
        type:'post',
        url: '/chart_app_ROUTE/count-cse-submitted-ppmp',
        success:function(result){
            $('.counter_cse_submitted').html(result.total_cse);
        }
    });
}
function display_total_non_cse(){
    $.ajax({
        type:'post',
        url:'/chart_app_ROUTE/count-non-cse-submitted-ppmp',
        success:function(result){
            $('.counter_non_cse_submitted').html(result.total_non_cse);
        }
    });
}
function display_total_cse_item(){
    $.ajax({
        type:'post',
        url:'/chart_app_ROUTE/count-non-cse-item',
        success:function(result){
            $('.counter_cse_item').html(result.total_item_non_cse);
        }
    });
}
function display_total_non_cse_item(){
    $.ajax({
        type:'post',
        url:'/chart_app_ROUTE/count-cse-item',
        success:function(result){
            $('.counter_non_cse_item').html(result.total_item_cse);
        }
    });
}