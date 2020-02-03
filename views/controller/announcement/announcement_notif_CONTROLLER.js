$(document).ready(function(){
    setInterval(function(){ fetch_annonucement(); }, 300000);//5 minutes
    fetch_annonucement();
});

function fetch_annonucement(){
    $.ajax({
        type:'post',
        url:'/announcement_ROUTE/fetch-notif-announcement',
        success:function(result){
            console.log('-----------------------------------');
           console.log(result);
           display_announcement(result.data);
        }
    });
}

function display_announcement(info){
    var display = ``;
    seen = '';
    hide = true;
    $('.ann-bell').show();
    for(var x = 0; x < info.length; x++){
        if(info[x].notification_type == 'announcement'){
            seen = '';
        if(info[x].seen_id == null){
            seen = 'NEW';
            hide = false;
        }
        display += `<a onclick="seen_notif_an(${info[x].notification_id})" href="/view-announcement">
                        <div class="user-img"> <img src="assets/images/users/employeeicon.jpg" alt="user" class="img-circle"> <span class="profile-status pull-right"></span> </div>
                        <div class="mail-contnet">
                            <h5>${info[x].User_name_FIELD} <span class='text-danger blink'> ${seen}</span></h5> <span class="mail-desc">${info[x].notification_content}</span> <span class="time">${info[x].updated_at}</span> </div>
                    </a>`;
        }
    }
    $('.announcement-content').html(display);
    if(hide){
        $('.ann-bell').hide();
    }
}

function seen_notif_an(notif_id){
    data = {'notif_id':notif_id};
    $.ajax({
        data:data,
        type:'post',
        url:'/announcement_ROUTE/insert-seen-notif-an',
        success:function(result){
            console.log(result);
            fetch_annonucement();
        }
    });
}