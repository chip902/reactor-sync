//==== START TRANSFORM CODE - DO NOT REMOVE ====
function (event) {
//==== END TRANSFORM CODE ====
return (function() {
    const now = new Date();
    
    // Format the date part
    const dateOptions = {
        timeZone: 'America/New_York',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    };
    const formattedDate = new Intl.DateTimeFormat('en-US', dateOptions).format(now);
    
    // Format the time part without the 12-hour indicator
    const timeOptions = {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    const formattedTime = new Intl.DateTimeFormat('en-US', timeOptions).format(now);
    
    // Concatenate the date and time without a comma
    return `${formattedDate} ${formattedTime}`;
})();
//==== START TRANSFORM CODE - DO NOT REMOVE ====
}
//==== END TRANSFORM CODE ====