function listPhones(){

	$('#list-phones').html('')
	
	 searchArray = db.filter(function(element, i){
		element.id = i;
		element.rating = Number(element.phoneProperty('camera')) * Number($('input[name=camera]:checked').val())
					   + Number(element.phoneProperty('battery')) * Number($('input[name=battery]:checked').val())
					   + Number(element.phoneProperty('screen')) * Number($('input[name=screen]:checked').val())
					   + Number(element.phoneProperty('perf')) * Number($('input[name=performance]:checked').val())
		return element.phoneProperty('price')<=$('[type=number]').val()
	}).sort(function(a,b){
		return b.rating - a.rating;
	});

	searchArray.forEach(function(element, i){

		var pItem = $('<div class="phone-item"></div>');
		pItem.append(`<img src='${element.phoneProperty('img')}'>`)
		pItem.append(`<div class='desc'><div class="name">Model: ${element.phoneProperty('model')}</div>
					<span class="ratings">Camera: ${element.phoneProperty('camera')} Screen: ${element.phoneProperty('screen')}
					Battery: ${element.phoneProperty('battery')} Performance: ${element.phoneProperty('perf')}</span>
					<div>$${element.phoneProperty('price')}</div></div>`)

		pItem.on('click', function(){
			selectedPhoneId = element.id;
			$('#list-p').slideUp(function(){
				displayPhone();
				$('#p-info').slideDown();
			})
		})

		$('#list-phones').append(pItem);
	});
}

	var searchArray