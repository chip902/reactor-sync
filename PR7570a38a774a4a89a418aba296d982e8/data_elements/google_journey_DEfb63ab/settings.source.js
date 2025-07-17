//==== START TRANSFORM CODE - DO NOT REMOVE ====
function (event) {
//==== END TRANSFORM CODE ====
var fromStopTimeId = _satellite.getVar("google_from_ticketing_stop_time_id");
var toStopTimeId = _satellite.getVar("google_to_ticketing_stop_time_id");
var boardingTime = _satellite.getVar("google_boarding_time");

if (typeof fromStopTimeId !== 'undefined' && typeof toStopTimeId !== 'undefined' && typeof boardingTime !== 'undefined') {
    _satellite.cookie.set("googleDetails", fromStopTimeId + ":" + toStopTimeId + ":" + boardingTime);
    return fromStopTimeId + ":" + toStopTimeId + ":" + boardingTime;
}


//==== START TRANSFORM CODE - DO NOT REMOVE ====
}
//==== END TRANSFORM CODE ====