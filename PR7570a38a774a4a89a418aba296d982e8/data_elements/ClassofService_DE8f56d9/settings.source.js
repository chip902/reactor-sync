//==== START TRANSFORM CODE - DO NOT REMOVE ====
function (event) {
//==== END TRANSFORM CODE ====
/*
var ClassofService = "";
var ShowOnly = "";
var Showmetrainswithspaceformy = "";
var TimeofDay = "";

if (typeof digitalData.Booking.ClassofService !== 'undefined' && typeof digitalData.Booking.ClassofService !== '') {
  
  ClassofService = digitalData.Booking.ClassofService.join("-");
  }
  
  if (typeof digitalData.Booking.ShowOnly !== 'undefined' && typeof digitalData.Booking.ShowOnly !== '') {
  ShowOnly = digitalData.Booking.ShowOnly.join("-");
  
  }
  
  if (typeof digitalData.Booking.Showmetrainswithspaceformy !== 'undefined' && typeof digitalData.Booking.Showmetrainswithspaceformy !== '') {
  
  Showmetrainswithspaceformy = digitalData.Booking.Showmetrainswithspaceformy.join("-");
  }
  if (typeof digitalData.Booking.TimeofDay !== 'undefined' && typeof digitalData.Booking.TimeofDay !== '') {
  TimeofDay = digitalData.Booking.TimeofDay.join("-");
  
  }
  
  return ClassofService+':'+ShowOnly+':'+Showmetrainswithspaceformy+':'+TimeofDay;
  
*/



//const { Booking } = digitalData;

let ClassofService = '';
let ShowOnly = '';
let Showmetrainswithspaceformy = '';
let TimeofDay = '';
if (typeof digitalData.Booking.ClassofService !== 'undefined' && digitalData.Booking.ClassofService !== '') {
  ClassofService = digitalData.Booking.ClassofService.join('-');
}
 if (typeof digitalData.Booking.ShowOnly !== 'undefined' && digitalData.Booking.ShowOnly !== '') {
 ShowOnly = digitalData.Booking.ShowOnly.join('-');
 }
 
 if (typeof digitalData.Booking.Showmetrainswithspaceformy !== 'undefined' && typeof digitalData.Booking.Showmetrainswithspaceformy !== '') {
 
 var data = digitalData.Booking.Showmetrainswithspaceformy;


if (Array.isArray(data)) {
  
    var joinedData = data.join("-");
    Showmetrainswithspaceformy = joinedData;
} else {
    
    Showmetrainswithspaceformy = data;
}
//Showmetrainswithspaceformy = digitalData.Booking.Showmetrainswithspaceformy.join("-");
  }
 if (typeof digitalData.Booking.TimeofDay !== 'undefined' && digitalData.Booking.TimeofDay !== '') {
TimeofDay = digitalData.Booking.TimeofDay.join('-');
 }
return ClassofService+":"+ShowOnly+":"+Showmetrainswithspaceformy+":"+TimeofDay;

//==== START TRANSFORM CODE - DO NOT REMOVE ====
}
//==== END TRANSFORM CODE ====