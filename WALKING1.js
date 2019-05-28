// Build the chart
Highcharts.chart('container_walking1', {

    title: {
      text: 'Highcharts Sankey Diagram'
    },
    series: [{
      keys: ['from', 'to', 'weight'],
      data: [
        ['Walking Dead', 'Positive', 65],
        ['Walking Dead', 'Negative', 35],
        
        ['Positive', 'Anticipation', 31],
        ['Positive', 'Joy', 24],
        ['Positive', 'Surprise', 15],
        ['Positive', 'Trust', 30],
        
        ['Negative', 'Anger', 23],
        ['Negative', 'Sadness', 27],
        ['Negative', 'Disgust', 16],
        ['Negative', 'Fear', 34],
        
      ],
      type: 'sankey',
      name: 'Sentiment Analysis (%)'
    }]
  
  });
  