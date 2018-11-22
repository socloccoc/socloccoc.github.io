(function() {
    'use strict';

    angular
        .module('app.simple')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider) {
        // $urlRouterProvider.otherwise('/simple');
        $stateProvider
            .state('simple', {
                url: "/simple",
                templateUrl: "app/simple/simple.html",
                controller: "SimpleController",
                controllerAs: "vm"
            })
    }
})();