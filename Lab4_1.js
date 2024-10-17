function myFirstFunction(){
    console.log("just hello world");
}
myFirstFunction()

function functionB(){
    return 6
}

function functionC(){
    var a = functionB()
    return a+9;
}
function functionD(){
    var valueofB = functionB()
    var valueofC = functionC()

    console.log("final result",valueofB+valueofC);
}
functionD()

function addTwoNumbers(numOne,numTwo) {
    console.log("addition of two num is",numOne+numTwo);
}
addTwoNumbers(34,89)
addTwoNumbers(90,99)

function addTwoNumbersReturn(numOne,numTwo) {
    return numOne+numTwo
}
 console.log(addTwoNumbersReturn(8,9));
  

 function student_details(stud_id,stud_name,stud_course,stud_semester,html_marks,css_marks,js_markss,total_marks){
    let result = html_marks+css_marks+js_markss;
    let percentage = result/3;
    console.log("Student ID is",stud_id);
    console.log("Student name is",stud_name);
    console.log("Student course is",stud_course);
    console.log("Student semester is",stud_semester);
    console.log("Marks in HTML",html_marks);
    console.log("Marks in CSS", css_marks);
    console.log("Marks in JAVA",js_markss);
    console.log("Total",total_marks);
 }
 myfunc()
 student_details ("DT001","ram","commerce",6, 90,95,97)
 myfunc()
 student_details("DT002","rama","commerce",6,90.95,97)
 myfunc()
 student_details("DT003,ramu","commerce",6,90,95,97)


    

    
    
    
    
    
    
    
 