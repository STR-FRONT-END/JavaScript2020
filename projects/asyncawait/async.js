// let time = 0;
// const timeMachine = () => {
// return new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve((time += 1000));
//   }, 1000);
// });
// };


// timeMachine();
// console.log(time); // OUTPUTS: 0;

// timeMachine()
//     .then(newTime => {
//        console.log(newTime); // OUTPUTS: 1000 
//     });


// timeMachine()
//   .then(newTime => {
//     const myTime = newTime / 1000;
//     return `${myTime} seconds have passed`;
//   })
//   .then(newString => {
//     console.log(newString); //OUTPUTS ​​​​​"1 seconds have passed​​​​​"
//   });

















const timeMachine = time => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (time >= 1000) {
          resolve(time);
        } else {
          reject('Not Enough time given')
        }
      }, time);
    });
    };


    timeMachine(2000)
  .then(newTime => {
    const myTime = newTime / 1000;
   console.log(`${myTime} seconds have passed`);
  })
  .catch(err => {
    console.log(err); //OUTPUTS ​​​​​"1 seconds have passed​​​​​"
  });