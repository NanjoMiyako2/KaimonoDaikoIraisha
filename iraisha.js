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

function OutputStr(){

	total1 = calcTotalPrice();
	
	outStr = "";
	
	for(i=0; i<20; i++){
		priceIdStr = "price" + (i+1).toString();
		nameStr = "buppin"+(i+1).toString();
		
		price1 = document.getElementById(priceIdStr);
		name1 = document.getElementById(nameStr);

		if(Number(price1.value) > 0){
			outStr += "品物"+(i+1).toString()+":"+name1.value+":"+Number(price1.value)+"円\r\n"
		}
	}
	
	outStr += "\r\n合計金額:" + total1.toString() + "円\r\n";
	
	textArea1 = document.getElementById("TextArea1");
	textArea1.value=outStr;
	
	
}