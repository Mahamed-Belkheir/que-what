function Phone(model, brand, camera, battery, screen, perf, price, description, img){
	return {
		model,
		brand,
		camera,
		battery,
		screen,
		perf,
		price,
		description,
		img,

		phoneProperty:phoneProperty

	}
}

function phoneProperty(key, val){
	if(val===undefined)
		return this[key];
	this[key]=val;
}

var db = [
	Phone('Galaxy S10', 'Samsung', 9, 7, 10, 9, 900, "The 2019 Samsung flagship", "./img/phones/galaxy-s10.png"),
	Phone('Galaxy S10+', 'Samsung', 9, 9, 10, 9, 1000, "The plus sized 2019 Samsung flagship", "./img/phones/galaxy-s10+.png"),
	Phone('Mate 30 Pro', 'Huawei', 10, 9, 9, 7, 990, "Huawei's 2019 flagship camera focused phone", "./img/phones/mate-30-pro.png"),
	Phone('P30 Pro', 'Huawei', 10, 9, 7, 7, 900, "Huawei's 2019 P line camera phone", "./img/phones/p30-pro.png"),
	Phone('Mi 9', 'Xiaomi', 8, 7, 8, 8, 400, "Xiaomi's camera focused upper-midranger", "./img/phones/mi-9.png"),
	Phone('7 Pro', 'OnePlus', 8, 8, 10, 10, 700, "OnePlus's high refresh rate flagship", "./img/phones/7-pro.png"),
	// Phone('', 'Samsung', 9, 7, 10, 800, "The 2019 Samsung flagship"),
	// Phone('', 'Samsung', 9, 7, 10, 800, "The 2019 Samsung flagship"),
	// Phone('', 'Samsung', 9, 7, 10, 800, "The 2019 Samsung flagship"),
	// Phone('', 'Samsung', 9, 7, 10, 800, "The 2019 Samsung flagship"),
	// Phone('', 'Samsung', 9, 7, 10, 800, "The 2019 Samsung flagship"),

]