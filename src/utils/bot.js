import store from '../store'
import moment from 'moment'
import bitcoinPrice from './bitcoin'
const question = [
  'what time is it?',
  'whats up?',
  'what is the meaning of life',
  'fuck you speekbot',
  'whats the bitcoin price',
  'btc',
  'bitcoin price',
  'ethereum price',
  'litecoin price',
  'help'
]

const answer = [
  `it's ${moment().format('h:mmA')}`,
  'Just hanging out, chattin\'',
  '42',
  'That\'s not nice. Mind your tone.',
  `<div class="help">
  <img src="http://reactiongifs.me/wp-content/uploads/2014/06/it-crowd-maurice-moss-frustration-fuck-this.gif" />
  Looks like you need some help.<br />
  Here are commands you can use to call me:
  <ul>
    <h3>Informational queries</h3>
    <li><span class="title">help</span> - a command cheatsheet</li>
    <li><span class="title">bitcoin price</span> - pulls the latest BTC price via <a href="http://coindesk.com">coindesk</a></li>
    <li><span class="title">ethereum price</span> - pulls the latest ETC price via <a href="http://poloniex.com">poloniex</a></li>
    <li><span class="title">litecoin price</span> - pulls the latest LTC price via <a href="http://poloniex.com">poloniex</a></li>
  </ul>
  <ul>
    <h3>Personal queries</h3>
    <li><span class="title">@speekbot whats up?</span> - ask me what's up!</li>
    <li><span class="title">@speekbot what time is it?</span> - returns the current time</li>
    <li><span class="title">@speekbot what is the meaning of life?</span> - a robot's take on philosophy</li>
    <li><span class="title">@speekbot what is the weather?</span> - pulls the latest weather forecast (not yet available)</li>
  </ul>
</div>`
]

const whatsUp = [
  'Just hanging out, chattin\'',
  'Catching up on some news, you?',
  'Making pizza!',
  'Waiting for you to tell me what to do!',
  'Just being a robot slave, hbu?',
  'Watching M.A.S.H., shhhh.',
  'Making Play-Doe models of old ships.',
  'Wishing I could be hiking tbh.'
]

const botListener = (message) => {
  switch (true) {
    case message === '@speekbot ' + question[0].toLowerCase().replace(/[^\w\s]/gi, ''):
      setTimeout(() => {
        store.announceUser(`${answer[0]}`)
      }, 1000)
      break
    case message === '@speekbot ' + question[1].toLowerCase().replace(/[^\w\s]/gi, ''):
      setTimeout(() => {
        store.announceUser(`${whatsUp[Math.round(Math.random() * 8)]}`)
      }, 1000)
      break
    case message === question[2].toLowerCase().replace(/[^\w\s]/gi, ''):
      setTimeout(() => {
        store.announceUser(`${answer[2]}`)
      }, 1000)
      break
    case message === question[3].toLowerCase().replace(/[^\w\s]/gi, ''):
      setTimeout(() => {
        store.announceUser(`${answer[3]}`)
      }, 1000)
      break
    case message === question[6].toLowerCase().replace(/[^\w\s]/gi, ''):
      this.calledBot = true
      setTimeout(() => {
        bitcoinPrice()
        console.log(store.bitcoinData)
        store.announceUser(`The current Bitcoin price is $${store.bitcoinData}`)
      }, 1000)
      this.calledBot = false
      break
    case message === question[7].toLowerCase().replace(/[^\w\s]/gi, ''):
      setTimeout(() => {
        bitcoinPrice()
        console.log(store.bitcoinData)
        store.announceUser(`The current Ethereum price is $${store.etherData}`)
      }, 1000)
      break
    case message === question[8].toLowerCase().replace(/[^\w\s]/gi, ''):
      setTimeout(() => {
        bitcoinPrice()
        console.log(store.bitcoinData)
        store.announceUser(`The current Litecoin price is $${store.ltcData}`)
      }, 1000)
      break
    case message === question[9].toLowerCase().replace(/[^\w\s]/gi, ''):
      setTimeout(() => {
        store.announceUser(`${answer[4]}`)
      }, 1000)
      break
    default:
      return null
  }
}

export default botListener
