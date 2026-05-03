// let a=5;
// let b=3;
 //console.log("a=",a,"b=",b);
 //console.log("a+b=",a+b);
 //console.log("a-b=",a-b);
 //console.log("a*b=",a*b);
 //console.log("a/b=",a/b);
 //console.log("a%b=",a%b);
 //console.log("a**b=",a**b);
 //console.log(5 != 3,a != b);
//let num=10;
//if(num%2==0)
//{
//   console.log(num,'is even');
//}
//else
//{
 //   console.log(num,'is odd');
//}
// let age=14;
// if(age<18)
// {
//     console.log(age,"juniro");
// } 
// else if(age>60)
// {
//     console.log(age,"senoir");
// }
// else{
//     console.log(age,"middle");
// }
// let age=15;
// let result=(age>=18?"adult":"notadult");
// console.log(result);
// let name=prompt("hello");
// console.log(name);
// let num=prompt("enter the number:");
// if(num%5===0)
//     {
//         console.log(num,"mutiple of 5.");

// }
// else
// {
//     console.log(num,"is not multiple of 5");
// }
// let score=76;
// let grade;
// if (score>=90&&score<=100)
// {
//     garde="pass";
// }
// else
// {
//     garde="fail";
// }
// console.log("garde is :",garde);
// for (let count=1;count<=10;count++)
// {
//   console.log("pawan belbase");
// }
// let sum=0;
// for (let i=1; i<=5; i++)
// {
//     sum=sum+i;
// }
// console.log("sum=",sum);
// for (let i=1;i<=5;i++)
// {
//     console.log("i",i)

// }
// let i=1;
// while (i<=5)
// {
//     console.log("i=",i);
//     i++;
// }
// let student ={
//     name:"pawan belbase",
//     age:20,
//     cgpa:7.9,
//     isPass:true,
// };
// for (let key in student)
// {
//     console.log("key=",key,"value=",student[key]);
// }
// for(let num=0; num<=100; num++)
// {
//     if(num%2==0){
//         console.log("num:",num);
//     }
// }
// let gameNum=7;
// let userNum=prompt("guess the game number:");

// while(userNum!=gameNum)
// {
//     userNum= prompt("you entered wrong number,guess again");
// }
// console.log("congratulation,you entere the right number");
// let str="PawanBelbase";
// console.log(str[5]);
//  let obj={
//     item:"pen",
//     price:10,
//  };
//  let out=`the cost of ${obj.item} is${obj.price} rupees`;
//  console.log(out);
// let str=" my name is pawan belbase"
// console.log(str.toUpperCase());
// let str="                       my name is pawan belbase   "
// console.log(str.trim( ));
//  let str="1234567890";
//  console.log(str.slice(1,6));
// let str1="pawan";
// let str2="belbase";
// let joint=str1.concat(str2);
// console.log(joint);
// let str="pawan";
// console.log(str.charAt(3));
// let fullName=prompt("enter your fullname without spaces");
// let username="@"+fullName +fullName.length;
// console.log(username);
// let marks=[29.5,40,8,28,29];
// console.log(marks);
// let heroes=["ironman","batman","superman","padman","spiderman","antman"];
// for (let i=0;i<heroes.length;i++)
// {
//     console.log(heroes[i]);
// }
// let cities=["butwal","pokhara","kathamndu","gorkha","bhairahawa"];
// for (let city of cities)
// {
//     console.log(city);
// }
// let marks=[28.5,8,29,28,40];
// let sum=0;
// for(let  val of marks){
//   sum += val;
// }
// let avg=sum/marks.length
// console.log("avg marks=",avg);
// let items=[250,645,300,900,50];
// let i=0;
// for(let val of items)
// {
//     console.log(`value at index ${items[i]}`);
//     i++;

// }
// let foodItems=["potato","tomato","latchi","banana"];
// foodItems.push("apple","banana1","paneer","masu");
// console.log(foodItems);
// let foodItems=["potato","tomato","latchi","banana"]; 

// console.log(foodItems);
// let deletedItem=foodItems.pop();
// console.log(foodItems);
// console.log("deleted",deletedItem);
// let foodItems=["potato","tomato","latchi","banana"]; 
// console.log(foodItems);
// console.log(foodItems.toString());
// let marvelHeroes=["thor","spiderman","ironman"];
// let dcHeroes=["superman","batman","padman"];
//  let heroes=marvelHeroes.concat(dcHeroes);
//  console.log(heroes);
// let marvelHeroes=["thor","spiderman","ironman"];
// marvelHeroes.shift( );
// let marvelHeroes=["thor","spiderman","ironman","fullman","halfman"];
// console.log(marvelHeroes);
// console.log(marvelHeroes.slice(1,4))
// let array=[1,2,3,4,5,6,7];
// array.splice(2,2,103,126);
// let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.shift();
// companies.splice(2,1,'ola');
// companies.push("amazon");
// function myfunction(){
//     console.log("welcome to mero ghar")
//     console.log("we are happy to welcome you :)");
// }
// myfunction();
// function sum(x,y){
//    return x+y;
// }
// const arrowSum=(a,b)=>{
//     console.log(a+b);
// };
// const arr? owMul=(a,b)=>{
//     console.log(a*b);
// };
// function countVowel(str){
//     let count=0;
//     for (const char of str){
//         if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u"){

        
//             count++;
//     }
// } 
// console.log(count);

// }
// let num =[2,3,4,5,6];
// num.forEach((num) => {
//     console.log(num*num);
// });
// console.log(4+5);
// let nums=[67,52,39];
// let newArr=nums.map((val) =>{
//     return val*2;
// });
// console.log(newArr);
// let calSquare=(num)=>{
//     console.log(num*num);
// }
// let arr=[1,2,3,4,5,6,7];
// let evenArr=arr.filter((val)=>{
//     return val%2!=0;
// });
// console.log(evenArr);
// let arr=[2,4,6,8,3];
// const output=arr.reduce((pre,curr)=>{
//     return pre>curr?pre:curr;
// });
// console.log(output);
// let marks=[89,87,98,77,65,97];
// let topper =marks.filter((val)=>{
//     return val>89;
// });
// console.log(topper);
// let n=prompt("enter a number");
// let arr=[];
// for(let i=1;i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(arr);
// let sum=arr.reduce((prev,curr)=>{
//     return prev*curr;
// });
// console.log(sum)
// let heading=document.getElementsByClassName("heading-call");
// console.dir(heading);
// console.log(heading);
// let par=document.getElementsByTagName("p");
// console.log(par);
// let allEl=document.querySelectorAll("p"
// );
// console.dir(allEl);
// sum =3+4;
// console.log(sum);
// let div=document.querySelector("div");

// div.style.backgroundColor="green";
// div.style.backgroundColor="purple";

// div.style.fontSize="26px";
// let newBtn= document.createElement("button");
// console.log(newBtn);
// let div=document.querySelector("div");
// div.append(new p);
// let newHeading=document.createElement("h1");
// newHeading.innerHTML="<i>Hi,I am new!</i>";
// document.querySelector("body").prepend(newHeading);
let newbtn=document.createElement("button");
newbtn.innerText="click me!";
  newbtn.style.color="white";
  newbtn.style.backgroundColor="red";

  document.querySelector("body").prepend(newbtn);