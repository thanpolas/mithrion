if ( ! $('.custom-select').length > 0 ) {
	$('.dropdown').wrap('<span class="custom-select"></span>').addClass('hidden-select').css('width','100%');
	$('.custom-select').prepend('<span class="custom-select-content"></span>');
	
	$('.custom-select').each(function(){
		var $this = $(this);
		$this.find('.custom-select-content').html($this.find('select option:selected').html());
	});
	
	$('select').on('change',function(){
		var $this = $(this);
		$this.closest('.custom-select').find('.custom-select-content').html($this.find('option:selected').html());
	});
}