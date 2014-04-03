var angularPeity = angular.module( 'angular-peity', [] );


angularPeity.directive( 'pieChart', function () {
	return {
		restrict: 'E',
		scope: {
			data: "="
		},
		link: function ( scope, element, attrs ) {

			// make a span element for the chart
			var span = document.createElement( 'span' );
			span.textContent = scope.data;

			var options = {};
			if ( attrs.fill ) {
				options.fill = attrs.fill;
			}
			if ( attrs.diameter ) {
				options.diameter = attrs.diameter;
			}

			jQuery( span ).peity( "pie", options );

            if (element[0].nodeType === 8) {
                element.replaceWith( span );
            } else {
                element[0].appendChild( span );
            }

		}
	};
} );
