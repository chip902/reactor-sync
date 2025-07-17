//==== START TRANSFORM CODE - DO NOT REMOVE ====
function (event) {
//==== END TRANSFORM CODE ====
var cart = digitalData.eCommerce.item || [];
var total = 0;
for (var i = 0; i < cart.length; i++) {
    total += Number(cart[i].productInfo.price);
}
return total;
//==== START TRANSFORM CODE - DO NOT REMOVE ====
}
//==== END TRANSFORM CODE ====