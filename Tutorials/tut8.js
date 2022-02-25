console.log("This is if else and switches tutorial 8");
const age = 45;
let doesDrive = 18;
const vari = 34;

// if (age == 19){
//     console.log('Age is 19')
// }

//  else if(age == 65)/*triple equal data type amd value dono ko chek karta hai*/
//  {
//     console.log('Age is 65')
// }

// else{
//     console.log('Age is not 19')
// }

// if (typeof vari !== 'undefined'){
//     console.log('Vari is defined');
// }

// else{
//     console.log('Vari is not defined');
// }

// if (doesDrive || age>18){
//     console.log("You can drive");
// }
// else{
//     console.log("You cannot drive");
// }

// console.log(age == 45 ? "Age is 45" : "Age is not 45");//condotional (ternary operator)(condition? expiftrue : expiffalse).

switch (doesDrive) {
    case 18:
        console.log("You are 18");
        break;

    case 28:
        console.log("You are 28");
        break;

    case 38:
        console.log("You are 38");
        break;

    default:
        console.log("You are unknown age");
        break;
}
