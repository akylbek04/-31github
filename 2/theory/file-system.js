const { count } = require("console");
const dotenv = require("dotenv")
dotenv.config();


const fs = require("fs");
const path = require("path");


//Sunchronous execution
// console.log('start')

// fs.mkdirSync(path.resolve(__dirname, "test1", "test2", "test3"), {
//   recursive: true,
// });

// console.log("end")


// Asynchronous execution

// console.log('start')

// fs.mkdir(
//   path.resolve(__dirname, "testAsync1"),
//   (err) => {
//     if (err) {
//       console.log(err);
//     }

//     console.log("Folder created");
//   }
// );

// console.log("end")

// fs.rmdir(path.resolve(__dirname, "testAsync1"), (err) => {
//     if(err){
//         console.log(err)
//     }

//     console.log('Folder is deleted')
// })

// fs.writeFile(path.resolve(__dirname, "text.txt"), 'fs.writeFile in node.js will override already existing staff in file', (err) => {
//     if(err){
//         console.log(err)
//     }

//     console.log('text is inserted')
// })


// fs.appendFile(path.resolve(__dirname, "text.txt"), 'fs.appendFile will add to already existing material', (err) => {
//     if(err){
//         console.log(err)
//     }

//     console.log('text is added')
// })


const writeAsyncFile = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if(err){
            return reject(err.message)
        }
        resolve()
    }))
}


const appendAsyncFile = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if(err){
            return reject(err.message)
        }
        resolve()
    }))
}
const readAsyncFile = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: "utf-8"}, (err, data) => {
        if(err){
            return reject(err.message)
        }
        resolve(data)
    }))
}

const removeAsyncFile = async (path) => {
    return new Promise((resolve, reject) => fs.rm(path, (err) => {
        if(err){
            return reject(err.message)
        }
        resolve()
    }))
}

// writeAsyncFile(path.resolve(__dirname, "text.txt"), '123')
//     .then(() => appendAsyncFile(path.resolve(__dirname, "text.txt"), '345'))
//     .then(() => appendAsyncFile(path.resolve(__dirname, "text.txt"), '678'))
//     .then(() => appendAsyncFile(path.resolve(__dirname, "text.txt"), '910'))
//     .then(() => readAsyncFile(path.resolve(__dirname, "text.txt")))
//     .then(data => console.log("data", data))
//     .catch(err => {
//         console.log(err)
//     })

// removeAsyncFile(path.resolve(__dirname, "text.txt")).then(() => console.log("file is deleted"));

// const text = process.env.TEXT | " "

writeAsyncFile(path.resolve(__dirname, "test.txt"), "hello, my name is Akyl")
    .then(() => readAsyncFile(path.resolve(__dirname, "test.txt")))
    .then(data => data.split(" ").join("").split('').length)
    .then(count => writeAsyncFile(path.resolve(__dirname, "count.txt"), `Quantity: ${count}`))
    .then(() => removeAsyncFile(path.resolve(__dirname, "test.txt")))
    .catch(err => console.log(err))