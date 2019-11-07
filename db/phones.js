function Phone(model, brand, camera, battery, screen, price, description){
	return {
		model,
		brand,
		camera,
		battery,
		screen,
		price,
		description,

		phoneProperty:phoneProperty

	}
}

function phoneProperty(key, val){
	if(val===undefined)
		return this[key];
	this[key]=val;
}

var db = [
	Phone('Galaxy S10', 'Samsung', 9, 7, 10, 900, "The 2019 Samsung flagship"),
	Phone('Galaxy S10+', 'Samsung', 9, 9, 10, 1000, "The plus sized 2019 Samsung flagship"),
	Phone('Galaxy A50', 'Samsung', 4, 7, 7, 200, "A 2019 samsung midranger"),
	Phone('Mate 30 Pro', 'Huawei', 10, 9, 9, 990, "Huawei's 2019 flagship camera focused phone"),
	Phone('P30 Pro', 'Huawei', 10, 9, 7, 900, "Huawei's 2019 P line camera phone"),
	Phone('Mi Note 10', 'Xiaomi', 10, 7, 8, 400, "Xiaomi's camera focused upper-midranger"),
	Phone('7 Pro', 'OnePlus', 8, 8, 10, 700, "OnePlus's high refresh rate flagship"),
	// Phone('', 'Samsung', 9, 7, 10, 800, "The 2019 Samsung flagship"),
	// Phone('', 'Samsung', 9, 7, 10, 800, "The 2019 Samsung flagship"),
	// Phone('', 'Samsung', 9, 7, 10, 800, "The 2019 Samsung flagship"),
	// Phone('', 'Samsung', 9, 7, 10, 800, "The 2019 Samsung flagship"),
	// Phone('', 'Samsung', 9, 7, 10, 800, "The 2019 Samsung flagship"),

]