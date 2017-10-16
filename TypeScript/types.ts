/*
let mystring: string;
let mynumber: number;
let mybool:boolean;
let myany:any;
*/
// let stringArray:string[]; //number,boolean

//let stringArray:Array<string>
//let numArray:Array<number>
//let boolArray:Array<boolean>

//stringArray = ["one","two","three"];
//numArray=[1,2,3,4]

// Not much else we can assign to these variables!
//let u: undefined = undefined;
//let n: null = null;


//mystring = "sachin";

//console.log(mystring);
//console.log(stringArray);
//console.log(numArray);

//functions

/*
function getTotal(n1:number,n2:number):number{
    return n1+n2;
}

console.log(getTotal(3,4));

function getCount(n1:any,n2:any):number{
    if(typeof n1=='string'){
        n1=parseInt(n1);
    }
    return n1+n2;
}

console.log(getCount("3",4));

*/

/*

interface MyBiodata{
    title:string;
    age:string;
}


function myinterface(mydata:{title:string,age:number}){
    console.log(mydata.title);
}

let Mybio = {title:"sachin",age:23}
myinterface(Mybio);
*/

class User{
   name:string;
   age:number;
   social:string;

 constructor(name:string,age:number,social:string){
     this.name = name;
     this.age = age;
     this.social=social;

     console.log(this.name);
 }

}

let h1 = new User("Nimal",21,"facebook");










