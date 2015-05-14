angular.module('App').controller('mainController', ['$scope', function($scope,uiCalendarConfig) {

    $scope.uiConfig = {
        calendar:{
            height: 700,
            editable: false,
            timezone:'America/Sao_Paulo',
            ignoreTimezone:false,
            header:{
                left: 'month basicWeek basicDay agendaWeek agendaDay',
                center: 'title',
                right: 'today prev,next'
            }

        }
    };


    $scope.eventSources = {
        googleCalendarApiKey: 'AIzaSyDQla3vMpeSZmdLQTCRiw5KaTYC7Z5aG8k',
        url: "http://www.google.com/calendar/feeds/agendaempreendedora2015%40gmail.com/public/basic",
        className: 'gcal-event',           // an option!
        currentTimezone: 'America/Sao_Paulo', // an option!
        lang: 'pt-br'
    };
}]);