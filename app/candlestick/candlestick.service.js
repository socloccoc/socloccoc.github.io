(function () {
    'use strict';

    angular.module('app.candlestick').factory('candlestickService', candlestickService);
    candlestickService.$inject = ['$http', '$localStorage'];

    function candlestickService($http, $localStorage) {
        return {
            
            get: function (date) {
                return $http.get("http://coinzukan.xsrv.jp/api/candlestickData/" + date);
            }
        }
    }

})()
