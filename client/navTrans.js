// originally tried Template.homeLayout.transitions

// .transition is deprecated in current Blaze

Template.homeLayout.helpers = function() {
	return function(from, to, element) {
 // return 'iron-router';

  // or

	  return {
	    with: 'fade',
	    extra: 'options-for-plugin'
	  }
	} 
}