
$(document).ready(function(){
    get_user_name();
    users_sidebar();
});

function get_user_name(){
    $.ajax({
        type:'get',
        url:'/sidebar_ROUTE/get_current_user_name',
        success:function(result){
            
            name = result;
            $.ajax({
                type:'get',
                url:'/sidebar_ROUTE/get_user_type',
                success:function(result){
                    $('#user-name').html(name+" ("+result+")");
                }
            });
        }
    });
}

function users_sidebar(){

    $.ajax({
        type:'get',
        url:'/sidebar_ROUTE/get_user_type',
        success:function(result){
            if(result == 'Administrator'){
                $('.admin').show();
                $('.end-user').hide();
            }
            if(result == 'End-user'){
                $('.admin').hide();
                $('.end-user').show();
            }
        }
    });
}
