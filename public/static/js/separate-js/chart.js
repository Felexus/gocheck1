var ctx = document.getElementById("myChart-1");
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["1 июн", "2 июн", "3 июн", "4 июн", "5 июн", "6 июн"],
			datasets: [{
				// label: '# of Votes',
				data: [100, 200, 400, 400, 500, 700],
				backgroundColor: [
					'rgba(187, 65, 193, 0.12)',
				],
				borderColor: [
					'rgb(187, 65, 193)',
				],
				pointBackgroundColor: 'rgb(187, 65, 193)',
				pointRadius: 8,
				pointBorderWidth: 3,
				pointBorderColor: "#fff",
			}]
		},
		options: {
			legend: {
				display: false
			},
			scales: {
				yAxes: [{
					
					ticks: {
						callback: function (value, index, values) {
							return (value % 2 === 0) ? value : "";
						},
						beginAtZero:true,
						autoSkip: false,
					}
				}],
				xAxes: [{
					gridLines: {
						drawBorder: false,
					},
				}],
			}
		}
	});

	var ctx = document.getElementById("myChart-2");
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["1 июн", "2 июн", "3 июн", "4 июн", "5 июн", "6 июн"],
			datasets: [{
				label: "",
				data: [100, 200, 400, 400, 500, 700],
				backgroundColor: [
					'transparent',
				],
				borderColor: [
					'rgb(187, 65, 193)',
				],
				pointBackgroundColor: 'rgb(187, 65, 193)',
				pointRadius: 8,
				pointBorderWidth: 3,
				pointBorderColor: "#fff",
			}]
		},
		options: {
			legend: {
				display: false
			},
			scales: {
				yAxes: [{
					
					ticks: {
						callback: function (value, index, values) {
							return (value % 2 === 0) ? value : "";
						},
						beginAtZero:true,
						autoSkip: false,
					}
				}],
				xAxes: [{
					gridLines: {
						drawBorder: false,
					},
				}],
			}
		}
	});

	var ctx = document.getElementById("myChart-4");
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["1 июн", "2 июн", "3 июн", "4 июн", "5 июн", "6 июн", "7 июн"],
			datasets: [{
				label: "",
				data: [100, 200, 130, 400, 200, 500, 700],
				backgroundColor: [
					'rgba(187, 65, 193, 0.12)',
				],
				borderColor: [
					'rgb(187, 65, 193)',
				],
				pointBackgroundColor: 'rgb(187, 65, 193)',
				pointRadius: 8,
				pointBorderWidth: 3,
				pointBorderColor: "#fff",
			}]
		},
		options: {
			legend: {
				display: false
			},
			elements: {
				line: {
					tension: 0
				}
			},
			scales: {
				yAxes: [{
					
					ticks: {
						callback: function (value, index, values) {
							return (value % 2 === 0) ? value : "";
						},
						beginAtZero:true,
						autoSkip: false,
					}
				}],
				xAxes: [{
					gridLines: {
						drawBorder: false,
					},
				}],
			}
		}
	});

	var ctx = document.getElementById("myChart-3");
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ["2:00", "5:00", "8:00", "11:00", "17:00", "20:00", "23:00"],
			datasets: [{
				label: "",
				data: [
					100,
					 200,
					 400,
					 400,
					 500,
					 400,
					 500,
					 400,
					 500,
					 400,
					 500,
					 400,
					 500,
					 400,
					 500,
					 700
				],
				backgroundColor: [
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)'
				],
				borderColor: [
				],
				pointBackgroundColor: 'rgb(187, 65, 193)',
				pointRadius: 8,
				pointBorderWidth: 3,
				pointBorderColor: "#fff",
			}]
		},
		options: {
			legend: {
				display: false
			},
			scales: {
				yAxes: [{
						
					ticks: {
						callback: function (value, index, values) {
							return (value % 2 === 0) ? value : "";
						},
						beginAtZero:true,
						autoSkip: false,
					}
				}],
				xAxes: [{
					gridLines: {
						drawBorder: false,
					},
				}],
			}
		}
	});
	
	

	var data = [
		{ y: '2014', a: 50,},
		{ y: '2015', a: 65, },
		{ y: '2016', a: 50, },
		{ y: '2017', a: 75, },
		{ y: '2018', a: 80, },
		{ y: '2019', a: 90, },
		{ y: '2020', a: 100,},
		{ y: '2021', a: 115,},
		{ y: '2022', a: 120,},
		{ y: '2023', a: 145,},
		{ y: '2024', a: 160,},
		{ y: '2024', a: 160,},
		{ y: '2024', a: 160,},
		{ y: '2024', a: 160,},
		{ y: '2024', a: 160,},
		{ y: '2024', a: 160,},
		{ y: '2024', a: 160,},
		{ y: '2024', a: 160,},
		{ y: '2024', a: 160,},
	  ],
	  config = {
		data: data,
		labels: ['Total Income', 'Total Outcome'],
		fillOpacity: 0.12,
		hideHover: 'auto',
		behaveLikeLine: true,
		resize: true,
		pointFillColors:['#00CEF9'],
		pointStrokeColors: ['white'],
		lineColors:['#00CEF9'],
		xkey: 'y',
		ykeys: ['a'],
		labels: ['Value']
	};
  config.element = 'area-chart';
  Morris.Area(config);
  config.element = 'area-chart-1';
  Morris.Area(config);
  config.element = 'bar-chart';
  Morris.Bar(config);
  config.element = 'stacked';
  config.stacked = true;
  Morris.Bar(config);
  Morris.Donut({
	element: 'pie-chart',
	data: [
	  {label: "Friends", value: 30},
	  {label: "Allies", value: 15},
	  {label: "Enemies", value: 45},
	  {label: "Neutral", value: 10}
	]
  });