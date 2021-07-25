$('.saveBtn').on('click', function(){
    console.log("Saved")

    var textValue = $(this).siblings('.description').val();
    var storageValue = $(this).parent().attr('id');

    localStorage.setItem(storageValue, textValue)
});

function displayMessage(){
    $('#block9 .description').val(localStorage.getItem('hr9'));
    $('#block10 .description').val(localStorage.getItem('hr10'));
    $('#block11 .description').val(localStorage.getItem('hr11'));
    $('#block12 .description').val(localStorage.getItem('hr12'));
    $('#block13 .description').val(localStorage.getItem('hr13'));
    $('#block14 .description').val(localStorage.getItem('hr14'));
    $('#block15 .description').val(localStorage.getItem('hr15'));
    $('#block16 .description').val(localStorage.getItem('hr16'));
    $('#block17 .description').val(localStorage.getItem('hr17'));
}

displayMessage();
var today = moment();
$('currentDay').text(today.format('MMM Do YYYY, h:mm a'));

function trackTime()