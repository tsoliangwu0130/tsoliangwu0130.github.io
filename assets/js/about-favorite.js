$(function () {
	$('#favorite-chart').highcharts({
		chart: {
			type: 'bar',
			backgroundColor: null,
			style: {
				fontFamily: '"Open Sans", "Helvetica", "sans-serif"',
			},
			height: 320
		},
		title: {
			text: null
		},
		subtitle: {
			text: null
		},
		xAxis: {
			categories: ['Beer', 'Photoshop', 'LEGO', 'Python', 'Mellie'],
			title: {
				text: null
			},
			labels: {
				style: {
					color: 'white'
				}
			}
		},
		yAxis: {
			title: {
				text: null,
			},
			gridLineWidth: 0.5,
			labels: {
				style: {
					color: 'white'
				}
			},
			max: 10
		},
		plotOptions: {
			bar: {
				colorByPoint: true,
				colors: ['#DAA520', '#89A54E', '#4572A7', '#DB843D', '#AA4643']
			},
			series: {
				stacking: 'normal',
				borderColor: null,
				animation: {
					duration: 2000,
				}
			},
		},
		tooltip: { 
			enabled: false 
		},
		exporting: { 
			enabled: false 
		},
		credits: {
			enabled: false
		},
		series: [{
			showInLegend: false, 
			name: 'Tso-Liang',
			color: '#EE7600',
			data: [8.2, 1.5, 8.5, 9, 10],
			pointWidth: 20
		}]
	});
});