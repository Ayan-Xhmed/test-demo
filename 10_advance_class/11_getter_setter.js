class User {
    constructor (User,email,password){
        this.User = User
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}ayan`
    }
    set password(value){
        this._password = value
    }
}

const ayan = new User('Ayan Ahmed','ayan@gmail.com','8791')
console.log(ayan.User);
console.log(ayan.email);
console.log(ayan.password);

