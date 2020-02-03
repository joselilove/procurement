$(document).ready(function(){
    call_start();
});

function call_start(){
    fetch_previous_ann();
    fetch_calendar_data();    
}
var calendar_data = [];
function fetch_calendar_data(){
    $.ajax({
        type:'post',
        url:'/announcement_ROUTE/fetch-announcement',
        success:function(result){
            console.log(result.data);
            set_calendar_data(result.data);
        }
    });
}

function fetch_previous_ann(){
    $.ajax({
        type:'post',
        url:'/announcement_ROUTE/fetch-previous-announcement',
        success:function(result){
            console.log(result);
            display_previous_ann(result.data)
        }
    });
}

function display_previous_ann(info){
    var display = ``;

    for(var x = 0; x < info.length; x++){
        display +=  `<div class="calendar-events" data-class="${info[x].category}" 
                        data-all='{"title":"${info[x].announcement_title}","content":"${info[x].announcement_content}","start":"${info[x].announcement_start_date}","end": "${info[x].announcement_end_date}","category": "${info[x].category}"}'>
                        <i class="fa fa-circle text${info[x].category.substr(2)}"></i>${info[x].announcement_title}</div>`;
    }
    $('.previous-content').html(display);
}
function set_calendar_data(info){
    calendar_data = [];
    for(var x = 0; x < info.length; x++){
        calendar_data.push({
            'name'      :info[x].User_name_FIELD,
            'content'   :info[x].announcement_content,
            'id'        :info[x].announcement_id,
            'title'     :info[x].announcement_title,
            'start'     :new Date(parseInt(info[x].announcement_start_date)),
            'end'       :new Date(parseInt(info[x].announcement_end_date)),
            'className' :info[x].category
        });
    }console.log(calendar_data);
    initialize();
}

function clear(){
    $('#title_field').val('');
    $('#content_field').val('');
    $('#start_time').val('');
    $('#end_time').val('');
}


function create_display(){
    $('.create').show();
    $('.update').hide();
}

function update_display(){
    $('.create').hide();
    $('.update').show();
}