import Highcharts from 'highcharts'
require('highcharts-more')(Highcharts)

const options = {
  chart: {
    type: 'spline'
  },
  title: {
    text: 'Live Bitcoin Price'
  },
  xAxis: {
    type: 'datetime'
  },
  yAxis: {
    title: {
      text: 'Price (USD)'
    }
  },
  legend: {
    enabled: false
  },
  exporting: {
    enabled: false
  },
  series: [{
    name: 'Live Bitcoint Price [USD]',
    data: []
  }]
}

const chart = Highcharts.chart('chart-container', options)

// Data
const getData = () => {
  setInterval(() => {
    window.fetch('https://api.cryptonator.com/api/ticker/btc-usd').then((response) => {
      return response.json()
    }).then((data) => {
      chart.series[0].addPoint({ x: data.timestamp * 1000, y: Number(data.ticker.price) })
    })
  }, 3000)
}

export default getData
