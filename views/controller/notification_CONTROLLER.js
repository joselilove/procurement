$(document).ready(function(){
    setInterval(function(){ fetch_notification(); }, 300000);//5 minutes
    fetch_notification();
});

function fetch_notification(){
    $.ajax({
        type:'post',
        url :'/notification_ROUTE/fetch_user_notification',
        success:function(result){
            display_notification(result.data);
        }
    });
}

function display_notification(info){
    display = ``;
    seen = '';
    hide = true;
    $('.notif-bell').show();
    for(var x = 0; x < info.length ;x++){
        seen = '';
        
        if(info[x].is_seen == 0){
            seen = 'NEW';
            hide = false;
            alert('seen is wala');
        }
        
        if(info[x].notification_type == 'approved'){
            display += `<a onclick="seen_notif(${info[x].notification_id})" href="/select_ppmpPage_route">`;
            display +=  `<div class="btn btn-success btn-circle"><i class="icon-like"></i></div>`;
        }
        if(info[x].notification_type == 'declined'){
            display += `<a onclick="seen_notif(${info[x].notification_id})" href="/select_ppmpPage_route">`;
            display +=  `<div class="btn btn-danger btn-circle"><i class="icon-dislike"></i></div>`;
        }
        if(info[x].notification_type == 'pending'){
            display += `<a onclick="seen_notif(${info[x].notification_id})" href="/select_ppmpPage_route">`;
            display +=  `<div class="btn btn-warning btn-circle"><i class="icon-refresh"></i></div>`;
        }
        if(info[x].notification_type == 'modification request'){
            display += `<a onclick="seen_notif(${info[x].notification_id})" href="/ppmp_mod_approval_ROUTE">`;
            display +=  `<div class="btn btn-warning btn-circle"><i class="icon-cursor"></i></div>`;
        }
        if(info[x].notification_type == 'ppmp request' ||info[x].notification_type == 'request'){
            display += `<a onclick="seen_notif(${info[x].notification_id})" href="/ppmp_approval_ROUTE">`;
            display +=  `<div class="btn btn-warning btn-circle"><i class="icon-cursor"></i></div>`;
        }
        if(info[x].notification_type == 'PO-assigned'){
            display += `<a onclick="seen_notif(${info[x].notification_id})" href="/EnduserPOPage_route">`;
            display +=  `<div class="btn btn-success btn-circle"><i class="icon-user-following"></i></div>`;
        }
        if(info[x].notification_type == 'PO-remarks updated'){
            display += `<a onclick="seen_notif(${info[x].notification_id})" href="/EnduserPOPage_route">`;
            display +=  `<div class="btn btn-warning btn-circle"><i class="icon-note"></i></div>`;
        }
        
        display +=  `<div class="mail-contnet">
                            <h5 class='text-uppercase'>${ info[x].notification_type } <span class='text-danger blink'> ${seen}</span> </h5>
                            <span class="text-dark small text-right">${ info[x].notification_content }</span> 
                            <p class="text-dark small text-justify"><span class="text-primary">Remarks:</span>${ info[x].remarks }</p>
                            <span class="time">${ info[x].created_at }</span>
                            
                    </div>
                    </a>`;
    }
    $('#notification-content').html(display);
    if(hide){
        $('.notif-bell').hide();
    }
}

function seen_notif(notif_id){
    data = {notif_id:notif_id};
    $.ajax({
        data: data,
        type:'post',
        url:'/notification_ROUTE/seen_notif',
        success:function(result){
            console.log(result);
        }
    });
}