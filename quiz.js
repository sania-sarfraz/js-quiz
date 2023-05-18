// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");

//1----> print only number that it should be print only integer
const str=["1","3",5,"subhan"]
console.log("The numbers are:")
for(let i=0; i<str.length;i++){
    if(typeof str[i]==="Number"||(typeof str[i]==="string"&& Number(str[i]))){
    console.log(str[i])
    }
}

// 2---->destructing array
const color=["red","green","yellow"]
const[red,green,yellow]=color
console.log(green)

// 3--->Array method
// splice()
// slice()
// some()
// pop()
// push()
// shift()
// unshift()
// foreach()
// map()
// sort()
// reduce()
// splite()
// indexof()
// fill()
// find()
// tostring()
// length()
// join()

const myarr=[25,24,12,11,15,10]

for each
myarr.forEach((item,index)=>item)
document.write(myarr)


pop
console.log(myarr.pop())
console.log(myarr)

sort
console.log(myarr.sort())

reverse
console.log(myarr.reverse())

join
let joinarr=(myarr.join("-"))
console.log(joinarr)

filter
filterarr=myarr.filter((item)=>{
    return(item>20)
})

console.log(filterarr)

// 4------->palindrom or not
var a="level"
var c=""
console.log("palindrom find")
for(var b=a.length-1;b>=0;b--){
    c=c+a[b]
}
if(a===c){
    console.log(true)
}
else{
    console.log(false)
}

// 5------->maximum and minimum number
let array=[1,45,32,2,10]
let max=array[0]
let min=array[0]
for(let i=0;i<=array.length;i++){
if(array[i]>max){
  max=array[i]
}
if(array[i]<min){
    min=array[i]}
}
console.log("maximum number---->"+max)
console.log("minimum number------->"+min)

// 6--------->print a string in both case AND reverse
const name="Sania Sarfraz"
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.split("").reverse().join(""))

// 7------>split array into pairs
const array=[1,2,5,10,12,23]
function splitFun(arr,pair){
    const store=[];
    for(let i=0;i<arr.length;i+=pair){
        store.push(array.slice(i,i+pair))
    }
    return store
}
console.log(splitFun(array,2))

//8---------------->Data types
String
Number
BigInt
Boolean
undefined
null
symbol 
object

//9------->keyword use 
var
let
const

//10------->Declaration and Reassignment of Variables.
///Redeclear Value
var can be redeclear
var array=[1,2,2,4]
var array=[12,12,33]//ok

//let can't redeclear
// let array=[1,22,3]
// let array=[2,4,55]//syntax error

//const can't redeclear
const array=[1,2,3]
const array=[2,4,8]//syntax error

//Updated value
var can be updated
var num=10
num=12
console.log(num)

//const can't
const num=13;
num=10//error
console.log(num)

//let can be updated
let num=10;
num=15
console.log(num)
