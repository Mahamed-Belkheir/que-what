//function to list all the phones depending on user budget and 

function listPhones(){
	//empty the list-phones div
	$('#list-phones').html('')
	//filter the database for phones that fit within the user's inputted budget, and calculating the rating at the same time
	var searchArray = db.filter(function(element, i){
		element.id = i; //keep track of the phone's index in the actual array by storing it here

		//here we calculate each phone's rating by multiplying it's feature rating by the user's priority
		element.rating = Number(element.phoneProperty('camera')) * Number($('input[name=camera]:checked').val())
					   + Number(element.phoneProperty('battery')) * Number($('input[name=battery]:checked').val())
					   + Number(element.phoneProperty('screen')) * Number($('input[name=screen]:checked').val())
					   + Number(element.phoneProperty('perf')) * Number($('input[name=performance]:checked').val())
		//if a user inputted a budget, filter by it
		if($('[type=number]').val()!=='')
			return element.phoneProperty('price')<=$('[type=number]').val()
		//returning everything otherwise
		return element
	}).sort(function(a,b){
		return b.rating - a.rating; //sort the copy array by the user's rating
	});


	//here we start creating the divs of each search result, looping through the array of results
	//we create a div for each one
	searchArray.forEach(function(element, i){
		
		//the div that holds the entire search object
		var pItem = $('<div class="phone-item"></div>'); 

		//we append to the pItem div the item's image, and another div that contains the item's details
		pItem.append(`<img src='${element.phoneProperty('img')}'>`) 
		pItem.append(`<div class='desc'><div class="name">Model: ${element.phoneProperty('model')}</div>
					<span class="ratings">Camera: ${element.phoneProperty('camera')} Screen: ${element.phoneProperty('screen')}
					Battery: ${element.phoneProperty('battery')} Performance: ${element.phoneProperty('perf')}</span>
					<div>$${element.phoneProperty('price')}</div></div>`)

		//here we append a span showing the ranking of each phone
		pItem.append('<span class="ranking">#'+(i+1)+'<span>');
		
		//here we add a click functionality to the item, which hides the search result and goes to the phone info view
		pItem.on('click', function(){
			selectedPhoneId = element.id;
			$('#list-p').slideUp(function(){
				displayPhone();
				$('#p-info').slideDown();
			})
		})
		//append the item to the list phones view
		$('#list-phones').append(pItem);
	});
}

