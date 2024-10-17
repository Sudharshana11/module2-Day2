let month = "Dec";
let message;

switch (month) {
    case "jan"||"feb"||"nov"||"Dec":
        message = "winter";
        break;
case "mar"||"apr"||"may":
    message = "spring";
        break;
        case "jun"||"jul"||"aug":
    message = "summer";
    break;
    case "sep"||"oct":
        message = "autumn";
        break;
        default:
            message = "no data!";
}
console.log(message);


let numValue = 1
while (numValue<=10) {
    if (numValue % 2 == 0) {
        console.log("Entered num is even", numValue);
    }else{
        console.log("Entered value is odd", numValue);
        
    }
    //console.log(numValue);
    numValue++;
}

for (let i = 1;i<=10;i++){
    if(i!=8){
        if (i % 2 == 0){
            console.log("Entered num is even",i);
            
        }
        else{ console.log("Entered num is odd,i");
        }
    }else{
        break;
    }
}
console.log("printing odd num");

for (let i=0;i<10;i++){
    if (i%2==0){
        continue
    }
    console.log(i);
    
}