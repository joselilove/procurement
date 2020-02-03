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
            set_calendar_data(result.data);
        }
    });
}

function fetch_previous_ann(){
    $.ajax({
        type:'post',
        url:'/announcement_ROUTE/fetch-previous-announcement',
        success:function(result){
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
    }
    initialize();
}


$('#create-announcement').click(function(){
    data = {
        'title'     : $('#title_field').val(),
        'content'   : $('#content_field').val(),
        'category'  : $('#category').find(":selected").val(),
        'start'     :  $('#start_time').val(),
        'end'       : $('#end_time').val()
    };
    $.ajax({
        data:data,
        type:'post',
        url:'/announcement_ROUTE/insert-announcement',
        success:function(result){
            $('#calendar').fullCalendar('destroy');
            insert_notification($('#title_field').val(), 'CREATED:');
            clear();
            call_start();
        }
    });
});

$('#update-announcement').click(function(){
    data = {
        'title'     :$('#title_field').val(),
        'content'   :$('#content_field').val(),
        'category'  :$('#category').find(":selected").val(),
        'start'     :$('#start_time').val(),
        'end'       :$('#end_time').val(),
        'a_id'      :$('#announcement-id').val()
    };
    title_field = $('#title_field').val();
    
    $.ajax({
        data:data,
        type:'put',
        url:'/announcement_ROUTE/update-announcement',
        success:function(result){
            $('#calendar').fullCalendar('destroy');
            insert_notification(title_field, 'UPDATED:');
            call_start();
        }
    });
    clear();
});

$('#date-format1').change(function(){
    str = $(this).val().replace(/[`~!@#$%^&*()_|+\-=?;'",.<>\{\}\[\]\\\/]/gi,'');
    $('#start_time').val(( moment(str).unix() )*1000);
});

$('#date-format2').change(function(){
    str = $(this).val().replace(/[`~!@#$%^&*()_|+\-=?;'",.<>\{\}\[\]\\\/]/gi,'');
    $('#end_time').val(( moment(str).unix() )*1000);
});

function insert_announcement_via_drop(a_title, a_content, a_start,a_end, a_category){
    data = {
        'title'     : a_title,
        'content'   : a_content,
        'category'  : a_category,
        'start'     : a_start,
        'end'       : a_end
    };
    $.ajax({
        data:data,
        type:'post',
        url:'/announcement_ROUTE/insert-announcement',
        success:function(result){
            $('#calendar').fullCalendar('destroy');
            call_start();
        }
    });
    clear();
}

$('#delete-announcemet').click(function(){

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
            data = {
                'a_id' :$('#announcement-id').val()
            };
            title_field = $('#title_field').val();
            $.ajax({
                data:data,
                type:'delete',
                url:'/announcement_ROUTE/delete-announcement',
                success:function(result){
                    console.log(result);
                    $('#calendar').fullCalendar('destroy');
                    insert_notification(title_field, 'DELETED:');
                    call_start();
                    Swal.fire(
                        'Deleted!',
                        'Thank you!',
                        'success'
                      );
                }
            });
            clear();  
        };
      });
});
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

function insert_notification(announcemet_title, action){
    $('#remarks_declined').val('');
    $('#remarks_approved').val('');
    data = {
        'user_id_to'    : 0,
        'notif_type'    : 'announcement',
        'notif_content' :  action+' '+announcemet_title,
        'remarks'       : ''
    };

    $.ajax({
        data: data,
        type:'post',
        url : '/notification_ROUTE/insert_notification_announce',
        success:function(result){
        }
    });

}