function calcTotalPrice(){

	totalPrice1 = 0;
	for(i=0; i<20; i++){
		priceIdStr = "price" + (i+1).toString();
		price1 = document.getElementById(priceIdStr);
		
		totalPrice1 += Number(price1.value)
	}
	
	sharei1 = Number(document.getElementById("haitatuSharei1").value);
	totalPrice1 += sharei1;
	
	span1 = document.getElementById("totalPrice1");
	span1.innerHTML = totalPrice1
	
	return totalPrice1
}