var app = angular.module('candlestick', ['nvd3']);

app.controller('MainCtrl', function ($scope, chartService) {
    var dataChart;
    chartService.get().then(function (res) {
        $scope.data = [JSON.parse(res.data[0])];
        $scope.options = {
            chart: {
                type: 'candlestickBarChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 66,
                    left: 60
                },
                x: function (d) { return d['date']; },
                y: function (d) { return d['close']; },
                duration: 100,

                xAxis: {
                    tickFormat: function (d) {
                        let date = new Date(d * 1000);
                        let year = date.getFullYear();
                        let month = date.getMonth();
                        let day = date.getDay();
                        let hours = date.getHours();
                        let minutes = (date.getMinutes() == 0) ? "00" : date.getMinutes();
                        let formattedTime = year + '/' + month + '/' + day + ' ' + hours + ':' + minutes;
                        return formattedTime;
                    },
                    showMaxMin: false
                },

                yAxis: {
                    tickFormat: function (d) {
                        return '$' + d3.format(',.1f')(d);
                    },
                    showMaxMin: false
                },

                zoom: {
                    enabled: true,
                    scaleExtent: [10, 200],
                    useFixedDomain: false,
                    useNiceScale: false,
                    horizontalOff: false,
                    verticalOff: true,
                    unzoomEventType: 'dblclick.zoom'
                }
            }
        };
    });
});
