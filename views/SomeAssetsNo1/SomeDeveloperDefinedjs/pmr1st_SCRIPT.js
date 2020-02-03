function loadCurrentInfoForUpdatePMRForm_FNCTN(pmrid, pmrindex) {
       
    document.getElementById('PMRToBeUpdated_id').value = pmrid;
    document.getElementById('UpdatePMRtimescopeSelect_id').value = pmrdatacurrentresponse[pmrindex].PMR_timeScope_FIELD;
    document.getElementById('UpdateyearSelect_id').value = pmrdatacurrentresponse[pmrindex].PMR_year_FIELD;
    document.getElementById('UpdateprogramSelect_id').value = pmrdatacurrentresponse[pmrindex].PMR_program_FIELD;
} 



function beforeDeletePMR_FNCTN(pmrid) {
    if (confirm("Are you sure you want to delete this PMR?") == true) {
        deletePMR_FNCTN(pmrid);
    }
}