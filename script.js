// console.log("hello")

// setTimeout(function(){
//     console.log("hello in 2 sec")

// }, 1000)

// console.log("dhvani")


let p1  = new Promise((resolve,reject)=>{
    console.log("Promiseis pending")
    setTimeout(()=>{
        // console.log("promise is resolved")
        resolve(true)
    },5000)
})

let p2  = new Promise((resolve,reject)=>{
    console.log("Promiseis pending")
    setTimeout(()=>{
        // console.log("promise is rejected")
        reject(new Error("i am error"))
    },5000)
})

p1.then((value)=>{
 console.log(value)
})


p2.catch((error)=>{
    console.log("some eroor")
})


p2.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)
})
// console.log(p1,p2)
