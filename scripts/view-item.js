var selectedPhoneId;

function displayPhone() {

	$('#phone-info').html('');
	
	var phone = db[selectedPhoneId];
	var phoneView = $('<div class="phone-view"></div>');
	var phoneDesc = $('<div class="phone-desc"></div>');

	phoneView.append('<img src='+phone.phoneProperty('img')+'>');
	phoneView.append(phoneDesc);

	phoneDesc.append('<h3>'+phone.phoneProperty('brand')+' '+phone.phoneProperty('model')+'</h3>');

	$('#phone-info').append(phoneView);

}