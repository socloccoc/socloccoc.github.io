var app = angular.module("candlestick");

app.factory("chartService", ["$http", function($http){
    return {
        get : function(){
            return $http.get("http://coinzukan.xsrv.jp/api/candlestickData");
        }
    }
}]);
