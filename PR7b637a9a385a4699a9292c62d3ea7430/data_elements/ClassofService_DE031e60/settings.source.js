//==== START TRANSFORM CODE - DO NOT REMOVE ====
function (event) {
//==== END TRANSFORM CODE ====
//return digitalData.Booking.classOfService+':'+digitalData.Booking.showOnly+':'+digitalData.Booking.addOns+':'+digitalData.Booking.departureTime+':'+digitalData.Booking.sortFilter;



let ClassofService = '';
let ShowOnly = '';
let addOns = '';
let departureTime = '';
let sortFilter = '';

if (typeof digitalData.Booking.ClassofService !== 'undefined' && digitalData.Booking.ClassofService !== '') {
  ClassofService = digitalData.Booking.ClassofService.join('-');
}
 if (typeof digitalData.Booking.ShowOnly !== 'undefined' && digitalData.Booking.ShowOnly !== '') {
 ShowOnly = digitalData.Booking.ShowOnly.join('-');
 }
 if (typeof digitalData.Booking.addOns !== 'undefined' && typeof digitalData.Booking.addOns !== '') {
addOns = digitalData.Booking.addOns.join("-");
  }
 if (typeof digitalData.Booking.departureTime !== 'undefined' && digitalData.Booking.departureTime !== '') {
departureTime = digitalData.Booking.departureTime.join('-');
 }

 if (typeof digitalData.Booking.sortFilter !== 'undefined' && digitalData.Booking.sortFilter !== '') {
sortFilter = digitalData.Booking.sortFilter;
 }
return ClassofService+":"+ShowOnly+":"+ShowOnly+":"+departureTime+":"+sortFilter;




//return digitalData.Booking.classOfService.join("-")+':'+digitalData.Booking.showOnly.join("-")+':'+digitalData.Booking.addOns.join("-")+':'+digitalData.Booking.departureTime.join("-");
//==== START TRANSFORM CODE - DO NOT REMOVE ====
}
//==== END TRANSFORM CODE ====