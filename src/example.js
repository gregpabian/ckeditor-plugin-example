CKEDITOR.define( function() {
	'use strict';

	return {
		init: function( editor, done ) {
			console.log( 'start init example for', editor );

			// simulate an async initialization
			setTimeout( function() {
				console.log( 'done init example for', editor );
				editor.addCommand( 'example', function( arg ) {
					console.log( 'example command called with:', arg );
				} );
				done();
			}, 1000 );
		}
	};
} );
