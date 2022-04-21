import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import VueTextareaAutosize from 'vue-textarea-autosize';


Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyDT47-eSfdsbjw3uO68vHSoBVlDAYMj1oM",
  authDomain: "vue-calendar-6f06f.firebaseapp.com",
  projectId: "vue-calendar-6f06f",
  storageBucket: "vue-calendar-6f06f.appspot.com",
  messagingSenderId: "15994349727",
  appId: "1:15994349727:web:f5dafeb8b378b25a241aaa"
});

export const db = firebase.firestore();


new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
