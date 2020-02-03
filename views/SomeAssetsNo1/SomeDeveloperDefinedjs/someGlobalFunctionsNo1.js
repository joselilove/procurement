
//Auto Close Timer
function triggerAutoCloseAlert(mainmessage,submessage){
    swal({   
       title: mainmessage,   
       text: submessage,   
       timer: 2000,   
       showConfirmButton: false 
   });
}
