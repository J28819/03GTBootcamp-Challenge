// Assignment Code
var generateBtn = document.querySelector("#generate");
var passlenght1 = 0;
var lowercasevar = 0;
var passlenght = 0;
var passwordstructure = []


// Variable declaration 
var prompts = [{
            "message": "Please enter how many numbers you want in your password between 8 and 128" ,
            "alert": "Please enter a value between 8 and 128",
            "charMin": 8,
            "charMax": 128,
              },
              {
                "message": "Please enter how many numbers you want in your password between 8 and 128" ,
                "alert": "Please enter a value between 8 and 128",
                "charMin": 8,
                "charMax": 128,
              },
              {
                "message": "Please enter how many numbers you want in your password between 8 and 128" ,
                "alert": "Please enter a value between 8 and 128",
                "charMin": 8,
                "charMax": 128,
              },
              {
                "message": "Please enter how many numbers you want in your password between 8 and 128" ,
                "alert": "Please enter a value between 8 and 128",
                "charMin": 8,
                "charMax": 128,
              }
            ]

              



function generatePassword() {

  console.log("generate password");
  return(1233);
}

function writePassword() {
var i = 0
while (i < prompts.length) {
  alert(prompts[i].alert)
  i++
}
  

var passlenght = prompt("Please enter how many numbers you want in your password between 8 and 128" );
passlenght1 = passlenght
if (passlenght > 8 && passlenght < 128){
  SecondPromt()
}else if (passlenght === null){
  return
}else{
  alert("Please enter a value between 8 and 128");
  writePassword(); 
}




var passlenght = prompt("Please enter how many numbers you want in your password between 8 and 128" );
passlenght1 = passlenght
if (passlenght > 8 && passlenght < 128){
  SecondPromt()
}else if (passlenght === null){
  return
}else{
  alert("Please enter a value between 8 and 128");
  writePassword(); 
}
  
function SecondPromt() {
  passlowerlenght = prompt("Please enter number lowercase characters between 3 adn 15", );
  if (passlowerlenght === null) {
    alert("Please enter a value between 3 and 15");
    SecondPromt();
  }else if (passlowerlenght > 15){
    alert("The minimum characters is 15");
    SecondPromt();
  }else if (passlowerlenght < 3){
    alert("The minimum characters is 3");
    SecondPromt();
  }else{
    ThirdPromt();
  }
}

function ThirdPromt() {
  passsymbollength = prompt("Please enter number symbols ", );
  if (passsymbollength < 3) {
    alert("The minimum characters is 3");
    ThirdPromt();
  }else if (passsymbollength > 15){
    alert("The minimum characters is 5");
    ThirdPromt();
  }else{
   console.log(passlenght,  passlowerlenght, passlowerlenght)
  }
}

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


