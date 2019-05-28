// Build the chart
Highcharts.chart('container_greys', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Greys Anatomy Sentiment by Emotion'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Emotions',
        colorByPoint: true,
        data: [{
            name: 'Anticipation',
            y: 15.2,
            sliced: true,
            selected: true
        }, {
            name: 'Anger',
            y: 10.7
        }, {
            name: 'Trust',
            y: 18.5
        }, {
            name: 'Surprise',
            y: 7.7
        }, {
            name: 'Sadness',
            y: 11.6
        }, {
            name: 'Joy',
            y: 14.3
        },{
            name: 'Fear',
            y: 13.3
        },{
            name: 'Disgust',
            y: 8.6
        }]
    }]
});