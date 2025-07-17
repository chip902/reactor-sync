//==== START TRANSFORM CODE - DO NOT REMOVE ====
function (gtag, dataLayer) {
//==== END TRANSFORM CODE ====
// Check if the user has given consent for the group C0004
if (typeof OnetrustActiveGroups !== "undefined" && /,C0004,/gi.test(OnetrustActiveGroups)) {
//if (("undefined" != typeof OnetrustActiveGroups && /,C0004,/gi.test(OnetrustActiveGroups))) {
    // Consent for C0004 is present, initialize gtag for each account ID
    gtag('config', 'AW-816503027');  // VA - Soledad
    gtag('config', 'AW-677839036');  // NYS - AMNY
    gtag('config', 'AW-75006975');   // Another Account
    gtag('config', 'AW-75006974');   // Another Account
    gtag('config', 'AW-90956143');   // Mediacom Ad Words
    gtag('config', 'DC-8648222');    // EA San Joaquin - Centro
    gtag('config', 'DC-8231048');    // Mediacom Campaign Manager
    gtag('config', 'DC-9634548');    // SIUPA - iHeart
    gtag('config', 'AW-91197423');   // SIUPA - Jeffrey Scott Agency
    gtag('config', 'UA-23218774-1'); // Another UA Account
    gtag('config', 'DC-8521861');    // ExactRail Corridor
    gtag('config', 'AW-16884716234');  // Valley Flyer
    gtag('config', 'AW-992697720');  // Another Account
    gtag('config', 'DC-94680972');   // Pacific Surfboard
    gtag('config', 'AW-903250860');  // Another Account
    gtag('config', 'DC-12652015');   // DoubleClick Account
    gtag('config', 'DC-16811629037');  // Google Direct Floodlight
} else {
    // Consent for C0004 is not present, skip gtag initialization
    console.log('Consent for C0004 not granted. Skipping gtag initialization.');
}

//==== START TRANSFORM CODE - DO NOT REMOVE ====
}
//==== END TRANSFORM CODE ====