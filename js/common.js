

/**
 * [mobile nav toggle]
 */
$('[data-mobile="btn"]').on('click', function() {
	$('[data-mobile="nav"').toggleClass('mainHeaderNavShow');

	if($('[data-mobile="nav"').hasClass('mainHeaderNavShow')){
		$('[data-mobile="menu"').fadeIn()
	}

	else {
		$('[data-mobile="menu"').fadeOut()
	}
});

/**
 * slider init
 */

$('.owl-carousel').owlCarousel({
	loop: true,
	margin: 10,
	nav: false,
	items: 1,
	dots: true
})

/**
 * search result show
 */

function searchResultShow() {
	function searchCanselWatch() {
		$('[data-search="cansel"]').on('click', function(){
			$('[data-search="result"]').fadeOut()
		})
	}

	$('[data-search="btn"]').on('click', function(){
		$('[data-search="result"]').fadeIn()

		searchCanselWatch()
	})
}

searchResultShow()
