// Example state change 1
$('input.pendo-form-input').one('input', function() {
if($(this).val() === "") {
$('.pendo-next-button').hide();
$('.pendo-next-button-deactivated').show();
} else {
$('.pendo-next-button-deactivated').hide();
$('.pendo-next-button').show();
}
});

//Example state change 2
