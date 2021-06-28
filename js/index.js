//LOOP--> Loops can execute a block of code a number of times.

//FOR LOOP----------->

// var loop=[1,2,3,4,5,56,67];
// for(let i=0;i<loop.length;i++){
//     console.log(i);
// }


// var loop=[1,2,3,4,5,56,67];
// for(let i=0;i<=loop.length;i++){
//     console.log(i);
// }


// var std={
//     arr:[],
//     temp:function(){console.log("hey")},
//     temp2:false
// }
// console.log(std)
// std.name="Rishabh"
// console.log(std)
// std["class"]=8
// console.log(std)


// var student={
//     name:"Rishabh",
//     class:12,
//     section:"B"
// }
// console.log(student);
// student.schoolName="DR.MARIA"
// student["Teacher"]="Pooja";
// console.log(student)


// **NOTE**-->jb hum json format m kaam krte h backend p to object m dono
//  side inverted commas lgne chahiye vrna error aati h or front end m koi dikkat nhi kese bhi kro

// var student={
//     "name":"RISHABH",
//     "CLASS":8,
//     "COLLEGE":"GIT"
// }
// console.log(student)


// FOR OF LOOP----->iska mtlb h ki array ki value k sath work krna h

// var fruit=["mango","banana","melon"];
// for(var a of fruit){
//     console.log(a);
// }


// var teaStall=["utkarsh","himanshu","Ashish"];
// for(var a of teaStall){
//     console.log(a)
// }


// var name="Rishabh"
// for(var a of name){
// console.log(a)}


// var name="Rishabh";
// for(var a of name){
//     console.log(a)
// }



//ye error dega qki for off array k saath work krta h or object ki value ko tod k alg ni krskta for of 
// var student={
//         name:"Rishabh",
//         class:12,
//         section:"B"
//     }
//     for(var a of student){
//         console.log(a)
//     }





// FOR IN LOOP------>iska mtlb key value pair k sath work krna,key value object  m hote h

// The JavaScript for in statement loops through the properties of an Object:

// Syntax
// for (key in object) {
//   // code block to be executed
// }
// Example
// const person = {fname:"John", lname:"Doe", age:25};

// let text = "";
// for (let x in person) {
//   text += person[x];
//   console.log(text)
// }


// var student={
//         name:"Rishabh",
//         class:12,
//         section:"B"
//     }
// for(var e in student){
//     console.log(e)
// }



// yha ye error dega qki for in key values k sath khelta h jo object m hoti h
// ye bs index value show krdega
// var teaStall=["utkarsh","himanshu","Ashish"];
// for(var a in teaStall){
//     console.log(a)
// }


// var School={
//     name:"kids corner",
//     city:"fzd",
//     class:3
// }
// for(var f in School){
  
//     console.log(f,School[f])
// }


// FOR EACH-------->ye harr tarah ki value ko print krta h,Or isme break use nhi hota!


// var num=[1,2,3,4,5,6];

// num.forEach(function(val){
//     console.log(val);  
// })

// var num=[2,6,8,9];
// var squareNo=[];
// num.forEach(function(val){
//     squareNo.push(val*val)
    
// })
// console.log(squareNo)


// var fun=[3,6,8,9,3];
// var cubeNo=[]
// fun.forEach(function(val){
//     cubeNo.push(val*val*val);
// })
// console.log(cubeNo)


// var numbers=[2,3,4,5,6];
// var addition=[];
// numbers.forEach(function(val){
//     addition.push(val+val)
// })
// console.log(addition)


// var numbers=[2,3,5,6];
// var num=[]
// numbers.forEach(function(val){
//     num.push(val*val)
  
// })
// console.log(num)


// var script=[1,5,8,9,4,6,0];
// var cubeNo=[];
// script.forEach(function(val){
//     cubeNo.push(val*val*val)
// })
// console.log(cubeNo)


// var addition=[4,5,6,7,8,9];
// var add=[];
// addition.forEach(function(val){
//     add.push(val+val*val)
// })
// console.log(add)




















//****INTERVIEW QUES****

// Q1->for each m break use q nhi hota?
// A1->for each naam s hi pta pdta h ki ki each(har)value ko print krana to break s vo value print nhi hogi isiliye use ni hota break usme