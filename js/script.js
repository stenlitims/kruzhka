$(document).ready(function() {
	if($('a[href="#"]').length > 0){
		$(document).on('click', 'a[href="#"]',function(){
			return false;
		})
	}
    
    $('form').validate();
    
	 
		
});
