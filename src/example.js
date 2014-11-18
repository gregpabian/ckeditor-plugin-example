CKEDITOR.define( function() {
	'use strict';

	return {
		init: function( editor ) {
			console.log( 'init example for', editor );
			editor.addCommand( 'example', function( arg ) {
				console.log( 'example command called with:', arg );
			} );
		}
	};
} );
