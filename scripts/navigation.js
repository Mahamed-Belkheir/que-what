//add page navigation functionality to the buttons on the page


//the submit button in the search view
$('#submit').on('click', function(){
	$('#search').slideUp(function(){ //hide the search view
		listPhones(); //load all the phones relevant to the search
		$('#list-p').slideDown(); //slide down the results view
	}
	)
});

$('#home-btn').on('click', function(){
	$('#p-info').slideUp(function(){
		$('#search').slideDown();
	});

	$('#list-p').slideUp(function(){
		$('#search').slideDown();
	})
});

