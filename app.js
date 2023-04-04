function calculateGrade(){
    const score = document.getElementById("score").value;
    if (score >= 90){
        document.getElementById("grade-container").innerHTML = "your grade is A";
    } else if (score >= 80){
        document.getElementById("grade-container").innerHTML = "your grade is B";
    } else if (score >= 70){  
        document.getElementById("grade-container").innerHTML = "your grade is c";
    } else if (score >= 60){ 
        document.getElementById("grade-container").innerHTML = "your grade is c";
    } else {
        document.getElementById("grade-container").innerHTML = "fail gumana la kambakht";
    }
}