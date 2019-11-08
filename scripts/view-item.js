//variable to hold the ID of the selected phone to view
var selectedPhoneId;


//a function that checks for the selected phone id and display all it's information inside the phone-info view
function displayPhone() {

	//clear the phone info div from any previous data
	$('#phone-info').html('');

	//retrieve the phone object from the array using the selectedPhoneId value
	var phone = db[selectedPhoneId];

	//create two new divs, one to hold everything, and one to hold the phone's information
	var phoneView = $('<div class="phone-view"></div>');
	var phoneDesc = $('<div class="phone-desc"></div>');

	//append an image of the phone to the phoneView div and then append the phoneDesc div too
	phoneView.append('<img src='+phone.phoneProperty('img')+'>');
	phoneView.append(phoneDesc);

	//start appending the phone's data into the phoneDesc div
	phoneDesc.append('<h3>'+phone.phoneProperty('brand')+' '+phone.phoneProperty('model')+'</h3>');
	phoneDesc.append(`<div>
					<span>Camera: ${phone.phoneProperty('camera')} Screen: ${phone.phoneProperty('screen')}
					Battery: ${phone.phoneProperty('battery')} Performance: ${phone.phoneProperty('perf')}</span>
					<div>$${phone.phoneProperty('price')}</div></div>`);
	phoneDesc.append(`<p>${phone.phoneProperty('description')}</p>`)

	//append a video to the phoneView div that includes the phone's review link
	phoneView.append('<iframe width="500" height="350" src="'+phone.phoneProperty('review')+'"></iframe>')
	
	//append the final phoneView div to the phone info view
	$('#phone-info').append(phoneView);
}