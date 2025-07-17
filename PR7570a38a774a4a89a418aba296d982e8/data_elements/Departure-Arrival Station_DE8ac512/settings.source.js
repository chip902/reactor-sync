//==== START TRANSFORM CODE - DO NOT REMOVE ====
function () {
//==== END TRANSFORM CODE ====
if((digitalData.Booking != undefined) && (digitalData.Booking != '')){
  if((digitalData.Booking.TravelSearchDepartureStationCode != undefined) && (digitalData.Booking.TravelSearchDepartureStationCode != '') && 
     (digitalData.Booking.TravelSearchArrivalStationCode != undefined) && (digitalData.Booking.TravelSearchArrivalStationCode != '')){
  var res = digitalData.Booking.TravelSearchDepartureStationCode + "-" + digitalData.Booking.TravelSearchArrivalStationCode;
  return res;
  }
}
//==== START TRANSFORM CODE - DO NOT REMOVE ====
}
//==== END TRANSFORM CODE ====