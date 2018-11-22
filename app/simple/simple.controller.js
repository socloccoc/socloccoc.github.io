
(function () {
	'use strict';

	angular.module('app.simple')
		.controller('SimpleController', function (simpleService, $stateParams) {
			var vm = this;
			vm.date = $stateParams.date;
			vm.myFunc = function () {
				var data = [
					{
						key: 'price',
						values: [
							{ x: 1542698100, y: 78 },
							{ x: 1542699000, y: 3 },
							{ x: 1542699900, y: 4 },
							{ x: 1542700800, y: 45 },
							{ x: 1542701700, y: 56 },
							{ x: 1542702600, y: 3 },
							{ x: 1542703500, y: 43 },
							{ x: 1542704400, y: 1 },
							{ x: 1542705300, y: 34 },
							{ x: 1542706200, y: 32 },
							{ x: 1542707100, y: 65 },
							{ x: 1542708000, y: 16 },
							{ x: 1542708900, y: 43 },
							{ x: 1542709800, y: 21 },
							{ x: 1542710700, y: 97 },
						]
					}];

				vm.data = data;

				vm.options = {
					chart: {
						type: 'lineWithFocusChart',
						height: 450,

						margin: {
							top: 20,
							right: 20,
							bottom: 60,
							left: 40
						},

						duration: 50,

						xAxis: {
							axisLabel: '',
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

						x2Axis: {
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
							axisLabel: '',
							tickFormat: function (d) {
								return d3.format(',f')(d);
							},
							rotateYLabel: false,
							showMaxMin: false
						},

						y2Axis: {
							tickFormat: function (d) {
								return d3.format(',f')(d);
							},
							showMaxMin: false
						},
						showLegend: false

					}
				};
			}
		});
})();