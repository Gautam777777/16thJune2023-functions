//Global Variable
var fullname = 'Gautam Sharma'  //Variable declaration and initializing

//1.Function Defination Area (one time process)
function myCar(){
    //Function Body
    // Variable define inside a function is a local variable
    let car = "Lamborgini"
    console.log(car);
    console.log(fullname);
}

//2.Function Calling/Invoking Area (Many time process)
myCar();
console.log(fullname);