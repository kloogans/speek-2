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
  'litecoin price'
]

const answer = [
  `it's ${moment().format('h:mmA')}`,
  'Just hanging out, chattin\'',
  '42',
  'That\'s not nice. Mind your tone.',
  `the current price is $${store.bitcoinData}`
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
    default:
      return null
  }
}

export default botListener
