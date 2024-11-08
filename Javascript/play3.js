const person = 
{
    name: "Laci",
    age: 29,
    
    greet()
    {
        console.log("Hi I am " + this.name);
    }
}

const printName = ({ name, age }) => console.log(name, age);
printName(person);