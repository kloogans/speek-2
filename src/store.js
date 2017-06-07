import { observable } from 'mobx'
import db from './db'

// const WEATHER_API = '1cb1cacbf2aa4382fa6f3ce0c019a679'

class Store {
  @observable username = window.localStorage.getItem('username')
  @observable messages = {}
  @observable announcements = {}
  @observable bitcoinData = 0
  @observable etherData = 0
  @observable ltcData = 0

  load () {
    db.ref('messages').on('value', (snapshot) => {
      this.messages = snapshot.val()
    })
    db.ref('announcements').on('value', (snapshot) => {
      this.announcements = snapshot.val()
    })
    // Get bitcoin price
    const url = `http://api.coindesk.com/v1/bpi/currentprice.json`
    window.fetch(url)
  .then(r => r.json())
  .then(data => {
    const currency = Object.keys(data).map((key, i) => data[key])
    this.bitcoinData = currency[3].USD.rate_float.toFixed(2)
  })
  // Get Ethereum/Litecoin price
    const etherUrl = `https://poloniex.com/public?command=returnTicker`
    window.fetch(etherUrl)
.then(r => r.json())
.then(data => {
  let etherPrice = Number(data.USDT_ETH.last)
  let ltcPrice = Number(data.USDT_LTC.last)
  this.etherData = etherPrice.toFixed(2)
  this.ltcData = ltcPrice.toFixed(2)
})
// // Weather
//     const weatherURL = `https://api.darksky.net/forecast`
//     window.fetch(weatherURL)
// .then(r => r.json())
// .then(data => {
//   console.log(data)
// })
  }

  addMessage (text) {
    db.ref('messages').push().set({ text, username: this.username })
  }

  announceUser (message) {
    db.ref('messages').push().set({ bot: 'SpeekBot', message })
  }
}

const store = new Store()

export default store
