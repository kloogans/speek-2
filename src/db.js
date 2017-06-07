import * as firebase from 'firebase'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDogAtK4hVuw-_uiI4D5K0NWZc9j8gZUzU',
  authDomain: 'speek2-5f7d5.firebaseapp.com',
  databaseURL: 'https://speek2-5f7d5.firebaseio.com'
})

export default app.database()
