console.log("MENU");
console.log("1.PIZZA-RS:200");
console.log("2.BURGER-RS:300");
console.log("3.CHICKEN BIRYANI-RS:250");
console.log("4.APPLE JUICE-RS:100");
console.log("5.IDLE-RS:100");
let Total=0;
let ch='Y';
do{
    let choice=prompt("ENTER YOUR CHOICE:");
    switch(choice){
        case '1':{
            let q=prompt("ENTER QUANTITY:");
            Total+=q*200;
            break;
        }
        case '2':{
            let q=prompt("ENTER QUANTITY:");
            Total+=q*300;
            break;
        }
        case '3':{
            let q=prompt("ENTER QUANTITY:");
            Total+=q*250;
            break;
        }
        case '4':{
            let q=prompt("ENTER QUANTITY:");
            Total+=q*100;
            break;
        }
        case '5':{
            let q=prompt("ENTER QUANTITY:");
            Total+=q*100;
            break;
        }
    }
    ch=prompt("DO U WANT TO CONTINUE:(Y/N)");
}while(ch=='Y'||ch=='y');
if(Total>500){
let dis=Total*0.1;
Total-=dis;
}
console.log(Total);
