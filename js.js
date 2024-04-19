
// higher order functions



function task(mathOperations){
    mathOperations(); //function calling

}
  task(function(){
    let num1 = 2500;
    let num2 = 4040;
    let total =` The sum of ${num1} + ${num2} = ${num1 + num2}`;
    console.log(total);

  });
  task(function(){

    let string = 'java script';
    let piece = string.slice(0 , 5);
    console.log(piece);

  });
   
  task(function(){
     let num3 = 456;
     let num4 = 96;
     let minus =` The minus of two nums is  ${num3} + ${num4} = ${num3 - num4}`;
     console.log(minus);
     
  });
  task(function(){
console.log("java script can execute on the server");

  });
task(function(){
    let number1 = 456;
    let number2 = 2;
    let divide=` The division of two numbers is  ${number1} / ${number2} = ${number1 / number2}`;
    console.log(divide);


});
//arrays by using loops ( for of and for)


let array =  ['CSS','HTML','R','python','javascript','C','java',90,95,978,54, true,false, ];
for(let x=0; x<array.length; x++){     //for loop
    console.log(array[x]);
}

for(let ele of array){     // for of loop
    console.log(ele);
}
// object creation by using for in  loop

let profileInfo = {
    fullName : 'krishna',
    lastName : 'sai',
    age : 27,
    education : 'MCA',
    job : 'SoftWare',  
}
 for( let data in profileInfo){
 console.log( profileInfo[data]);
 }

//array by using for each method

let array2 = ['Mysore','chennai','tamilnadu','amaravathi','vizag', 89,160,70,300,null];
array2.forEach((favPlaces,position)=> {
    console.log(position,favPlaces);
});

// array by using map

let stringArray = array2.map((ing)=>{
    if(typeof(ing) ==='string'){
        return ing;
    }

});
console.log(stringArray);

// array by using filter
let onlyNums = array2.filter((n)=> typeof(n) === 'number');
console.log(onlyNums);

let names = array2.filter((name)=> typeof(name) === 'string');
console.log(names);