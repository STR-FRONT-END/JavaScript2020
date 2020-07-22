function getGrade(score) {
    let grade;
    // Write your code here
  //if scorce is greater than or equal to 0 && scorce less than or equal to 5 grade = F
  if(score >= 0 && score <= 5) {
    grade = "F"
    return grade
  //if scorce is greater than 5 && scorce less than or equal to 10 grade = E
  } else if (score > 5 && score <= 10){
    grade = "E"
    return grade
   //if scorce is greater than 10 && scorce less than or equal to 15 grade = D
  } else if (score > 10 && score <= 15){
    grade = "D"
    return grade
   //if scorce is greater than 15 && scorce less than or equal to 20 grade = C
  } else if (score > 15 && score <= 20){
    grade = "C"
    return grade
   //if scorce is greater than 20 && scorce less than or equal to 25 grade = B 
  } else if (score > 20 && score <= 25){
    grade = "B"
    return grade
    
   //if scorce is greater than 25 && scorce less than or equal to 30 grade = A
  } else if (score > 25 && score <= 30){
    grade = "A"
    return grade
  } else {
    return score
  }
  
}

getGrade(30)