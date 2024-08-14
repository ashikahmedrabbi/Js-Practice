// var day=0;
// if(day==1){
//     console.log('Sutday'); 
// }else if(day==2){
//     console.log('Sunday');
// }else if(day==3){
//     console.log('MonDay');
// }else if(day==4){
//     console.log('Thuy');
// }else if(day==5){
//     console.log('Wesday');
// }else if(day==6){
//     console.log('theday');
// }else if(day==7){
//     console.log('Friday');
// }else{
//     console.log('Invalid day');
// }


// nested if else
var restrurent = 'Cafe';
var amount=99;

if (restrurent=='KFC'){
    if(amount>=500){
        console.log("KFC te jabo abong Burger khabo");
    }else if(amount>=200){
        console.log("KFC te jabo abong fry khabo");
    } else{
        console.log("batas khabo");
    }
}else if (restrurent=='Cafe Adda'){
    if(amount>=700){
        console.log("Cafe Adda te jabo abong pizza khabo");
    }else{
        console.log("Cafe Adda te jabo abong coffee khab");
    }
}else{
    if(amount>=100){
        console.log("try cha")
    }else{
        console.log("batas khabo");
    }
}