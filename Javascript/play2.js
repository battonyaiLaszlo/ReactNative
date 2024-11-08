const person = 
{
    name: "Laci",
    age: 29,
    
    greet()
    {
        console.log("Hi I am " + this.name);
    }
}

console.log(person);
person.greet();

const hobbies = ["Sports", "Cooking", 2, true];
for (let hobby of hobbies)
{
    console.log(hobby);
}

console.log(hobbies.map((hobby) => "Hobby " + hobby));
console.log(hobbies);

hobbies.push("Programming");
console.log(hobbies);

const copiedArray = [...hobbies];
console.log(copiedArray);

const toArray = (...args) => args;

console.log(toArray(1,2,3,4));