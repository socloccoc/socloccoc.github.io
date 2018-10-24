var app = angular.module("candlestick");

app.factory("chartService", ["$http", function($http){
    return {
        get : function(){
            return $http.get("https://coinzukan.xsrv.jp/api/candlestickData");
        }
    }
}]);
