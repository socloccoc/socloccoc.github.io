(function() {
    'use strict';

    angular
        .module('app.candlestick')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/candlestick/1D');
        $stateProvider
            .state('candlestick', {
                url: "/candlestick/:date",
                templateUrl: "app/candlestick/candlestick.html",
                controller: "CandlestickController",
                controllerAs: "vm"
            })
    }
})();