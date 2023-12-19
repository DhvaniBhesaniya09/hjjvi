// // console.log("hello")

// // setTimeout(function(){
// //     console.log("hello in 2 sec")

// // }, 1000)

// // console.log("dhvani")


// let p1  = new Promise((resolve,reject)=>{
//     console.log("Promiseis pending")
//     setTimeout(()=>{
//         // console.log("promise is resolved")
//         resolve(true)
//     },5000)
// })

// let p2  = new Promise((resolve,reject)=>{
//     console.log("Promiseis pending")
//     setTimeout(()=>{
//         // console.log("promise is rejected")
//         reject(new Error("i am error"))
//     },5000)
// })

// p1.then((value)=>{
//  console.log(value)
// })


// p2.catch((error)=>{
//     console.log("some eroor")
// })


// p2.then((value)=>{
//     console.log(value)
// },(error)=>{
//     console.log(error)
// })
// // console.log(p1,p2)



let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      // resolve("value1");
      reject(new Error("error"));

    },2000);
})


let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value2");
   // reject(new Error("error"));
    },3000);
})

let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{

         resolve("value3");
        //reject(new Error("error"));

    },1000);
})

// let promise_all  = Promise.all([p1,p2,p3])
 //let promise_all  = Promise.allSettled([p1,p2,p3])
//  let promise_all  = Promise.race([p1,p2,p3])
let promise_all  = Promise.any([p1,p2,p3])



promise_all.then((value)=>{
    console.log(value)
})
