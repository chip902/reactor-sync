//==== START TRANSFORM CODE - DO NOT REMOVE ====
function (event) {
//==== END TRANSFORM CODE ====
if (typeof digitalData == 'object' && typeof digitalData.AccountManagement == 'object') {
  return digitalData && digitalData.AccountManagement ? digitalData.AccountManagement?.AGRTier : '';
}
//==== START TRANSFORM CODE - DO NOT REMOVE ====
}
//==== END TRANSFORM CODE ====