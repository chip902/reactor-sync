//==== START TRANSFORM CODE - DO NOT REMOVE ====
function (event) {
//==== END TRANSFORM CODE ====
var assistanceCount = digitalData.Booking.pwdAssistanceCount +"|"+ digitalData.Booking.nonPwdAssistanceCount;

assistanceCount.replaceAll(0,"NA").replaceAll("undefined","NA");

return assistanceCount;




//==== START TRANSFORM CODE - DO NOT REMOVE ====
}
//==== END TRANSFORM CODE ====