var template = require( './agenda.tpl.html!text' );

/**
 * Rotas para o plugin
 * @param {Object} $stateProvider - ui-route $stateProvider.
 * @returns {void}
 */
function agendaRoutes( $stateProvider ) {
    $stateProvider
        .state( 'espm.agenda-principal', {
            url: 'agenda',
            data: { title: 'Agenda' },
            views: {
                content: {
                    controller: 'agendaController as vm',
                    template: template
                }
            }
        } );
}

module.exports = [ '$stateProvider', agendaRoutes ];

