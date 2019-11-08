var selectedPhoneId;

function displayPhone() {

	$('#phone-info').html('');

	var phone = db[selectedPhoneId];
	var phoneView = $('<div class="phone-view"></div>');
	var phoneDesc = $('<div class="phone-desc"></div>');

	phoneView.append('<img src='+phone.phoneProperty('img')+'>');
	phoneView.append(phoneDesc);

	phoneDesc.append('<h3>'+phone.phoneProperty('brand')+' '+phone.phoneProperty('model')+'</h3>');
	phoneDesc.append(`<div>
					<span>Camera: ${phone.phoneProperty('camera')} Screen: ${phone.phoneProperty('screen')}
					Battery: ${phone.phoneProperty('battery')} Performance: ${phone.phoneProperty('perf')}</span>
					<div>$${phone.phoneProperty('price')}</div></div>`);
	phoneDesc.append(`<p>${phone.phoneProperty('description')}</p>`)

	phoneView.append('<iframe width="500" height="350" src="'+phone.phoneProperty('review')+'"></iframe>')
	$('#phone-info').append(phoneView);

}