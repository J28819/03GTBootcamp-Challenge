// Assignment Code
var generateBtn = document.querySelector("#generate");
var passlenght1 = 0;
var lowercasevar = 0;
var passlenght = 0;




// Variable declaration 
var prompts = [{
            "message": "Please enter how many numbers you want in your password between " ,
            "alert": 'Please enter a value between ',
            "charMin": 8,
            "charMax": 128,
            "DataType": "0123456789"
              },
              {
                "message": "Please enter how many lowercase letters you want in your password between " ,
                "alert": 'Please enter a value between ',
                "charMin": 3,
                "charMax": 15,
                "DataType": "abcdefghijklmnopqrstuvwxyz"
              },
              {
                "message": "Please enter how Upper case you want in your password between " ,
                "alert": "Please enter a value between ",
                "charMin": 5,
                "charMax": 10,
                "DataType": "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
              },
              {
                "message": "Please enter how symbols you want in your password between " ,
                "alert": "Please enter a value between ",
                "charMin": 2,
                "charMax": 4,
                "DataType": "!@#%^&*()_+=~@"
              }
            ]

              



function generatePassword(passwordstructure) {
var GenPassword = ""
var mixerpass = ""
passwordstructure.forEach(element => {

  
  var charachterstochose = element.Datatype;
  var charsLength = charachterstochose.length;
  for ( var ii = 0; ii < element.chars; ii++ ) {
    GenPassword += charachterstochose.charAt(Math.floor(Math.random() * charsLength));
 }
 mixerpass = GenPassword.split('').sort(function(){return 0.5-Math.random()}).join('');
 
 

  
});


  return(mixerpass);
}




function writePassword() {
var passwordstructure = []
var i = 0

while (i < prompts.length) {
configurepassword()

function configurepassword() {

var promptmessage = prompts[i].message + ((prompts[i].charMin).toString()) + " and " +((prompts[i].charMax).toString())
var alertmessage =  prompts[i].alert + (toString(prompts[i].charMin)) + (toString(prompts[i].charMax))
var floatprompt = prompt(promptmessage)
if (floatprompt > prompts[i].charMin && floatprompt < prompts[i].charMax){
  data = {
    "chars": floatprompt,
    "Datatype":   prompts[i].DataType}

  passwordstructure.push(data)
  i++
}else if (floatprompt === null){
  configurepassword()
}else{
 alert(alertmessage);
 configurepassword()
}
}
}

alert("while loop succeeed!!!! " + (passwordstructure).toString())


  var password = generatePassword(passwordstructure);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


