

function agendaConfig( $stateProvider ) {
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

module.exports = [
    '$stateProvider',
    agendaRoutes
];
