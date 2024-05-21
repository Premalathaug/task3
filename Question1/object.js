let obj1={name:"Person 1",age:5};
let obj2={age:5,name:"Person1"};

let k1=Object.keys(obj1);
let k2=Object.keys(obj2);
k1.sort();
k2.sort();
if(k1==k2){
    console.log("same properties");
}
    else{
        console.log("not same properties");
    }




