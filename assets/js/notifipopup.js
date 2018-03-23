
$(document).ready(function()
{
$("#notificationLink").click(function()
{
    console.log('open popup')
$("#notificationContainer").fadeToggle(300);
$("#notification_count").fadeOut("slow");
return false;
});

//Document Click hiding the popup 
$(document).click(function()
{
    console.log('close popup')

$("#notificationContainer").hide();
});

//Popup on click
$("#notificationContainer").click(function()
{
return false;
});

});
