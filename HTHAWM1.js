// Build the chart
    Highcharts.chart('container_murder1', {

        title: {
          text: 'How to Get Away with Murder Sankey Diagram'
        },
        series: [{
          keys: ['from', 'to', 'weight'],
          data: [
            ['HTGAWM', 'Positive', 58],
            ['HTGAWM', 'Negative', 42],
            
            ['Positive', 'Anticipation', 28],
            ['Positive', 'Joy', 24],
            ['Positive', 'Surprise', 17],
            ['Positive', 'Trust', 31],
            
            ['Negative', 'Anger', 25],
            ['Negative', 'Sadness', 26],
            ['Negative', 'Disgust', 21],
            ['Negative', 'Fear', 28],
            
          ],
          type: 'sankey',
          name: 'Sentiment Analysis (%)'
        }]
      
      });