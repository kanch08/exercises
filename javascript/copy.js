var person = {
    firstname:"John",
    lastname:"Doe",
    age:50,
    eyecolor:"blue"
  };
  console.log(person);
var person1=new Object();
var x;
for(x in person){
    person1[x]=person[x];

}
console.log(person1);
