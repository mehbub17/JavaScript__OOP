class Animal{
    
    constructor(name){
        this.name = name;
    }

    eats()
    {
        console.log(this.name +' eats food');
    }
};


class Tiger extends Animal{
    
    eats()
    {   super.eats();//calling parent class method too
        console.log(this.name + ' eats Deer');
    }
}


const one = new Tiger('tiger_one');
one.eats();