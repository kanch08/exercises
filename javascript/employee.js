var employee=[                //create a list of objects of Employee with info as:Name, age, salary ,DOB

    {name:'Manish',age:28,salary:9000,dob:'22/09/1990'},
    {name:'Ayushi',age:28,salary:8000,dob:'22/09/1993'},
    {name:'Anika',age:28,salary:4000,dob:'22/09/1992'},
    {name:'Karan',age:28,salary:1500,dob:'22/09/1989'},
    {name:'Pritesh',age:28,salary:900,dob:'16/10/1991'}
    
 ];

 var x;
 for(x in employee){
     if(employee[x].salary>5000)// filter all employees with salary greater than 5000
     console.log(employee[x]);
 }

 employee.sort(function(a,b){
  return a.salary-b.salary; //group employee on the basis of their age
 });
for(var x in employee){
    console.log(employee[x]);
 }


 for(var x in employee){
     if((employee[x].salary<1000)&&(employee[x].age>20)){
        employee[x].salary=employee[x].salary*5; //fetch employees with salary less than 1000 and age greater than 20. Then give them an increment 5 times their salary.
     }
   console.log(employee[x]); 
 }

    