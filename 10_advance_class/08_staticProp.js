class User  {
    constructor(userName){
        this.userName = userName
    }
    logMe(){
        console.log(`userName : ${this.userName}`);
        
    }
    static Myself(){

    }
    passWord(){
        const myPassword = Math.floor(Math.random()*1000 + 5);
        console.log(`userName : ${this.userName} \nemai : ${this.email} \nsal : ${this.sal}`);
        
        return myPassword
    }
}
const ayan = new User("ayanAhmed")
console.log(ayan.passWord());
 
class teacher extends User {
    constructor(userName,email,sal){
        super(userName)
        this.email = email,
        this.sal = sal
    }
}
const iPhone = new teacher('iPhone','i@phone.com','aadhar')
iPhone.passWord()
iPhone.logMe()