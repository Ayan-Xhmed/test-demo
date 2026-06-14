function setUserName(userName){
    this.userName = userName
    console.log("called");
}
function createUser(userName,email,password){
    setUserName.call(this,userName)

    this.email = email
    this.password = password
}

const obj = new createUser('Ayan','ayan@gmail.com','1234')
console.log(obj);


function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);