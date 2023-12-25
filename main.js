const { clear } = require("console");
const fs = require("fs");

// const nameVal = "Sharique";
// let filePath = "./f1.text";

console.log("before");


// function processData(data){
//     console.log(data.includes(nameVal));
// }

// function getPromise(fileName){
//      try{
//         return new Promise((resolve, reject)=>{
//             fs.readFile(fileName, "utf-8",(err, data)=>{
//                 if(data){
//                      return resolve(processData(data));
//                 }
//                 else{
//                     // const error = new Error("something went wrong");
//                      return reject(console.log(err));
//                 }
//             });
//         });   
//     }catch(err){console.log(err)};
    
// }

// const asyncFunc = async (filePath)=>{
//    let data = await getPromise(filePath);
//    console.log(data);
// }

// asyncFunc(filePath);





// fetch using promise .then()...catch()
const url = "https://movies-app.prakashsakari.repl.co/api/movies";

// fetch(url).then(function(response){ return response.json()}).then(data=>console.log(data.length)).catch(error=>console.log(error));

// fetch using async-await 
// const fetchData = async(url)=>{
//     try{ debugger;
//         let response = await fetch(url);
//         let data = await response.json();
//         console.log(data.length);
//     }catch(err){
//         debugger;
//         console.log(err);
//     }   
// }
//  const data = fetchData(url);
//  console.log(data);

// console.log("after");




let promise = fs.promises.readFile("./f1.text");
console.log(promise);

// 3 states of promise -  pending , fullfiled , rejected
// fullfilled - promise.then()
// rejected - promise.catch()

promise.then(data=>console.log("" + data));

promise.catch(err=>console.log(error));


console.log("after");