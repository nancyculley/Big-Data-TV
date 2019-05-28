// Build the chart
Highcharts.chart('container_got', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Game of Thrones Sentiment by Emotion'
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
            y: 16.5,
            sliced: true,
            selected: true
        }, {
            name: 'Anger',
            y: 9.2
        }, {
            name: 'Trust',
            y: 21.8
        }, {
            name: 'Surprise',
            y: 8.3
        }, {
            name: 'Sadness',
            y: 12.0
        }, {
            name: 'Joy',
            y: 12.1
        },{
            name: 'Fear',
            y: 12.9
        },{
            name: 'Disgust',
            y: 7.2
        }]
    }]
});