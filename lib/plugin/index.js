require( 'fullcalendar/fullcalendar/fullcalendar.css!' );
require( 'angular-bootstrap/ui-bootstrap-csp.css!' )
require( 'angular-bootstrap/ui-bootstrap-tpls' );
require( 'angular-ui/ui-calendar' );
require( 'fullcalendar/fullcalendar' );
require( 'fullcalendar/fullcalendar/lang/pt-br' );
require( 'angular-ui-router' );
require( './agenda.css!' );
require( './gcalc.js' );

var angular = require( 'angular' );
var AgendaController = require( './agenda.controller' );
var agendaRoutes = require( './agenda.routes' );

var dependencies = [
    'ui.router',
    'ui.calendar',
    'ui.bootstrap'
];

module.exports = angular.module( 'espm-plugin-agenda', dependencies )
                        .controller( 'agendaController', AgendaController )
                        .config( agendaRoutes );


//"overrides": {
//    "github:fullcalendar/fullcalendar@2.6.1": {
//        "main": "fullcalendar",
//        "registry": "jspm",
//        "format": "global",
//        "files": [
//          "lang",
//          "fullcalendar",
//          "fullcalendar.css"
//        ],
//        "dependencies": {
//            "moment": "^2.12.0"
//        }
//    }
//}