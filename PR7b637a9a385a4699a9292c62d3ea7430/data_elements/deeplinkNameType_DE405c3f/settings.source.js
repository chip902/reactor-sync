//==== START TRANSFORM CODE - DO NOT REMOVE ====
function () {
//==== END TRANSFORM CODE ====
if (_satellite.getVar('deeplinkName').length > 0){
  return _satellite.getVar('deeplinkName')+"|"+ _satellite.getVar('deeplinkType');
}else{
  return _satellite.getVar('deeplinkName');
}
//==== START TRANSFORM CODE - DO NOT REMOVE ====
}
//==== END TRANSFORM CODE ====