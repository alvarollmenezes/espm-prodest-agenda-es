var angular = require( 'angular' );
var AgendaController = require( './agenda.controller.js' );
var agendaRoutes = require( './agenda.routes.js' );
require( './agenda.assets' );

//noinspection Eslint
module.exports = angular.module( 'espm-plugin-agenda', [ 'ui.router', 'ui.calendar' ] )
                        .controller( 'agendaController', AgendaController )
                        .config( agendaRoutes );

//"overrides": {
//    "github:fullcalendar/fullcalendar@2.6.1": {
//        "main": "fullcalendar",
//        "registry": "jspm",
//        "format": "cjs",
//        "files": [
//          "lang",
//          "fullcalendar",
//          "fullcalendar.css"
//        ],
//        "dependencies": {
//            "moment": "^2.12.0",
//            "jquery": "^2.2.3"
//        }
//    }
//
