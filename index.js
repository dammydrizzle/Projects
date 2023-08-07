const btnElement = document.getElementById("btn")

const birthdayElement = document.getElementById("birthday")

function calculateAge() {
   const birthdayValue = birthdayElement.value;
   
   if(birthdayValue === "") {
    alert("Please enter your birthday")
   }
   } 
   



btnElement.addEventListener("click", calculateAge)