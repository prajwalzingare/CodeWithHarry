/*primitive data type
1.STRING 
2.NUMBERS
3.BOOLEAN
4.NULL
5.UNDEFINED
6.SYMBOL 
REFRENCE DATA TYPE 
 1.ARRAYS
 2.OBJECT LITRELS 
 3.FUNCTIONS
 4. DATES*/
 

    //   EXPLANATION
    // PRIMITIVE DATA TYPE
    // STRING
    let name ="PRAJWAL";
    console.log("my string is"+ name);
    console.log("my data type is"+ (typeof name));
    // numbers
    let marks=34; /*single comaa lavla t strng hote 
    nahi t number type hote*/
    // console.log("my marks is"+ marks);
    console.log("my data type is"+ (typeof marks));
    // boolean
    let isdriver= true;
    console.log("my data type is"+ (typeof isdriver));
    // NULL
    let nullvar=null;
    console.log("my data type is"+ (typeof nullvar)); /*object batata hai but 
    premitive hi hai keep in mind*/

    // UNDIFINED
    let UNDEFINED=undefined;
    console.log("my data type is"+ (typeof UNDEFINED));



    // REFRENCE DATA TYPE
    // arrays
  let myarr = [1,2,3,4 ,false];
    console.log("my data type is"+ (typeof myarr));

// object letreal
let STmarks ={
shubham:34,
prajwal:46,
kunal:56

}
console.log(STmarks)

// function
function findname(){


}
console.log(typeof findname);

// DATE
let date = new Date();
console.log(typeof date);
// A data type defines the structure of how bits representing values are stored in a computer memory, while a variable defines a named instance of a particular data type.