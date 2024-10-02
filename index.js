
function calculateTax(income, expense) {
  if (income < 0 || expense < 0) {
    return "Invalid Input";
  }
  if (income >= expense) {
    const savings = income - expense;
    const tax = savings * 0.2;
    return tax;
  } else {
    return "Invalid Input";
  }
}




function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid Email";
  }

  let parts = email.split("@");
  let username = parts[0];
  let domainName = parts[1];

  let total = username.concat(" sent you an email from ", domainName);
  return total;
}



function checkDigitsInName(name) {

  if (typeof name !== "string") {
  
  return "Invalid Input";
  
  }
  
  for (let i = 0; i < name.length; i++) {
  
  if (!isNaN(name[i]) && name[i] !== "string") {
  
  return "true";
  
  }
  
  }
  
  return "false";
  
  }



  function calculateFinalScore(obj) {

    if (typeof obj !== "object") {
    
    return "Invalid Input";
    
    }
    
    let finalScore = obj.testScore + obj.schoolGrade;
    
    if (obj.isFFamily) {
    
    finalScore = finalScore + finalScore * 0.2;
    
    }
    
    if (obj.isFFamily && finalScore >= 80) {
    
    return "true";
    
    } else {
    
    return "false";
    
    }
    
    }



  
  function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
      return "Invalid Input";
    }
  
    let totalTime = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
      totalTime = totalTime + waitingTimes[i];
    }
  
    const averageTime = Math.round(totalTime / waitingTimes.length);
    const Candidate = serialNumber - waitingTimes.length - 1;
    const interviewTimes = averageTime * Candidate;
    return interviewTimes;
  }
  
