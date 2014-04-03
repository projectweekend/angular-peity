var angularPeity = angular.module( 'angular-peity', [] );


var buildChartDirective = function ( chartType ) {
	return {
		restrict: 'E',
		scope: {
			data: "=",
			options: "="
		},
		link: function ( scope, element, attrs ) {

			var span = document.createElement( 'span' );
			span.textContent = scope.data;

            if (element[0].nodeType === 8) {
                element.replaceWith( span );
            } else {
                element[0].appendChild( span );
            }

            var options = {};
            if ( scope.options ) {
				options = scope.options;
            }

            jQuery( span ).peity( chartType, options );

		}
	};
};


angularPeity.directive( 'pieChart', function () {

	return buildChartDirective( "pie" );

} );


angularPeity.directive( 'barChart', function () {

	return buildChartDirective( "bar" );

} );


angularPeity.directive( 'lineChart', function () {

	return buildChartDirective( "line" );

} );
