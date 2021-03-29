import { reactive } from 'vue'
import { firebase } from 'boot/configFirebase.js'
import { useRouter } from 'vue-router'

const state = reactive({

  contacts: [ {
    id: 5,
    name: 'Brunhilde Panswick',
    email: 'bpanswick4@csmonitor.com',
    avatar: 'avatar2.jpg'
  }, {
    id: 6,
    name: 'Winfield Stapforth',
    email: 'wstapforth5@pcworld.com',
    avatar: 'avatar6.jpg'
  } ]

})

const actions = {

  handleAuthStateChanged() {


    const router = useRouter()

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {

        console.log('Activo')
        router.push('/')

      } else {

        router.push('/Login')

      }
    });

  },

  Login(payload) {

    console.log('Login')

    const { email, pass} = payload

    firebase.auth().signInWithEmailAndPassword(email, pass)
    .then((user) => {
      // Signed in
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });

  },

  Register(payload) {

    console.log(payload)
    const { email, pass } = payload

    console.log(email, pass)

    firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then((user) => {
      // Signed in
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });

  },

  logOut() {
    firebase.auth().signOut()
  }

}

export default {
  state,
  actions
}
