//fetch('https://somthing.com').then().catch().finally()

const promisesOne = new Promise(function (resolve, reject) {
    // do async task
    // DB call, cryptoghy ,network

    setTimeout(function () {
        console.log('1->Async task is complete')
        resolve()
    }, 1000)
});
promisesOne.then(function () {
    console.log("2->promises consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("3->Asyn task 2");
        resolve();
    }, 1000)
}).then(function () {
    console.log("4->Async 2 resolve");
})

const promisesThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('5->hello');
        resolve({ userName: "Ayan", Email: "ayan@gmail.com" })

    }, 1000)
})

promisesThree.then(function (user) {
    console.log("6->Ayan");
    console.log(user);
    console.log(user.userName);
    console.log(user.Email);


})

const promisesFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        const error = false;
        if (!error) {
            resolve({ userName: "Ayan", Email: "ayan@gmail.com", password: "248197" })
        } else {
            reject('Error: someThing went wrong')
        }
    }, 1000)
})
promisesFour.then((user) => {
    console.log(user)
    return user.password
}).then((password) => {
    console.log(password);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("the promises is resolve or rejected ");
})

const promisesFive = new Promise((resolve, reject)=>{
    setTimeout(() => {
        const error = true;
        if (!error) {
            resolve({ userName: "javaScript", Email: "ayan@gmail.com", password: "248197" })
        } else {
            reject('Error: js went wrong')
        }
    }, 1000)
})
async function consumePromised() {
    try {
        const response = await promisesFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}
consumePromised()

async function getAllUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        //console.log(response);
        
        const data = await response.json()
        console.log(data);
    } catch (err) {
        console.log("Error",err);
    }
}
getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log('Error:',err);
    
})