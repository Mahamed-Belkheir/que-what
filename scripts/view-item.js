var selectedPhoneId;

function displayPhone() {

	$('#phone-info').html('');

	var phone = db[selectedPhoneId];
	var phoneView = $('<div class="phone-view"></div>');
	var phoneDesc = $('<div class="phone-desc"></div>');

	phoneView.append('<img src='+phone.phoneProperty('img')+'>');
	phoneView.append(phoneDesc);

	phoneDesc.append('<h3>'+phone.phoneProperty('brand')+' '+phone.phoneProperty('model')+'</h3>');
	phoneDesc.append(`<div class='desc'><div class="name">Model: ${phone.phoneProperty('model')}</div>
					<span class="ratings">Camera: ${phone.phoneProperty('camera')} Screen: ${phone.phoneProperty('screen')}
					Battery: ${phone.phoneProperty('battery')} Performance: ${phone.phoneProperty('perf')}</span>
					<div>$${phone.phoneProperty('price')}</div></div>`);
	phoneDesc.append(`<p>${phone.phoneProperty('description')}</p>`)

	$('#phone-info').append(phoneView);

}