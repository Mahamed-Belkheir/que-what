function Phone(model, brand, camera, battery, screen, perf, price, description, img, review){
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
		review,

		phoneProperty:phoneProperty

	}
}

function phoneProperty(key, val){
	if(val===undefined)
		return this[key];
	this[key]=val;
}

var db = [
	Phone('Galaxy S10', 'Samsung', 9, 7, 10, 9, 900, "The 2019 Samsung flagship", "./img/phones/galaxy-s10.png", "https://www.youtube.com/embed/dr1Cwix16cQ"),
	Phone('Galaxy S10+', 'Samsung', 9, 9, 10, 9, 1000, "The plus sized 2019 Samsung flagship", "./img/phones/galaxy-s10+.png", "https://www.youtube.com/embed/dr1Cwix16cQ"),
	Phone('Mate 30 Pro', 'Huawei', 10, 9, 9, 7, 990, "Huawei's 2019 flagship camera focused phone", "./img/phones/mate-30-pro.png", "https://www.youtube.com/embed/Hd8iY2poH3U"),
	Phone('P30 Pro', 'Huawei', 10, 9, 7, 7, 900, "Huawei's 2019 P line camera phone", "./img/phones/p30-pro.png", "https://www.youtube.com/embed/11LqpZYj2VM"),
	Phone('Mi 9', 'Xiaomi', 8, 7, 8, 8, 400, "Xiaomi's Mi line 2019 flagship", "./img/phones/mi-9.png", "https://www.youtube.com/embed/MEXuh7KQQQ0"),
	Phone('7 Pro', 'OnePlus', 8, 8, 10, 10, 700, "OnePlus's high refresh rate flagship", "./img/phones/7-pro.png", "https://www.youtube.com/embed/mQekwMWXoHM"),
	Phone('Galaxy A50', 'Samsung', 4, 7, 7, 4, 300, "Samsung's 2019 Midrange smartphone", "./img/phones/galaxy-a50.png", "https://www.youtube.com/embed/lO6s0mRe-3c"),
	Phone('Galaxy A70', 'Samsung', 6, 7, 8, 6, 500, "Samsung's 2019 upper-midranger smartphone", "./img/phones/galaxy-a70.png", "https://www.youtube.com/embed/ITqmxZbBP7o"),
	Phone('Galaxy Note 10+', 'Samsung', 10, 8, 10, 9, 1000, "The 2019 Samsung note line flagship", "./img/phones/galaxy-note-10-plus.png", "https://www.youtube.com/embed/M-1bVi_trlw"),
	Phone('Pixel 4 XL', 'Google', 9, 4, 8, 9, 1000, "Google's photography focused Pixel flagship", "./img/phones/pixel-4-xl.png", "https://www.youtube.com/embed/mfbSqTB74xM"),
	Phone('Mi Note 10', 'Xiaomi', 10, 8, 8, 7, 400, "Xiaomi's photography focused upper-midranger", "./img/phones/mi-note-10.png", "https://www.youtube.com/embed/v2Xs-aIpscA"),
	//Phone('Redmi 8', 'Xiaomi', 3, 10, 4, 3, 120, "Xiaomi's entry level budget smartphone", "./img/phones/redmi-8.png", ""),
	Phone('Redmi Note 8 Pro', 'Xiaomi', 6, 10, 6, 7, 200, "Xiaomi's performance focused midranger", "./img/phones/redmi-note-8-pro.png", "https://www.youtube.com/embed/zYV0UnsJc7k"),
	Phone('iPhone 11 Pro Max', 'Apple', 10, 10, 9, 10, 1100, "Apple's plus sized flagship", "./img/phones/iphone-11-pro-max.png", "https://www.youtube.com/embed/e1-vykk8dy4"),

]