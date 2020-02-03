$(document).ready(function(){
    change_cursor();
});
var CalendarApp;
!function($) {
    
    "use strict";

        CalendarApp = function() {
        this.$body = $("body")
        this.$calendar = $('#calendar'),
        this.$event = ('#calendar-events div.calendar-events'),
        this.$categoryForm = $('#add-new-event form'),
        this.$extEvents = $('#calendar-events'),
        this.$modal = $('#add-announcement'),
        this.$saveCategoryBtn = $('.save-category'),
        this.$calendarObj = null
    };


    /* on click on event */
    CalendarApp.prototype.onEventClick =  function (calEvent, jsEvent, view) {
        console.log('click');
        console.log(calEvent);
        update_display();
        var $this = this;
            $this.$modal.modal({
                backdrop: 'static'
            });
            $('#date-format1').val('');
            $('#date-format2').val('');
            $('#title_field').val(calEvent.title);
            $('#content_field').val(calEvent.content);
            $('#start_time').val(( moment(calEvent.start).unix() )*1000);
            $('#end_time').val(( moment(calEvent.end).unix() )*1000);
            $('#announcement-id').val(calEvent.id);
            $('#category').find(":selected").text('Select color type');
            $('#category').find(":selected").val(calEvent.className);
            change_cursor();
    },
    CalendarApp.prototype.enableDrag = function() {
        //init events
        $(this.$event).each(function () {
            var eventObject = {
                title   : $.trim($(this).text()),
                data    : $(this).attr('data-all')
            };
            $(this).data('eventObject', eventObject);
            $(this).draggable({
                zIndex: 999,
                revert: true, 
                revertDuration: 0
            });
        });
        change_cursor();
    }
    /* Initializing */
    CalendarApp.prototype.init = function() {
        this.enableDrag();
        /*  Initialize the calendar  */
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        var form = '';
        var today = new Date($.now());
        var defaultEvents =  calendar_data;

        var $this = this;
        $this.$calendarObj = $this.$calendar.fullCalendar({
            slotDuration: '00:15:00', /* If we want to split day time each 15minutes */
            minTime: '08:00:00',
            maxTime: '19:00:00',  
            defaultView: 'month',  
            handleWindowResize: true,   
             
            header: {
                right: 'prev,next today',
                left: 'title',
                center: 'month,agendaWeek,agendaDay,list'
            },
            events: defaultEvents,
            editable: false,
            droppable: true, // this allows things to be dropped onto the calendar !!!
            eventLimit: true, // allow "more" link when too many events
            selectable: true,
            drop: function(date) { $this.onDrop($(this), date); },
            select: function (start, end, allDay) { $this.onSelect(start, end, allDay); },
            eventClick: function(calEvent, jsEvent, view) { $this.onEventClick(calEvent, jsEvent, view); }

        });

        //on new event
        this.$saveCategoryBtn.on('click', function(){
            var categoryName = $this.$categoryForm.find("input[name='category-name']").val();
            var categoryColor = $this.$categoryForm.find("select[name='category-color']").val();
            if (categoryName !== null && categoryName.length != 0) {
                $this.$extEvents.append('<div class="calendar-events" data-class="bg-' + categoryColor + '" style="position: relative;"><i class="fa fa-circle text-' + categoryColor + '"></i>' + categoryName + '</div>')
                $this.enableDrag();
            }

        });
    },

   //init CalendarApp
    $.CalendarApp = new CalendarApp, $.CalendarApp.Constructor = CalendarApp
    
}(window.jQuery),

//initializing CalendarApp
function($) {

}(window.jQuery);

function initialize(){
    "use strict";
    $.CalendarApp.init();
    $('#calendar').fullCalendar('option', 'aspectRatio',1.5);
    $('.fc-header-toolbar').css({'background-color':'#f8f9fa'});
    change_cursor();
}
function change_cursor(){
    $('.calendar-events').css( 'cursor', 'grab' );
    $('.calendar-events').draggable({
                start: function() {
                    $('.calendar-events').css( 'cursor', 'grabbing' );
                },
                stop: function() {
                    $('.calendar-events').css( 'cursor', 'grab' );
                }
        });
    $('a').css( 'cursor', 'pointer' );
}
$('table').css( 'cursor', 'pointer' );


