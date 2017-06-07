import store from '../store'

const bitcoinPrice = () => {
  const url = `http://api.coindesk.com/v1/bpi/currentprice.json`
  window.fetch(url)
.then(r => r.json())
.then(data => {
  const currency = Object.keys(data).map((key, i) => data[key])
  // console.log(currency[3].USD.rate_float)
  store.bitcoinData = currency[3].USD.rate_float
})
}
export default bitcoinPrice
