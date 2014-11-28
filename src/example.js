CKE.define( [ 'mvc/plugin' ], function( Plugin ) {
	'use strict';

	return Plugin.extend( {
		init: function( done ) {
			console.log( 'start init example for', this.editor );

			// simulate an async initialization
			setTimeout( function() {
				console.log( 'done init example for', this.editor );

				this.editor.addCommand( 'example', function( arg ) {
					console.log( 'example command called with:', arg );
				} );

				done();
			}.bind( this ), 1000 );
		}
	}, {
		moduleMethod: function() {
			console.log( 'example.moduleAPIMethod was called' );
		}
	} );
} );
