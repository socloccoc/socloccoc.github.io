
(function () {
	'use strict';

	angular.module('app.candlestick')
		.controller('CandlestickController', function (candlestickService, $stateParams) {
			var vm = this;
			vm.date = $stateParams.date;
			console.log(vm.date);
			// default, show candlestick in one day
			vm.myFunc = function () {
				candlestickService.get($stateParams.date).then(function (res) {
					vm.data = [JSON.parse(res.data[0])];
					vm.options = {
						chart: {
							type: 'candlestickBarChart',
							height: 550,
							margin: {
								top: 20,
								right: 20,
								bottom: 66,
								left: 60
							},
							x: function (d) { return d['date']; },
							y: function (d) { return d['close']; },
							duration: 100,
							focusEnable: true,
							xAxis: {
								tickFormat: function (d) {
									let date = new Date(d * 1000);
									let year = date.getFullYear();
									let month = date.getMonth();
									let day = date.getDate();
									let hours = date.getHours();
									let minutes = (date.getMinutes() == 0) ? "00" : date.getMinutes();
									let formattedTime = day + ' ' + hours + ':' + minutes;
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
								scaleExtent: [1, 10],
								useFixedDomain: false,
								useNiceScale: false,
								horizontalOff: false,
								verticalOff: true,
								unzoomEventType: 'dblclick.zoom'
							}
						}
					};

				});
			}
		});

})();