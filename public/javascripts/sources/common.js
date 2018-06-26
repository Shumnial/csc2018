$(() => {

	const materialsLink = $('.materials__link');
	const session = $('.session');

	function onMaterialsClick(evt) {
		evt.preventDefault();
		const target = $(this);
		const id = target.attr('href');
		const clickedSession = $('.materials').find(`.session[data-id=${id}]`);
		materialsLink.removeClass('materials__link--active');
		target.addClass('materials__link--active');
		session.removeClass('session--active');
		clickedSession.addClass('session--active');
	}

	materialsLink.on('click', onMaterialsClick);
})