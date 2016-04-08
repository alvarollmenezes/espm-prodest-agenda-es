
function routesConfig( $stateProvider, $urlRouterProvider ) {
    'ngInject';

    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise( '/agenda' );

    $stateProvider
        .state( 'espm', {
            url: '/',
            abstract: true,
            views: {
                page: {
                    //controller: 'EspmController as vm',
                    template: '<ui-view name="content"></ui-view>'
                }
            }
        } );
}

export default[ '$stateProvider', '$urlRouterProvider', routesConfig ];
