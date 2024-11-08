const name = "Laci"
let age = 29;
const hasHobbies = true;

age = 22;



const sumarizeUser = (userName, userAge, userHasHobbies) => 
{
    return (
        "Name is " + userName + 
        ", age is " + userAge + 
        " and User has hobbies: " + userHasHobbies
    );
};
console.log(sumarizeUser(name, age, hasHobbies));


const add = (a,b) => a + b;
console.log(add(1,2));

const addOne = a => a + 1;
console.log(addOne(0));

const addRandom = () => 1 + 4;
console.log(addRandom())

