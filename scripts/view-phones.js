function listPhones(){

	db.forEach(function(element, i){

		var pItem = $('<div class="phone-item"></div>');
		pItem.append(`<img src='${element.phoneProperty('img')}'>`)
		pItem.append(`<div class='desc'><div class="name">Model: ${element.phoneProperty('model')}</div>
					<span class="ratings">Camera: ${element.phoneProperty('camera')} Screen: ${element.phoneProperty('screen')}
					Battery: ${element.phoneProperty('battery')} Performance: ${element.phoneProperty('perf')}</span>
					</div>`)


		$('#list-phones').append(pItem);
	});
}

