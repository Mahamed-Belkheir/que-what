$('#submit').on('click', function(){
	$('#search').slideUp(function(){
		listPhones();
		$('#list-p').slideDown(function(){
			
		});
	}
	)
})

$('#home-btn').on('click', function(){
	$('#list-p').slideUp(function(){
		listPhones();
		$('#search').slideDown(function(){
			
		});
	}
	)
})