import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAtnZ5LCqLwHgej7PmXvYQvEjH9oWHI-_Q",
  authDomain: "expensiy1.firebaseapp.com",
  databaseURL: "https://expensiy1-default-rtdb.firebaseio.com",
  projectId: "expensiy1",
  storageBucket: "expensiy1.appspot.com",
  messagingSenderId: "481851046386",
  appId: "1:481851046386:web:db57188ec8a2849bca136b",
  measurementId: "G-BR0RRN0Y3B"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();


export { firebase,
  googleAuthProvider,
  facebookAuthProvider, 
  githubAuthProvider,
  twitterAuthProvider,
  database as default };

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// // database.ref('expenses').on('child_removed', (snapshot) => {
// //   console.log(snapshot.key, snapshot.val());
// // })

// // database.ref('expenses').on('value', (snapshot) => {
// //   const expenses = [];
// //   snapshot.forEach((childSnapshot) => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     })
// //   })
// //   console.log(expenses);
// // })


// database.ref('expenses').once('value').then((snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses);
// })



// // database.ref('expenses').push({
// //   description: 'Rent',
// //   notes: 'new 1',
// //   amount: 22,
// //   createdAt: 0
// // });

// // database.ref('expenses').push({
// //   description: 'Gas bill',
// //   notes: 'new 2',
// //   amount: 20,
// //   createdAt: 10
// // });

// // database.ref('expenses').push({
// //   description: 'Water bill',
// //   notes: 'new 3',
// //   amount: 34,
// //   createdAt: 10
// // });


// // database.ref().on('value', (snapshot) => {
// //   const data = snapshot.val();

// //   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// // })

// // database.ref()
// // .once('value')
// // .then((snapshot) => {
// //   const val = snapshot.val();
// //   console.log(val);
// // })
// // .catch((err) => {
// //   console.log('Error fetching data', err);
// // })



// // database.ref().set({
// //   name: "Saif Ali",
// //   age: 22,
// //   stressLevel: 6,
// //   job: {
// //     title: 'Software developer',
// //     company: 'Google'
// //   },
// //   location: {
// //     city: 'Basra',
// //     country: 'United State'
// //   }
// // }).then(() => {
// //   console.log('Data saved!')
// // }).catch((e) => {
// //   console.log('This faild', e)
// // })
// // database.ref().update({
// // stressLevel: 9,
// // 'job/company': 'Amazon',
// // 'location/city': 'Seattle'
// // })


// database.ref().remove().then(()=> {
//   console.log('Data deleted!')
// }).catch((e) => {
//   console.log('This faild', e)
// })

