//==== START TRANSFORM CODE - DO NOT REMOVE ====
function (event) {
//==== END TRANSFORM CODE ====
var accessibleSiteSpeedMetrics = "";

accessibleSiteSpeedMetrics = _satellite.getVar("responseCompleteTime") + ":" + _satellite.getVar("pageRenderTime") + ":" + _satellite.getVar("serverResponseTime") + ":" + 
_satellite.getVar("totalDOMCompleteTime") + ":" + _satellite.getVar("totalPageLoadTime");

return accessibleSiteSpeedMetrics
//==== START TRANSFORM CODE - DO NOT REMOVE ====
}
//==== END TRANSFORM CODE ====