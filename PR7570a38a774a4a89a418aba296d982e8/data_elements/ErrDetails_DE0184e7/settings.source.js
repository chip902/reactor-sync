//==== START TRANSFORM CODE - DO NOT REMOVE ====
function (event) {
//==== END TRANSFORM CODE ====
//return digitalData.ErrDetails.businessMessage + ":" + digitalData.ErrDetails.errorCode + ":" + digitalData.ErrDetails.errorType + ":" + digitalData.ErrDetails.subChannelId + ":" + digitalData.ErrDetails.sysError + ":" + digitalData.ErrDetails.sysMessage;



if(digitalData.ErrDetails!=undefined) {

var ErrDetails = digitalData.ErrDetails.businessMessage + "|" + digitalData.ErrDetails.errorCode + "|" + digitalData.ErrDetails.errorType + "|" + digitalData.ErrDetails.subChannelId + "|" + digitalData.ErrDetails.sysError + "|" + digitalData.ErrDetails.sysMessage;
}

return ErrDetails;
//==== START TRANSFORM CODE - DO NOT REMOVE ====
}
//==== END TRANSFORM CODE ====