
class backAccount{

    constructor(name,account,balance)
    {
        this._name = name;
        this._account = account;
        this._balance = balance;
    }

    getAccountDetails()
    {
        console.log(`Account Holder : ${this._name}\nAccount Number : ${this._account}\nBalance : ${this._balance}`)
    }

    deposit(amount)
    {
        if(amount>0){
            this._balance+=amount;
            console.log("Deposit Done")
        }
        else{
            console.log("Enter Valid Amount");
        }
    }

    withdraw(amount)
    {
        if(amount > this._balance)
        {
            console.log("Insufficient Balance");
        }else{
            this._balance-=amount;
        }
    }
};


const one = new backAccount("Mehbub Hussain",'87y8745',900);

one.getAccountDetails();
one.deposit(1100);
one.getAccountDetails();
one.withdraw(1000);
one.getAccountDetails();