// Build the chart
    Highcharts.chart('container_stranger1', {

        title: {
          text: 'Stranger Things Sankey Diagram'
        },
        series: [{
          keys: ['from', 'to', 'weight'],
          data: [
            ['Stranger Things', 'Positive', 52],
            ['Stranger Things', 'Negative', 48],
            
            ['Positive', 'Anticipation', 26],
            ['Positive', 'Joy', 22],
            ['Positive', 'Surprise', 14],
            ['Positive', 'Trust', 28],
            
            ['Negative', 'Anger', 19],
            ['Negative', 'Sadness', 20],
            ['Negative', 'Disgust', 14],
            ['Negative', 'Fear', 47],
            
          ],
          type: 'sankey',
          name: 'Sentiment Analysis (%)'
        }]
      
      });