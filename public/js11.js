console.log("Hello")

// promise

// const server = {
//   getData() {
//     return new Promise((res, rej) => {
//       setTimeout(() => {
//         res('data from server');
//         // rej('something went wrong');
//       }, 1000);
//     });
//   },
// };
// const [title, setTitle] = use('')

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res('data from pr');
//     // rej('something went wrong');
//   }, 2000);
// });

// server
//   .getData()
//   .then((title) => {
//     console.log('then1');
// return 10;
// })
// .then((data) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(console.log('then2'));
//       // rej('something went wrong');
//     }, 3000);
//   });
// })
// .then((data) => {
//   const pr = new Promise((res, rej) => {
//     setTimeout(() => {
//       res(console.log('then3'));
//       // rej('something went wrong');
//     }, 4000);
//   });
// })
// // .catch((err) => {
// //   console.log(err);
// // })
// // .then(() => {
// //   console.log('4');
// // })
// .finally(() => {
//   console.log('finally');
// });
//
// import React from 'react'
// import fetch from 'node-fetch';
//
//
// const promise1 = fetch('https://googfle.com/query=js');
// const promise2 = fetch('https://yahoo.com/query=js');
// const promise3 = fetch('https://duckduckgo12.com/query=js');
//
// const superPromise = Promise.all([promise1, promise2, promise3]);
//
// superPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const superPromise2 = Promise.allSettled([promise1, promise2, promise3]);

// superPromise2.then((data) => {
//   console.log(data);
// });

// const superPromise3 = Promise.race([promise1, promise2, promise3]);

// superPromise3
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const promise1 = fetch('https://googfle.com/query=js');
// const promise2 = fetch('https://yahoo.com/query=js');
// const promise3 = fetch('https://duckduckgo12.com/query=js');

// const someFunction = async () => {
//   try {
//     const dataFromGoogle = await fetch('https://google.com/query=js');
//     const dataFromYahoo = await fetch('https://yahoo.com/query=js');
//     const dataFromDuck = await fetch('https://duckduckgo.com/query=js');
//     return dataFromGoogle;
//   } catch (err) {
//     console.log('something went wrong', err);
//   }
// };
//
// someFunction().then((data) => {
//   console.log(data);
// });
