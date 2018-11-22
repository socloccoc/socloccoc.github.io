(function () {
    'use strict';

    angular.module('app.simple').factory('simpleService', simpleService);
    simpleService.$inject = ['$http', '$localStorage'];

    function simpleService($http, $localStorage) {
        return {
            
            get: function (date) {
                return $http.get("http://coinzukan.xsrv.jp/api/candlestickData1/" + date);
            }
        }
    }

})()