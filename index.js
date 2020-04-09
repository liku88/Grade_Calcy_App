function calcy(){
    let csw = document.getElementById("csw").value;
    let ad = document.getElementById("ad").value;
    let coa = document.getElementById("coa").value;
    let pme = document.getElementById("pme").value;
    let total_marks = parseFloat(csw) + parseFloat(ad) + parseFloat(coa) + parseFloat(pme);
    
    let percentage = (total_marks)/400 *100 ;
    
    let grade = "";
    if (percentage<=100 && percentage>=90){
        grade = 'O';
    }else if (percentage <=90 && percentage >= 80){
        grade = 'A';
    }else if(percentage <= 80 && percentage >= 70){
        grade = 'B';
    }else if(percentage <= 70 && percentage >= 60){
        grade = 'C';
    }else if(percentage <= 60 && percentage >= 50){
        grade = 'D';
    }else if(percentage <= 50 && percentage >= 40){
        grade = 'E';
    }else{
        grade = 'F';
    }
   
    
    if(percentage >= 41){
        document.getElementById("display").innerHTML = `Out of 400 your total is  ${total_marks} and percentage is ${percentage}% . <br> Your Grade is ${grade}. 
        You are pass.   `
    }else{
        document.getElementById("display").innerHTML = `Out of 400 your total is  ${total_marks} and percentage is ${percentage}% . <br> Your Grade is ${grade}. 
        You are Fail.   `
    }
    
    
    
    document.getElementById("csw").value ='';
    document.getElementById("ad").value ='';
    document.getElementById("coa").value ='';
    document.getElementById("pme").value ='';
    
   
    
}