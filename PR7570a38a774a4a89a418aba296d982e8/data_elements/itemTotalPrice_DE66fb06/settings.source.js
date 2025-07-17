//==== START TRANSFORM CODE - DO NOT REMOVE ====
function () {
//==== END TRANSFORM CODE ====
if (window.digitalData && digitalData.eCommerce && digitalData.eCommerce.item) {
	var totalProductPrice = 0;
	for (i=0;i<digitalData.eCommerce.item.length;i++) {
		totalProductPrice += parseFloat(digitalData.eCommerce.item[i].productInfo.price);
	}
	return totalProductPrice;
}
//==== START TRANSFORM CODE - DO NOT REMOVE ====
}
//==== END TRANSFORM CODE ====